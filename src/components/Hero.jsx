import { motion } from 'framer-motion'

function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 sm:py-0">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/bg.webp"
          alt="Modern Apartment Buildings"
          className="w-full h-full object-cover"
        />
        {/* Dark Blue Overlay */}
        <div className="absolute inset-0 bg-black/75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Real Estate Agency Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center space-x-2 mb-6"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span className="text-white font-medium">MARCI METZGER - THE RIDGE REALTY GROUP</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight max-w-4xl mx-auto px-2"
        >
          Find Your Dream House By Us
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4"
        >
          We utilize our exceptional market insight and expertise to guide you through your real estate journey, ensuring you find the perfect property that meets all your needs and desires.
        </motion.p>

        {/* Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-orange-600 hover:bg-orange-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-colors text-base sm:text-lg mb-6 sm:mb-0"
        >
          Make An Enquiry
        </motion.button>

        {/* Property Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 sm:mt-12 bg-white bg-opacity-90 rounded-lg shadow-xl p-4 sm:p-6 md:p-8 max-w-4xl mx-auto"
        >
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-between items-stretch sm:items-center">
            {/* Choose Area Dropdown */}
            <div className="relative flex-1 w-full">
              <select className="block w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent appearance-none text-gray-700">
                <option value="">Choose Area</option>
                <option value="new-york">New York</option>
                <option value="los-angeles">Los Angeles</option>
                <option value="chicago">Chicago</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9z" /></svg>
              </div>
            </div>

            {/* Property Status Dropdown */}
            <div className="relative flex-1 w-full">
              <select className="block w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent appearance-none text-gray-700">
                <option value="">Property Status</option>
                <option value="rent">Rent</option>
                <option value="sale">Sale</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9z" /></svg>
              </div>
            </div>

            {/* Property Type Dropdown */}
            <div className="relative flex-1 w-full">
              <select className="block w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent appearance-none text-gray-700">
                <option value="">Property Type</option>
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="condo">Condo</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9z" /></svg>
              </div>
            </div>

            {/* Find Now Button */}
            <button
              type="submit"
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-colors w-full md:w-auto"
            >
              FIND NOW
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero
