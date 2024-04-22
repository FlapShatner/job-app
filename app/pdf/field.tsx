import React from 'react'
type FieldProps = {
  children: React.ReactNode
}

const Field = ({ children }: FieldProps) => {
  return (
    <p className="text-blue-700">
      {children}
    </p>
  )
}

export default Field
