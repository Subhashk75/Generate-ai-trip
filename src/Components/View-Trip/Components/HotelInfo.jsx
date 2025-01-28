import React, { useState } from 'react';
import DailyPlan from './DailyPlan';

const HotelInfo = ({ trip }) => {
  let tripData = null;
  const [selectedDay, setSelectedDay] = useState(null);

  try {
    console.log("Raw tripData:", trip?.tripData);
    tripData = trip?.tripData;

    if (!tripData) {
      console.error("Trip data is empty or null.");
      return <p>Error loading hotel information. Data is missing.</p>;
    }
  } catch (error) {
    console.error("Error in processing tripData:", error.message);
    return <p>Error loading hotel information. Please check the data format.</p>;
  }

  const days = Object.keys(tripData).filter(key => key.startsWith("Day"));
  console.log("Filtered days:", days);

  if (days.length === 0) {
    console.log("No daily data found.");
    return <p>No trip data available.</p>;
  }

  return (
    <div className="p-4 bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Hotel Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {days.map(day => {
          const hotel = tripData[day]?.Hotel;
          const plan = tripData[day]?.Itinerary; // Assuming "Itinerary" is an array of daily plans

          return (
            <div key={day} className="p-4 bg-white rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-lg font-medium text-blue-600 mb-3">{day}</h3>
              {hotel && typeof hotel === 'object' ? (
                <>
                  <p className="text-gray-700">
                    <span className="font-medium">Name:</span> {hotel.HotelName || "N/A"}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">Address:</span> {hotel.HotelAddress || "N/A"}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">Price Range:</span> {hotel.Prices || "N/A"}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">Coordinates:</span> {hotel.GeoCoordinates || "N/A"}
                  </p>
                  <button
                    onClick={() => setSelectedDay(selectedDay === day ? null : day)}
                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                  >
                    {selectedDay === day ? "Hide Plan" : "See Plan"}
                  </button>
                  {selectedDay === day && plan && (
                    <div className="mt-4 p-3 bg-gray-100 rounded-lg">
                      <h4 className="font-medium text-gray-800 mb-2">Day Plan:</h4>
                      <DailyPlan plan={plan} />
                    </div>
                  )}
                </>
              ) : (
                <p className="text-gray-500 italic">No hotel information available for this day.</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HotelInfo;
