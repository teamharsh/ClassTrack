'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { BookOpen, ArrowLeft, Check, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'

// Mock data for students
const initialStudents = [
  { id: 1, name: 'Alice Johnson', present: false },
  { id: 2, name: 'Bob Smith', present: false },
  { id: 3, name: 'Charlie Brown', present: false },
  { id: 4, name: 'Diana Ross', present: false },
  { id: 5, name: 'Edward Norton', present: false },
]

export default function MarkAttendance() {
  const [students, setStudents] = useState(initialStudents)
  const [date, setDate] = useState(new Date().toISOString().split('T')[0])

  const toggleAttendance = (id: number) => {
    setStudents(prevStudents =>
      prevStudents.map(student =>
        student.id === id ? { ...student, present: !student.present } : student
      )
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the attendance data to your backend
    console.log('Attendance data:', { date, students })
    // Show a success message to the user
    alert('Attendance marked successfully!')
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
          <h1 className="text-2xl font-semibold text-gray-900 mb-6">Mark Attendance</h1>
          <form onSubmit={handleSubmit} className="bg-white shadow-sm rounded-lg p-6">
            <div className="mb-4">
              <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="mt-1 block w-full px-3 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                required
              />
            </div>
            <div className="space-y-4">
              {students.map(student => (
                <div key={student.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                  <span className="text-sm font-medium text-gray-700">{student.name}</span>
                  <Button
                    type="button"
                    onClick={() => toggleAttendance(student.id)}
                    variant={student.present ? 'primary' : 'outline'}
                    size="sm"
                  >
                    {student.present ? (
                      <Check className="w-4 h-4 mr-2" />
                    ) : (
                      <X className="w-4 h-4 mr-2" />
                    )}
                    {student.present ? 'Present' : 'Absent'}
                  </Button>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Button type="submit" className="w-full">
                Submit Attendance
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