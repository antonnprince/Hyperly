import React from 'react'
import Button from './button'
import { useState } from 'react';


const Create = () => {
  const [name,setname] = useState("")
  const[industry,setIndustry] = useState("")
  const[product,setProduct] = useState("")
  const[res,setRes] = useState("")
  return (
    <div className='ml-72 space-y-20 h-screen'>
    
      <h1 className='text-5xl text-left text-white font-semibold py-8'>
    Create a new Post</h1>

    <section className=' text-xl font-normal  w-[667px] space-y-8 text-white'>
    <div>
      <h2>Product Name</h2>
      <div className='input '>
        <input
        placeholder='Eg: Air Jordans'
        className='border-solid px-1 my-2 py-2 bg-[#2E3B45] text-lg text-[#9CABBA] w-11/12 w-max-11/12 rounded-xl focus:outline-none'
        type='text'
        value={name}
        onChange={(e)=>setname(e.target.value)}
         />
      </div>
    </div>

    <div>
      <h2>Industry</h2>
      <div className='input '>
        <input
        placeholder='Eg: Shoe,Fashion'
        className='border-solid px-1 py-2 my-2 bg-[#2E3B45] text-lg text-[#9CABBA] w-11/12 w-max-11/12 rounded-xl focus:outline-none'
        type='text'
        value={industry}
        onChange={(e)=>setIndustry(e.target.value)}
         />
      </div>
    </div>

    <div>
      <h2>What is your product?</h2>
      <div className='input '>
        <textarea
        placeholder='Give a brief description'
        className='border-solid px-1 py-2 my-2 bg-[#2E3B45] text-lg  text-[#9CABBA]  w-11/12 w-max-11/12 rounded-xl focus:outline-none'
        type='text'
        value={product}
        onChange={(e)=>setProduct(e.target.value)}
         />
         
      </div>

      <Button name={name} product={product} industry={industry}/>
    </div>
   
  </section>   


  </div>
    
  )
}

export default Create;


