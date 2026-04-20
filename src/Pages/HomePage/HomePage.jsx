import React from 'react';
import { useNavigate } from "react-router-dom";
import EditorialTripCard from "../../Components/Common/EditorialTripCard";
import GlassCard from "../../Components/Common/GlassCard";
import { HiOutlineSparkles } from "react-icons/hi2";

const MOCK_TRIPS = [
  { id: 1, destination: "Amalfi Coast, Italy", date: "May 2024", duration: "7 Days", image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80" },
  { id: 2, destination: "Kyoto, Japan", date: "April 2024", duration: "10 Days", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80" },
  { id: 3, destination: "Santorini, Greece", date: "June 2024", duration: "5 Days", image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80" },
];

function HomePage() {
  const navigate = useNavigate();
  const userName = JSON.parse(localStorage.getItem("formData"))?.email?.split('@')[0] || "Explorer";

  return (
    <main className="min-h-screen bg-base pb-20">
      {/* Hero Section */}
      <section className="px-6 pt-32 pb-20 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <h1 className="text-6xl md:text-8xl font-bold text-accent leading-[0.9] mb-8">
              Where to <br /> Next, {userName}?
            </h1>
            <p className="text-xl text-accent/60 max-w-lg font-body leading-relaxed">
              Your AI travel concierge is ready to curate your next masterpiece journey. Minimalist, intelligent, and entirely yours.
            </p>
          </div>
          
          <button 
            onClick={() => navigate('/create-trip')}
            className="group relative flex items-center gap-4 bg-accent text-white px-10 py-6 rounded-full overflow-hidden shadow-premium hover:scale-105 transition-all"
          >
            <div className="absolute inset-0 bg-ai-glow opacity-0 group-hover:opacity-100 transition-opacity" />
            <HiOutlineSparkles className="text-2xl relative z-10" />
            <span className="text-lg font-heading font-semibold relative z-10">Start Planning</span>
          </button>
        </div>

        {/* Asymmetric Trip Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <EditorialTripCard trip={MOCK_TRIPS[0]} isFeatured={true} />
          </div>
          <div className="flex flex-col gap-8">
            <EditorialTripCard trip={MOCK_TRIPS[1]} />
            <EditorialTripCard trip={MOCK_TRIPS[2]} />
          </div>
        </div>
      </section>

      {/* Decorative Section */}
      <section className="mt-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto border-t border-accent/5 pt-20">
          <div className="flex flex-col md:flex-row gap-20 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold text-accent mb-8">Intelligence meets <br /> elegance.</h2>
              <p className="text-lg text-accent/60 font-body leading-relaxed mb-6">
                No more endless tabs. No more generic itineraries. Our AI understands your style, budget, and curiosities to build a journey that feels like a travel editorial.
              </p>
              <div className="flex gap-4">
                <span className="px-6 py-2 rounded-full border border-accent/10 text-accent/40 text-sm">Personalized</span>
                <span className="px-6 py-2 rounded-full border border-accent/10 text-accent/40 text-sm">Real-time</span>
                <span className="px-6 py-2 rounded-full border border-accent/10 text-accent/40 text-sm">Luxury</span>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative">
               <div className="aspect-[4/5] rounded-[3rem] bg-gray-200 overflow-hidden shadow-premium rotate-2 hover:rotate-0 transition-transform duration-700">
                  <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80" alt="Travel" className="h-full w-full object-cover" />
               </div>
               <div className="absolute -bottom-10 -left-10 w-2/3 aspect-square rounded-[2rem] bg-white p-8 shadow-premium hidden md:block">
                  <p className="italic text-accent/60 font-body">"The best way to experience a culture is to let it surprise you."</p>
                  <p className="font-heading font-bold mt-4">— AI Concierge</p>
               </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;

