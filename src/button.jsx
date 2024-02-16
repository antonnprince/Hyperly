import React from 'react'
import { linkedin } from './gemini'

const Button = () => {
  
 const  handleRes =()=>{
      const res = linkedin()
  }

  return (
    <div>
      <button 
      onClick={()=>{handleRes()}}
      className="cursor-pointer transition-all bg-blue-500 text-white font-semibold px-6 py-2 rounded-lg
border-blue-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
  End Project
</button>
{res}
    </div>
  )
}

export default Button
