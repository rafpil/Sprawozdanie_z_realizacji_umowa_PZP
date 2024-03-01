import React from 'react'

const FormContainer = ({ children }) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    //data.acquisition = acquisitionChannel;
    console.log(data);
  }

  return (
    // <form onSubmit={handleSubmit} className='flex w-full flex-wrap'>{children}</form>
    <form className='flex w-full flex-wrap'>{children}</form>
  )
}

export default FormContainer