"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faFilter } from '@fortawesome/free-solid-svg-icons'
import searchIcon from "@/public/images/search.png"
import Image from 'next/image'
import { transformString } from './Search'
import { useState } from 'react'


type DropSelectProps={
  label?: string,
  id: string,
  options: string[],
  initialValue: string,
  customStyles? : string
}

const locationOptions = ["Victoria Island", "Riverdale", "Queensville", "Metropolis", "Gotham", "New York"]
const propertyOptions = ["House", "Flat/Apartment", "Commercial Property", "Land", "Event Center/Venue"]
const bedroomOptions = ["1", "2", "3", "4", "5", "6+"]
const priceSortOptions = ["Price($): Low to High","Price($): High to Low"]
const priceOptions = ["500", "2,000", "3,000", "4,000", "5,000", "7,000", "10,000", "20,000", "50,000", "100,000", "500,000", "1 Million", "5 Milliion", "10 Million +"]
const servicingOptions =["Fully Serviced", "Partly Serviced", "Unserviced"]
const furnishingOptions =["Fully Furnished", "Partly Furnished", "Unfurnished"]


const Filter = () => {
  const [isToggle, setIsToggle] = useState(false)
  const DropSelect =({label, id, options, initialValue, customStyles} : DropSelectProps )=>{
    return(
      <div className={`w-full lg:w-fit py-[0px] text-purple relative ${customStyles}`}>
        <label htmlFor={id} className='text-gold text-[12.5px] block'>{label}</label>
        <select name="" id={id} className='w-full lg:w-fit block pr-[25px] text-[15px] appearance-none py-[3px] bg-transparent border-b-gray-300  border-b-[1px] lg:border-none cursor-pointer focus:outline-none'>

          <option defaultChecked value="">{initialValue}</option>
          {
            options.map((item, idx)=>(
                <option value={transformString(item)} key={idx}>
                    {item}
                </option>
            ))
          }
        </select>
        <FontAwesomeIcon icon={faChevronDown} size='2xs' color='#BF9C45' className='absolute bottom-[10px] my-auto right-[5px]'/>

      </div>
    )
  }
  return (
    <div 
      className={`filterHeight ${isToggle? "toggleFilterHeight":""} shadow-2xl overflow-hidden shadowFilter flex flex-col gap-[20px] rounded-[6px] px-[15px] py-[10px] bg-white w-[100%]
      lg:flex-row lg:justify-between lg:max-w-[900px] lg:mx-auto lg:sticky lg:top-[52px] lg:z-30 lg:flex-wrap`}>
        <DropSelect label='Location' id="location" options={locationOptions} initialValue="Location" />
        <DropSelect label='Property Type' id="property-type" options={propertyOptions} initialValue="Property Type" />
        <DropSelect label='Bedrooms' id="bedrooms" options={bedroomOptions} initialValue="Beds" />
        <DropSelect label='Price Sorting' id="price-sort" options={priceSortOptions} initialValue="Price($): Sort" />
        
        <button onClick={()=> setIsToggle((prev)=> !prev)} className='text-gold underline text-[15px] flex items-center cursor-pointer min-w-max lg:self-end'>
          <FontAwesomeIcon icon={faFilter} color='#BF9C45' />
          <span className='ml-[5px]'>{isToggle ? "Less Filters":"More Filters"}</span>
        </button>

        <div className='flex flex-col lg:flex-row gap-[20px] flex-grow lg:gap-[60px] '>
          <div>
            <p className='text-gold text-[12.5px]'>Price Range ($)</p>
            <div className="flex gap-[10px] w-full relative">
              <DropSelect id="minPrice" options={priceOptions} initialValue="Min Price" />
              <p className='font-bold'>-</p>
              <DropSelect id="maxPrice" options={priceOptions} initialValue="Max Price" />
            </div>
          </div>
          <DropSelect label='Service' id="servicing" options={servicingOptions} initialValue="Servicing" />
          <DropSelect label='Furnished' id="furnishing" options={furnishingOptions} initialValue="Furnishing" customStyles="border-none" />
          
          <button onClick={()=>window.scrollTo({ top: 0, behavior: 'smooth' })} className='bg-gold text-white rounded-[5px] py-[8px] px-[5px] lg:px-[10px] lg:h-fit lg:self-end lg:ml-auto'>
            <span className='lg:hidden'>Search</span>
            <Image src={searchIcon} alt="search" className="hidden lg:block w-[20px] h-fit cursor-pointer"/>
          </button>
        </div>
    </div>
  )
}
/*
DEFAULT
location
prop type
bedrooms
price sort
*/

/*
ADVANCED
price - min max
servicing
furnishing
keyword
*/

export default Filter