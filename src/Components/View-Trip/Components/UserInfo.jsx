import React from 'react';
import tripBook from '../../../assets/tripBooking.jpeg';

const UserInfo = ({ trip }) => {
  return (
    <div className="flex flex-col mx-10 md:flex-row items-center md:items-start md:space-x-6 p-4 bg-gray-50 rounded-lg shadow-md">
      <div className="w-60 h-60 flex-shrink-0 flex justify-center items-center">
        <img
          src={tripBook}
          alt="Trip book image"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>
      <div className="mt-4 md:mt-0 text-gray-700">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Trip Details</h2>
        <p className="text-sm md:text-base mb-2">
          <span className="font-medium">Name:</span> {trip?.userSelection?.name || 'N/A'}
        </p>
        <p className="text-sm md:text-base mb-2">
          <span className="font-medium">Budget:</span> ${trip?.userSelection?.budget || 'N/A'}
        </p>
        <p className="text-sm md:text-base mb-2">
          <span className="font-medium">Destination Name:</span> {trip?.userSelection?.destination || 'N/A'}
        </p>
        <p className="text-sm md:text-base mb-2">
          <span className="font-medium">Total Date of Trip:</span> {trip?.userSelection?.travelDates || 'N/A'}
        </p>
        <p className="text-sm md:text-base mb-2">
          <span className="font-medium">Traveler Partner:</span> {trip?.userSelection?.interests || 'N/A'}
        </p>
      </div>
    </div>
  );
};

export default UserInfo;
