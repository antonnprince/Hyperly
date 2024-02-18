import React from 'react'
import Button from './button'
import { useState } from 'react';


const Create = () => {
  const [name,setname] = useState("")
  const[industry,setIndustry] = useState("")
  const[product,setProduct] = useState("")
  const[res,setRes] = useState("")
  return (
    <div className='mx-32 space-y-20 h-screen'>
      <h1 className='text-3xl text-slate-700 font-bold w-auto p-8 mx-32'>Get personalised 
      content for impactful LinkedIn posts tailored specific to your product and industry, to 
      stand out among competitors and increase sales, all just one click away
      . Enter the details needed.</h1>

    <section className='mx-auto text-2xl font-semibold w-3/4 space-y-4 text-gray-900'>
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
    <Button name={name} product={product} industry={industry}/>
  </section>
 
    </div>
  )
}

export default Create;


