import React, { useState } from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: "What is Generate AI Trip?",
      answer:
        "Generate AI Trip is an innovative platform that uses AI to help you plan personalized trips effortlessly.",
    },
    {
      question: "How does the AI generate trips?",
      answer:
        "The AI considers your preferences, budget, and travel history to suggest tailored itineraries.",
    },
    {
      question: "Can I customize the AI-generated itinerary?",
      answer:
        "Absolutely! You can edit, add, or remove any part of the suggested itinerary to better suit your needs.",
    },
    {
      question: "Is Generate AI Trip free to use?",
      answer:
        "We offer a free plan with essential features, as well as premium options for advanced customization.",
    },
    {
      question: "How can I get support?",
      answer:
        "You can reach our support team via email or through the support section on our website.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-10 px-6 bg-gray-50 max-w-4xl mx-auto">
      {/* Section Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-500 mb-8">
        Frequently Asked Questions
      </h2>

      {/* FAQ List */}
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-sm bg-white p-4 transition-all"
          >
            <button
              onClick={() => toggle(index)}
              className="flex justify-between w-full text-left text-lg font-medium text-gray-800 focus:outline-none"
            >
              {faq.question}
              <span
                className={`transform transition-transform ${
                  activeIndex === index ? 'rotate-180' : 'rotate-0'
                }`}
              >
                ▼
              </span>
            </button>
            {activeIndex === index && (
              <p className="mt-3 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
