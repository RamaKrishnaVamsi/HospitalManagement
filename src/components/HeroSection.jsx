import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Your Health,{' '}
              <span className="text-blue-200">Our Priority</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Providing exceptional healthcare services with compassion, 
              expertise, and cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/appointments"
                className="btn-primary text-lg px-8 py-3 inline-block"
              >
                Book Appointment
              </Link>
              <Link
                to="/services"
                className="btn-secondary text-lg px-8 py-3 inline-block"
              >
                Our Services
              </Link>
            </div>
          </motion.div>

          {/* Right Content - Hospital Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="aspect-square bg-white/20 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">CityCare Hospital</h3>
                  <p className="text-blue-200">Modern Healthcare Facility</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-white/20"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-200">500+</div>
            <div className="text-blue-100">Patients Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-200">50+</div>
            <div className="text-blue-100">Expert Doctors</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-200">24/7</div>
            <div className="text-blue-100">Emergency Care</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-200">15+</div>
            <div className="text-blue-100">Specialties</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
