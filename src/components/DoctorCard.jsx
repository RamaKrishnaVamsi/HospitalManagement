import React from 'react'
import { motion } from 'framer-motion'

const DoctorCard = ({ doctor }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="card max-w-sm mx-auto"
    >
      {/* Doctor Image Placeholder */}
      <div className="w-32 h-32 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
        <div className="w-24 h-24 bg-blue-200 rounded-full flex items-center justify-center">
          <svg className="w-12 h-12 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
        </div>
      </div>

      {/* Doctor Info */}
      <div className="text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{doctor.name}</h3>
        <p className="text-blue-600 font-semibold mb-2">{doctor.specialization}</p>
        <p className="text-gray-600 text-sm mb-3">{doctor.experience} years experience</p>
        <p className="text-gray-500 text-sm mb-4">{doctor.education}</p>
        
        {/* Contact Info */}
        <div className="space-y-1 text-sm text-gray-600">
          <p>📞 {doctor.phone}</p>
          <p>📧 {doctor.email}</p>
        </div>

        {/* Availability */}
        <div className="mt-4">
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
            doctor.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
            {doctor.available ? 'Available' : 'Not Available'}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export default DoctorCard
