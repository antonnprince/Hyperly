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
    
      <h1 className='text-xl text-white font-semibold  p-8 mx-32'>
    Create New Post</h1>

    <section className='mx-auto text-xl font-normal w-3/4 space-y-12 text-white'>
    <div>
      <h2>Product Name</h2>
      <div className='input '>
        <input
        placeholder='Eg: Air Jordans'
        className='border-solid p-2 bg-[#2E3B45] text-lg text-[#9CABBA] w-full rounded-xl focus:outline-none'
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
        className='border-solid p-2 bg-[#2E3B45] text-lg text-[#9CABBA] w-full rounded-xl focus:outline-none'
        type='text'
        value={industry}
        onChange={(e)=>setIndustry(e.target.value)}
         />
      </div>
    </div>

    <div>
      <h2>What is your product?</h2>
      <div className='input '>
        <input
        placeholder='Shoes'
        className='border-solid p-2 bg-[#2E3B45] text-lg  text-[#9CABBA] w-full rounded-xl focus:outline-none'
        type='text'
        value={product}
        onChange={(e)=>setProduct(e.target.value)}
         />
      </div>
    </div>
    <Button name={name} product={product} industry={industry}/>
  </section>
 
    </div>
  )
}

export default Create;


