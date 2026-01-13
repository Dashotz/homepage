import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

function GetItSold() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="lets-move" ref={ref} className="py-12 sm:py-16 md:py-20 bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Side - Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Main Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
              Today Sells Properties
            </h2>

            {/* Descriptive Paragraph */}
            <p className="text-lg text-gray-400 leading-relaxed">
              Houzez allow you to design unlimited panels and real estate custom forms to capture leads and keep record of all information.
            </p>

            {/* Bulleted List */}
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold text-xl mt-1">—</span>
                <span className="text-gray-300">Live Music Concerts at Luviana</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold text-xl mt-1">—</span>
                <span className="text-gray-300">Our Secret Island Boat Tour is Just for You</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold text-xl mt-1">—</span>
                <span className="text-gray-300">Live Music Concerts at Luviana</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold text-xl mt-1">—</span>
                <span className="text-gray-300">Live Music Concerts at Luviana</span>
              </li>
            </ul>

            {/* Property Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center gap-2 mb-1">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <span className="text-sm text-gray-400">Bedrooms</span>
              </div>

              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center gap-2 mb-1">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <span className="text-sm text-gray-400">Bathrooms</span>
              </div>

              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center gap-2 mb-1">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                  </svg>
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <span className="text-sm text-gray-400">Car parking</span>
              </div>

              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center gap-2 mb-1">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                  <span className="text-2xl font-bold text-white">3450</span>
                </div>
                <span className="text-sm text-gray-400">square Ft</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Image Gallery */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            {/* Two Large Vertical Images Side by Side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {/* Left Vertical Image */}
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="/images/bg.webp" 
                  alt="Scenic landscape" 
                  className="w-full h-full min-h-[250px] sm:min-h-[300px] md:min-h-[400px] lg:min-h-[500px] object-cover"
                />
              </div>

              {/* Right Vertical Image */}
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="/images/img.webp" 
                  alt="Modern house entrance" 
                  className="w-full h-full min-h-[250px] sm:min-h-[300px] md:min-h-[400px] lg:min-h-[500px] object-cover"
                />
              </div>
            </div>

            {/* Bottom Three Horizontal Thumbnails */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/images/img1.webp" 
                  alt="Residential street" 
                  className="w-full h-24 sm:h-28 md:h-32 object-cover"
                />
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/images/bg.webp" 
                  alt="Landscape view" 
                  className="w-full h-24 sm:h-28 md:h-32 object-cover"
                />
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-lg sm:col-span-1 col-span-2">
                <img 
                  src="/images/img.webp" 
                  alt="Residential area" 
                  className="w-full h-24 sm:h-28 md:h-32 object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default GetItSold
