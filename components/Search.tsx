import {SearchType, AdvancedOptions} from "./SearchOptions";
import Image from "next/image";
import downArrow from "@/public/images/downArrow.png";
import searchIcon from "@/public/images/search.png"
import Link from "next/link";

type dropSelectProps={
    id: string,
    text: string,
    options: string[],
    initialValue: string,
    customStyles?: string
};
type SearchTypeProps={
    name: string,
    id: string,
    text: string
}

const locationOptions = ["Victoria Island", "Riverdale", "Queensville", "Metropolis", "Gotham", "New York"]
const propertyOptions = ["House", "Flat/Apartment", "Commercial Property", "Land", "Event Center/Venue"]
const bedroomOptions = ["1", "2", "3", "4", "5", "6+"]
const priceOptions = ["500", "2,000", "3,000", "4,000", "5,000", "7,000", "10,000", "20,000", "50,000", "100,000", "500,000", "1 Million", "5 Milliion", "10 Million +"]

export function transformString(input: string) {
    const lowercase = input.toLowerCase();
    const hyphenated = lowercase.replace(/\s+/g, '-');
    return hyphenated;
  }

const DropSelect = ({id, text, options, initialValue, customStyles }: dropSelectProps )=>{
    return(
        <div className={customStyles}>
            <label htmlFor={id} className={`text-gold w-full block text-[14px] ${text==="Price"? "hidden": ""}`}>
                {text}
            </label>
            <div className="relative ">
                <select name={id} className="block w-full px-[2px] py-[3px] bg-transparent 
                    text-white outline-none border-b-[1px] rounded-br-[5px] rounded-bl-[5px] 
                    border-[#aaaaaa] appearance-none relative
                    lg:border-[2px] lg:rounded-[6px] lg:px-[8px] lg:pr-[18px]" 
                    id={id}
                >
                    <option defaultChecked value="">{initialValue}</option>
                    {
                        options.map((item, idx)=>(
                            <option value={transformString(item)} key={idx}>
                                {item}
                            </option>
                        ))
                    }
                </select>
                <Image src={downArrow} width={18} className="absolute top-[8px] right-[3px]" alt=""/>

            </div>
        </div>
    )

}


const Search = () => {
  return (
    <form className="mt-[20px] mx-auto max-w-[600px] lg:max-w-[900px]">
        <SearchType />

        <div className="mt-[15px] bg-black/[.3] backdrop-blur-[1.5px] flex flex-col gap-[25px] rounded-[12px] px-[15px] pt-[10px] pb-[10px]
            lg:flex-row lg:justify-between">
            <DropSelect id="location" text="Location" options={locationOptions} initialValue="All"/>
            <DropSelect id="property-type" text="Property Type" options={propertyOptions} initialValue="All"/>
            <DropSelect id="bedrooms" text="Bedrooms" options={bedroomOptions} initialValue="All"/>
            <div>
                <p className="text-gold w-full block text-[14px]">Price ($)</p>
                <div className="flex justify-between w-full
                lg:gap-[10px] lg:justify-normal">
                    <DropSelect id="minPrice" text="Price" options={priceOptions} initialValue="Min" customStyles="w-[40%]"/>
                    <span className="block text-white font-bold">-</span>
                    <DropSelect id="maxPrice" text="Price" options={priceOptions} initialValue="Max" customStyles="w-[40%]"/>
                </div>
            </div>
            
            <div className=" flex flex-col gap-[13px] lg:hidden">
                <AdvancedOptions />
            </div>

            <Link href={'/properties'} className="text-white text-[20px] text-center bg-gold py-[6px] rounded-[7px]
                lg:py-0 lg:pt-[0] lg:flex lg:flex-col lg:justify-end lg:bg-transparent">
                <span className="lg:hidden">Search</span>

                <div className="lg:bg-gold lg:px-[17px] lg:py-[7px] rounded-[5px]">
                    <Image src={searchIcon} height={20} alt="search" className="hidden lg:block " />
                </div>
            </Link>
        </div>

        <div className="hidden lg:flex flex-col gap-[10px] mt-[20px]">
            <AdvancedOptions />
        </div>

    </form>
  )
}

export default Search