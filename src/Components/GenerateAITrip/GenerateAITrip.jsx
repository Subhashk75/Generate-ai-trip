import React, { useState, useEffect } from "react";
import { AI_PROMPT, destinations } from "../Constant/Location";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../Service/firebaseConfig";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useNavigate } from "react-router-dom";

const GenerateAITrip = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    travelDates: "",
    budget: "",
    interests: "",
    additionalInfo: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // const isLoggedIn = localStorage.getItem("formData");
  const lastTripId = localStorage.getItem("lastTripId");
  const isLoggedIn = JSON.parse(localStorage.getItem("formData"));
      // if (isLoggedIn) {
      //   console.log("User Email:", isLoggedIn?.email);
      // } else {
      //   console.log("No user is logged in.");
      // }


  useEffect(() => {
    
    if (isLoggedIn) {
      // If a trip exists, redirect to view-trip
      if (lastTripId) {
        navigate(`/create-trip`);
      }
    } else {
      navigate("/login");
    }
  }, [navigate]);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
     
    if(formData?.email != isLoggedIn?.email){
       alert("plase Enter Login Email ");
       return ;
    }
  

    try {
      const FINAL_PROMPT = AI_PROMPT.replace("{location}", formData.destination)
        .replace("{totalDays}", formData.travelDates)
        .replace("{budget}", formData.budget)
        .replace("{traveller}", formData.interests);

      const genAI = new GoogleGenerativeAI("AIzaSyAR5opnjTKVpE-wHbuNgBxPWG-DPBVsbe4");
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent(FINAL_PROMPT);

      const tripData = result?.response?.text();
      if (!tripData) throw new Error("Failed to generate trip plan.");

      await saveAiTrip(tripData);
    } catch (error) {
      console.error("Error generating or saving trip:", error);
      alert("There was an error generating your trip. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const saveAiTrip = async (tripData) => {
    try {
      const docId = Date.now().toString();
      const sanitizedTripData = tripData.replace(/```json|```/g, "").trim();
      const tripDataJson = JSON.parse(sanitizedTripData);
  
      // Save the trip data to Firestore
      await setDoc(doc(db, "AITrips", docId), {
        userSelection: formData,
        tripData: tripDataJson,
        userEmail: formData.email,
        id: docId,
      });
  
      // Store the trip ID locally
      localStorage.setItem("lastTripId", docId);
      // localStorage.setItem("trip_data", JSON.stringify(formData));
      // Redirect to the view-trip page
      navigate(`/view-trip/${docId}`);
    } catch (error) {
      console.error("Error saving trip data:", error);
      alert("Failed to save trip data. Please try again.");
    }
  };
  

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg max-w-2xl w-full p-8">
        <h2 className="font-bold text-3xl text-blue-500 text-center mb-4">
          Welcome to Generate-AI-Trip
        </h2>
        <p className="text-lg text-gray-600 text-center mb-8">
          Plan the perfect trip tailored to your preferences with AI. Fill out
          the form below, and let AI handle the rest!
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/** Input Fields */}
          {[
            { label: "Name", id: "name", type: "text", placeholder: "Enter your name" },
            { label: "Email", id: "email", type: "email", placeholder: "Enter your email" },
            { label: "Phone", id: "phone", type: "tel", placeholder: "Enter your phone number" },
          ].map(({ label, id, type, placeholder }) => (
            <div key={id}>
              <label htmlFor={id} className="block text-gray-700 font-medium">
                {label}:
              </label>
              <input
                type={type}
                id={id}
                name={id}
                value={formData[id]}
                onChange={handleChange}
                required
                placeholder={placeholder}
                className="mt-1 w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-400 focus:border-blue-400"
              />
            </div>
          ))}

          {/** Destination */}
          <div>
            <label
              htmlFor="destination"
              className="block text-gray-700 font-medium"
            >
              Destination:
            </label>
            <select
              id="destination"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              className="w-full p-2 rounded-lg border-gray-300"
              required
            >
              <option value="" disabled>
                Select a destination
              </option>
              {destinations.map((destination, index) => (
                <option key={index} value={destination.name}>
                  {destination.name}
                </option>
              ))}
            </select>
          </div>

          {/** Travel Days */}
          <div>
            <label
              htmlFor="travelDates"
              className="block text-gray-700 font-medium"
            >
              Travel Days:
            </label>
            <input
              type="number"
              id="travelDates"
              name="travelDates"
              value={formData.travelDates}
              onChange={handleChange}
              required
              className="mt-1 w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-400 focus:border-blue-400"
            />
          </div>

          {/** Budget and Interests */}
          {[
            {
              id: "budget",
              label: "Budget (in USD):",
              options: [
                { value: "cheap", label: "Cheap ($20-$40 USD)" },
                { value: "moderate", label: "Moderate ($40-$90 USD)" },
                { value: "high", label: "High ($90-$190 USD)" },
              ],
            },
            {
              id: "interests",
              label: "Who are you traveling with?",
              options: [
                { value: "Just Me", label: "Just Me" },
                { value: "A Couple", label: "A Couple" },
                { value: "Family", label: "Family" },
                { value: "Friend", label: "Friend" },
              ],
            },
          ].map(({ id, label, options }) => (
            <div key={id}>
              <label
                htmlFor={id}
                className="block text-gray-700 font-medium"
              >
                {label}
              </label>
              <select
                id={id}
                name={id}
                value={formData[id]}
                onChange={handleChange}
                required
                className="w-full p-2 rounded-lg border-gray-300"
              >
                <option value="" disabled>
                  Select an option
                </option>
                {options.map(({ value, label }) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
          ))}

          {/** Additional Information */}
          <div>
            <label
              htmlFor="additionalInfo"
              className="block text-gray-700 font-medium"
            >
              Additional Information:
            </label>
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
              placeholder="Any other details we should know?"
              className="mt-1 w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-400 focus:border-blue-400"
            ></textarea>
          </div>

          {/** Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            disabled={loading}
          >
            {loading ? "Generating..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GenerateAITrip;
