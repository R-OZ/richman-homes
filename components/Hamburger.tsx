"use client";

type HamburgerProps={
    isOpen: boolean,
    setIsOpen: (x: boolean)=> void
}

const Hamburger = ({isOpen, setIsOpen}: HamburgerProps) => {

    return (
      <div className='cursor-pointer lg:hidden absolute z-10 top-5 left-5 flex justify-center flex-col w-[25px] h-[18px]' onClick={()=>setIsOpen(!isOpen)}>
        <div className={`h-[2px] bg-gold transition ease-linear duration-200 ${isOpen? "rotate-45 -mb-[7.9px]": ""} `}></div>
        <div className={`h-[2px] bg-gold my-[6px] w-3/5 transition ease-in-out duration-100 ${isOpen ? "opacity-0  my-0": ""}`}></div>
        <div className={`h-[2px] bg-gold transition ease-linear duration-200 ${isOpen? "-rotate-45 -mt-[7.9px]": ""} `}></div>
      </div>        
    )
  }
  
  export default Hamburger