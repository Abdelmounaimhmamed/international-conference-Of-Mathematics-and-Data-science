import { Button, Input } from "@nextui-org/react"
import { useState } from "react";
import { Fade } from "react-awesome-reveal";

const Contact = () => {
    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [lastName , setLastName ] = useState('');
    const [phone , setPhone] = useState('');

    const [file , setFile] = useState<File | null>();
    console.log(file);

  return (
    <div id="ContactUs" className="w-full flex flex-col justify-center items-center container my-3">
        <h1 className="font-medium text-5xl my-7 py-4 develus">Register</h1>
        <div className="w-[600px] rounded-2xl min-h-[200px] border-2 border-gray-500">
            <Fade className="w-full" cascade damping={0.2}>
                <div className="flex flex-col justify-center items-center">
                    <Input value={email} onChange={(e : React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} type="email" variant="underlined" color="primary" placeholder="Enter Your email " className="w-[80%] my-2 text-xl" size="lg"/>
                    <Input value={name} onChange={(e : React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} type="text" variant="underlined" color="primary" size="lg" placeholder="Enter Your firstName " className="w-[80%] my-2"/>
                    <Input value={lastName} onChange={(e : React.ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)} type="text" variant="underlined" color="primary" size="lg" placeholder="Enter Your lastName " className="w-[80%] my-2"/>
                    <Input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel"  variant="underlined" color="primary" size="lg" placeholder="Enter Your phone " className="w-[80%] my-2"/>
                    <label className="w-full ml-28 mt-2">Choose a rar file</label>
                    <Input  onChange={
                        (e: React.ChangeEvent<HTMLInputElement>) => {
                            if (e.target.files && e.target.files.length > 0) {
                                setFile(e.target.files[0]);
                            }
                        }
                    } type="file" variant="underlined" color="primary"  size="lg" className="w-[80%] my-2 text-gray-300  border-none "/>
                    <Button className="custom-bg text-xl px-7 py-5 rounded bg-gray-700 text-gray-400 my-4">Send</Button>
                </div>
            </Fade>
        </div>
    </div>
  )
}

export default Contact;