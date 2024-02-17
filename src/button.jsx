import React, { useState } from 'react';
import { generatePost } from './gemini';

const Button = ({ inputValue, product, industry }) => {
  const [res, setRes] = useState('');
  const [clicked, setClicked] = useState(false); // State to track if button is clicked

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
          setClicked(true); // Update clicked state when button is clicked
        }}
        className="cursor-pointer transition-all bg-blue-500 text-white text-xl font-semibold px-6 py-2 rounded-lg
        border-blue-600
        border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
        active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
      >
        Submit Results
      </button>

      <div className='text-xl text-black font-semibold'>
        {res ? (
          <>
            <h1>Your content is as follows</h1>
            <br />
            {res}
          </>
        ) : clicked ? ( // Show spinner only if button is clicked
          <div className="animate-spin mx-auto rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
        ) : null} {/* Don't show anything if button is not clicked */}
      </div>
    </div>
  );
};

export default Button;
