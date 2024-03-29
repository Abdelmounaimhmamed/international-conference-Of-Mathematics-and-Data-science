import { useEffect, useState } from "react";
import NavBarAdmin from "./NavBarAdmin"
import { useNavigate } from "react-router-dom";


const Community = () => {
    
  // @ts-ignore
  const [user , setUser] = useState(JSON.parse(localStorage.getItem("admin")));
  const navigate = useNavigate();
  
  useEffect(() => {
      if(user === null || !user){
        navigate("/login");
      }
  },[navigate,user]);
  return (
    <div>
        <div className='custom-class'></div>
        <div  className="w-full h-[100vh] ">
            <div className="grid grid-cols-4 grid-flow-col ">
                <div className=" bg-gray col-span-1 w-full h-[100vh] bg-black ">
                   <NavBarAdmin />
                </div>

                <div className=" col-span-3  w-full rounded-xl">
                    <div className="">
                        <h1 className="w-[90%] text-black bg-gray-300 p-3 rounded-xl text-xl text-center my-10 font-bold">Update community section </h1>
                        <div className="flex flex-col justify-between items-center">
                                
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Community