import React from 'react';

const DailyPlan = ({ plan }) => {
  return (
    <div>
      {plan.map((dailyPlan, key) => (
        <div key={key} className="mb-2">
        
          <p className="text-gray-700">
            <span className="font-medium">Best Time:</span> {dailyPlan?.BestTime || "N/A"}
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Activity:</span> {dailyPlan?.Activity || "N/A"}
          </p>
        </div>
      ))}
    </div>
  );
};

export default DailyPlan;
