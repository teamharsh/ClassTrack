'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { BookOpen, ArrowLeft, Download } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import OverallAttendance from '@/components/OverallAttendance'

interface AttendanceRecord {
  id: number
  folderId: number
  date: string
  name: string
  present: boolean
}

export default function AttendanceSummary() {
  const [attendanceData, setAttendanceData] = useState<AttendanceRecord[]>([])
  const [selectedDate, setSelectedDate] = useState<string>('')
  const [filteredAttendanceData, setFilteredAttendanceData] = useState<AttendanceRecord[]>([])
  const searchParams = useSearchParams()
  const folderId = searchParams.get('id')

  useEffect(() => {
    const savedAttendanceData: AttendanceRecord[] = JSON.parse(localStorage.getItem('attendanceData') || '[]')
    const filteredData = savedAttendanceData.filter((record) => record.folderId === parseInt(folderId || '0'))
    setAttendanceData(filteredData.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()))
  }, [folderId])

  useEffect(() => {
    if (selectedDate) {
      const filteredData = attendanceData.filter((record) => record.date === selectedDate)
      setFilteredAttendanceData(filteredData)
    } else {
      setFilteredAttendanceData([])
    }
  }, [selectedDate, attendanceData])

  const handleDownload = () => {
    console.log('Downloading attendance report...')
    alert('Attendance report download started!')
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
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold text-gray-900">Attendance Summary</h1>
            <Button onClick={handleDownload}>
              <Download className="w-4 h-4 mr-2" />
              Download Report
            </Button>
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">
              Select Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="mt-1 block w-full px-3 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
            />
          </div>
          {selectedDate ? (
            <div className="bg-white shadow-sm rounded-lg overflow-hidden">
              {filteredAttendanceData.length > 0 ? (
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredAttendanceData.map((record) => (
                      <tr key={`${record.id}-${record.date}`}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {record.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {record.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            record.present ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                          }`}>
                            {record.present ? 'Present' : 'Absent'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="px-6 py-4 text-sm text-gray-500">
                  No class taken on this date.
                </div>
              )}
            </div>
          ) : null}
          <OverallAttendance attendanceData={attendanceData} />
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