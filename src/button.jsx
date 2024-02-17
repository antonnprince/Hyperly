import React, { useState } from 'react'
import { generatePost } from './gemini'

const Button = ({inputValue,product,industry}) => {
  
  const [res,setRes] = useState('')

 const  handleRes = async ({name,product,industry})=>{
    try{
      const result = await generatePost({name,product,industry})

      setRes(result)
    } catch(error){
      console.log(error)
    }

  }

  return (
    <div>
      <button 
      onClick={handleRes}
      className="cursor-pointer transition-all bg-blue-500 text-white text-xl font-semibold px-6 py-2 rounded-lg
        border-blue-600
        border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
        active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
          Submit Results
        </button>
          
          <div className='text-xl text-black font-semibold'>
              {res}
          </div>
    </div>
  )
}

export default Button
