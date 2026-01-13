import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" ref={ref} className="py-12 sm:py-16 md:py-20 bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src="/images/people.webp"
                alt="Marci Metzger"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* About Us Label */}
            <div>
              <span className="inline-block bg-orange-600/20 text-orange-600 font-semibold text-xs uppercase tracking-wide px-4 py-2 rounded-full">
                About Us
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight uppercase flex flex-wrap items-center gap-2 sm:gap-3">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-orange-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="break-words">MARCI METZGER</span>
            </h2>

            {/* Title */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 font-semibold uppercase flex flex-wrap items-center gap-2 sm:gap-3">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-orange-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              <span className="break-words">REALTOR FOR NEARLY 3 DECADES!</span>
            </p>

            {/* Phone Number */}
            <a href="tel:206-919-6886" className="text-xl sm:text-2xl md:text-3xl text-white font-bold hover:text-orange-600 transition-colors inline-flex items-center gap-2 sm:gap-3 flex-wrap">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-orange-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>206-919-6886</span>
            </a>

            {/* Descriptive Paragraph */}
            <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
              With decades of experience in the local market, we have established ourselves as the premier real estate group in the region. Our dedicated team provides personalized service to help you achieve your real estate goals.
            </p>

            {/* Feature Grid - 2x2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {/* Feature 1 - Smart Home Design */}
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <svg className="w-4 h-4 text-orange-600 -mt-2 ml-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>
                <span className="text-white font-medium text-sm">Smart Home Design</span>
              </div>

              {/* Feature 2 - Beautiful Scene Around */}
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <svg className="w-4 h-4 text-orange-600 -mt-2 ml-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <span className="text-white font-medium text-sm">Beautiful Scene Around</span>
              </div>

              {/* Feature 3 - Exceptional Lifestyle */}
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <svg className="w-4 h-4 text-orange-600 -mt-2 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <span className="text-white font-medium text-sm">Exceptional Lifestyle</span>
              </div>

              {/* Feature 4 - Complete 24/7 Security */}
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span className="text-white font-medium text-sm">Complete 24/7 Security</span>
              </div>
            </div>

            {/* Quote Box */}
            <div className="bg-orange-600/20 border border-orange-600/30 rounded-lg p-6">
              <p className="text-gray-300 italic text-sm leading-relaxed">
                "Our mission is to provide the highest level of service to our clients, ensuring a smooth and successful transaction every time."
              </p>
            </div>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-colors uppercase text-sm sm:text-base w-full sm:w-auto"
            >
              OUR SERVICES
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
