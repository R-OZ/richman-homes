import { CardIcons } from "./Card";
import { CompareButton } from "@/utils/miniClientComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import houseImg4 from '@/public/images/house4.jpg'
import Image from "next/image";
import { dataList } from "@/dummyData/data";

const data = dataList[1];

const Property =()=>{
  return(
    //if you are putting in carousel, dont forget to remove auto margin
    <div className="relative  h-[550px] md:h-[630px] lg:h-fit max-w-[420px] md:max-w-[630px] lg:max-w-[900px] xl:max-w-[1100px] m-auto">

      <Image src={houseImg4} alt="featured property" 
        className="h-[230px] md:h-[330px] lg:w-[70%] lg:h-[400px] xl:h-[460px] object-cover object-center" 
      />
      
      <span className='absolute top-0 left-0 bg-red-600 text-white px-[13px] py-[2px] text-[13px]'>{data.type}</span>

      <div className='absolute px-[13px] py-[8px] bg-white text-[#313041] shadowCard w-[90%] md:w-[60%] lg:w-[410px] xl:w-[480px] left-0 right-0 top-[200px] md:top-[280px] lg:top-0 lg:bottom-0 lg:h-fit lg:my-auto lg:left-auto mx-auto'>
        <h1 className="text-center text-[20px] font-medium">Villa Exquise de la Reine</h1>
        <p className='text-[17px] font-normal'>{data.title}</p>
        <div className='flex gap-[3px] items-center -mt-[5px]'>
            <FontAwesomeIcon icon={faLocationDot} size='sm' />
            <p className='font-light text-[14px]'>{data.location.address + ", " + data.location.city}</p>
        </div>
        <p className='text-red-500 text-[13px] mt-[2px]'>Semi-detached Duplex</p>
        <p className="text-[14px] text-gray-400 italic mt-[4px] line-clamp-3">&lsquo;{data.description}&rsquo;</p>
        <div className='flex justify-between mt-[10px]'>
            <p className='text-[18px] '>${data.price.toLocaleString()}</p>
            <CompareButton propertyInfo={data}/>
        </div>

        <div className='bg-[#E2E0E2] h-[1px] my-[12px]'/>
        
        <div className='flex justify-around'>
            <CardIcons type='beds' value={data.beds} />
            <CardIcons type='baths' value={data.baths} />
            <CardIcons type='size' value={data.size.toLocaleString()} />
            <CardIcons type='cars' value={data.cars} />
        </div>
      </div>
    </div>
  )
}

const Featured = () => {
  return (
    <div className="mt-[30px]">
      <Property />
    </div>
  )
}

export default Featured