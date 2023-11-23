"use client"
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const pages =[1,2,3,4,5]
const Pagination = () => {
    const [activePage, setActivePage] = useState<number>(1);

    useEffect(() => {
        // Scroll to the top of the page whenever activePage changes
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [activePage]);

  return (
    <div className="mt-[40px] w-fit  mx-auto flex gap-[15px] items-center">
        <FontAwesomeIcon 
            icon={faChevronLeft} size='lg' color='#1B2137' 
            className='cursor-pointer'
            onClick={()=>{
                if(activePage>1){
                    setActivePage((prev)=>prev-1);

                }
            }}
            />
        
        <div className='flex'>
            {
                pages.map((page, idx)=> (
                    <span key={idx} onClick={()=>setActivePage(page)} className={`${activePage == page? "text-purple":"text-[#aeaeae]"} font-medium text-[20px] px-[8px] cursor-pointer`}>
                        {page}
                    </span>
                ))
            }          
        </div>

        <FontAwesomeIcon 
            icon={faChevronRight} size='lg' color='#1B2137' 
            className='cursor-pointer'
            onClick={()=>{
                if(activePage<5){
                    setActivePage((prev)=>prev+1)
                }
            }} 
            />
    </div>
  )
}

export default Pagination