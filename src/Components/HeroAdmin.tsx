import { Button, Input } from "@nextui-org/react"
import NavBarAdmin from "./NavBarAdmin"
import { Fade } from "react-awesome-reveal"


const HeroAdmin = () => {
  return (
    <div>
    <div className='custom-class'></div>
    <div  className="w-full h-[100vh] ">
        <div className="grid grid-cols-4 grid-flow-col ">
            <div className=" bg-gray col-span-1 w-full h-[100vh] bg-black ">
               <NavBarAdmin />
            </div>
            <div className=" col-span-3  w-full rounded-xl">
                <Fade cascade damping={0.2}>
                    <div className="w-full flex flex-col justify-center items-center">
                    <h1 className='w-[90%] text-black bg-gray-300 p-3 rounded-xl text-xl text-center my-10 font-bold'>update the Hero section </h1>
                        <div className="w-[70%] ">
                            <Input variant="underlined" size="md" color="primary" placeholder="Enter the first title" className="my-2" />
                            <Input variant="underlined" size="md" color="primary" placeholder="Enter the second title" className="my-2" />
                            <Input variant="underlined" size="md" color="primary" placeholder="Full Abstract submission - ? date " className="my-2" />
                            <Input variant="underlined" size="md" color="primary" placeholder="Full Paper submission -  date ? " className="my-2" />
                            <Input variant="underlined" size="md" color="primary" placeholder="Authors Notification - date ? " className="my-2" />
                            <Input variant="underlined" size="md" color="primary" placeholder="Camera ready - date ? " className="my-2" />
                            <Input variant="underlined" size="md" color="primary" placeholder="Conference Dates - date ? " className="my-2" />
                            <Button className=" my-2 text-lg rounded">Update</Button>
                        </div>
                    </div>
                </Fade>
            </div>
            </div>
        </div>
    </div>
  
)}

export default HeroAdmin