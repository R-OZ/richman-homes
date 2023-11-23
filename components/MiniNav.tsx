import Link from 'next/link'
import React from 'react'

const MiniNav = ({title} : {title:string} ) => {
  return (
    <div className='text-[13px] font-medium lg:mt-[52px]'><Link href={'/'}>Home</Link> &gt; <Link href={'/properties'}>Properties</Link> &gt; <span className='text-gold'>{title}</span></div>
  )
}

export default MiniNav