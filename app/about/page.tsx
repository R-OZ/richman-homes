import React from 'react'
import pic1 from '@/public/images/pic1.jpg'
import pic3 from '@/public/images/pic3.jpg'
import logo2 from "@/public/images/logo2.png"
import Image from 'next/image'
import { Header, ReachUsItem } from '../page'
import Agent from '@/components/Agent'
import InquiryForm from '@/components/InquiryForm'
import ClientStories from '@/components/ClientStories'

const About = () => {
  const data = {
    intro :`Welcome to Richman Homes, where your dream of finding the perfect home becomes a reality. We are a distinguished and trusted real estate company, 
    dedicated to helping you achieve your homeownership goals with ease and confidence.
    At Richman Homes, we believe that your future starts with the right home. Whether you are looking for a place to build lasting memories, 
    an investment that will secure your financial future, or a smooth and profitable sale of your current property, we are here to make it happen.`,
    mission: `Our mission at Richman Homes is to empower your real estate dreams. We are committed to providing the expertise, 
    guidance, and personalized care you need to find the perfect home, make successful real estate investments, and navigate the complexities of the real estate world. 
    Whether you are a first-time homebuyer, a seasoned investor, or a seller looking to maximize returns, our mission is to be your trusted partner, ensuring your aspirations become reality, one door at a time.`
  }
  const Xp =({number, text}: {number:string|number, text:string})=>{
    return(
    <div>
      <p className='font-semibold text-[30px]'>{number}</p>
      <p className='text-gold text-[14px]'>{text.toUpperCase()}</p>
    </div>
    )
  }
  return (
    <div className='lg:pt-[52px]'>
       <section className=" px-[18px] py-[40px] bg-[url('../public/images/background.jpg')] bg-center bg-cover bg-no-repeat bg-blend-darken bg-black/[.38]
        lg:py-[90px]  lg:bg-fixed text-white">
          <h1 className='text-[35px] font-thin cardo-font text-center lg:mt-[52px]'>ABOUT</h1>
      </section>

      <div className='px-[18px] xl:px-0 py-[20px] md:flex gap-[40px] mx-auto max-w-[1250px]'>
        <Image src={pic1} alt='house' className='hidden md:block  w-[15%] lg:w-[30%] object-cover object-center' />

        <section>
          <h1 className='font-semibold text-[25px]'>Richman Homes</h1>
          <h2 className='-mt-[5px] text-[15px] text-gold'>Elevating Real Estate Excellence</h2>
          <p className='text-gray-700'>
            {data.intro}
          </p>
          <div className='mt-[30px] flex flex-col gap-[15px] md:flex-row md:justify-between'>
            <Xp number={20} text='Years of expericence' />
            <Xp number={"210k+"} text='Total Properties sold'/>
            <Xp number={"300"} text='Qualified realtors' />
            <Xp number={"50"} text='Total Branches' />
          </div>
          <Image src={pic3} alt='house' className='block mt-[40px] md:h-[300px] object-cover lg:h-[400px]' />
        </section>
      </div>

      <section className='my-[60px] px-[18px] py-[20px] mx-auto'>
        <Header text='OUR MISSION' />
        <p className='text-center max-w-[1000px] mx-auto'>
          {data.mission}
        </p>
      </section>

      <section className='my-[30px] lg:h-[fit] lg:pb-[100px] relative'>
        <h1 className="font-medium mx-auto text-[20px]  w-fit relative after:w-[60%] after:h-[2px] after:bg-[#2D2F3F] after:absolute after:bottom-[-5px] after:left-0 after:right-0 after:mx-auto">
          Meet Our Team
        </h1>
        <div className='mt-[25px] flex flex-col gap-[30px] md:flex-wrap md:flex-row max-w-[1250px] mx-auto'>
          <Agent />
          <Agent />
          <Agent />
          <Agent />
        </div>
        <div className=" hidden lg:block bg-[#222C45] absolute left-0 right-0 mx-auto top-[90%] text-white pt-[40px] px-[80px] pb-[60px] w-[750px]">
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
    </div>
  )
}

export default About