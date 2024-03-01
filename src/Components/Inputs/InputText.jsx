import React from 'react'
import './Inputs.css'

const InputText = ({ id, name, value, onChange}) => {
  return (
    <input id={id} type='text' name={name} onChange={onChange} value={value} className='input' />
  )
}

export default InputText