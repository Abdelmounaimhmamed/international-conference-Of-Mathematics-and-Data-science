import {  Card, CardBody,  CardHeader, Image } from "@nextui-org/react"
import { Zoom } from "react-awesome-reveal"
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import NetworkCheckIcon from '@mui/icons-material/NetworkCheck';
const Fact = () => {
    
    const data = [
      {id: 1 , img : "comf.svg" , subTitlle : "+300",title : "PARTICIPANTS".toLowerCase()},
      {id: 2 , img : "world.svg" ,subTitlle: "PARTICIPANTS" ,title : " FROM 15+ COUNTRIES".toLowerCase()},
      {id: 3 , img : "pi.svg" ,subTitlle: "PARTICIPANTS" ,title : "FROM 50+ UNIVERSITIES".toLowerCase()},
      {id: 4 , img : "comf.svg" ,subTitlle : "Welcome" ,title : " to ICMDS 2024"},
    ]
    const data1 = [
        {id : 1 ,  title : "RENOWNED SPEAKERS" , icon : <GroupIcon fontSize="large" className="text-black my-3"/> , desc : "Attend Specialised Talks and Share Scientific Expertise"},
        {id : 2 ,  title : "SPECIAL FEATURED EVENTS" , icon : <BookmarkIcon fontSize="large" className="text-black my-3"/>, desc : "Share knowledge, Experience and Learn More"},
        {id : 3 ,  title : "PUBLICATION OPPORTUNITIES" , icon : <MenuBookIcon fontSize="large" className="text-black my-3"/> , desc : "Conference Proceedings, Affiliated Journals"},
        {id : 4 ,  title : "ENHANCE YOUR NETWORK" , icon :<NetworkCheckIcon fontSize="large" className="text-black my-3"/>, desc : "Highly Interactive Industry Participation"},
    ]

  return (
    <div className="w-full h-[100%] sm:h-[100%]">
        <div className="w-full flex flex-col justify-start items-center">
            <h1 className="text-5xl font-medium develus large-title">{"Quick Facts Of ICMDS".toUpperCase()}</h1>
            <div className="flex flex-row justify-center items-center flex-wrap ">
                <Zoom cascade damping={0.2}>
                        {
                            data.map(dt => {
                                return (
                                <Card className="py-4 bg-gray-700 mx-3 my-10" key={dt.id}>
                                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start ">
                                        <p className="text-tiny uppercase font-bold">{dt.subTitlle}</p>
                                        <small className="text-default-500">2024</small>
                                        <h4 className="font-bold text-large">{dt.title}</h4>
                                    </CardHeader>
                                    <CardBody className="overflow-visible py-2">
                                        <Image
                                        alt="Card background"
                                        className="object-cover rounded-xl"
                                        src={`${dt.img}`}
                                        width={270}
                                        />
                                    </CardBody>
                                </Card>

                                )
                            })
                        }
                </Zoom>
            </div>
            <div className="flex flex-row justify-center items-center flex-wrap">
            <Zoom cascade damping={0.2}>

            {
                            data1.map(dt => {
                                return (
                                    <Card
                                        isFooterBlurred
                                        radius="lg"
                                        className=" mx-3 my-10  w-[300px] h-[200px] bg-transparent  border-2 border-gray-300 before:bg-white/10 shadow-medium  ml-1 z-10" 
                                        key={dt.id}>
                                            <div className="w-full h-full flex flex-col justify-center items-center bg-[#ecf5ff] ">
                                                <div className="t">
                                                    {dt.icon} 
                                                </div>                                              
                                                <h1 className="develus text-xl my-3 font-bold w-full text-center">{dt.title}</h1>
                                                <p className="text-center text-gray-600">{dt.desc}</p>
                                            </div>
                                      </Card>

                                )
                            })
                        }
            </Zoom>
            </div>
        </div>
    </div>
  )
}

export default Fact