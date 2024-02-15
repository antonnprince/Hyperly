import React from 'react'
import Button from './components/button'
import { useState } from 'react';

const Create = () => {
  const [inputValue,setInputValue] = useState("")
  const[industry,setIndustry] = useState("")
  const[product,setProduct] = useState("")
  const[res,setRes] = useState("")
  return (
    <div className='mx-4'>
      <h1 className='text-3xl text-slate-700 font-semibold w-full p-8 mx-auto'>Get personalised 
      content for impactful LinkedIn posts tailored to product and industry. Enter the details needed.</h1>

    <section className='mx-auto text-xl text-gray-700'>
    <div>
      <h2>Give a brief description about what you're going to post</h2>
      <div className='input '>
        <textarea
        className='border-solid border-2 border-sky-500 p-4 w-64 rounded-xl focus:outline-none'
        type='text'
        value={inputValue}
        onChange={(e)=>setInputValue(e.target.value)}
         />
      </div>
    </div>

    <div>
      <h2>Which industry is this post related to?</h2>
      <div className='input '>
        <textarea
        className='border-solid border-2 border-sky-500 p-4 w-64 rounded-xl focus:outline-none'
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
        className='border-solid border-2 border-sky-500 p-4 w-64 rounded-xl focus:outline-none'
        type='text'
        value={product}
        onChange={(e)=>setProduct(e.target.value)}
         />
      </div>
    </div>
  </section>

    </div>
  )
}

export default Create
