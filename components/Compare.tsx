"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightArrowLeft, faChevronDown, faLocationDot, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import house2 from '@/public/images/house2.jpg'
import house3 from '@/public/images/house3.jpg'
import house4 from '@/public/images/house4.jpg'
import house5 from '@/public/images/house5.jpg'
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { PropertyData } from '@/dummyData/data';
import { removeProperty } from '@/redux/slices/compareSlice';



const Compare = () => {
  const dispatch = useAppDispatch();
  const compareState = useAppSelector((state)=> state.compare.value);
  const [isToggle, setIsToggle] = useState<boolean>(false)
  const [isEditing, setIsEditing] = useState<boolean>(false)
  // const [compareState, setcompareState] = useState<Array<PropertyData>>(compareState)

  function deleteHouse(id: number){
    return dispatch(removeProperty(id));
  }

  const Item = ({id, image, title, location}: {image: string, title: string, location: string, id: number})=>{
    return(
      <div className="flex h-[70px] gap-[8px] items-start">
        <div className='h-[100%] w-[40%] bg-yellow-200 relative'>
          <Image src={image} fill={true} className='rounded-[3px] object-cover object-center' alt={title} />
        </div>
        <div className='w-[57%] flex-grow '>
          <p className='font-semibold text-purple line-clamp-1'>{title}</p>
          <div className='flex gap-[3px] items-center text-purple '>
              <FontAwesomeIcon icon={faLocationDot} size='xs' />
              <p className='font-light text-[14px] line-clamp-1'>{location}</p>
          </div>
        </div>
        {
          isEditing &&(
            <FontAwesomeIcon icon={faTrashCan} 
              onClick={()=> {
                deleteHouse(id); 
                if(compareState.length==1){
                  setIsToggle(false);
                  setIsEditing(false);
                }
              }}
            className='text-[red] self-center text-[25px] cursor-pointer' />
          )
        }
      </div>
    )
  }

  return (
    <div className={`${compareState.length<1? "hidden":""} fixed bottom-0 w-full md:w-fit z-50 md:bottom-auto  md:top-[38%] md:right-0 bg-black text-white cursor-pointer`}>
      <div onClick={()=>{setIsToggle((prev)=> !prev); setIsEditing(false)}} 
        className='text-[16px] w-full md:w-fit flex justify-center md:justify-normal z-50 gap-[15px] 
        items-center py-[12px] md:py-[8px] bottom-0  md:px-[15px] '
      >
          <FontAwesomeIcon icon={faArrowRightArrowLeft} color='white' />
          <div className='text-center items-center flex gap-[5px]'>
              <p>({compareState.length}/4)</p>
              <FontAwesomeIcon icon={faChevronDown} color='white' className={`rotate-180 md:rotate-0 transition-all duration-75 ${isToggle? " md:rotate-180": ""} text-[10px]`} />
          </div>

      </div>

      <div 
        className={`flex flex-col gap-[15px] rounded-t-[6px] transition-all duration-150 ${isToggle? "block" : "hidden"} bg-white shadowFilter px-[10px] py-[10px] absolute bottom-[100%] w-[95%] inset-x-0
        mx-auto md:bottom-auto md:top-[100%] md:w-[500px] md:inset-x-auto md:right-0 md:rounded-none md:rounded-l-[6px] cursor-default`}>
        <button onClick={()=>setIsEditing((prev)=> !prev)} className='bg-[#bdbcbd] text-black font-medium w-fit ml-auto px-[8px] text-[14px] rounded-[3px]'>
          {isEditing? "Done": "Edit"}
        </button>
        {
          compareState.map((house, idx)=> <Item key={idx} id={house.id} image={house.coverPhoto} title={house.title} location={house.location.address + ", " + house.location.city} />)

        }
        <Link href={compareState.length>1 ? '/compare': ''} onClick={()=>{compareState.length>1 && setIsToggle(false)}} className={`${compareState.length>1? "bg-gold cursor-pointer" : "bg-gold/[0.5] cursor-default"} text-center py-[10px] text-white rounded-[5px]`}>
          Compare
        </Link>
      </div>

    </div>
  )
}

export default Compare