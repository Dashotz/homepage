import Header from './components/Header'
import Hero from './components/Hero'
import FeaturedProperties from './components/FeaturedProperties'
import GetItSold from './components/GetItSold'
import Services from './components/Services'
import About from './components/About'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import CircularGallery from './components/CircularGallery'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <GetItSold />
        <FeaturedProperties />
        <section className="h-[600px] relative bg-gray-900 border-t border-gray-800">
          <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} />
        </section>
        <Services />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

export default App
