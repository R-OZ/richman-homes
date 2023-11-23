import Carousel from "@/components/Carousel";
import Featured from "@/components/Featured";
import Search from "@/components/Search";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import WhatYouGet from "@/components/WhatYouGet";
import ClientStories from "@/components/ClientStories";
import { StaticImageData } from "next/image";
import Image from "next/image";
import InquiryForm from "@/components/InquiryForm";
import logo2 from "@/public/images/logo2.png"
import Link from "next/link";

export const Header =({text}: {text:string})=>{
  return(
    <div className="grid grid-cols-[1fr_auto_1fr] gap-[8px] max-w-[400px] m-auto md:max-w-[450px] lg:max-w-[650px] ">
      <div className="bg-black h-[1.5px] self-center"/>
      <h1 className="cardo-font text-[17px] text-center">{text}</h1>
      <div className="bg-black h-[1.5px] self-center"/>
    </div>
  )
}

export const ReachUsItem =({ icon, header, text}: {icon:StaticImageData|string, header:string, text:string})=>{
  return(
    <div className="text-center w-[245px] m-auto md:m-0">
      <Image src={icon} width={50} height={50} alt={header} className="m-auto" />
      <p className="text-[18px] mt-[5px]">{header}</p>
      <p className="text-gray-500 whitespace-pre-line">{text}</p>
    </div>
  )
}
export default function Home() {
  return (
    <>
      <section className=" px-[18px] py-[40px] bg-[url('../public/images/background.jpg')] bg-center bg-cover bg-no-repeat bg-blend-darken bg-black/[.38]
        lg:h-[600px] lg:pt-[150px] lg:bg-fixed">
        <h1 className='text-center text-[35px] text-white cardo-font spacing
          lg:mb-[60px]'>
          DEFINE YOUR <br className='md:hidden'/> LUXURY
        </h1>
        <Search />
      </section>

      <section className="px-[18px] py-[35px]">
        <section>
          <Header text="NEW LISTINGS" />
          <div className="w-[338px] mx-auto md:w-[650px] lg:w-[950px] xl:max-w-[1250px] xl:w-[95%]">
            <Carousel />
          </div>
        </section>

        <section className="mt-[40px] md:mt-[60px] xl:mt-[70px]">
          <Header text="FEATURED PROPERTIES" />
          <Featured />
          <Link href={'/properties'} className='bg-[#DEB653] text-white w-fit px-[20px] block m-auto mt-[40px] lg:mt-[30px] py-[5px] rounded-[6px] cursor-pointer transition duration-100 hover:bg-[#f9cc5a]'>
            View More
          </Link>
        </section>
      </section>

      <section className="py-[50px] text-white text-[18px] lg:text-[20px] text-center bg-[url('../public/images/background.jpg')] bg-center bg-cover bg-no-repeat bg-blend-darken bg-black/[.45]
        lg:bg-fixed">
      </section>

      <section className="py-[30px] px-[18px] lg:h-[550px] relative text-[#2D2F3F]">
        <h1 className="font-light mx-auto w-fit relative after:w-[60%] after:h-[2px] after:bg-[#2D2F3F] after:absolute after:bottom-[-5px] after:left-0 after:right-0 after:mx-auto">
          WHAT YOU GET FROM US
        </h1>
        <WhatYouGet />
        <div className=" hidden lg:block bg-[#222C45] absolute left-0 right-0 mx-auto top-[470px] text-white pt-[40px] px-[80px] pb-[60px] w-[750px]">
          <ClientStories />
        </div>
      </section>

      <section className="py-[20px] h-[200px]  bg-[url('../public/images/background.jpg')] bg-center bg-cover bg-no-repeat bg-blend-darken bg-[#383C4F]/[.8] lg:bg-black/[.38] lg:bg-fixed">
        <div className="lg:hidden text-white mx-auto px-[18px] max-w-[600px]">
          <ClientStories />
        </div>
      </section>

      <section className="bg-[#E7ECF5] py-[30px] px-[18px] ">
        <h1 className="font-light mx-auto  w-fit relative after:w-[60%] after:h-[2px] after:bg-[#2D2F3F] after:absolute after:bottom-[-5px] after:left-0 after:right-0 after:mx-auto">
          REACH US FROM ANYWHERE ANYDAY
        </h1>
        <div className=" mt-[30px] flex flex-col gap-[40px] md:gap-0 max-w-[900px] justify-between md:flex-row md:items-center md:mx-auto">
          <ReachUsItem icon={"/images/call.png"} header="Call" text="+1 555 789 1234" />
          <ReachUsItem icon={"/images/location.png"} header="Location" text="23 Floor Oakwood Towers, Lekki" />
          <ReachUsItem icon={"/images/email.png"} header="Email" text="richmanhomes@gmail.com" />
        </div>
      </section>

      <section className="px-[18px] py-[30px] bg-[#222D42] overflow-hidden relative">
        <div className="mx-auto md:w-[650px] lg:w-[940px] xl:max-w-[1000px] xl:w-[95%]">
          <InquiryForm />
        </div>
        <Image src={logo2} alt="" className="w-[500px] h-auto max-w-none z-[1] absolute opacity-[0.08] left-[80px] top-0 select-none md:w-[850px] md:left-[220px] lg:w-[900px] lg:left-[50vw]" />
      </section>
    </>
  )
}
