import React from 'react'

export default function OverallAttendance({ attendanceData }) {
  const calculateOverallAttendance = () => {
    const studentAttendance = {}
    attendanceData.forEach(record => {
      if (!studentAttendance[record.name]) {
        studentAttendance[record.name] = { name: record.name, total: 0, present: 0 }
      }
      studentAttendance[record.name].total += 1
      if (record.present) {
        studentAttendance[record.name].present += 1
      }
    })
    return Object.values(studentAttendance).map(student => ({
      ...student,
      percentage: ((student.present / student.total) * 100).toFixed(2)
    }))
  }

  const overallAttendance = calculateOverallAttendance()

  return (
    <div className="mt-8 bg-white shadow-sm rounded-lg overflow-hidden">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Overall Attendance</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Total Classes
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Classes Attended
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Attendance %
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {overallAttendance.map((student) => (
            <tr key={student.name}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {student.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {student.total}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {student.present}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  student.percentage >= 75 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {student.percentage}%
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}