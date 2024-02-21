import { useEffect, useState } from "react"
import Messages from "./Messages"
import NavBarAdmin from "./NavBarAdmin"
import { useNavigate } from "react-router-dom";





const DashBoard = () => {
  const user   = useState<string>(JSON.parse(localStorage.getItem("admin") || ""));
  const navigate = useNavigate();
  useEffect(() => {
      if(user === null || !user ){
        navigate("/login");
      }
  },[navigate]);

  
  return (
    <div>
        <div className='custom-class'></div>
        <div  className="w-full h-[100vh] ">
            <div className="grid grid-cols-4 grid-flow-col ">
                <div className=" bg-gray col-span-1 w-full h-[100vh] bg-black ">
                   <NavBarAdmin />
                </div>
                
                <div className=" col-span-3  w-full rounded-xl">
                    <Messages />
                </div>
            </div>
        </div>
    </div>
  )
}

export default DashBoard