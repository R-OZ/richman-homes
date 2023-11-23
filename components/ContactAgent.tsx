import Image from "next/image"
import woman from '@/public/images/woman.jpg'

const ContactAgent = () => {
  return (
    <form action="">
        <div className="flex gap-[15px] items-center">
            <Image src={woman} alt='realtor' className="block w-[90px] h-[90px] object-cover object-top rounded-full" />
            <div className="text-[14px] flex flex-col gap-[5px]">
                <p className="font-medium">Jessica Stone</p>
                <p className="text-gold">Real estate broker</p>
                <p className="text-[12px]">j.stone@richmanhomes.com</p>
            </div>
        </div>

        <div className="mt-[25px] flex flex-col gap-[20px]">
            <input type="text" name="name" id="name" placeholder="Name" className="border-[1.5px] border-[#A09EA0] rounded-[5px] py-[8px] px-[10px] block w-full" />
            <input type="email" name="email" id="email" placeholder="Email" className="border-[1.5px] border-[#A09EA0] rounded-[5px] py-[8px] px-[10px] block w-full" />
            <input type="number" name="phoneNumber" id="phoneNumber" placeholder="Phone number" className="border-[1.5px] border-[#A09EA0] rounded-[5px] py-[8px] px-[10px] block w-full" />
            <textarea name="message" id="message" placeholder="Message..." className="block w-full h-[150px] border-[1.5px] border-[#A09EA0] rounded-[5px] py-[8px] px-[10px] bg-transparent focus:outline-none"></textarea>
            <button className="text-[18px] text-white bg-gold w-full py-[8px] rounded-[5px]">Submit</button>
        </div>
    </form>
  )
}

export default ContactAgent