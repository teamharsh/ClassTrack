import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export const Input: React.FC<InputProps> = ({ label, className = '', ...props }) => {
  const inputStyles = 'w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
  const combinedClassName = `${inputStyles} ${className}`

  return (
    <div className="mb-4">
      {label && (
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={props.id}>
          {label}
        </label>
      )}
      <input className={combinedClassName} {...props} />
    </div>
  )
}