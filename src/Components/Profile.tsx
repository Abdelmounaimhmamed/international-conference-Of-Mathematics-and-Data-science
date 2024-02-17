import { Button, Input } from "@nextui-org/react"
import NavBarAdmin from "./NavBarAdmin"
import { Fade } from "react-awesome-reveal"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";




const Profile = () => {
  const user = useState(JSON.parse(localStorage.getItem("admin") || ""));
  const navigate = useNavigate();
  
  useEffect(() => {
      if(user === null || !user){
        navigate("/login");
      }
  },[]) 
  return (
   
        <div>
            <div className='custom-class'></div>
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
                                            <Input variant="underlined" className="" size="lg"  color="primary" type="email" placeholder="validate your email" />                                        
                                        </div>
                                        <div className="w-full my-3"  >
                                            <label>firstName</label>
                                            <Input variant="underlined" className="" size="lg"   color="primary" type="text" placeholder="validate your firstname" />
                                        </div>
                                        <div className="w-full my-3" >
                                            <label>lastName</label>
                                            <Input variant="underlined" className=""  size="lg"  color="primary" type="text" placeholder="validate your lastname" />
                                        </div>
                                        <Button className="my-3 font-medium text-lg">Update</Button>
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