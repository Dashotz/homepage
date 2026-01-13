import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle newsletter subscription
    alert('Thank you for subscribing to our newsletter!')
    setEmail('')
  }


  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <footer ref={ref} className="bg-gray-800 text-white relative">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 mb-8"
        >
          {/* Company Information Column */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center space-x-2 mb-4">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span className="text-xl font-bold">MARCI METZGER</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Realtor for nearly 3 decades! Your trusted partner in Pahrump real estate. We help you find your dream home or sell your property with expertise and care.
            </p>

            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-0.5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-300 text-sm">3190 HW-160, Suite F, Pahrump, Nevada 89048, United States</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:206-919-6886" className="text-gray-300 text-sm hover:text-orange-600 transition-colors">(206) 919-6886</a>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:example@example.com" className="text-gray-300 text-sm hover:text-orange-600 transition-colors">example@example.com</a>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Company Links Column */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-orange-600 transition-colors text-sm">About</a></li>
              <li><a href="#blog" className="text-gray-300 hover:text-orange-600 transition-colors text-sm">Blog</a></li>
              <li><a href="#listings" className="text-gray-300 hover:text-orange-600 transition-colors text-sm">All Properties</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-orange-600 transition-colors text-sm">Locations Map</a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-orange-600 transition-colors text-sm">FAQ</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-orange-600 transition-colors text-sm">Contact us</a></li>
            </ul>
          </motion.div>

          {/* Services Links Column */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#listings" className="text-gray-300 hover:text-orange-600 transition-colors text-sm">Property Search</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-orange-600 transition-colors text-sm">Buy a Home</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-orange-600 transition-colors text-sm">Sell a Home</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-orange-600 transition-colors text-sm">Rent a Home</a></li>
              <li><a href="#terms" className="text-gray-300 hover:text-orange-600 transition-colors text-sm">Terms & Conditions</a></li>
              <li><a href="#promotions" className="text-gray-300 hover:text-orange-600 transition-colors text-sm">Promotional Offers</a></li>
            </ul>
          </motion.div>

          {/* Customer Care Links Column */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-bold text-lg mb-4">Customer Care</h4>
            <ul className="space-y-2">
              <li><a href="#login" className="text-gray-300 hover:text-orange-600 transition-colors text-sm">Login</a></li>
              <li><a href="#account" className="text-gray-300 hover:text-orange-600 transition-colors text-sm">My account</a></li>
              <li><a href="#favorites" className="text-gray-300 hover:text-orange-600 transition-colors text-sm">Favorites</a></li>
              <li><a href="#listings" className="text-gray-300 hover:text-orange-600 transition-colors text-sm">Property Search</a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-orange-600 transition-colors text-sm">FAQ</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-orange-600 transition-colors text-sm">Contact us</a></li>
            </ul>
          </motion.div>

          {/* Newsletter & Payments Column */}
          <motion.div variants={itemVariants}>
            <div className="mb-6">
              <h4 className="text-white font-bold text-lg mb-2">Newsletter</h4>
              <p className="text-gray-400 text-sm mb-4">
                Subscribe to our weekly Newsletter and receive updates via email.
              </p>
              <form onSubmit={handleSubmit} className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email*"
                  required
                  className="flex-1 min-w-0 px-4 py-2 text-gray-900 bg-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-600 text-sm"
                />
                <button
                  type="submit"
                  className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-r-lg transition-colors flex-shrink-0"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </form>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg mb-4">We Accept</h4>
              <div className="flex flex-wrap gap-3">
                <div className="bg-white rounded p-2">
                  <span className="text-blue-600 font-bold text-xs">PayPal</span>
                </div>
                <div className="bg-white rounded p-2">
                  <span className="text-blue-800 font-bold text-xs">VISA</span>
                </div>
                <div className="bg-white rounded p-2">
                  <span className="text-orange-600 font-bold text-xs">Discover</span>
                </div>
                <div className="bg-white rounded p-2">
                  <span className="text-red-600 font-bold text-xs">Mastercard</span>
                </div>
                <div className="bg-white rounded p-2">
                  <span className="text-blue-600 font-bold text-xs">Amex</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-900 border-t border-gray-700 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-2 md:mb-0">
              All Rights Reserved @ MARCI METZGER Homes 2026
            </p>
            <div className="flex space-x-4 text-sm">
              <a href="#terms" className="text-gray-400 hover:text-orange-600 transition-colors">Terms & Conditions</a>
              <a href="#claim" className="text-gray-400 hover:text-orange-600 transition-colors">Claim</a>
              <a href="#privacy" className="text-gray-400 hover:text-orange-600 transition-colors">Privacy & Policy</a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
    </footer>
  )
}

export default Footer
