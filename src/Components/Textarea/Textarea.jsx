import React from 'react'

const Textarea = ({ id, name, value, onChange, rows = 2 }) => {
  return (
    <textarea id={id} name={name} rows={rows} onChange={onChange} value={value} className="w-full bg-transparent border-b border-primary-dark focus-visible:outline-none focus-visible:border-b focus-visible:border-success transition-colors duration-300" />
  )
}

export default Textarea