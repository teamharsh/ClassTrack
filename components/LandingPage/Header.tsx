'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/Button'
import { BookOpen, Menu, X } from "lucide-react"
import Link from "next/link"

export default function HeaderSection() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
  
    const toggleMobileMenu = () => {
      setMobileMenuOpen(!mobileMenuOpen)
    }
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setIsScrolled(true)
        } else {
          setIsScrolled(false)
        }
      }
  
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }, [])
  
    return (
        <>
          <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
              isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-white'
            }`}>
              <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                  <BookOpen className="w-8 h-8 text-blue-600" />
                  <span className="text-xl font-bold">ClassTrack</span>
                </Link>
                <nav className="hidden md:flex space-x-4">
                  <Link href="/" className="text-sm font-medium hover:text-blue-600">
                    Home
                  </Link>
                  <Link href="#features" className="text-sm font-medium hover:text-blue-600">
                    Features
                  </Link>
                  <Link href="#contact" className="text-sm font-medium hover:text-blue-600">
                    Contact
                  </Link>
                  <Link href="/signin" className="text-sm font-medium hover:text-blue-600">
                    Sign In
                  </Link>
                </nav>
                <Button variant="outline" className="md:hidden" onClick={toggleMobileMenu}>
                  {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </Button>
              </div>
            </header>
      
            {/* Mobile menu */}
            {mobileMenuOpen && (
              <div className="fixed inset-0 z-40 bg-white md:hidden">
                <div className="container mx-auto px-6 py-4 flex justify-end">
                  <Button variant="outline" onClick={toggleMobileMenu}>
                    <X size={24} />
                  </Button>
                </div>
                <nav className="flex flex-col items-center space-y-4 mt-16">
                  <Link href="/" className="text-lg font-medium hover:text-blue-600" onClick={toggleMobileMenu}>
                    Home
                  </Link>
                  <Link href="#features" className="text-lg font-medium hover:text-blue-600" onClick={toggleMobileMenu}>
                    Features
                  </Link>
                  <Link href="#contact" className="text-lg font-medium hover:text-blue-600" onClick={toggleMobileMenu}>
                    Contact
                  </Link>
                  <Link href="/signin" className="text-lg font-medium hover:text-blue-600" onClick={toggleMobileMenu}>
                    Sign In
                  </Link>
                </nav>
              </div>
            )}
        </>
    );
}