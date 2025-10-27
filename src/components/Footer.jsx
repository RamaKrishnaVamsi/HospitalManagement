import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Hospital Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="text-xl font-bold">CityCare Hospital</span>
            </div>
            <p className="text-gray-300 mb-4">
              Your Health, Our Priority. Providing exceptional healthcare services 
              with compassion and excellence.
            </p>
            <div className="text-gray-300">
              <p>📍 123 Healthcare Avenue</p>
              <p>Medical District, City 12345</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/doctors" className="text-gray-300 hover:text-white transition-colors">
                  Our Doctors
                </Link>
              </li>
              <li>
                <Link to="/appointments" className="text-gray-300 hover:text-white transition-colors">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-2 text-gray-300">
              <p>📞 Emergency: (555) 911-HELP</p>
              <p>📞 Main: (555) 123-4567</p>
              <p>📧 info@citycarehospital.com</p>
              <p>🕒 24/7 Emergency Services</p>
              <p>🕒 Mon-Fri: 8:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 CityCare Hospital Management. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Built with React, Vite, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
