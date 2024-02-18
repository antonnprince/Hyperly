import React from 'react'
import Button from './button'
import { useState } from 'react';


const Create = () => {
  const [name,setname] = useState("")
  const[industry,setIndustry] = useState("")
  const[product,setProduct] = useState("")
  const[res,setRes] = useState("")
  return (
    <div className='mx-4 space-y-4'>
      <h1 className='text-2xl text-slate-700 font-semibold w-full p-8 mx-auto'>Get personalised 
      content for impactful LinkedIn posts tailored specific to your product and industry, to 
      stand out among competitors and increase sales, all just one click away
      . Enter the details needed.</h1>

    <section className='mx-auto text-2xl font-normal text-gray-700'>
    <div>
      <h2>Give the name of the product</h2>
      <div className='input '>
        <input
        placeholder='Eg: Air Jordans'
        className='border-solid p-1 border-2 border-sky-500 text-lg w-1/4 rounded-xl focus:outline-none'
        type='text'
        value={name}
        onChange={(e)=>setname(e.target.value)}
         />
      </div>
    </div>

    <div>
      <h2>Give us the industry/industries to which the product is related to</h2>
      <div className='input '>
        <input
        placeholder='Eg: Shoe,Fashion'
        className='border-solid p-1 border-2 border-sky-500 text-lg w-1/4 rounded-xl focus:outline-none'
        type='text'
        value={industry}
        onChange={(e)=>setIndustry(e.target.value)}
         />
      </div>
    </div>

    <div>
      <h2>What exactly is your product?</h2>
      <div className='input '>
        <input
        placeholder='Shoes'
        className='border-solid p-1 border-2 border-sky-500 text-lg w-1/4 rounded-xl focus:outline-none'
        type='text'
        value={product}
        onChange={(e)=>setProduct(e.target.value)}
         />
      </div>
    </div>
  </section>
<Button name={name} product={product} industry={industry}/>
    </div>
  )
}

export default Create;


