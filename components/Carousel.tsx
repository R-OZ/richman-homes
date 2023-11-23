"use client"
import Slider, { Settings } from "react-slick"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { dataList } from "@/dummyData/data";
import Card from "./Card"
import { useState } from "react";

const Carousel = () => {
  const [imgIdx, setImgIdx] = useState(0);

  const CustomNextArrow = ({ onClick }: { onClick?: () => void }) => (
    <button className="hidden md:block absolute z-10 cursor-pointer h-[100px] w-[40px] right-[-20px] top-0 bottom-0 my-auto transition-transform duration-300 hover:translate-x-[10px]" onClick={onClick}>
      <FontAwesomeIcon icon={faChevronRight} size="2x" />
    </button>
  );

  const CustomPrevArrow = ({ onClick }: { onClick?: () => void }) => (
    <button className="hidden md:block absolute z-10 cursor-pointer h-[100px] w-[40px] left-[-20px] top-0 bottom-0 my-auto transition-transform duration-300 hover:translate-x-[-10px]" onClick={onClick}>
      <FontAwesomeIcon icon={faChevronLeft} size="2x" />
    </button>
  );

  const settings: Settings ={
    slidesToShow: 4,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: false,
    dots: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    beforeChange: (current:number, next:number) => setImgIdx(next),
    responsive: [
      {
        breakpoint: 768,
        settings:{
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          variableWidth: true,
          dots: false,
          beforeChange: (current:number, next:number) => setImgIdx(next),
        }
      },
      {
        breakpoint: 1023,
        settings:{
          slidesToShow: 2,
          centerMode: true,
          centerPadding: "0px",
          autoplay: true,
          autoplaySpeed: 2000,
          variableWidth: false,
          dots: true,
          nextArrow: <CustomNextArrow />,
          prevArrow: <CustomPrevArrow />

        }
      },
      {
        breakpoint: 1100,
        settings:{
          slidesToShow: 3,
          centerMode: true,
          centerPadding: "0px",
          autoplay: true,
          autoplaySpeed: 2000,
          variableWidth: false,
          dots: true,
          nextArrow: <CustomNextArrow />,
          prevArrow: <CustomPrevArrow />

        }
      },
    ]
  }
  return (
      <Slider {...settings} className="newListings mt-[10px]">
        {
          dataList.map((item, idx)=>
            <Card propertyInfo={item} customStyles={idx=== imgIdx ? "naruto m-auto " : "md:scale-[1.0] md:opacity-[1] md:blur-[0] m-auto scale-[0.88] blur-[2px] opacity-[0.7]"} key={idx}/> 
          )
        }
      </Slider>
  )
}

export default Carousel