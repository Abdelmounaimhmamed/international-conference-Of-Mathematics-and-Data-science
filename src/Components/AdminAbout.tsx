import { Button, Textarea } from "@nextui-org/react"
import NavBarAdmin from "./NavBarAdmin"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useState } from "react"

const AdminAbout = () => {
    const handleSendToServer = async () => {
        
    }
    const user   = useState<string>(JSON.parse(localStorage.getItem("admin")|| "")) ;
    const navigate = useNavigate();
  
  useEffect(() => {
      if(!user){
        navigate("/login");
      }
  }) 
    
  return (
    <div>
    <div className='custom-class'></div>
    <div  className="w-full h-[100vh] ">
        <div className="grid grid-cols-4 grid-flow-col ">
            <div className=" bg-gray col-span-1 w-full h-[100vh] bg-black ">
               <NavBarAdmin />
            </div>
            
             <div className=" col-span-3  w-full rounded-xl">
                <div className="flex flex-col justify-center items-center">
                <h1 className='w-[90%] text-black bg-gray-300 p-3 rounded-xl text-xl text-center my-10 font-bold'>Update the about section  </h1>
                    <h1 className="develus text-xl font-medium my-3">Insert the new About section Content</h1>
                    <Textarea className="w-[80%] my-2" ></Textarea>
                    <Button className="bg-gray-800 text-gray-300" onSubmit={handleSendToServer}>Send</Button>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default AdminAbout