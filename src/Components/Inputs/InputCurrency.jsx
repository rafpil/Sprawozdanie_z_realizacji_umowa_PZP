import React from 'react'
import './Inputs.css'

const InputCurrency = ({ id, name, value, onChange }) => {
  return (
    <input id={id} type='number' name={name} onChange={onChange} value={value} className='input' />
  )
}

export default InputCurrency