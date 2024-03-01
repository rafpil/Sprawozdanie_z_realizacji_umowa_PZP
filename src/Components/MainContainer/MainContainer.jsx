import React from 'react'

const MainContainer = ({ children }) => {
  return (
    <main className='flex justify-center w-1/2 flex-wrap'>{children}</main>
  )
}

export default MainContainer