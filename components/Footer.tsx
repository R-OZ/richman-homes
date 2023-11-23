import Image from 'next/image'
import React from 'react'
import logo from "@/public/images/logo.png"
import Link from 'next/link'

const Footer = () => {
  return (
    <section className='px-[18px] py-[60px] bg-purple text-white text-[14px]'>
      <div className='md:max-w-[650px] mx-auto xl:max-w-[1250px]'>
        <div className='flex flex-col gap-[40px] md:flex-row md:flex-wrap md:justify-between xl:flex-nowrap xl:gap-0 '>
          <div className='xl:w-[350px] '>
            <Image src={logo} alt='Richma Logo' className='w-[150px] block'/>
            <p className='mt-[10px]'>More than just a real estate company; it is a promise of a luxurious lifestyle, unmatched quality, 
              and a commitment to helping you find your dream home.</p>
            <button className='mt-[7px] cursor-pointer bg-red-600 transtion duration-100 hover:bg-red-500 px-[20px] py-[5px] rounded-[8px]'>
              <Link href={'/about'}>Read More</Link> 
            </button>
          </div>

          <div className='xl:w-[fit]'>
            <p className='cardo-font text-[18px]'>SERVICES</p>
            <ul className='mt-[7px] flex flex-col gap-[5px]'>
              <li>Buy</li>
              <li>Rent</li>
              <li>Shortlet</li>
              <li>All Properties</li>
            </ul>
          </div>

          <div className='xl:w-[fit]'>
            <p className='cardo-font text-[18px]'>QUICK LINKS</p>
            <ul className='mt-[7px] flex flex-col gap-[5px]'>
              <li>New Listings</li>
              <li>Featured Properties</li>
              <li>Special Inquiry</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className='xl:w-[fit]'>
            <p className='cardo-font text-[18px]'>CONTACT</p>
            <ul className='mt-[7px] flex flex-col gap-[5px]'>
              <li>23 Floor Oakwood Towers, Lekki</li>
              <li>+1 555 789 1234</li>
              <li>richmanhomes@gmail.com</li>
              <li className='mt-[7px] flex gap-[25px]'>
                <Image src={"/images/facebook.png"} width={38} height={38} alt="facebook" className='p-[8px] block bg-[#0f131f] rounded-[10px]'/>
                <Image src={"/images/twitter.png"} width={38} height={38} alt="facebook" className='p-[8px] block bg-[#0f131f] rounded-[10px]'/>
                <Image src={"/images/instagram.png"} width={38} height={38} alt="instagram" className='p-[8px] block bg-[#0f131f] rounded-[10px]'/>
                <Image src={"/images/whatsapp.png"} width={38} height={38} alt="whatsapp" className='p-[8px] block bg-[#0f131f] rounded-[10px]'/>
              </li>
            </ul>
          </div>

        </div>

        <div className='my-[20px] bg-[#3d4b67] h-[2px]'/>
        <p className='text-center'>&#169; 2023 Richman Homes. All Rights Reserved</p>
        <p className='text-center'>Site Developed by &nbsp;
          <a className='text-gold underline transition duration-100 hover:text-[#D6B051] cursor-pointer' 
            href="https://www.linkedin.com/in/reginald-ojeba" target='_blank'>Reginald Ojeba</a>
        </p>
        </div>
    </section>
  )
}

export default Footer