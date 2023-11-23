"use client"; 
import Slider, { Settings } from "react-slick"
import { useState } from "react";

const data = [
    {
        client: "John Smith",
        story: "Richman Homes helped me find my dream house. The process was smooth, and I couldn't be happier with my new home."
    },
    {
        client: "Sarah Anderson",
        story: "I can't thank the team at Richman Homes enough for guiding me to my perfect apartment. Your expertise was invaluable."
    },
    {
        client: "Michael Johnson",
        story: "Investing in land with your guidance was a great choice. I'm excited about the opportunities ahead."
    },
    {
        client: "Emily Davis",
        story: "Richman Homes' short-term rentals are my go-to for consistent quality. Your properties and service are top-notch."
    },
    {
        client: "David Wilson",
        story: "I'm thrilled with the house I found through your help. The process was efficient and enjoyable."
    },
    {
        client: "Karen Taylor",
        story: "I appreciate your dedication to finding the right apartment for me. It made city living a breeze."
    }
]


const ClientStories = () => {
    const [storyIdx, setStoryIdx] = useState(0);

    const CustomDot: React.FC<{ index?: number; active?: boolean; onClick?: () => void }> = ({ index, active, onClick }) => (
        <button
          onClick={onClick}
          style={{
            background: index===storyIdx ? "red" : "white", // Customize the active and inactive dot appearance
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            margin: "0 0px",
            cursor: "pointer",
          }}
        >
        </button>
      );

    const settings:Settings ={
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        arrows: false,
        beforeChange: (current:number, next:number) => setStoryIdx(next),
        dotsClass: `slick-dots myDots`,
        className: "clientStories"
    }

  return (
    <div>
        <h1 className="font-light text-center mx-auto w-full relative after:w-[55%] after:h-[2px] after:bg-white lg:after:bg-[#3d4b67] after:absolute after:bottom-[-5px] after:left-0 after:right-0 after:mx-auto">
            CLIENT STORIES
        </h1>

        <Slider {...settings} className="clientStories mt-[10px] !h-[110px] lg:!h-[80px]">
            {
                data.map((item, idx)=>(
                    <div key={idx} className="font-light">
                        <p className="text-center italic">"{item.story}"</p>
                        <p className="text-right mt-[5px] italic ">- {item.client}</p>
                    </div>
                ))
            }
        </Slider>
    </div>
  )
}

export default ClientStories