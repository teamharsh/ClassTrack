'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { BookOpen, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export default function Settings() {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    darkMode: false,
    language: 'english'
  })

  const handleToggle = (setting: keyof typeof settings) => {
    setSettings(prevSettings => ({ ...prevSettings, [setting]: !prevSettings[setting] }))
  }

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSettings(prevSettings => ({ ...prevSettings, language: e.target.value }))
  }

  const handleSave = () => {
    // Here you would typically send the updated settings to your backend
    console.log('Updated settings:', settings)
    // Show a success message to the user
    alert('Settings saved successfully!')
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
          <h1 className="text-2xl font-semibold text-gray-900 mb-6">Settings</h1>
          <div className="bg-white shadow-sm rounded-lg p-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Email Notifications</span>
                <button
                  type="button"
                  className={`${
                    settings.emailNotifications ? 'bg-blue-600' : 'bg-gray-200'
                  } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
                  onClick={() => handleToggle('emailNotifications')}
                >
                  <span
                    className={`${
                      settings.emailNotifications ? 'translate-x-5' : 'translate-x-0'
                    } inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
                  />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Dark Mode</span>
                <button
                  type="button"
                  className={`${
                    settings.darkMode ? 'bg-blue-600' : 'bg-gray-200'
                  } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
                  onClick={() => handleToggle('darkMode')}
                >
                  <span
                    className={`${
                      settings.darkMode ? 'translate-x-5' : 'translate-x-0'
                    } inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
                  />
                </button>
              </div>
              <div>
                <label htmlFor="language" className="block text-sm font-medium text-gray-700">
                  Language
                </label>
                <select
                  id="language"
                  name="language"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                  value={settings.language}
                  onChange={handleLanguageChange}
                >
                  <option value="english">English</option>
                  <option value="spanish">Spanish</option>
                  <option value="french">French</option>
                </select>
              </div>
            </div>
            <div className="mt-6">
              <Button onClick={handleSave} className="w-full">
                Save Settings
              </Button>
            </div>
          </div>
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