import { Button, Input } from "@nextui-org/react"
import NavBarAdmin from "./NavBarAdmin"
import { Fade } from "react-awesome-reveal"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { BASE_URI } from "./Constant";




const Profile = () => {
  const user = useState(JSON.parse(localStorage.getItem("admin") || ""));
  console.log(user);
  const [email , setEmail] = useState<string>("");

  const navigate = useNavigate();

  const fetchMe = async (id : number) => {
    try {
        const {data}= await axios.get(BASE_URI+"/getMe/"+id);
        console.log(data);
        setEmail(data.email);
    } catch (error) {
        console.log(error);
    }
  }
  const updateMe = async (id : number) => {
    try {
        const {data}  = await axios.post(BASE_URI+"/updateMe/"+id, {email });
        fetchMe(id);
        toast.success("profile has been updated !");
        console.log(data);
    } catch (error) {
        console.log(error);
    }
  }
  
  useEffect(() => {
      if(user === null || !user){
        navigate("/login");
      }else {
        fetchMe(user[0].id);
      }
  },[axios]) 
  return (
   
        <div>
            <div className='custom-class'></div>
            <Toaster />
                <div  className="w-full h-[100vh] ">
                    <div className="grid grid-cols-4 grid-flow-col ">
                        <div className=" bg-gray col-span-1 w-full h-[100vh] bg-black ">
                        <NavBarAdmin />
                        </div>
                        <div className=" col-span-3  w-full rounded-xl">
                            <Fade>
                                <div className='w-full flex flex-col justify-center items-center '>
                                    <h1 className='w-[90%] text-black bg-gray-300 p-3 rounded-xl text-xl text-center my-10 font-bold'>My profile</h1>
                                    <div className=" flex flex-col justify-center items-start w-[60%]">
                                        <div className="w-full my-3"   >
                                            <label>Email</label>
                                            <Input value={email} onChange={(e) => setEmail(e.target.value)}   variant="underlined" className="" size="lg"  color="primary" type="email" placeholder="validate your email" />                                        
                                        </div>
                                        <Button className="my-3 font-medium text-lg" onPress={() => updateMe(user[0].id)}>Update</Button>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
        </div>
  )
}

export default Profile