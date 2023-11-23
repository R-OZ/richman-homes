type TextInputProps = {
    label: string,
    id: string,
    type: "email" | "text",
    customStyles?: string
}

type RadioInputProps = {
    label: string,
    radioName: string,
    options: string[] 
}

const TextInput =({ label, id, type, customStyles } : TextInputProps)=>{
    return(
        <div className={`${customStyles}`}>
            <label htmlFor={id} className="block text-[14px]">{label}</label>
            <input className="block w-[100%] bg-transparent py-[4px] focus:outline-none border-b-white border-b-[1px]" type={type} id={id}/>
        </div>
    )
}
const RadioInput =({ label, radioName, options }: RadioInputProps) =>{
    return(
        <div className="flex gap-[20px]">
            <label htmlFor="radioName">{label}:</label>
            <div className="flex gap-[30px]">
                {
                    options.map((item, idx)=>(
                        <label key={idx} className="relative">
                            <input type="radio" name={radioName} value={item.toLocaleLowerCase()}
                                className=" peer absolute sr-only" />
                            <span className="relative h-[14px] w-[14px] mr-[3px] inline-block rounded-full border-[1px] border-white after:hidden after:absolute peer-checked:after:block 
                                after:rounded-full after:w-[60%] after:h-[60%] after:top-0 after:bottom-0 after:m-auto after:left-0 after:right-0  after:bg-white"></span>
                            <span>{item}</span>
                        </label>
                    ))
                }
            </div>
        </div>
    )
}

const InquiryForm = () => {
  return (
    <div className="text-white z-[2] relative max-w-[500px] m-auto lg:m-0 lg:mr-auto ">
        <h1 className="font-thin text-[20px]">Want to Make a Special Enquiry?</h1>

        <form action="" className="mt-[20px] flex flex-col gap-[40px]">
            <div className="flex flex-col md:flex-row gap-[40px] md:gap-0 md:justify-between">
                <TextInput label="First Name" id="fName" type="text" customStyles="md:w-[45%]" />
                <TextInput label="Last Name" id="lName" type="text" customStyles="md:w-[45%]"/>
            </div>
            <TextInput label="Email" id="email" type="email" />
            <RadioInput label="Interested in" radioName="interest" options={[ "Property", "Land" ]} />
            <RadioInput label="Payment plan" radioName="payment" options={[ "Buy", "Rent", "Other" ]} />
            <div>
                <label htmlFor="message">Message:</label>
                <textarea name="message" id="message" className="mt-[5px] block w-full h-[150px] border-b-white rounded-bl-[8px] rounded-br-[8px] border-b-[1px] bg-transparent focus:outline-none"></textarea>
            </div>
            <button className="-mt-[15px] bg-[#D6B051] text-[18px] py-[10px] rounded-[6px]">
                Submit
            </button>
        </form>

    </div>
  )
}

export default InquiryForm