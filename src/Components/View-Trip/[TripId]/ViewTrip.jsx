import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { db } from '../../../Service/firebaseConfig';
import GlassCard from '../../Common/GlassCard';
import { HiOutlineCalendar, HiOutlineMapPin, HiOutlineCurrencyDollar, HiOutlineSparkles } from "react-icons/hi2";

const ViewTrip = () => {
  const { tripId } = useParams();
  const navigate = useNavigate();
  const [trip, setTrip] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (tripId) {
      getTripInfo();
    }
  }, [tripId]);

  const getTripInfo = async () => {
    try {
      setLoading(true);
      const docRef = doc(db, 'AITrips', tripId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setTrip(docSnap.data());
      } else {
        navigate('/');
      }
    } catch (err) {
      console.error('Error fetching trip data:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-base">
       <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-ai-glow/20 border-t-ai-glow rounded-full animate-spin" />
          <p className="font-heading text-accent/40 uppercase tracking-widest text-sm">Reviewing Itinerary</p>
       </div>
    </div>
  );

  const { tripData } = trip;

  return (
    <main className="bg-base min-h-screen pb-40">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <img 
          src={tripData.itinerary[0]?.activities[0]?.image_placeholder || "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80"} 
          className="w-full h-full object-cover"
          alt={tripData.destination}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-base" />
        
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-20">
          <div className="max-w-7xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/20 text-white text-sm font-semibold mb-8 backdrop-blur-md">
              <HiOutlineSparkles className="text-ai-glow" /> AI Curated Masterpiece
            </div>
            <h1 className="text-6xl md:text-9xl font-bold text-white mb-8 leading-[0.8] tracking-tighter">
              {tripData.trip_title}
            </h1>
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-3 text-white/80">
                <HiOutlineMapPin size={24} />
                <span className="font-body text-xl">{tripData.destination}</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <HiOutlineCalendar size={24} />
                <span className="font-body text-xl">{tripData.duration}</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <HiOutlineCurrencyDollar size={24} />
                <span className="font-body text-xl">{tripData.budget} Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="max-w-4xl mx-auto px-6 -mt-10 relative z-10">
        <GlassCard className="p-12 md:p-20">
          <p className="text-3xl md:text-4xl font-heading font-medium text-accent leading-relaxed italic">
            "{tripData.summary}"
          </p>
        </GlassCard>
      </section>

      {/* Itinerary Timeline */}
      <section className="max-w-7xl mx-auto px-6 mt-32">
        <div className="flex items-center gap-4 mb-20">
          <div className="h-px bg-accent/10 flex-1" />
          <h2 className="text-sm font-heading font-bold text-accent/20 uppercase tracking-[0.5em]">The Journey Unfolds</h2>
          <div className="h-px bg-accent/10 flex-1" />
        </div>

        <div className="space-y-40">
          {tripData.itinerary.map((day, dIdx) => (
            <div key={dIdx} className="relative">
              {/* Day Marker */}
              <div className="sticky top-10 z-20 mb-12">
                <div className="inline-flex items-center gap-6">
                  <span className="text-8xl font-bold text-accent/5 leading-none">0{day.day}</span>
                  <div>
                    <h3 className="text-4xl font-bold text-accent">{day.theme}</h3>
                    <p className="text-ai-glow font-heading font-semibold uppercase tracking-widest text-sm">Day {day.day}</p>
                  </div>
                </div>
              </div>

              {/* Day Activities */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                <div className="space-y-20">
                  {day.activities.map((act, aIdx) => (
                    <div key={aIdx} className="group space-y-6">
                      <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-premium">
                         <img 
                           src={act.image_placeholder} 
                           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                           alt={act.title}
                         />
                      </div>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-bold text-ai-glow uppercase tracking-widest">{act.time}</span>
                          <span className="text-xs text-accent/40 font-body">{act.location}</span>
                        </div>
                        <h4 className="text-3xl font-bold text-accent leading-tight">{act.title}</h4>
                        <p className="text-lg text-accent/60 font-body leading-relaxed">{act.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="md:pt-40 space-y-20">
                   {/* Dining Highlight */}
                   <div className="glass p-12 rounded-[3rem] border border-white shadow-soft">
                      <h5 className="text-sm font-heading font-bold text-accent/20 uppercase tracking-widest mb-8">Culinary Highlights</h5>
                      <div className="space-y-12">
                        <div>
                          <p className="text-xs font-bold text-ai-glow uppercase tracking-widest mb-2">Lunch</p>
                          <p className="text-xl text-accent font-medium leading-normal">{day.dining.lunch}</p>
                        </div>
                        <div className="h-px bg-accent/5" />
                        <div>
                          <p className="text-xs font-bold text-ai-glow uppercase tracking-widest mb-2">Dinner</p>
                          <p className="text-xl text-accent font-medium leading-normal">{day.dining.dinner}</p>
                        </div>
                      </div>
                   </div>

                   {/* Accommodation Highlight */}
                   <div className="relative group overflow-hidden rounded-[3rem] h-[500px] shadow-premium">
                      <img 
                        src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80" 
                        alt="Accommodation" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      />
                      <div className="absolute inset-0 bg-black/40 p-12 flex flex-col justify-end">
                        <p className="text-xs font-bold text-white/60 uppercase tracking-widest mb-2">Retreat</p>
                        <h5 className="text-3xl font-bold text-white mb-4">{day.accommodation.name}</h5>
                        <p className="text-white/80 font-body leading-relaxed">{day.accommodation.style}</p>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Breakdown */}
      <section className="mt-60 px-6">
        <GlassCard className="max-w-4xl mx-auto p-12 md:p-20 text-center">
            <h2 className="text-4xl font-bold text-accent mb-4">Investment Summary</h2>
            <p className="text-accent/40 font-body mb-12">Estimated values based on your {tripData.budget} style.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 bg-accent-light/10 rounded-3xl">
                <p className="text-xs font-heading font-bold text-accent/40 uppercase mb-2">Stay</p>
                <p className="text-2xl font-bold text-accent">{tripData.cost_breakdown.categories.accommodation}</p>
              </div>
              <div className="p-8 bg-accent-light/10 rounded-3xl">
                <p className="text-xs font-heading font-bold text-accent/40 uppercase mb-2">Taste</p>
                <p className="text-2xl font-bold text-accent">{tripData.cost_breakdown.categories.dining}</p>
              </div>
              <div className="p-8 bg-accent-light/10 rounded-3xl">
                <p className="text-xs font-heading font-bold text-accent/40 uppercase mb-2">Explore</p>
                <p className="text-2xl font-bold text-accent">{tripData.cost_breakdown.categories.activities}</p>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-accent/5">
              <p className="text-sm font-heading font-bold text-accent/20 uppercase tracking-[0.3em] mb-4">Total Curated Value</p>
              <p className="text-6xl font-bold text-ai-glow">{tripData.cost_breakdown.total_estimated}</p>
            </div>
        </GlassCard>
      </section>
    </main>
  );
};

export default ViewTrip;

