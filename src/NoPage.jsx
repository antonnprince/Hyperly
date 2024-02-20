import React from 'react'
import err from './error.png'


const NoPage = () => {
  return (
    <div className='mx-auto text-white text-4xl'>
        <img src={err} className='w-full h-1/2' alt='error'/>
    </div>
  )
}

export default NoPage
