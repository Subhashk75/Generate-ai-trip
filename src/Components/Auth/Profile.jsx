import React, { useEffect, useState } from "react";
import { db } from "../../Service/firebaseConfig"; // Ensure firebaseConfig is correctly set up
import { collection, query, where, getDocs } from "firebase/firestore";

const Profile = () => {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);

  const isLoggedIn = JSON.parse(localStorage.getItem("formData"));

  useEffect(() => {
    if (isLoggedIn?.email) {
      const fetchTrips = async () => {
        try {
          // Query Firestore for trips associated with the user's email
          const tripsCollection = collection(db, "AITrips");
          const q = query(tripsCollection, where("userEmail", "==", isLoggedIn.email));
          const querySnapshot = await getDocs(q);

          // Map the documents into trip data
          const tripsData = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

          setTrips(tripsData);
        } catch (error) {
          console.error("Error fetching trips: ", error);
        } finally {
          setLoading(false);
        }
      };

      fetchTrips();
    }
  }, [isLoggedIn]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg text-gray-600">Loading your trip information...</p>
      </div>
    );
  }

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Your Profile</h2>

      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-700">
          Email: <span className="font-normal">{isLoggedIn?.email}</span>
        </h3>
      </div>

      <h3 className="text-2xl font-bold mb-4 text-center">Your Trips</h3>
      {trips.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {trips.map((trip) => (
            <div
              key={trip.id}
              className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
            >
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                {trip.userSelection?.destination}
              </h4>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Budget:</strong> {trip.userSelection?.budget}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Travel Dates:</strong> {trip.userSelection?.travelDates}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Trip ID:</strong> {trip.id}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">You have no trips saved.</p>
      )}
    </div>
  );
};

export default Profile;
