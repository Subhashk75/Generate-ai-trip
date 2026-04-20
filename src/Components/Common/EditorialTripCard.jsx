import React from 'react';

const EditorialTripCard = ({ trip, isFeatured = false }) => {
  const { destination, date, image, duration } = trip;

  return (
    <div 
      className={`group relative overflow-hidden rounded-[2rem] bg-white shadow-soft transition-all duration-500 hover:shadow-premium cursor-pointer ${
        isFeatured ? "h-[500px] md:h-[600px] col-span-2" : "h-[300px] md:h-[400px]"
      }`}
    >
      <img 
        src={image || "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80"} 
        alt={destination}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <div className="flex flex-col gap-2">
          <span className="text-white/80 font-body text-sm tracking-wider uppercase">{duration} | {date}</span>
          <h3 className={`text-white font-heading ${isFeatured ? "text-4xl md:text-5xl" : "text-2xl"}`}>
            {destination}
          </h3>
        </div>
      </div>

      {isFeatured && (
        <div className="absolute top-8 right-8">
          <span className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest">
            Latest Discovery
          </span>
        </div>
      )}
    </div>
  );
};

export default EditorialTripCard;
