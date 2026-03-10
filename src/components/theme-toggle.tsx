import { Sun, Moon } from 'lucide-react'
import { motion } from 'motion/react'

interface ThemeToggleProps {
  isDark: boolean
  toggleTheme: () => void
}

export default function ThemeToggle({ isDark, toggleTheme }: ThemeToggleProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="p-2.5 rounded-xl glass border border-black/10 dark:border-white/10 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-rose-500 transition-all font-bold"
      aria-label="Toggle Theme">
      {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5 text-gray-700" />}
    </motion.button>
  )
}
