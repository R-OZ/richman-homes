"use client"
import Card from '@/components/Card'
import Filter from '@/components/Filter'
import React, { useState } from 'react'
import Pagination from '@/components/Pagination'
import grid1 from '@/public/images/grid1.png'
import grid2 from '@/public/images/grid2.png'
import list1 from '@/public/images/list1.png'
import list2 from '@/public/images/list2.png'
import Image from 'next/image'
import { dataList } from '@/dummyData/data'

const array = [...dataList, ...dataList,...dataList, ...dataList].splice(0, 24)

const page = () => {
  const [viewType, setViewType] = useState<0|1>(0) //0 for grid, 1 for list
  return (
    <div className='lg:pt-[52px] bg-[#f8f9fa]'>
        <section className=" px-[18px] py-[40px] bg-[url('../public/images/background.jpg')] bg-center bg-cover bg-no-repeat bg-blend-darken bg-black/[.38]
         lg:py-[90px] lg: lg:bg-fixed text-white">
          <h1 className='text-[35px] font-thin cardo-font text-center mt-[52px]'>PROPERTIES</h1>
        </section>

      <main className='px-[18px] py-[20px] xl:px-0 max-w-[1300px] mx-auto'>
        <Filter />

        <div className='hidden md:flex gap-[15px] py-[5px] rounded-[5px] mt-[30px] ml-auto w-fit px-[8px] bg-[#e9e9e9]'>
          <Image src={viewType == 0? grid1 : grid2} alt='grid-view' className='block h-[16px] w-auto cursor-pointer' onClick={()=>setViewType(0)} />
          <Image src={viewType == 1? list1 : list2} alt='list-view' className='block h-[16px] w-auto cursor-pointer' onClick={()=>setViewType(1)} />
        </div>

        <div 
          className={`mt-[40px] md:mt-[10px] grid grid-cols-1 gap-[30px]
          ${!viewType ? "md:grid-cols-2 md:gap-[40px] lg:grid-cols-3 xl:grid-cols-4" : "md:grid-cols-1 md:gap-[40px] xl:grid-cols-2"} `}>
          {
            array.map((item, idx)=> <Card key={idx} viewType={viewType} propertyInfo={item} customStyles=' w-full ' />)
          }
          
        </div>

        <Pagination />

      </main>
    </div>
  )
}

export default page