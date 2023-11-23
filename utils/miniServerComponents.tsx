import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLocationDot, faCheck,} from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';

export type PropertyIconProps ={
    type: "beds" | "cars" | "size" | "baths",
    text?: string,
    value?: number
}
export type AmenitiesProp={
    amenityType: "swimmingPool" | "gym" | "cinema" | "smartHome" | "airCondition" | "balcony" | "washer" | "dryer" | "refrigerator" | "tvCable" | "wifi" | "gamingConsole" | "sauna" | "football" | "basketball" | "tennis" | "golf" | "playground";
}
export function keyToString(input:string):string{
    const word = input.replace(/([a-z])([A-Z])/g, '$1 $2');
    const text = word.toLowerCase()
    return text.charAt(0).toUpperCase() + text.slice(1);
}

export const ViewMore =()=>{
    return(
        <div className='w-fit px-[10px] bg-gold text-white rounded-[8px]'>
            View More
        </div>
    )
}

export const Location = ({text, customStyles}:{text:string, customStyles?:string})=>{
    return(
        <div className={`flex gap-[3px] items-center ${customStyles}`}>
            <FontAwesomeIcon icon={faLocationDot} size='sm' />
            <p className='font-light text-[14px]'>{text}</p>
        </div>
)
}

export const Amenities =({amenityType}: AmenitiesProp)=>{
    return(
       <div className='flex gap-[8px] items-center w-fit'>
        <FontAwesomeIcon icon={faCircleCheck} color='#BF9C45' className='text-[18px]'/>
        <span className='block'>{keyToString(amenityType)}</span>
       </div>
    )
}

