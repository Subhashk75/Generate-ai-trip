import React, { useState, useEffect } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../Service/firebaseConfig";
import { chatSession } from "../../Service/AIModel";
import { useNavigate } from "react-router-dom";
import AIInput from "../Common/AIInput";
import AISkeleton from "../Common/AISkeleton";
import GlassCard from "../Common/GlassCard";

const SYSTEM_INSTRUCTION = `
You are a luxury AI Travel Concierge. Generate a highly detailed, personalized travel itinerary in JSON format.
The output MUST follow this exact structure:
{
  "trip_title": "string",
  "destination": "string",
  "duration": "string",
  "budget": "string",
  "traveler_style": "string",
  "summary": "A short, editorial opening for the trip.",
  "itinerary": [
    {
      "day": 1,
      "theme": "The Arrival & Grandeur",
      "activities": [
        {
          "time": "Morning",
          "title": "activity title",
          "description": "luxurious description",
          "location": "location name",
          "image_placeholder": "https://images.unsplash.com/photo-X?auto=format&fit=crop&w=800&q=80"
        }
      ],
      "dining": {
        "lunch": "name and description",
        "dinner": "name and description"
      },
      "accommodation": {
        "name": "Hotel Name",
        "style": "Description of the luxury stay"
      }
    }
  ],
  "cost_breakdown": {
    "total_estimated": "$X",
    "categories": {
      "accommodation": "$X",
      "activities": "$X",
      "dining": "$X"
    }
  }
}
Return ONLY the JSON object. No markdown, no pre-text.
`;

const GenerateAITrip = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("formData"));

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const onGenerateTrip = async (userPrompt) => {
    setLoading(true);
    try {
      const FINAL_PROMPT = `${SYSTEM_INSTRUCTION}\n\nUser Request: ${userPrompt}`;
      
      const result = await chatSession.sendMessage(FINAL_PROMPT);
      const responseText = result.response.text().replace(/```json|```/g, "").trim();
      const tripData = JSON.parse(responseText);

      const docId = Date.now().toString();
      
      // Save to Firestore
      await setDoc(doc(db, "AITrips", docId), {
        id: docId,
        userEmail: user.email,
        userName: user.email.split('@')[0],
        prompt: userPrompt,
        tripData: tripData,
        createdAt: new Date().toISOString()
      });

      localStorage.setItem("lastTripId", docId);
      navigate(`/view-trip/${docId}`);
    } catch (error) {
      console.error("AI Generation Error:", error);
      alert("Our concierge is momentarily unavailable. Please try a different request.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-base pt-32 pb-20 px-6 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-ai-glow/5 rounded-full blur-[140px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/5 rounded-full blur-[140px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {!loading ? (
          <div className="flex flex-col items-center text-center mb-20 animate-in fade-in slide-in-from-bottom-10 duration-1000">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-ai-glow/10 text-ai-glow text-sm font-semibold mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ai-glow opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-ai-glow"></span>
              </span>
              Next-Gen Travel Intelligence
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold text-accent mb-8 leading-tight">
              Design your <br /> masterpiece.
            </h1>
            <p className="text-xl text-accent/50 max-w-2xl font-body mb-12">
              Tell us your vision — from a quiet weekend in the Cotswolds to a multi-city Tokyo expedition. Our AI handles the logistics while you dream.
            </p>

            <AIInput onGenerate={onGenerateTrip} loading={loading} />

            <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
              {[
                { title: "Editorial Detail", desc: "Every activity curated like a lifestyle magazine feature." },
                { title: "Smart Constraints", desc: "Instantly factors in your budget, style, and companions." },
                { title: "Visual Timeline", desc: "A beautiful interactive map and timeline for your journey." }
              ].map((feature, i) => (
                <div key={i} className="space-y-4">
                  <div className="h-px w-12 bg-ai-glow" />
                  <h3 className="text-xl font-bold text-accent">{feature.title}</h3>
                  <p className="text-accent/40 font-body leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center">
             <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-accent mb-2">Curating your experience...</h2>
                <p className="text-accent/40 font-body">Our AI is sourcing the finest locations and dining.</p>
             </div>
             <AISkeleton />
          </div>
        )}
      </div>
    </div>
  );
};

export default GenerateAITrip;
