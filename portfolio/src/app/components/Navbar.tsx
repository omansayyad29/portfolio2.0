'use client'
// components/Navbar.tsx
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, Sun, Moon, X } from 'lucide-react'
import { useTheme } from '@/hooks/useTheme'

const Navbar = () => {
  const { theme, toggleTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="w-full shadow-sm bg-white dark:bg-gray-900 fixed top-0 z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex flex-row gap-5 items-center text-2xl font-bold text-gray-800 dark:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 448 512"><path fill="currentColor" d="M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35s5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06M404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8M154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72l29.57-113.72h32.58z"/></svg>
            Oman Sayyad
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 font-medium text-gray-700 dark:text-gray-300">
            <a href="#home" className="hover:text-blue-500">Home</a>
            <a href="#about" className="hover:text-blue-500">About</a>
            <a href="#projects" className="hover:text-blue-500">Projects</a>
            <a href="#contact" className="hover:text-blue-500">Contact</a>

          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
           <a href="/Oman_Sayyad_Resume.pdf" download>
             <Button className="bg-green-500 hover:bg-green-600 text-white hidden md:block">
              Resume
            </Button>
           </a>
            <Button className="  md:inline-block bg-gray-700" onClick={toggleTheme}>
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </Button>
            {/* Mobile Menu Toggle */}
            <div className="md:hidden" onClick={toggleMobileMenu}>
              {isOpen ? (
                <X className="w-6 h-6 text-gray-800 dark:text-white" />
              ) : (
                <Menu className="w-6 h-6 text-gray-800 dark:text-white" />
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 space-y-2 font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900 p-4 rounded shadow-md">
            <a href="#home" className="block hover:text-blue-500" onClick={toggleMobileMenu}>Home</a>
            <a href="#about" className="block hover:text-blue-500" onClick={toggleMobileMenu}>About</a>
            <a href="#projects" className="block hover:text-blue-500" onClick={toggleMobileMenu}>Projects</a>
            <a href="#contact" className="block hover:text-blue-500" onClick={toggleMobileMenu}>Contact</a>
            <a href="/Oman_Sayyad_Resume.pdf" download className="block hover:text-blue-500" onClick={toggleMobileMenu}>Resume</a>

             <a href="/Oman_Sayyad_Resume.pdf" download onClick={toggleMobileMenu}>
             <Button className="bg-green-500 hover:bg-green-600  text-white ">
              Resume
            </Button>
           </a>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
