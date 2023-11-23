"use client"
import { PropertyData } from "@/dummyData/data"
import { useAppSelector } from "@/redux/store";
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const Page = () => {
  const compareState = useAppSelector((state)=> state.compare.value);
  // console.log("DATA LIST==>", compareState)

  function TableHead({imageList} : {imageList: string[]}){
    return(
      <tr>
        <th className=" w-[180px]"></th>
        {
          imageList.map((item, idx)=> 
            <th key={idx} className="relative h-[150px] w-[200px] md:h-[200px] md:w-[300px] lg:w-[350px]">
              <Image src={item} fill={true} alt="property-compare-item" className="object-cover object-center" />
              <p></p>
            </th>)
        }
      </tr>
    )
  }

  function arrayByKey(key: keyof PropertyData | keyof PropertyData['amenities']){
    if (key in compareState[0]?.amenities){
      const keyType = key as keyof PropertyData['amenities']
      return compareState.map((item)=>item.amenities[keyType])
    }
    else{
      const keyType = key as keyof PropertyData
      return compareState.map((item)=>item[keyType])
    }
  }

  function trueFalseIcon(value: Boolean){
    return(
      <FontAwesomeIcon icon={value ? faCircleCheck: faCircleXmark} color={value? '#BF9C45': 'red'} className="text-[20px]" />
    )
  }
  
  function TableRow({feature, compareValues}:{feature: string, compareValues: any[]}){
    return(
      <tr className="border-b-[1.5px] border-gray-300">
        <td className="font-semibold px-[15px] py-[12px] border-r-[1.5px] bg-white z-3 border-gray-300 sticky left-[0]">{feature}</td>
        {
          compareValues.map((value, idx)=>{
            if(typeof value == "boolean"){
              return(
                <td key={idx} className="px-[6px] py-[12px] text-center">{trueFalseIcon(value)}</td>
              )
            }
            else if(typeof value === "number"){
              return(
                <td key={idx} className="px-[6px] py-[12px] text-center" >{feature=="Price ($)"&&"$"}{value.toLocaleString()} {feature==="Land size" ? "Sq Ft." :""}</td>
              )
            }
            else{
              return(
                <td key={idx} className="px-[6px] py-[12px] text-center">{value}</td>
              )
            }
          })
        }
      </tr>

    )
  }

  return (
    <div className="bg-[#fbfbfb]">
        <section className=" px-[18px] py-[40px] bg-[url('../public/images/background.jpg')] bg-center bg-cover bg-no-repeat bg-blend-darken bg-black/[.38]
        lg:py-[90px] lg: lg:bg-fixed text-white">
          <h1 className='text-[35px] font-thin cardo-font text-center mt-[52px]'>COMPARE</h1>
      </section>

      <main className=' px-[18px] py-[20px] xl:px-0 max-w-[1300px] mx-auto'>
        {
          compareState.length<2?
            <h1 className="h-[70vh] text-[30px] cardo-font w-full  text-purple flex items-center justify-center">No Properties to Compare</h1>
          :
            (
          <div className="mx-auto w-fit max-w-full overflow-x-auto shadow-2xl rounded-[6px] bg-white">
            <table className="group/cTable w-max ">
              <thead className="border-b-[1px] border-gray-300">
                <TableHead imageList={compareState.map((item)=>item.coverPhoto)} />
              </thead>
              <tbody>
                <TableRow feature="Price ($)" compareValues={arrayByKey('price')} />
                <TableRow feature="Type" compareValues={arrayByKey('propertyType')} />
                <TableRow feature="Status" compareValues={arrayByKey('type')} />
                <TableRow feature="Year Built" compareValues={arrayByKey('yearBuilt')} />
                <TableRow feature="Bedrooms" compareValues={arrayByKey('beds')} />
                <TableRow feature="Bathrooms" compareValues={arrayByKey('baths')} />
                <TableRow feature="Car parking" compareValues={arrayByKey('cars')} />
                <TableRow feature="Land size" compareValues={arrayByKey('size')} />
                <TableRow feature="Swimming Pool" compareValues={arrayByKey('swimmingPool')} />
                <TableRow feature="Gym" compareValues={arrayByKey('gym')} />
                <TableRow feature="Cinema" compareValues={arrayByKey('cinema')} />
                <TableRow feature="Smart home" compareValues={arrayByKey('smartHome')} />
                <TableRow feature="Air Conditioning" compareValues={arrayByKey('airCondition')} />
                <TableRow feature="Balcony" compareValues={arrayByKey('balcony')} />
                <TableRow feature="Wahser" compareValues={arrayByKey('washer')} />
                <TableRow feature="Dryer" compareValues={arrayByKey('dryer')} />
                <TableRow feature="Refridgerator" compareValues={arrayByKey('refrigerator')} />
                <TableRow feature="TV Cable" compareValues={arrayByKey('tvCable')} />
                <TableRow feature="Wifi" compareValues={arrayByKey('wifi')} />
                <TableRow feature="Sauna" compareValues={arrayByKey('sauna')} />
                <TableRow feature="Football" compareValues={arrayByKey('football')} />
                <TableRow feature="Basketball" compareValues={arrayByKey('basketball')} />
                <TableRow feature="Tennis" compareValues={arrayByKey('tennis')} />
                <TableRow feature="Golf" compareValues={arrayByKey('golf')} />
                <TableRow feature="Playground" compareValues={arrayByKey('playground')} />
                <TableRow feature="Servicing" compareValues={arrayByKey('servicing')} />
                <TableRow feature="Furnishing" compareValues={arrayByKey('furnishing')} />

              </tbody>
            </table>
          </div>
            )
        }
        
      </main>
    </div>
  )
}

export default Page

