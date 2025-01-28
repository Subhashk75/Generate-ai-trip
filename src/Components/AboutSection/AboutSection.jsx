import React from 'react';
import { Button } from '@mui/material';
import tripImage from '../../assets/trip.jpeg';

const AboutSection = () => {
  return (
    <div className="px-6 py-12 bg-gray-50">
      {/* Heading Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-green-400 mb-2">
          Discover Your Next Adventure with AI:
        </h1>
        <h2 className="text-2xl text-gray-800">
          Personalized Itineraries at Your Fingertips
        </h2>
      </div>

      {/* Description Section */}
      <div className="text-center text-lg text-gray-600 mb-6">
        <p>
          Your personal trip planner and travel curator, creating custom itineraries<br />
          tailored to your interests and budget.
        </p>
      </div>

      {/* Image and Button Section */}
      <div className="flex flex-col items-center">
        {/* Image */}
        <div className="my-4 max-w-lg w-full">
          <img
            src={tripImage}
            alt="trip"
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        {/* Button */}
        <a href="/create-trip">
          <Button
            variant="contained"
            className="bg-black text-white hover:bg-gray-800 px-6 py-3 rounded-lg"
          >
            Generate Free AI-Trip
          </Button>
        </a>
      </div>
    </div>
  );
};

export default AboutSection;
