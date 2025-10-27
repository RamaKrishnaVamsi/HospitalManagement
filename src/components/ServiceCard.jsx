import React from 'react'
import { motion } from 'framer-motion'

const ServiceCard = ({ service }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="card max-w-sm mx-auto"
    >
      {/* Service Icon */}
      <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
        <div className="text-2xl">{service.icon}</div>
      </div>

      {/* Service Info */}
      <div className="text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{service.name}</h3>
        <p className="text-gray-600 mb-4">{service.description}</p>
        
        {/* Features */}
        <ul className="text-sm text-gray-500 space-y-1 mb-4">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-center justify-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              {feature}
            </li>
          ))}
        </ul>

        {/* Availability */}
        <div className="flex items-center justify-center space-x-4 text-sm">
          <span className={`px-3 py-1 rounded-full font-semibold ${
            service.available24h ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
          }`}>
            {service.available24h ? '24/7 Available' : 'Regular Hours'}
          </span>
        </div>

        {/* Price Range */}
        {service.priceRange && (
          <div className="mt-3 text-sm text-gray-600">
            <span className="font-semibold">Price Range:</span> {service.priceRange}
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default ServiceCard
