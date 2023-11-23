import MiniNav from "@/components/MiniNav"
import PropertyImageCoursel from "@/components/PropertyImageCoursel"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Amenities, AmenitiesProp, Location, PropertyIconProps, keyToString } from "@/utils/miniServerComponents";
import {data} from '@/dummyData/data';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsUpDownLeftRight, faBath, faBed, faCarRear } from "@fortawesome/free-solid-svg-icons";
import ContactAgent from "@/components/ContactAgent";

type TagProps ={
    type: "Buy" | "Rent" | "Short let",
    propertyType: "House"| "Flat/Apartment"| "Commercial Property"| "Land"| "Event Center/Venue"
}

const PropertyIcon = ({type, text, value}: PropertyIconProps)=>{
    const ICONS ={
        beds: faBed,
        cars: faCarRear,
        size: faArrowsUpDownLeftRight,
        baths: faBath
    }
    return(
        <div className="flex gap-[5px] items-center rounded-[6px] bg-[#e7e7e7] px-[10px] py-[3px]">
            <FontAwesomeIcon icon={ICONS[type]} color='#BF9C45' className='text-[16px]'/>
            <span className='text-[14px]'>{value?.toLocaleString()} {type=="size"? "Sq Ft.":""} {text}</span>
        </div>

    )
    }
const Property = () => {
    const Tags =({type, propertyType}:TagProps)=>{
        return(
            <div className="mt-[20px] text-[14px] flex gap-[10px] text-white font-medium">
                <p className="px-[8px] py-[2px] bg-gold rounded-[4px]">{type}</p>
                <p className="px-[8px] py-[2px] bg-gold rounded-[4px]">{propertyType}</p>
            </div>
        )
    }

  return (
    <div className="">
    <main className='px-[18px] py-[20px] xl:px-0 max-w-[1300px] mx-auto relative'>
        <MiniNav title={data.title}/>
        <Tags type={data.type} propertyType={data.propertyType} />

        <div className="mt-[15px] flex flex-col gap-[10px] lg:flex-row lg:justify-between">
            <div>
                <h1 className="font-semibold text-[24px] text-purple">Villa Exquise de la Reine</h1>
                <Location text={data.location.address + ", " + data.location.city} customStyles="text-purple -mt-[3px]" />
            </div>

            <p className="font-semibold text-gold text-[22px]">$2,300,000</p>
        </div>

        <PropertyImageCoursel />

        <div className="flex flex-col gap-[30px] lg:flex-row">
            <div className=" lg:w-[70%]">
                <div className="shadowFilter  py-[15px] rounded-[5px]">
                <div className="flex gap-[12px] px-[12px] flex-wrap">
                    <PropertyIcon type="beds" value={data.beds}  />
                    <PropertyIcon type="baths" value={data.baths}  />
                    <PropertyIcon type="size" value={data.size}  />
                    <PropertyIcon type="cars" value={data.cars}  />
                </div>
                <h2 className="font-medium mt-[18px] mb-[8px] text-[20px] px-[12px]">Overview</h2>
                <p className="text-gray-600 px-[12px]">{data.description}</p>

                <div className="mt-[20px] px-[12px] border-t-[1px] border-dotted border-[#afafaf] relative">
                    <h2 className="font-medium mt-[20px] mb-[8px] text-[20px]">Details</h2>
                    <div className="grid grid-cols-2  gap-y-[15px] text-[15px] w-[300px]">
                        <p>Property ID:</p>
                        <p className="font-medium">{data.id}</p>
                        <p>Lot area size:</p>
                        <p className="font-medium">{data.size} Sq Ft.</p>
                        <p>Bedrooms:</p>
                        <p className="font-medium">{data.beds}</p>
                        <p>Car parking:</p>
                        <p className="font-medium">{data.cars}</p>
                        <p>Servicing:</p>
                        <p>{data.servicing}</p>
                        <p>Furnishing:</p>
                        <p>{data.furnishing}</p>
                        <p>Price ($):</p>
                        <p className="font-medium">${data.price.toLocaleString()}</p>
                        <p>Year built:</p>
                        <p className="font-medium">{data.yearBuilt}</p>
                    </div>

                </div>
                </div>

                <div className="shadowFilter px-[12px] py-[15px] rounded-[5px] mt-[30px]">
                    <h2 className="font-medium mb-[8px] text-[20px]">Amenities</h2>  
                    <div className=" mt-[15px] grid grid-cols-2 md:grid-cols-3 gap-y-[15px] gap-x-[10px]">
                        {
                            Object.keys(data.amenities).map((item, idx)=>{
                                const itemType = item as AmenitiesProp['amenityType'];
                                if(data.amenities[itemType]){
                                    return <Amenities key={idx} amenityType={itemType} />
                                }
                                return null
                            })
                        }
                    </div>
                </div>

                <div className="shadowFilter px-[12px] py-[15px] rounded-[5px] mt-[30px]">
                    <h2 className="font-medium mb-[8px] text-[20px] text-red-500">Property Video</h2>
                    <iframe 
                        width=""
                        className="w-full h-[310px] lg:h-[400px] rounded-[5px]"
                        src="https://www.youtube.com/embed/WcIcVapfqXw?si=0_a8-4X90swHNPVU" 
                        title="YouTube video player" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div> 
            </div>

            <div className="shadowFilter px-[12px] py-[15px] rounded-[5px] h-fit lg:sticky lg:top-[52px] lg:flex-grow">
                <h2 className="font-medium mb-[15px] text-[20px]">Contact Us</h2>
                <ContactAgent />
            </div>
        </div>
       


        {/* <div className="shadowFilter px-[8px] py-[15px] rounded-[5px] mt-[30px]">
        <h2 className="font-medium mb-[10px] text-red-500 text-[20px]">Similar Listings</h2>
        <div className="w-[338px] mx-auto md:w-[650px] lg:w-[950px] xl:max-w-[1250px] xl:w-[95%]">
            <Carousel />
          </div>
        </div> */}


        

    </main>
    </div>
  )
}

export default Property