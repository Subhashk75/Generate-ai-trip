
 export const destinations = [
    { name: "Patagonia, Argentina/Chile", description: "Stunning landscapes and glaciers." },
    { name: "Banff National Park, Canada", description: "Majestic mountains and turquoise lakes." },
    { name: "New Zealand", description: "Adventure activities like trekking and kayaking." },
    { name: "Maldives", description: "Overwater bungalows and crystal-clear waters." },
    { name: "Bali, Indonesia", description: "Beautiful beaches and vibrant culture." },
    { name: "Santorini, Greece", description: "Breathtaking sunsets and iconic architecture." },
    { name: "Kyoto, Japan", description: "Traditional temples and serene gardens." },
    { name: "Istanbul, Turkey", description: "A blend of European and Asian cultures." },
    { name: "Machu Picchu, Peru", description: "An iconic Incan city in the Andes." },
    { name: "New York City, USA", description: "Iconic landmarks and diverse food scenes." },
    { name: "Paris, France", description: "Romantic streets and world-class art." },
    { name: "Dubai, UAE", description: "Modern architecture and desert adventures." },
    { name: "Vietnam", description: "Affordable food and stunning landscapes." },
    { name: "Portugal", description: "Charming cities and great beaches." },
    { name: "India", description: "Diverse experiences from mountains to beaches." },
    { name: "Amalfi Coast, Italy", description: "Cliffside villages and Mediterranean views." },
    { name: "Queenstown, New Zealand", description: "Adventure capital of the world." },
    { name: "Swiss Alps, Switzerland", description: "Pristine mountains and skiing resorts." },
    { name: "Cape Town, South Africa", description: "Beautiful landscapes and cultural diversity." },
    { name: "Tokyo, Japan", description: "A futuristic city with ancient traditions." },
  ];

  export const AI_PROMPT = `
  Generate a travel plan for the following details:
  - Location: {location}
  - Duration: {totalDays} days
  - Traveler Type: {traveller}
  - Budget: {budget}
  
  Provide the following details for each day:
  1. Hotel Options: List with "HotelName", "HotelAddress", "Prices", and "GeoCoordinates".
  2. Ticket Pricing: Include transportation or activity tickets.
  3. Daily Itinerary: Outline activities and their best time to visit.
  
  Please format your response as **valid JSON** only. Ensure there are no extra text, explanations, or formatting outside the JSON object.
  Example response format:
  {
    "Day 1": {
      "Hotel": {
        "HotelName": "Example Hotel",
        "HotelAddress": "123 Main St, City",
        "Prices": "$100 per night",
        "GeoCoordinates": "40.7128, -74.0060"
      },
      "Tickets": {
        "Activity": "Museum Visit",
        "Price": "$20",
        "Time": "10:00 AM"
      },
      "Itinerary": [
        {
          "Activity": "Visit Museum",
          "BestTime": "Morning"
        },
        {
          "Activity": "Explore Local Market",
          "BestTime": "Afternoon"
        }
      ]
    },
    ...
  }
  Only return the JSON object as your response.
  `;
  