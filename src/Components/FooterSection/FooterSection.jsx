import React from 'react';

const FooterSection = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">About Generate AI Trip</h3>
            <p className="text-gray-400">
              Generate AI Trip is a platform that uses artificial intelligence to simplify your travel planning process, providing personalized itineraries tailored to your preferences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white">Home</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">About Us</a>
              </li>
              <li>
                <a href="/features" className="text-gray-400 hover:text-white">Features</a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p className="text-gray-400">
              Email: <a href="mailto:support@generateaitrip.com" className="hover:text-white">support@generateaitrip.com</a>
            </p>
            <p className="text-gray-400">
              Phone: <a href="tel:+1234567890" className="hover:text-white">+1 234 567 890</a>
            </p>
            <p className="text-gray-400">
              Address: 123 AI Travel Lane, Innovation City
            </p>
          </div>
        </div>

        <div className="text-center mt-8 border-t border-gray-700 pt-4">
          <p className="text-gray-500">&copy; {new Date().getFullYear()} Generate AI Trip. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
