import { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

// Fix for default marker icon in react-leaflet
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    message: '',
    saveInfo: false
  })

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setFormData({
      ...formData,
      [e.target.name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, this would send the form data to a server
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', serviceType: '', message: '', saveInfo: false })
  }

  // Map coordinates for Pahrump, Nevada
  const mapCenter = [36.2083, -115.9839]
  const address = "3190 HW-160, Suite F, Pahrump, Nevada 89048, United States"

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-12 sm:py-16 md:py-20 bg-gray-900 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Title with orange line */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-2 sm:gap-4 mb-4">
              <div className="w-1 h-8 sm:h-10 md:h-12 bg-orange-600"></div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">Call or Visit Us</h2>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Contact Form Column */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-800 p-4 sm:p-6 md:p-8 lg:p-12 rounded-lg shadow-lg"
            >
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 relative">
                {/* Vertical Divider */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-700 -translate-x-1/2"></div>
                
                {/* Left Column */}
                <div className="space-y-6">
                  {/* Name Field */}
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 pr-12 border border-gray-600 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 placeholder-gray-400"
                      placeholder="Enter your name"
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2">
                      <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>

                  {/* Service Type Dropdown */}
                  <div className="relative">
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 pr-12 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 appearance-none bg-gray-700 ${
                        formData.serviceType === '' ? 'text-gray-400' : 'text-white'
                      }`}
                    >
                      <option value="" className="text-gray-400 bg-gray-700">Select Service Type</option>
                      <option value="buy">Buy a Home</option>
                      <option value="rent">Rent a Home</option>
                      <option value="sell">Sell a Home</option>
                      <option value="commercial">Commercial</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {/* Email Field */}
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 pr-12 border border-gray-600 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 placeholder-gray-400"
                      placeholder="Enter email address"
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2">
                      <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>

                  {/* Phone Field */}
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 pr-12 border border-gray-600 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 placeholder-gray-400"
                      placeholder="Enter phone number"
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2">
                      <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Horizontal Divider */}
              <div className="border-t border-gray-700 my-6"></div>

              {/* Message Textarea - Full Width */}
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 pr-12 border border-gray-600 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 resize-y placeholder-gray-400"
                  placeholder="Enter message"
                />
                <div className="absolute right-4 top-4">
                  <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
              </div>

              {/* Checkbox */}
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="saveInfo"
                  name="saveInfo"
                  checked={formData.saveInfo}
                  onChange={handleChange}
                  className="mt-1 mr-3 w-4 h-4 text-orange-600 border-gray-600 bg-gray-700 rounded focus:ring-orange-500"
                />
                <label htmlFor="saveInfo" className="text-sm text-gray-300">
                  Save my name, email, and website in this browser for the next time I comment.
                </label>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full bg-orange-600 text-white font-bold uppercase py-4 rounded-lg hover:bg-orange-700 transition-colors"
              >
                GET A FREE SERVICE
              </button>
            </form>

            {/* Contact Directly Section */}
            <div className="mt-8 pt-8 border-t border-gray-700">
              <p className="text-center text-gray-300 mb-4">Or contact us directly:</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:206-919-6886" 
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-orange-600 text-orange-600 rounded-lg font-medium hover:bg-orange-600 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call (206) 919-6886
                </a>
                <a 
                  href="https://wa.me/12069196886" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-green-600 text-green-600 rounded-lg font-medium hover:bg-green-600 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Message on WhatsApp
                </a>
              </div>
            </div>
            </motion.div>

            {/* Map Column */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden h-full flex flex-col"
            >
              <div className="relative w-full flex-1 min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
                <MapContainer
                  center={mapCenter}
                  zoom={15}
                  style={{ height: '100%', width: '100%' }}
                  scrollWheelZoom={false}
                  className="h-full w-full"
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={mapCenter}>
                    <Popup>
                      <div className="text-sm">
                        <strong>{address}</strong>
                      </div>
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
