import Navbar from './components/navbar'
import Hero from './components/hero'
import About from './components/about'
import Services from './components/services'
import Portfolio from './components/portfolio'
import Contact from './components/contact'
import Footer from './components/footer'

function App() {
  return (
    <div className="bg-[#050508] text-[#f0f0f5] selection:bg-rose-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
