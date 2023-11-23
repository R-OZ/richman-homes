"use client";
import Slider, { Settings } from "react-slick"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { BASE_IMG_URL } from "@/utils/constansts";

const images =[
    `${BASE_IMG_URL}/qo20zwdzzqdfrjpun6zb.jpg`,
    `${BASE_IMG_URL}/zpvaqhivb76lxxbjcqur.jpg`,
    `${BASE_IMG_URL}/vrvgdu96dcc8wetibzyh.jpg`,
    `${BASE_IMG_URL}/mogecfdfab4tm3fupz9u.jpg`,
    `${BASE_IMG_URL}/bbkhjh8lcnkjaovkvn3v.jpg`,
    `${BASE_IMG_URL}/sh0ynibjrtd6j1mir1ni.jpg`, 
    `${BASE_IMG_URL}/ot7ovbmb1txjtprdnani`
];


const PropertyImageCoursel = () => {
    const CustomNextArrow = ({ onClick }: { onClick?: () => void }) => (
        <button className="block absolute z-10 cursor-pointer h-fit px-[12px] py-[5px] rounded-[6px] bg-black/[0.55] text-gray-100 text-[18px] right-[2px] top-0 bottom-0 my-auto transition-transform duration-300 hover:text-white" onClick={onClick}>
            <FontAwesomeIcon icon={faChevronRight} />
        </button>
    );

    const CustomPrevArrow = ({ onClick }: { onClick?: () => void }) => (
        <button className="block absolute z-10 cursor-pointer h-fit px-[12px] py-[5px] rounded-[6px] bg-black/[0.55] text-gray-100 text-[18px] left-[2px] top-0 bottom-0 my-auto transition-transform duration-300 hover:text-white" onClick={onClick}>
            <FontAwesomeIcon icon={faChevronLeft}/>
        </button>
    );

    const settings: Settings ={
        slidesToShow: 1,
        dots: false,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
    }

  return (
    <Slider {...settings} className="" >
        {
            images.map((item, idx)=>
                <div key={idx} className="relative h-[350px] lg:h-[500px] xl:h-[600px] !w-[100%] rounded-[5px]">
                    <Image key={idx} fill={true} src={item} alt="" className="object-cover object-center rounded-[5px]" />
                </div>
            )
        }

    </Slider>
  )
}

export default PropertyImageCoursel