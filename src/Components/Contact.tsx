import { Button, Input } from "@nextui-org/react"
import axios from "axios";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import toast, { Toaster } from "react-hot-toast";
import {Select,  SelectItem} from "@nextui-org/react";
import { BASE_URI } from "./Constant";



const Contact = () => {
    const [name , setName] = useState<string>("");
    const [email , setEmail] = useState<string>("");
    const [lastName , setLastName ] = useState<string>("")
    const [phone , setPhone] = useState<string>("");
    const [country , setCountry] = useState<string>("");
    const [etablishment , setEtablishment] = useState<string>("");
    const [title , setTitle] = useState<string>("");
    const [academic , setAcademic] = useState<string>("");
    const [status , setStatus] = useState<string>(""); 
    const [file , setFile] = useState<string | Blob >();
 

    const handleSendToServer = async () => {
        try {
            const formData = new FormData();
            formData.append("file",file as File);
            formData.append("firstName" ,name );
            formData.append("email",email);
            formData.append("lastName",lastName);
            formData.append("phone",phone);
            formData.append("country", country);
            formData.append("etablishment" , etablishment);
            formData.append("title",title);
            formData.append("academic",academic);
            formData.append("status",status);

            const {data} = await axios.post(BASE_URI+"/register" , formData);
            console.log(data);
            toast.success("your data has been sent successfully");
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div  id="register" className="w-full flex flex-col justify-center items-center container ">
        <h1 className="font-medium text-5xl my-3 py-4 develus">{"Register".toUpperCase()}</h1>
        <Toaster />
        <div className="w-[1000px] p-6 rounded-2xl min-h-[200px] border-2 border-gray-500">
            <Fade  cascade damping={0.2}>
                <div className="flex flex-row justify-center items-center">
                    <div className="w-full">
                    <Input isRequired value={email} onChange={(e :any) => setEmail(e.target.value)} type="email" variant="underlined" color="primary" placeholder="Enter Your email " className="w-[80%] my-2 text-xl text-black" size="lg"/>
                    <Input isRequired value={name} onChange={(e : any) => setName(e.target.value)} type="text" variant="underlined" color="primary" size="lg" placeholder="Enter Your firstName " className="w-[80%] text-black my-2"/>
                    <Input isRequired value={lastName} onChange={(e : any) => setLastName(e.target.value)} type="text" variant="underlined" color="primary" size="lg" placeholder="Enter Your lastName " className="w-[80%] text-black my-2"/>
                    <Input isRequired value={phone} onChange={(e :any) => setPhone(e.target.value)} type="tel"  variant="underlined" color="primary" size="lg" placeholder="Enter Your phone " className="w-[80%] text-black my-2"/>
                    <label  className="w-full ml-28 mt-2">Choose a rar file</label>
                    <Input isRequired  onChange={
                        (e: React.ChangeEvent<HTMLInputElement>) => {
                            if (e.target.files && e.target.files.length > 0) {
                                setFile(e.target.files[0]);
                            }
                        }
                    } type="file" variant="underlined" color="primary"  size="lg" className="w-[80%] my-2  text-black  border-none "/>
                    </div>

                    <div className="w-full">
                    <Input value={country} isRequired onChange={(e: any) => setCountry(e.target.value)} type="tel"  variant="underlined" color="primary" size="lg" placeholder="Enter Your Country " className="w-[80%] text-black my-2"/>
                    <Input value={etablishment} isRequired onChange={(e: any) => setEtablishment(e.target.value)} type="tel"  variant="underlined" color="primary" size="lg" placeholder="Enter Your Establishment " className="w-[80%] text-black my-2"/>
                    <Input value={title} isRequired onChange={(e: any) => setTitle(e.target.value)} type="tel"  variant="underlined" color="primary" size="lg" placeholder="Enter Your Title " className="w-[80%] my-2 text-black"/>
                    <Select
                        isRequired
                        label="choose an option"
                        placeholder="Select a state"
                        className="my-2  text-black "
                        variant="underlined"
                        color="primary"
                        onChange={(e :any )=> setStatus(e.target.value)}
                        >
                        <SelectItem key={"Professor"}  className="text-black" value={"Professor"}>Professor</SelectItem>
                        <SelectItem key={"student"}  className="text-black" value={"Student"}>Student</SelectItem>
                        <SelectItem key={"others"}  className="text-black" value={"Others"}>Others</SelectItem>
                       
                        </Select>
                    <Input value={academic} onChange={(e :any) => setAcademic(e.target.value)} type="tel"  variant="underlined" color="primary" size="lg" placeholder="Enter Your Academic " className="w-[80%] text-black my-2"/>

                    <Button className="custom-bg text-xl px-7 py-5 rounded bg-gray-700 text-gray-400 my-4" onPress={handleSendToServer}>Send</Button>
                    </div>
                </div>
            </Fade>
        </div>
    </div>
  )
}

export default Contact;