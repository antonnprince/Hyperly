import React from 'react'
import logo from './h2.png';
import { Outlet, Link } from "react-router-dom";
import {useState} from "react"
const Nav = () => {

  const [bag,setBg] = useState("")

  const setBackground = ()=>{
    setBg("[#26303B]")
  }

  return (
    <>
    <nav className='bg-[#141414] w-1/6 fixed'>
    <img src={logo} className='h-42 w-56 mx-auto' alt='Logo' />
      <li className='text-xl text-white text-left  ml-8 font-normal space-y-4 h-screen flex flex-col'>
        <ul 
        onClick={setBackground}
        className={`hover:text-gray-400 delay-150 bg-${bag}`}> <Link to="/"> Dashboard </Link>  </ul>
        <ul  className='hover:text-gray-400 delay-150'> <Link to="/create"> Create </Link></ul>
        <ul  className='hover:text-gray-400 delay-150'>Settings</ul>
      </li>
      
    </nav>

    <Outlet />
    </>
  )
}

export default Nav
