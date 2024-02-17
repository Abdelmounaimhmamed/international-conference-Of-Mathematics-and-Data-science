import { AdminPanelSettings, Message, PartyMode, Speaker } from "@mui/icons-material"
import { LogOutIcon } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import InfoIcon from '@mui/icons-material/Info';
const NavBarAdmin = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/login");
        localStorage.setItem("authentiatedUser" , "");
    }

  return (
    <div className="w-[70%] h-full flex flex-col justify-center items-center">
        <ul className="flex flex-col justify-around h-[50%] items-center">
            <li className="flex flex-row my-4 border-b-1 border-gray-400 shadow-lg  justify-evenly  w-full items-center">
                <Link className="text-xl mr-6" to={"/dashboard"}> Messages</Link>
                <Message fontSize="large" />
            </li>
            <li className="flex flex-row my-4  border-b-1 border-gray-400 shadow-lg  justify-start  w-full items-center">
                <Link className="text-xl mr-6" to={"/AdminAbout"}> About</Link>
                <InfoIcon fontSize="large" />
            </li>
            <li className="flex flex-row my-4  border-b-1 border-gray-400 shadow-lg  justify-start  w-full items-center">
                <Link className="text-xl mr-6" to={"/adminHero"}> Hero</Link>
                <InfoIcon fontSize="large" />
            </li>
            <li className="flex flex-row my-4  border-b-1 border-gray-400 shadow-lg  justify-start  w-full items-center">
                <Link className="text-xl mr-6" to={"/Partner"}> Partners</Link>
                <PartyMode fontSize="large" />
            </li>
            <li className="flex flex-row my-4  border-b-1 border-gray-400 shadow-lg  justify-start  w-full items-center">
                <Link className="text-xl mr-6" to={"/Community"}> Community</Link>
                <PartyMode fontSize="large" />
            </li>
            <li className="flex flex-row my-4  border-b-1 border-gray-400 shadow-lg  justify-start  w-full items-center">
                <Link className="text-xl mr-6" to={"/Speakers"}> Speakers</Link>
                <Speaker fontSize="large" />
            </li>
            <li className="flex flex-row my-4  border-b-1 border-gray-400 shadow-lg  justify-start  w-full items-center">
                <Link className="text-xl mr-6 " to="/profile"> Profile</Link> 
                <AdminPanelSettings fontSize="large" />    
            </li>
            <li className="flex flex-row my-4  border-b-1 border-gray-400 shadow-lg  justify-start  w-full items-center">
                <Link className="text-xl mr-6 " to=""  onClick={handleClick} >Logout</Link> 
                <LogOutIcon fontSize="large" />    
            </li>
        </ul>
    </div>
  )
}

export default NavBarAdmin