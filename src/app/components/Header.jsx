import React from 'react'
import { CiSearch } from "react-icons/ci";
import MenuItem from './MenuItem';
import ThemeComp from './ThemeComp';
const Header = () => {
  const menu =[
    {
      title: 'Anasayfa',
      link: '/',
    },
    {
      title: 'Sign Up',
      link: '/login',
    }
  ]
  return (
    <div className='flex  align-middle  items-center m-auto h-20 justify-around gap-3   p-5' >
        <div className='bg-amber-700 text-2xl p-3 font-extrabold  rounded'>Mucize app</div>
        <div className='flex flex-1 items-center gap-3 border rounded-md p-3' >
          <input  placeholder='Arama yapınız' className='outline-none flex-1' type="text" />
          <CiSearch size={25} />
        </div>
        <ThemeComp/>
        {menu.map((item,index)=> {
          return (
           <MenuItem item={item} key={index} />
          )
        })}
    </div>
  )
}

export default Header
