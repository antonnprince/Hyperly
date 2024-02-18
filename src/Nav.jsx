import React from 'react'
import logo from './h2.png';

const Nav = () => {
  return (
    <div className='bg-gray-800 w-1/4 pt-8'>
    <img src={logo} className='h-32 w-42 mx-auto' alt='Logo' />
      <li className='text-xl text-white  font-semibold space-y-8 h-screen flex flex-col items-center'>
        <ul className='hover:text-gray-500 delay-150'><a>Dashboard</a></ul>
        <ul  className='hover:text-gray-500 delay-150'><a> Create</a></ul>
        <ul  className='hover:text-gray-500 delay-150'><a>Settings</a></ul>
      </li>
    </div>
  )
}

export default Nav
