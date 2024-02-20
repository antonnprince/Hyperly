import React, { useState } from 'react';
import { generatePost } from './gemini';

export const Button = ({ inputValue, product, industry }) => {
  const [res, setRes] = useState('');
  const [clicked, setClicked] = useState(false); // State to track if button is clicked
  const [count, setCount] = useState(0);

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
          setCount(count + 1); // Update clicked state when button is clicked
        }}
        className="bg-[#369EFF] p-2 px-8 rounded-2xl font-thin text-lg"
      >
        Generate content
      </button>

      <div className='text-xl text-white'>
        {res ? (
          <div className='mx-4 w-full font-normal bg-[#141414]'>
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

 // Exporting the count variable
