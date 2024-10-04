'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { BookOpen, Search, Settings, LogOut, User, Plus, Eye, Edit3 } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export default function Dashboard() {
  const [folders, setFolders] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [branchFilter, setBranchFilter] = useState('')
  const [semesterFilter, setSemesterFilter] = useState('')
  const [yearFilter, setYearFilter] = useState('')

  useEffect(() => {
    const savedFolders = JSON.parse(localStorage.getItem('folders') || '[]')
    setFolders(savedFolders)
  }, [])

  const filteredFolders = folders.filter(
    (folder) =>
      folder.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (branchFilter === '' || folder.branch === branchFilter) &&
      (semesterFilter === '' || folder.semester === semesterFilter) &&
      (yearFilter === '' || folder.year.toString() === yearFilter)
  )

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center space-x-2">
            <BookOpen className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">ClassTrack</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Link href="/profile" className="text-gray-500 hover:text-gray-700">
              <User className="w-6 h-6" />
            </Link>
            <Link href="/settings" className="text-gray-500 hover:text-gray-700">
              <Settings className="w-6 h-6" />
            </Link>
            <Link href="/logout" className="text-gray-500 hover:text-gray-700">
              <LogOut className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">My Classes</h1>
          <Link href="/create-folder">
            <Button>
              <Plus className="w-5 h-5 mr-2" />
              New Class
            </Button>
          </Link>
        </div>

        <div className="mb-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="flex-grow">
            <div className="relative">
              <input
                type="text"
                placeholder="Search classes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>
          <select
            value={branchFilter}
            onChange={(e) => setBranchFilter(e.target.value)}
            className="block w-full sm:w-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">All Branches</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Artificial Intelligence">Artificial Intelligence</option>
            <option value="Information Technology">Information Technology</option>
            <option value="Electronics and Communication">Electronics and Communication</option>
            <option value="Electrical Engineering">Electrical Engineering</option>
            <option value="Civil Engineering">Civil Engineering</option>
          </select>
          <select
            value={semesterFilter}
            onChange={(e) => setSemesterFilter(e.target.value)}
            className="block w-full sm:w-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">All Semesters</option>
            <option value="1">1st Semester</option>
            <option value="2">2nd Semester</option>
            <option value="3">3rd Semester</option>
            <option value="4">4th Semester</option>
            <option value="5">5th Semester</option>
            <option value="6">6th Semester</option>
            <option value="7">7th Semester</option>
            <option value="8">8th Semester</option>
          </select>
          <select
            value={yearFilter}
            onChange={(e) => setYearFilter(e.target.value)}
            className="block w-full sm:w-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">All Years</option>
            <option value="2025">2025</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFolders.map((folder) => (
            <div key={folder.id} className="bg-white shadow-sm rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{folder.title}</h2>
              <p className="text-sm text-gray-500 mb-4">{folder.description}</p>
                <div className="flex space-x-4">
                <Link href={`/mark-attendance?id=${folder.id}`}>
                  <Button variant="primary">
                  <Eye className="w-4 h-4 mr-2" />
                  Mark Attendance
                  </Button>
                </Link>
                <Link href={`/create-folder?id=${folder.id}`}>
                  <Button variant="primary">
                  <Edit3 className="w-4 h-4 mr-2" />
                  Edit Class
                  </Button>
                </Link>
                <Link href={`/attendance-summary?id=${folder.id}`}>
                  <Button variant="outline">
                  <Eye className="w-4 h-4 mr-2" />
                  View Summary
                  </Button>
                </Link>
                </div>
            </div>
          ))}
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