"use client"
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'

const Tabs = () => {
    const searcparams =useSearchParams()
    const genre = searcparams.get('genre')
  console.log(genre)
     const tabs = [
        {
            title: 'Popüler',
            link: '/popular',
        },
        {
            title: 'Son Gelenler',
            link: '/latest',
        },
        {
            title: 'Yakında Gelecekler',
            link: '/upcoming',
        }
     ]


  return (
    <div className='p-5 my-3 bg-gray-100 dark:bg-slate-600 flex justify-center gap-3' >
        {tabs.map((item,i)=>{
            return (
                <div key={i} className='flex justify-around gap-3 text-sm font-medium  '>
                    <Link className= {`cursor-pointer hover:opacity-75 ${item.link === genre ? "underline underline-offset-8 text-red-600": ""} `} href={`/?genre=${item.link}`}>{item.title}</Link>
                </div>
            )
        })}
      
    </div>
  )
}

export default Tabs
