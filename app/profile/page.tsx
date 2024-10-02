'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { BookOpen, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'

export default function Profile() {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    institution: 'Example University',
    department: 'Computer Science'
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUser(prevUser => ({ ...prevUser, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the updated user data to your backend
    console.log('Updated user data:', user)
    // Show a success message to the user
    alert('Profile updated successfully!')
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center space-x-2">
            <BookOpen className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">ClassTrack</span>
          </Link>
          <Link href="/dashboard" className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Dashboard
          </Link>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-semibold text-gray-900 mb-6">Profile Settings</h1>
          <form onSubmit={handleSubmit} className="bg-white shadow-sm rounded-lg p-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={user.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={user.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="institution" className="block text-sm font-medium text-gray-700">
                  Institution
                </label>
                <Input
                  type="text"
                  id="institution"
                  name="institution"
                  value={user.institution}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="department" className="block text-sm font-medium text-gray-700">
                  Department
                </label>
                <Input
                  type="text"
                  id="department"
                  name="department"
                  value={user.department}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="mt-6">
              <Button type="submit" className="w-full">
                Save Changes
              </Button>
            </div>
          </form>
        </div>
      </main>

      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <p className="text-sm text-gray-500">&copy; 2023 ClassTrack. All rights reserved.</p>
          <div className="flex space-x-4">
            <Link href="/support" className="text-sm text-gray-500 hover:text-gray-700">Support</Link>
            <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-700">Terms</Link>
            <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-700">Privacy</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}