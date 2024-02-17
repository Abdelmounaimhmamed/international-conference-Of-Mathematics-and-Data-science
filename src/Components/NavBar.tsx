import { Button } from "@nextui-org/react"
import { Fade } from "react-awesome-reveal"
import { Link } from "react-router-dom"
import ViewWeekIcon from '@mui/icons-material/ViewWeek';
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';

const NavBar = () => {
    const [open , setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(!open);
    }

  return (
    <>
    
    
        <div className="container w-[100%] h-[100px] flex flex-row justify-center items-center flex-nowrap">
                <div className="w-full ml-20 flex flex-col justify-start items-start">
            <Fade cascade damping={0.3}>
                    <h2 className="text-3xl develus">ICMDS'24</h2>
                    <p className="text-gray-500">NEW EDITION</p>
            </Fade>
                </div>
            <div className="" onClick={handleOpen}>
                <Fade>
                        {
                            open === false ? (
                            <div className="cutom-query-1">
                                <ViewWeekIcon  fontSize="large"  className="mr-10"  />
                            </div>
                            ) : (
                            <div className="cutom-query-1">
                                <CloseIcon  fontSize="large" className="mr-10" />
                            </div>
                            )
                        }
                </Fade>
            </div>
            <div className="w-full  cutom-query ">
            <Fade cascade damping={0.2}>
                <ul className="  flex flex-row justify-center items-center text-white " >
                    <li><Link to="/" className="text-xl mx-3 font-medium">Home</Link></li>
                    <li><a href="#callpaper" className="text-xl mx-3 font-medium">CallPapers</a></li>
                    <li><a href="#Speakers" className="text-xl mx-3 font-medium">Speakers</a></li>
                    <li><a href="#Orginzers" className="text-xl mx-3 font-medium">Orginzers</a></li>
                    <li><a href="#Community" className="text-xl mx-3 font-medium">Community</a></li>
                    <li><a href="#Pogram" className="text-xl mx-3 font-medium">Pogram</a></li>
                    <li><a href="#ContactUs" className="text-xl mx-3 font-medium">ContactUs</a></li>
                    <Button className="mx-4 text-white" variant="bordered"><Link to={"/login"} className="text-xl  font-medium">Login</Link></Button>
                </ul>
            </Fade>
            </div> 
           
           
        </div>
        {
                open === true && (
                    <div className="h-[90vh] w-full custom-bg">
                        <Fade cascade damping={0.2}>
                            <ul className="flex flex-col justify-around h-full items-center">
                                <li><Link to="/" className="text-xl mx-6 font-medium">Home</Link></li>
                                <li><a href="#" className="text-xl  mx-6 font-medium">CallPapers</a></li>
                                <li><a href="#" className="text-xl  mx-6 font-medium">Speakers</a></li>
                                <li><a href="#" className="text-xl  mx-6 font-medium">Orginzers</a></li>
                                <li><a href="#" className="text-xl  mx-6 font-medium">Community</a></li>
                                <li><a href="#" className="text-xl  mx-6 font-medium">Pogram</a></li>
                                <li><a href="#" className="text-xl  mx-6 font-medium">ContactUs</a></li>
                                <Button className="mx-4 text-white" variant="bordered"><Link to={"/login"} className="text-xl  font-medium">Login</Link></Button>
                            </ul>
                        </Fade>
                    </div>
                )
        }
    </>

  )
}

export default NavBar