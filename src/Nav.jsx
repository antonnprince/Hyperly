import React from 'react'
import logo from './h2.png';
import create from './create.svg'
import { Outlet, Link } from "react-router-dom";
import {useState} from "react"
const Nav = () => {

  const [bag,setBg] = useState("")

  const setBackground=()=>{
    setBg("#FFFFFF")
  }

  return (
    <>
    <nav className='bg-[#141414] w-1/6 fixed'>
    <img src={logo} className='h-42 w-56 mx-auto' alt='Logo' />
      <li className='text-lg text-white text-left  ml-8 font-normal space-y-4 h-screen flex flex-col'>
        
        <ul 
        onClick={setBackground}
        className="hover:text-gray-400 delay-150 bg-[#141414] "> <Link to="/"> Dashboard  🏡 </Link>  </ul>
        
        <ul  
        className='hover:text-gray-400 text-center flex flex-row delay-150'> 
        <Link to="/create">
        Create 🔍 </Link>
        </ul>
        
        <ul  className='hover:text-gray-400 delay-150'>Insights  📉</ul>
        <ul  className='hover:text-gray-400 delay-150'>Organizations  🏛️</ul>
        <ul  className='hover:text-gray-400 delay-150'>Settings   🧩</ul>
        
      </li>
      
    </nav>

    <Outlet />
    </>
  )
}

export default Nav
