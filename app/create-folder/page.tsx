'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { BookOpen, ArrowLeft, Plus, Trash } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

interface Student {
  name: string;
  rollNumber: string;
}

interface FolderData {
  title: string;
  branch: string;
  semester: string;
  year: number;
  description: string;
  students: Student[];
}

export default function CreateFolder() {
  const [folderData, setFolderData] = useState<FolderData>({
    title: '',
    branch: '',
    semester: '',
    year: new Date().getFullYear(),
    description: '',
    students: []
  });
  const [studentName, setStudentName] = useState<string>('');
  const [studentRollNumber, setStudentRollNumber] = useState<string>('');
  const router = useRouter();
  const searchParams = useSearchParams();
  const folderId = searchParams.get('id');

  useEffect(() => {
    if (folderId) {
      const existingFolders: FolderData[] = JSON.parse(localStorage.getItem('folders') || '[]');
      const folder = existingFolders.find((f) => f.id === parseInt(folderId));
      if (folder) {
        setFolderData(folder);
      }
    }
  }, [folderId]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFolderData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleStudentNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStudentName(e.target.value);
  };

  const handleStudentRollNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStudentRollNumber(e.target.value);
  };

  const addStudent = () => {
    if (studentName.trim() !== '' && studentRollNumber.trim() !== '') {
      setFolderData(prevData => ({
        ...prevData,
        students: [...prevData.students, { name: studentName.trim(), rollNumber: studentRollNumber.trim() }]
      }));
      setStudentName('');
      setStudentRollNumber('');
    }
  };

  const removeStudent = (index: number) => {
    setFolderData(prevData => ({
      ...prevData,
      students: prevData.students.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const existingFolders: FolderData[] = JSON.parse(localStorage.getItem('folders') || '[]');
    if (folderId) {
      const updatedFolders = existingFolders.map((f) =>
        f.id === parseInt(folderId) ? folderData : f
      );
      localStorage.setItem('folders', JSON.stringify(updatedFolders));
    } else {
      const newFolder = { ...folderData, id: existingFolders.length + 1 };
      localStorage.setItem('folders', JSON.stringify([...existingFolders, newFolder]));
    }
    alert('Folder saved successfully!');
    router.push('/dashboard');
  };

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
          <h1 className="text-2xl font-semibold text-gray-900 mb-6">{folderId ? 'Edit Class' : 'Create New Class'}</h1>
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
                  <option value="Electronics and Communication Engineering">Electronics and Communication Engineering</option>
                  <option value="Civil Engineering">Civil Engineering</option>
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
                  <option value="1">Semester 1</option>
                  <option value="2">Semester 2</option>
                  <option value="3">Semester 3</option>
                  <option value="4">Semester 4</option>
                  <option value="5">Semester 5</option>
                  <option value="6">Semester 6</option>
                  <option value="7">Semester 7</option>
                  <option value="8">Semester 8</option>
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
                <div>
                  <label htmlFor="students" className="block text-sm font-medium text-gray-700">
                    Students
                  </label>
                  <div className="flex space-x-2">
                    <Input
                      type="text"
                      id="studentRollNumber"
                      name="studentRollNumber"
                      value={studentRollNumber}
                      onChange={handleStudentRollNumberChange}
                      placeholder="Enter roll number"
                      className="flex-1"
                    />
                    <Input
                      type="text"
                      id="studentName"
                      name="studentName"
                      value={studentName}
                      onChange={handleStudentNameChange}
                      placeholder="Enter student name"
                      className="flex-1"
                    />
                    <Button className="h-10" type="button" onClick={addStudent}>
                      <Plus className="w-5 h-5" />
                    </Button>
                  </div>
                  <ul className="mt-2 space-y-2">
                    {folderData.students
                      .sort((a, b) => a.rollNumber.localeCompare(b.rollNumber))
                      .map((student, index) => (
                        <li key={index} className="flex justify-between items-center bg-gray-100 p-2 rounded-md">
                          <span>{student.rollNumber} - {student.name}</span>
                          <Button type="button" variant="outline" size="sm" onClick={() => removeStudent(index)}>
                            <Trash className="w-4 h-4" />
                          </Button>
                        </li>
                      ))}
                  </ul>
                </div>
            </div>
            <div className="mt-6">
              <Button type="submit" className="w-full">
                {folderId ? 'Save Changes' : 'Create Class'}
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
  );
}