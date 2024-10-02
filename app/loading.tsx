import { BookOpen } from 'lucide-react'

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="text-center">
        <div className="flex items-center justify-center mb-4">
          <BookOpen className="h-12 w-12 text-blue-600" />
          <span className="ml-2 text-3xl font-bold text-gray-900">ClassTrack</span>
        </div>
        <div className="mb-4">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
        <p className="text-gray-600 text-lg">Loading your dashboard...</p>
      </div>
    </div>
  )
}