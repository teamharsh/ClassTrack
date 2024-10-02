'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { BookOpen, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'

export default function CreateFolder() {
  const [folderData, setFolderData] = useState({
    title: '',
    branch: '',
    semester: '',
    year: new Date().getFullYear(),
    description: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFolderData(prevData => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the folder data to your backend
    console.log('New folder data:', folderData)
    // Show a success message to the user
    alert('Folder created successfully!')
    // Redirect to the dashboard or clear the form
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
          <h1 className="text-2xl font-semibold text-gray-900 mb-6">Create New Class</h1>
          <form onSubmit={handleSubmit} className="bg-white shadow-sm rounded-lg p-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                  Class Title
                </label>
                <Input
                  type="text"
                  id="title"
                  name="title"
                  value={folderData.title}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="branch" className="block text-sm font-medium text-gray-700">
                  Branch
                </label>
                <select
                  id="branch"
                  name="branch"
                  value={folderData.branch}
                  onChange={handleInputChange}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                  required
                >
                  <option value="">Select a branch</option>
                  <option value="Computer Science">Computer Science</option>
                  <option value="Information Technology">Information Technology</option>
                  <option value="Electrical Engineering">Electrical Engineering</option>
                  <option value="Mechanical Engineering">Mechanical Engineering</option>
                </select>
              </div>
              <div>
                <label htmlFor="semester" className="block text-sm font-medium text-gray-700">
                  Semester
                </label>
                <select
                  id="semester"
                  name="semester"
                  value={folderData.semester}
                  onChange={handleInputChange}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                  required
                >
                  <option value="">Select a semester</option>
                  <option value="Fall">Fall</option>
                  <option value="Spring">Spring</option>
                  <option value="Summer">Summer</option>
                </select>
              </div>
              <div>
                <label htmlFor="year" className="block text-sm font-medium text-gray-700">
                  Year
                </label>
                <Input
                  type="number"
                  id="year"
                  name="year"
                  value={folderData.year}
                  onChange={handleInputChange}
                  min={2000}
                  max={2100}
                  required
                />
              </div>
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Description (Optional)
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={3}
                  value={folderData.description}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                ></textarea>
              </div>
            </div>
            <div className="mt-6">
              <Button type="submit" className="w-full">
                Create Class
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