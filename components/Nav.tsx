"use client";
import Image, { StaticImageData } from "next/image"
import Hamburger from "./Hamburger"
import logo from "@/public/images/logo.png"
import { useState } from "react";
import { usePathname } from "next/navigation";
import facebookIcon from "@/public/images/facebook.png"
import twitterIcon from "@/public/images/twitter.png"
import instagramIcon from "@/public/images/instagram.png"
import whatsappIcon from "@/public/images/whatsapp.png"
import Link from "next/link";

type SocialsProps={
    icon: StaticImageData,
    alt: string,
    link?: string
}

const Socials =({icon, alt, link=""}: SocialsProps)=>{
    return(
        <a href={link}>
            <Image src={icon} height={15} width={15} className={`${alt ==="whatsapp"? "h-[15px] w-[15px]": "h-[14px] w-[14px]"} transition-transform cursor-pointer hover:scale-125`} alt={alt}/>
        </a>
    )
}
const Nav = () => {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()
    function toggle(){
        return setIsOpen(false)
    }
  return (
    <>
    {/*Mobile Navbar*/}
    <nav className={`navHeight bg-purple flex flex-col z-99 overflow-hidden py-[8px] ${isOpen? "toggleHeight":""} lg:hidden`}>
        <Hamburger isOpen={isOpen} setIsOpen={setIsOpen}/>
        <Image src={logo} height={35} alt="logo" className="left-0 right-0 m-auto absolute lg:static lg:m-0" />
        <ul className="w-full mt-[52px] text-white px-[25px]">
            <Link href='/'><li onClick={toggle} className={`pl-[18px] py-[10px] border-b-[1px] border-light-purple ${pathname === "/" ? "text-gold": ""}`}>Home</li></Link>
            <Link href='/properties'><li onClick={toggle} className={`pl-[18px] py-[10px] border-b-[1px] border-light-purple ${pathname === "/properties" ? "text-gold": ""}`}>Properties</li></Link>
            <Link href='/about'><li onClick={toggle} className={`pl-[18px] py-[10px] border-b-[1px] border-light-purple ${pathname === "/about" ? "text-gold": ""}`}>About Us</li></Link>
        </ul>
        <div className="mr-[25px] flex gap-[35px] ml-[43px] mt-[15px]">
            <Image src={facebookIcon} height={18} width={18} alt="facebook"/>
            <Image src={twitterIcon} height={18} width={18} alt="X a.k.a twitter"/>
            <Image src={instagramIcon} height={18} width={18} alt="instagram"/>
            <Image src={whatsappIcon} height={19} width={19} alt="whatsapp"/>
        </div>
    </nav>

    {/*Desktop Navbar*/}
    <nav className="hidden text-white lg:flex h-[52px] bg-purple z-20 fixed w-full px-[40px]">
        <div className="h-full max-w-[1300px] w-full m-auto flex items-center justify-between">
        <Image src={logo} height={35} alt="logo" className=" h-[35px] w-auto" />

        <div className="flex gap-[60px]">
            <ul className=" flex gap-[20px]">
                <li className={`hover:text-gold ${pathname === "/" ? "text-gold": ""}`}><Link href='/'>Home</Link></li>
                <li className={`hover:text-gold ${pathname === "/properties" ? "text-gold": ""}`}><Link href='/properties'>Properties</Link></li>
                <li className={`hover:text-gold ${pathname === "/about" ? "text-gold": ""}`}><Link href='/about'>About Us</Link></li>
            </ul>
            <div className="flex items-center gap-[15px]">
                <Socials icon={facebookIcon} alt="facebook" />
                <Socials icon={twitterIcon} alt="X a.k.a twitter" />
                <Socials icon={instagramIcon} alt="instagram" />
                <Socials icon={whatsappIcon} alt="whatsapp" />
            </div>
        </div>

        </div>
    </nav>

    </>
  )
}

export default Nav