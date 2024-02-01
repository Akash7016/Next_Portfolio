import Link from 'next/link'
import React from 'react'

function Navlinks({name,href}) {
  return (
    <div className='text-lg sm:text-sm font-semibold py-2 md:py-0'>
        <Link href={href}>{name}</Link>
    </div>
  )
}

export default Navlinks