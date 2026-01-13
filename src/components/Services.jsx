import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  const services = [
    {
      icon: "done-right",
      title: "Real Estate Done Right",
      description: "Nervous about your property adventure? Don't be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!",
      highlighted: false
    },
    {
      icon: "commercial-residential",
      title: "Commercial & Residential",
      description: "Large or small, condo or mansion, we can find it and get at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put you hard-earned dollars.",
      highlighted: true
    },
    {
      icon: "expertise",
      title: "Rely on Expertise",
      description: "If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way.",
      highlighted: false
    }
  ]

  return (
    <section id="services" ref={ref} className="py-12 sm:py-16 md:py-20 bg-gray-900 border-t border-gray-800 border-b border-gray-800">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          {/* Our Services Tag */}
          <div className="mb-4">
            <span className="inline-block bg-orange-600/20 text-orange-600 font-semibold text-xs uppercase tracking-wide px-4 py-2 rounded-full">
              Our Services
            </span>
          </div>
          
          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 px-4">Our Main Focus</h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }} 
              className="bg-white rounded-lg p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all relative overflow-hidden group"
            >
              {/* Icon with Brushstroke Background */}
              <div className="relative mb-6 flex justify-center">
                <div className="absolute w-24 h-24 bg-orange-600/10 rounded-full blur-xl"></div>
                <div className="relative z-10">
                  {service.icon === 'done-right' && (
                    <div className="relative">
                      <svg className="w-16 h-16 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  )}
                  {service.icon === 'commercial-residential' && (
                    <div className="relative">
                      <svg className="w-16 h-16 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                  )}
                  {service.icon === 'expertise' && (
                    <div className="relative">
                      <svg className="w-16 h-16 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{service.title}</h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-6 text-justify">
                {service.description}
              </p>

              {/* Call to Action - Hidden by default, shown on hover */}
              <div className="absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a 
                  href="#listings" 
                  className="block bg-white rounded-b-lg px-6 py-4 text-center border-b-2 border-orange-600"
                >
                  <span className="inline-flex items-center gap-2 text-orange-600 font-medium">
                    Find A Home
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
