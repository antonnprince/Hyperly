import React, { useState } from 'react'

const Dash = ({count}) => {



  return (
    
    <div className='ml-72 '>
        
        <div className='bg-gray-800 rounded-xl h-32 w-72 text-white mt-12'>
            <div className='text-left space-y-4 ml-8 pt-4'>
              <h1 className='text-white text-2xl'>Total Projects</h1>
              <h2 className='text-white text-lg'>{count}</h2>
            </div>
        </div>
    
    </div>
  )
}

export default Dash
