import Link from 'next/link'
import React from 'react'

const MenuItem = ({item}) => {
    console.log(item)
  return (
    <Link href={item.link} >
      {item.title}
    </Link>
  )
}

export default MenuItem
