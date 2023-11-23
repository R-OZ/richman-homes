import Image, { StaticImageData } from "next/image"
import woman from "@/public/images/woman.jpg"
import profits from "@/public/images/profits.png"
import clean from "@/public/images/clean.png"
import money from "@/public/images/money.png"


interface ItemProps{
    img: StaticImageData,
    header: string,
    body: string
}
const Item =({ img, header, body }: ItemProps)=>{
    return(
        <div className=" flex items-center gap-[12px]  w-auto">
            <Image src={img} alt="feature" width={62} height={62} className="block h-[62px] w-[62px]"/>
            <div className="">
                <p className="text-[17px]">{header}</p>
                <p className="text-[16px]">{body}</p>
            </div>
        </div>
    )
}
const WhatYouGet = () => {
  return (
    <div className=" flex mt-[30px] w-fit mx-auto gap-[70px]">
       
        <Image src={woman} alt="happy customer" className="hidden lg:block h-[300.5px] w-[370px] rounded-tl-[50px] rounded-br-[50px] object-cover object-center"/>

        <div className="flex flex-col gap-[40px] max-w-[450px] mx-auto">
            <Item img={profits}
                header="High Returns on Investment"
                body="We offer properties with high returns on investment."
            />
            <Item img={clean}
                header="Free 1× House Cleaning"
                body="Properties purchased from us get one time industrial house cleaning."
            />
            <Item img={money}
                header="Affordable Prices"
                body="We offer a wide range of properties at lower prices with great rental value."
            />

        </div>

    </div>
  )
}

export default WhatYouGet