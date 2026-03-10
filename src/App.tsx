import { useState, useEffect } from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import About from './components/about'
import Services from './components/services'
import Portfolio from './components/portfolio'
import Contact from './components/contact'
import Footer from './components/footer'

function App() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    // Check if we should use light mode
    if (savedTheme === 'light' || (!savedTheme && !prefersDark)) {
      setIsDark(false)
      document.documentElement.classList.remove('dark')
    } else {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleTheme = () => {
    const newDark = !isDark
    setIsDark(newDark)
    if (newDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <div className="min-h-screen selection:bg-rose-500 selection:text-white transition-colors duration-300">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer isDark={isDark} />
    </div>
  )
}

export default App
