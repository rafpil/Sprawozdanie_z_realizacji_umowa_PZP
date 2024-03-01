import React from 'react'
import './Inputs.css'

const InputDate = ({ id, name, value, onChange}) => {
  return (
    <input id={id} type='date' name={name} onChange={onChange} value={value} className='input' />
  )
}

export default InputDate