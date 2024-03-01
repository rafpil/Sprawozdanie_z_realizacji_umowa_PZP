import React from 'react'

const InputButton = ({ id, value, label, nameGroup }) => {
  return (
    <fieldset className="flex w-1/2 min-w-1/2 flex-nowrap">
      <input id={id} type="radio" value={value} name={nameGroup} className="hidden peer w-full" />
      <label htmlFor={id} className="p-3 peer-checked:bg-primary-dark peer-checked:text-primary cursor-pointer flex border border-primary-dark w-full justify-center hover:bg-success hover:text-primary transition-colors duration-300">{label}</label>
    </fieldset>
  )
}

export default InputButton