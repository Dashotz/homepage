import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

function FeaturedProperties() {
  const [currentPage, setCurrentPage] = useState(0)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)
  const minSwipeDistance = 50

  const onTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    if (isLeftSwipe) {
      setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0))
    }
    if (isRightSwipe) {
      setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1))
    }
  }

  const propertiesPerPage = 4

  const allProperties = [
    {
      id: 1,
      image: "/images/bg.webp",
      title: "Beautiful Flat in Manhattan",
      location: "Belmont Gardens, Chicago",
      price: "$34,900/Month",
      beds: 3,
      baths: 2,
      sqft: "3450",
      photos: 4,
      status: "FOR RENT",
      statusColor: "green",
      description: "Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood"
    },
    {
      id: 2,
      image: "/images/img.webp",
      title: "New Apartment Nice View",
      location: "Belmont Gardens, Chicago",
      price: "$34,900/Month",
      beds: 3,
      baths: 2,
      sqft: "3450",
      photos: 4,
      status: "FOR RENT",
      statusColor: "green",
      description: "Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood"
    },
    {
      id: 3,
      image: "/images/img1.webp",
      title: "Modern Apartments",
      location: "Belmont Gardens, Chicago",
      price: "$34,900/Month",
      beds: 3,
      baths: 2,
      sqft: "3450",
      photos: 4,
      status: "FOR SALE",
      statusColor: "orange",
      description: "Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood"
    },
    {
      id: 4,
      image: "/images/bg.webp",
      title: "Comfortable Apartment",
      location: "Belmont Gardens, Chicago",
      price: "$34,900/Month",
      beds: 3,
      baths: 2,
      sqft: "3450",
      photos: 4,
      status: "FOR RENT",
      statusColor: "green",
      description: "Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood"
    },
    {
      id: 5,
      image: "/images/img.webp",
      title: "Luxury Penthouse Suite",
      location: "Belmont Gardens, Chicago",
      price: "$45,000/Month",
      beds: 4,
      baths: 3,
      sqft: "4200",
      photos: 6,
      status: "FOR RENT",
      statusColor: "green",
      description: "Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood"
    },
    {
      id: 6,
      image: "/images/img1.webp",
      title: "Spacious Family Home",
      location: "Belmont Gardens, Chicago",
      price: "$28,500/Month",
      beds: 5,
      baths: 4,
      sqft: "5000",
      photos: 8,
      status: "FOR SALE",
      statusColor: "orange",
      description: "Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood"
    },
    {
      id: 7,
      image: "/images/bg.webp",
      title: "Cozy Studio Apartment",
      location: "Belmont Gardens, Chicago",
      price: "$18,900/Month",
      beds: 1,
      baths: 1,
      sqft: "1200",
      photos: 3,
      status: "FOR RENT",
      statusColor: "green",
      description: "Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood"
    },
    {
      id: 8,
      image: "/images/img.webp",
      title: "Elegant Townhouse",
      location: "Belmont Gardens, Chicago",
      price: "$39,900/Month",
      beds: 3,
      baths: 2,
      sqft: "3600",
      photos: 5,
      status: "FOR RENT",
      statusColor: "green",
      description: "Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood"
    },
    {
      id: 9,
      image: "/images/img1.webp",
      title: "Modern Loft Space",
      location: "Belmont Gardens, Chicago",
      price: "$32,000/Month",
      beds: 2,
      baths: 2,
      sqft: "2800",
      photos: 4,
      status: "FOR SALE",
      statusColor: "orange",
      description: "Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood"
    },
    {
      id: 10,
      image: "/images/bg.webp",
      title: "Classic Victorian Home",
      location: "Belmont Gardens, Chicago",
      price: "$42,500/Month",
      beds: 4,
      baths: 3,
      sqft: "3800",
      photos: 7,
      status: "FOR RENT",
      statusColor: "green",
      description: "Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood"
    },
    {
      id: 11,
      image: "/images/img.webp",
      title: "Contemporary Condo",
      location: "Belmont Gardens, Chicago",
      price: "$26,900/Month",
      beds: 2,
      baths: 2,
      sqft: "2400",
      photos: 4,
      status: "FOR RENT",
      statusColor: "green",
      description: "Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood"
    },
    {
      id: 12,
      image: "/images/img1.webp",
      title: "Beachfront Property",
      location: "Belmont Gardens, Chicago",
      price: "$55,000/Month",
      beds: 5,
      baths: 4,
      sqft: "5200",
      photos: 10,
      status: "FOR SALE",
      statusColor: "orange",
      description: "Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood"
    },
    {
      id: 13,
      image: "/images/bg.webp",
      title: "Urban Apartment",
      location: "Belmont Gardens, Chicago",
      price: "$22,900/Month",
      beds: 2,
      baths: 1,
      sqft: "1800",
      photos: 3,
      status: "FOR RENT",
      statusColor: "green",
      description: "Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood"
    },
    {
      id: 14,
      image: "/images/img.webp",
      title: "Mountain View Estate",
      location: "Belmont Gardens, Chicago",
      price: "$48,900/Month",
      beds: 6,
      baths: 5,
      sqft: "6000",
      photos: 12,
      status: "FOR SALE",
      statusColor: "orange",
      description: "Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood"
    },
    {
      id: 15,
      image: "/images/img1.webp",
      title: "Downtown Loft",
      location: "Belmont Gardens, Chicago",
      price: "$29,900/Month",
      beds: 1,
      baths: 1,
      sqft: "1500",
      photos: 4,
      status: "FOR RENT",
      statusColor: "green",
      description: "Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood"
    },
    {
      id: 16,
      image: "/images/bg.webp",
      title: "Garden Villa",
      location: "Belmont Gardens, Chicago",
      price: "$36,500/Month",
      beds: 3,
      baths: 3,
      sqft: "3400",
      photos: 6,
      status: "FOR RENT",
      statusColor: "green",
      description: "Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood"
    },
    {
      id: 17,
      image: "/images/img.webp",
      title: "Riverside Apartment",
      location: "Belmont Gardens, Chicago",
      price: "$31,900/Month",
      beds: 2,
      baths: 2,
      sqft: "2600",
      photos: 5,
      status: "FOR SALE",
      statusColor: "orange",
      description: "Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood"
    },
    {
      id: 18,
      image: "/images/img1.webp",
      title: "Suburban Family Home",
      location: "Belmont Gardens, Chicago",
      price: "$38,900/Month",
      beds: 4,
      baths: 3,
      sqft: "4000",
      photos: 7,
      status: "FOR RENT",
      statusColor: "green",
      description: "Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood"
    },
    {
      id: 19,
      image: "/images/bg.webp",
      title: "Executive Penthouse",
      location: "Belmont Gardens, Chicago",
      price: "$52,000/Month",
      beds: 4,
      baths: 4,
      sqft: "4800",
      photos: 9,
      status: "FOR SALE",
      statusColor: "orange",
      description: "Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood"
    },
    {
      id: 20,
      image: "/images/img.webp",
      title: "Charming Cottage",
      location: "Belmont Gardens, Chicago",
      price: "$24,900/Month",
      beds: 2,
      baths: 1,
      sqft: "2000",
      photos: 4,
      status: "FOR RENT",
      statusColor: "green",
      description: "Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood"
    }
  ]

  const totalPages = Math.ceil(allProperties.length / propertiesPerPage)
  const startIndex = currentPage * propertiesPerPage
  const endIndex = startIndex + propertiesPerPage
  const properties = allProperties.slice(startIndex, endIndex)

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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="listings" ref={ref} className="py-12 sm:py-16 md:py-20 bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Listings</h2>
        </motion.div>

        {/* Property Cards with Navigation Arrows */}
        <div className="relative">
          {/* Left Arrow - Hidden on mobile */}
          <button
            onClick={() => setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1))}
            className="hidden xl:flex absolute left-0 sm:-left-6 xl:-left-8 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 xl:w-12 xl:h-12 bg-white rounded-full shadow-lg items-center justify-center hover:bg-gray-100 transition-colors"
            aria-label="Previous page"
          >
            <svg className="w-5 h-5 xl:w-6 xl:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow - Hidden on mobile */}
          <button
            onClick={() => setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0))}
            className="hidden xl:flex absolute right-0 sm:-right-6 xl:-right-8 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 xl:w-12 xl:h-12 bg-white rounded-full shadow-lg items-center justify-center hover:bg-gray-100 transition-colors"
            aria-label="Next page"
          >
            <svg className="w-5 h-5 xl:w-6 xl:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <motion.div
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            key={currentPage}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 mb-8"
          >
            {properties.map((property) => (
              <motion.div
                key={property.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-64 object-cover"
                  />

                  {/* Status Tag */}
                  <div className={`absolute top-4 right-4 text-white px-3 py-1 rounded text-sm font-semibold ${property.statusColor === 'green' ? 'bg-green-600' : 'bg-orange-600'
                    }`}>
                    {property.status}
                  </div>

                  {/* Image Overlays - Bottom (3 Columns) */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 whitespace-nowrap">
                    <div className="flex-[3] bg-white/90 backdrop-blur-sm px-3 py-2.5 rounded-lg flex items-center gap-2 min-w-0">
                      <svg className="w-4 h-4 text-gray-700 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-sm text-gray-700 font-medium truncate">{property.location}</span>
                    </div>
                    <div className="flex-none bg-white/90 backdrop-blur-sm px-3 py-2.5 rounded-lg flex items-center gap-2">
                      <svg className="w-4 h-4 text-gray-700 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 9v11a1 1 0 01-1 1h-2a1 1 0 01-1-1v-4H8v4a1 1 0 01-1 1H5a1 1 0 01-1-1V9M4 9h16M4 9V7a2 2 0 012-2h12a2 2 0 012 2v2M4 9h16" />
                      </svg>
                      <span className="text-sm text-gray-700 font-medium">{property.beds}</span>
                    </div>
                    <div className="flex-none bg-white/90 backdrop-blur-sm px-3 py-2.5 rounded-lg flex items-center gap-2">
                      <svg className="w-4 h-4 text-gray-700 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-sm text-gray-700 font-medium">{property.photos}</span>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Price */}
                  <div className="text-red-600 font-bold text-xl mb-3">
                    {property.price}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{property.title}</h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {property.description}
                  </p>

                  {/* Property Details */}
                  <div className="grid grid-cols-3 gap-4 mb-4 pb-4 border-b border-gray-200">
                    <div className="flex flex-col items-center">
                      <svg className="w-6 h-6 text-orange-600 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 9v11a1 1 0 01-1 1h-2a1 1 0 01-1-1v-4H8v4a1 1 0 01-1 1H5a1 1 0 01-1-1V9M4 9h16M4 9V7a2 2 0 012-2h12a2 2 0 012 2v2M4 9h16" />
                      </svg>
                      <span className="text-xs text-gray-600 text-center">{property.beds} Bedrooms</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <svg className="w-6 h-6 text-orange-600 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                      <span className="text-xs text-gray-600 text-center">{property.baths} Bathrooms</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <svg className="w-6 h-6 text-orange-600 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                      </svg>
                      <span className="text-xs text-gray-600 text-center">{property.sqft} square Ft</span>
                    </div>
                  </div>

                  {/* Agent Information */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden">
                        <img
                          src="/images/people.webp"
                          alt="Marci"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="text-gray-900 font-semibold">Marci Metzger</div>
                        <div className="text-gray-500 text-sm">Estate Agents</div>
                      </div>
                    </div>

                    {/* Action Icons */}
                    <div className="flex items-center gap-2">
                      <button className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </button>
                      <button className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
                      <button className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-2 h-2 rounded-full transition-colors ${currentPage === index ? 'bg-orange-600' : 'bg-gray-600 hover:bg-gray-500'
                }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProperties
