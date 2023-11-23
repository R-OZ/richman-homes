import womaan from '@/public/images/woman.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Image from 'next/image'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Agent = () => {
  return (
    <div className='mx-auto w-[300px] md:w-[280px] h-[270px] bg-slate-500 relative'>
        <Image src={womaan} alt='agent' className='h-full object-cover object-center' />
        <div className='absolute w-full bottom-0 text-white px-[8px] py-[5px] backdrop-blur-[5px] bg-gold/60'>
            <p>Helen Waterson</p>
            <p className='text-[13px]'>Agent</p>
            <div className='flex gap-[10px] mt-[5px]'>
                <FontAwesomeIcon icon={faLinkedin} color='white' />
                <FontAwesomeIcon icon={faEnvelope} color='white' />
            </div>
        </div>
    </div>
  )
}

export default Agent