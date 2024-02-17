import React from 'react'


const Nav = () => {
  return (
    <div className='bg-gray-900 w-56 pt-8'>
    <img src="./h2.jpg" className='h-32 w-42' alt='Logo' />
    <h1 className='text-3xl text-white font-bold m-12'>Hyperly</h1>
      <li className='text-xl text-white  font-semibold space-y-8 h-screen flex flex-col items-center'>
        <ul className='hover:text-gray-500 delay-150'><a>Dashboard</a></ul>
        <ul  className='hover:text-gray-500 delay-150'><a> Create</a></ul>
        <ul  className='hover:text-gray-500 delay-150'><a>Settings</a></ul>
      </li>
    </div>
  )
}

export default Nav
