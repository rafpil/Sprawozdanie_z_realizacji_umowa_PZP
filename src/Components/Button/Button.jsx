import React from 'react'
import { generate } from '../WordExport/WordExport';

const Button = ({onClick, dane}) => {
  return (
    <button onClick={(event) => {event.preventDefault(); console.log(onClick) }} className="p-3 cursor-pointer flex border border-primary-dark w-full justify-center hover:bg-success hover:text-primary transition-colors duration-300">
    Generuj plik word
    </button>
  )
}

export default Button