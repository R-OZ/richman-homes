import Image from 'next/image'
import fireImg from '@/public/images/fire.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faBed, faBath, faCarRear, faArrowsUpDownLeftRight} from '@fortawesome/free-solid-svg-icons'
import { CompareButton } from '@/utils/miniClientComponents'
import { PropertyData } from '@/dummyData/data'
import Link from 'next/link'

type CardIconsProps={
    type: "beds"|"cars"|"size"|"baths",
    value: string | number,
    customStyles?: string
}
function iconType(text:string){
    switch (text) {
        case "beds":
            return faBed
            break;
        case "cars":
            return faCarRear
            break;
        case "size":
            return faArrowsUpDownLeftRight
            break;
        case "baths":
            return faBath
            break;
        default:
            return faBath
            break;
    }
}
export const CardIcons =({type, value, customStyles}: CardIconsProps)=>{
    return(
        <div className={customStyles}>
            <FontAwesomeIcon icon={iconType(type)} style={{rotate: type==="size"?"45deg":""}} size='lg' color='#A09EA0'/>
            <p className='text-[14px] font-medium'>{value}</p>
            <p className='text-[14px] font-medium'>{type!=="size"? type.charAt(0).toUpperCase() + type.slice(1): "Sq Ft."}</p>
        </div>
    )
}
const Card = ({propertyInfo, viewType=0, customStyles}:{propertyInfo:PropertyData, viewType?: 0|1, customStyles?:string}) => {
  return (
    <>
    {
    viewType === 0?(
    <div className={`w-[268px] h-[380px] shadowCard bg-white ${customStyles}`}>
        <Link href={'/properties/dummy'}>
        <div className='h-[45%] relative overflow-hidden'>
            <Image src={propertyInfo.coverPhoto} fill={true} alt='house' className='h-[100%] z-1 object-cover object-center transition-all duration-300 lg:hover:scale-[1.2] cursor-pointer'/>
            <span className='absolute top-0 right-0 z-8 px-[4px] py-[5px] rounded-bl-[12px]  bg-[#CCA649]'>
                <Image src={fireImg} alt='hot property icon' className='w-[17px] h-[17px]'/>
            </span>
            <span className='absolute bottom-0 bg-red-600 text-white px-[13px] py-[2px] text-[13px]'>{propertyInfo.type}</span>
            
        </div>
        </Link>
        <div className='px-[13px] py-[8px] text-[#313041]'>
            <Link href={'/properties/dummy'}>
            <p className='text-[17px] font-medium'>{propertyInfo.title}</p>
            <div className='flex gap-[3px] items-center -mt-[5px]'>
                <FontAwesomeIcon icon={faLocationDot} size='sm' />
                <p className='font-light text-[14px]'>{propertyInfo.location.address + ", " + propertyInfo.location.city}</p>
            </div>
            </Link>
            <p className='text-red-500 text-[13px] mt-[6px]'>{propertyInfo.propertySubType}</p>
            <div className='flex justify-between'>
                <p className='text-[18px] '>${propertyInfo.price.toLocaleString()}</p>
                <CompareButton propertyInfo={propertyInfo} />
            </div>

            <div className='bg-[#E2E0E2] h-[1px] my-[12px]'/>
            
            <div className='flex justify-between'>
                <CardIcons type='beds' value={propertyInfo.beds} />
                <CardIcons type='baths' value={propertyInfo.baths} />
                <CardIcons type='size' value={propertyInfo.size.toLocaleString()} />
                <CardIcons type='cars' value={propertyInfo.cars} />

            </div>
        </div>
    </div>
   
    ) :(
    
    <div className={` rounded-[6px] bg-white flex h-[200px] shadowCard ${customStyles}`}>
        <div className='w-[40%] rounded-tl-[inherit] rounded-bl-[inherit] relative overflow-hidden'>
        <Link href={'/properties/dummy'}>
            <Image src={propertyInfo.coverPhoto} fill={true} alt='house' className='h-[100%] z-1 object-cover object-center transition-all duration-300 lg:hover:scale-[1.2] cursor-pointer'/>
            <span className='absolute top-0 right-0 z-8 px-[4px] py-[5px] rounded-bl-[12px]  bg-[#CCA649]'>
                <Image src={fireImg} alt='hot property icon' className='w-[17px] h-[17px]'/>
            </span>
            <span className='absolute bottom-0 bg-red-600 text-white px-[13px] py-[2px] text-[13px]'>{propertyInfo.type}</span>
        </Link>
            
        </div>
        <div className=' rounded-[inherit] w-[60%] px-[13px] py-[8px] text-[#313041]'>
            <Link href={'/properties/dummy'}>
            <p className='text-[17px] font-medium'>{propertyInfo.title}</p>
            <div className='flex gap-[3px] items-center -mt-[5px]'>
                <FontAwesomeIcon icon={faLocationDot} size='sm' />
                <p className='font-light text-[14px]'>{propertyInfo.location.address + ", " + propertyInfo.location.city}</p>
            </div>
            </Link>
            <p className='text-red-500 text-[13px] mt-[6px]'>{propertyInfo.propertySubType}</p>
            <p className='text-[14px] my-[5px] italic line-clamp-2 text-gray-600'>
                {propertyInfo.description}
            </p>
            <div className='flex justify-between'>
                <p className='text-[18px] '>${propertyInfo.price.toLocaleString()}</p>
                <CompareButton propertyInfo={propertyInfo}/>
            </div>

            <div className='bg-[#E2E0E2] h-[1px] my-[8px]'/>
            
            <div className='flex justify-between '>
                <CardIcons type='beds' value={propertyInfo.beds} customStyles='flex gap-[3px]'/>
                <CardIcons type='baths' value={propertyInfo.baths} customStyles='flex gap-[3px]'/>
                <CardIcons type='size' value={propertyInfo.size.toLocaleString()}  customStyles='flex gap-[3px]'/>
                <CardIcons type='cars' value={propertyInfo.cars}  customStyles='flex gap-[3px]'/>
            </div>
        </div>
    </div>
    )
    }
    </>
    
  )
}

export default Card