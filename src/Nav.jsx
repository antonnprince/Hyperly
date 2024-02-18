import React from 'react'
import logo from './h2.png';

const Nav = () => {
  return (
    <div className='bg-gray-800 w-1/6 pt-8 fixed'>
    <img src={logo} className='h-42 w-56 mx-auto' alt='Logo' />
      <li className='text-2xl text-white text-left font-thin space-y-4 h-screen flex flex-col items-center'>
        <ul className='hover:text-gray-400 delay-150'><a>Dashboard</a></ul>
        <ul  className='hover:text-gray-400 delay-150'><a> Create</a></ul>
        <ul  className='hover:text-gray-400 delay-150'><a>Settings</a></ul>
      </li>
    </div>
  )
}

export default Nav
