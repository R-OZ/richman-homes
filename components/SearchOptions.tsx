"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

type RadioButtonProps={
    name: string,
    id: string,
    text: string
}
type SearchTypeOptionProps={
    text: string,
    value: string,
    customStyles?: string
}

const RadioButton =({name, id, text}: RadioButtonProps )=>{
    return(
        <label className=" flex gap-[5px] relative items-center">
            <input type="radio" name={name} id={id} className="peer absolute top-0 sr-only"/>
            <span className="gold-radio peer-checked:after:block"></span>
            <span className="peer-checked:text-white">{text}</span>
        </label>
    )
}



export const SearchType =()=>{
    const [searchType, setSearchType] = useState<string>("buy");
    
    const SearchTypeOption =({text, value, customStyles}: SearchTypeOptionProps)=>{
        return(
            <span onClick={()=>setSearchType(value)} className={` cursor-pointer flex-1 flex items-center justify-center ${searchType === value? "bg-gold": ""} ${customStyles}`}>
                {text}
            </span>
        )
    }
    return(
        <div className="bg-black/[.35] relative flex text-[20px] backdrop-blur-[2px] h-[44px]  text-white rounded-[12px] lg:w-[330px]">
            <SearchTypeOption text="Buy" value="buy" customStyles="rounded-tl-[12px] rounded-bl-[12px]" />
            <div className={`aboslute h-[28px] top-0 right-0 my-auto w-[1px] bg-[#929091] ${searchType==="buy" || searchType==="rent" ? "hidden":""}`} />
            <SearchTypeOption text="Rent" value="rent" />
            <div className={`aboslute h-[28px] top-0 my-auto w-[1px] bg-[#929091] ${searchType==="short-let" || searchType==="rent" ? "hidden":""}`} />
            <SearchTypeOption text="Short let" value="short-let" customStyles="rounded-tr-[12px] rounded-br-[12px]" />
        </div>
    )
}


export const AdvancedOptions = () => {
    const [isToggle, setIsToggle] = useState(false);
  return (
    <>
        <div  
            className="text-gold text-[14px] items-center flex gap-[5px] cursor-pointer"
            onClick={()=>setIsToggle((prev)=>!prev)}
        >
            {/* <Image src={settingsIcon} alt="settings" width={15} className={`settings ${isToggle? "rotate-icon":""}`}/> */}
            <FontAwesomeIcon icon={faGear} color="#BF9C45" size="1x" className={`settings ${isToggle? "rotate-icon":""}`} />
            <span className="lg:text-[16px]">Advanced Options</span>
        </div>

        <div className={`text-[#a2a2a2] flex flex-col gap-[15px] h-0 opacity-0 transition-all duration-500 ease-in-out ${isToggle? "opacity-100 h-[121px]":""}
            lg:flex-row lg:px-[10px] lg:py-[10px] lg:bg-black/[.35] lg:h-auto lg:w-fit lg:rounded-[8px] lg:gap-[20px] lg:relative`}>
            <div>
                <p className="text-gold w-full block text-[14px] mb-[3px]">Serviced</p>
                <div className="flex gap-[20px]">
                    <RadioButton name="serviced" id="fully-serviced" text="Fully" />
                    <RadioButton name="serviced" id="partly-serviced" text="Partly" />
                    <RadioButton name="serviced" id="unserviced" text="Unserviced" />
                </div>
            </div>
            <div className="aboslute h-[40px] top-0 right-0 my-auto w-[1px] bg-[#929091]" />
            <div>
                <p className="text-gold w-full block text-[14px] mb-[3px]">Furnished</p>
                <div className="flex gap-[20px]">
                    <RadioButton name="furnished" id="fully-furnished" text="Fully" />
                    <RadioButton name="furnished" id="partly-furnished" text="Partly" />
                    <RadioButton name="furnished" id="unfurnished" text="Unfurnished" />
                </div>
            </div>
            
        </div>
    </>
  )
}


