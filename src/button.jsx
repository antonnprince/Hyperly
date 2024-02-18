import React, { useState } from 'react';
import { generatePost } from './gemini';

const Button = ({ inputValue, product, industry }) => {
  const [res, setRes] = useState('');
  const [clicked, setClicked] = useState(false); // State to track if button is clicked
  const[count,setCount] = useState(0)

  const handleRes = async ({ name, product, industry }) => {
    try {
      const result = await generatePost({ name, product, industry });
      setRes(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button
        onClick={() => {
          handleRes({ inputValue, product, industry });
          setClicked(true);
          setCount(()=>count+1) // Update clicked state when button is clicked
        }}
        className="cursor-pointer transition-all bg-gray-900 text-white text-xl font-semibold px-6 py-2 rounded-lg
        border-blue-600
        border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
        active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
      >
        Generate content
      </button>

      <div className='text-xl text-black'>
        {res ? (
          <div className='mx-4 w-full font-normal bg-slate-200'>

            <h1>Linkedin post content</h1>
            <br />
            {res}
          </div>
        ) : clicked ? ( // Show spinner only if button is clicked
          <div className="animate-spin mx-auto rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
        ) : null} {/* Don't show anything if button is not clicked */}
      </div>
    </div>
  );
};

export default Button;
