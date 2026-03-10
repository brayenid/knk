import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X } from 'lucide-react'
import data from '@/data/base.json'
import ThemeToggle from './theme-toggle'

interface NavbarProps {
  isDark: boolean
  toggleTheme: () => void
}

export default function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Prevent body scroll when mobile nav is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    setTimeout(() => {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 300)
  }

  // Determine logo based on theme
  const logoSrc = isDark ? '/knk.png' : '/knk2.png'

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container-sm flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3">
            <img src={logoSrc} alt={data.site.name} className="h-10 w-auto transition-all duration-300" />
            {/* <span className="font-display font-bold text-lg hidden sm:block text-white">{data.site.fullName}</span> */}
          </motion.a>

          {/* Nav Actions */}
          <div className="flex items-center gap-6">
            {/* Desktop Nav */}
            <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="hidden md:flex items-center gap-1">
              {data.nav.map((item, i) => (
                <li key={i}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(item.href)
                    }}
                    className="px-4 py-2 rounded-full text-sm font-medium text-gray-500 dark:text-gray-300 hover:text-rose-500 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-200">
                    {item.label}
                  </a>
                </li>
              ))}
            </motion.ul>

            <div className="flex items-center gap-3">
              <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />

              {/* CTA Button (desktop) */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="hidden md:block">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick('#contact')
                  }}
                  className="btn-primary text-sm px-5 py-2.5">
                  Hubungi Kami
                </a>
              </motion.div>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2 rounded-xl text-gray-500 dark:text-gray-300 hover:text-rose-500 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-all"
                aria-label="Toggle navigation">
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}>
            <motion.img
              src={logoSrc}
              alt={data.site.name}
              className="h-16 mb-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 }}
            />
            {data.nav.map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.href)
                }}
                className="font-display text-3xl font-bold text-slate-800 dark:text-white hover:text-rose-500 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08 }}>
                {item.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                handleScroll('#contact')
                setMobileOpen(false)
              }}
              className="btn-primary mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}>
              Hubungi Kami
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function handleScroll(href: string) {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
