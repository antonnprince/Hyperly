import React from 'react'
import Button from './button'
import { useState } from 'react';


const Create = () => {
  const [name,setname] = useState("")
  const[industry,setIndustry] = useState("")
  const[product,setProduct] = useState("")
  const[res,setRes] = useState("")
  return (
    <div className='mx-4'>
      <h1 className='text-3xl text-slate-700 font-semibold w-full p-8 mx-auto'>Get personalised 
      content for impactful LinkedIn posts tailored specific to your product and industry, to 
      stand out among competitors and increase sales, all just one click away
      . Enter the details needed.</h1>

    <section className='mx-auto text-2xl font-semibold text-gray-700'>
    <div>
      <h2>Give the name of the product</h2>
      <div className='input '>
        <input
        className='border-solid border-2 border-sky-500  w-1/4 rounded-xl focus:outline-none'
        type='text'
        value={name}
        onChange={(e)=>setname(e.target.value)}
         />
      </div>
    </div>

    <div>
      <h2>Give us the industry/industries to which the product is related to</h2>
      <div className='input '>
        <textarea
        className='border-solid border-2 border-sky-500 w-1/2 rounded-xl focus:outline-none'
        type='text'
        value={industry}
        onChange={(e)=>setIndustry(e.target.value)}
         />
      </div>
    </div>

    <div>
      <h2>Write a few lines about the product, so that we get a better idea</h2>
      <div className='input '>
        <textarea
        className='border-solid border-2 border-sky-500  w-1/4 rounded-xl focus:outline-none'
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


