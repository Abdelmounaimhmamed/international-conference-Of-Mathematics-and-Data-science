import { Button, Textarea } from "@nextui-org/react"
import NavBarAdmin from "./NavBarAdmin"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { useState } from "react"

const AdminAbout = () => {
    
    const user   = useState<string>(JSON.parse(localStorage.getItem("admin")|| "")) ;
    const [parag1 , setParag1] = useState("");
    const [parag2 , setParag2] = useState("");
    const [parag3 , setParag3] = useState("");
    const [parag4 , setParag4] = useState("");
    console.log(parag1);

    const handleSendToServer = async () => {
        try {
          const {data} = await axios.post("http://localhost:3000/updateAboutSection", {
            parag1 , parag2 , parag3 , parag4
          });
         fetchAbouts();
         console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
    const fetchAbouts = async () => {
      try {
        const {data} = await axios.get("http://localhost:3000/getAbout");
        setParag1(data[0].parag1);
        setParag2(data[0].parag2);
        setParag3(data[0].parag3);
        setParag4(data[0].parag4);
        
      } catch (error) {
        console.log(error);
      }
    }
    const navigate = useNavigate();
  
  useEffect(() => {
      if(!user){
        navigate("/login");
      }else {
        const fetch = async () => {
          await fetchAbouts();
        }
        fetch();
      }
  },[axios]); 


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
                    <div className="flex flex-row justify-center items-center w-full flex-wrap">
                      <Textarea value={parag1} onChange={(e) => setParag1(e.target.value)} placeholder="Enter the content of the first paragraph"  className="w-[40%] m-2" ></Textarea>
                      <Textarea value={parag2} onChange={(e) => setParag2(e.target.value)} placeholder="Enter the content of the second paragraph"  className="w-[40%] m-2" ></Textarea>
                      <Textarea value={parag3} onChange={(e) => setParag3(e.target.value)} placeholder="Enter the content of the third paragraph"  className="w-[40%] m-2" ></Textarea>
                      <Textarea value={parag4} onChange={(e) => setParag4(e.target.value)} placeholder="Enter the content of the forth paragraph"  className="w-[40%] m-2" ></Textarea>

                    </div>
                    <Button className="bg-gray-800 text-gray-300" onPress={handleSendToServer}>Send</Button>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default AdminAbout