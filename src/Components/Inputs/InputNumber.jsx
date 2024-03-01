import React from 'react'
import './Inputs.css'

const InputNumber = ({ id, refs , zmienIlosc}) => {
  return (
    <input id={id} type='number' ref={refs} onChange={() => {console.log(refs.current.value), zmienIlosc(refs.current.value)}} className='input' />
  )
}

export default InputNumber