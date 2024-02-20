import { Button, Input } from "@nextui-org/react"
import NavBarAdmin from "./NavBarAdmin"
import { Fade } from "react-awesome-reveal"
import { useEffect, useState } from "react"
import axios from "axios"


const HeroAdmin = () => {
    const [firstTitle , setFirstTitle] = useState<string>();
    const [secondTitle , setSecond] = useState<string>();
    const [fullAbstractSubmission , setAbstra] = useState<string>();
    const [fullSubmissionSubmission , setFullSubmisson] = useState<string>();
    const [authorNotification , setAuthor] = useState<string>();
    const [cameraReadyDate , setcameraReadyDate] = useState<string>();
    const [comferenceDate , setcomferenceDate] = useState<string>();
    const handleSend = async () => {
        try {
            const {data} = await axios.post("http://localhost:3000/updateHeroSection", {
                firstTitle,secondTitle,fullAbstractSubmission,fullSubmissionSubmission,
                authorNotification,cameraReadyDate,comferenceDate
            })
            console.log(data);
            setFirstTitle(data[0].firstTitle)
            setSecond(data[0].secondTitle)
            setAbstra(data[0].fullAbstractSubmission);
            setFullSubmisson(data[0].fullSubmissionSubmission);
            setAuthor(data[0].authorNotification);
            setcameraReadyDate(data[0].cameraReadyDate);
            setcameraReadyDate(data[0].comferenceDate);

        } catch (error) {
            console.log(error);
        }
    }
    const fetchData = async () => {
        try {
            const {data} =await axios.get("http://localhost:3000/getHeroSection");
            
            setFirstTitle(data[0].firstTitle)
            setSecond(data[0].secondTitle)
            setAbstra(data[0].fullAbstractSubmission);
            setFullSubmisson(data[0].fullSubmissionSubmission);
            setAuthor(data[0].authorNotification);
            setcameraReadyDate(data[0].cameraReadyDate);
            setcameraReadyDate(data[0].comferenceDate);

        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchData();
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
                <Fade cascade damping={0.2}>
                    <div className="w-full flex flex-col justify-center items-center">
                    <h1 className='w-[90%] text-black bg-gray-300 p-3 rounded-xl text-xl text-center my-10 font-bold'>update the Hero section </h1>
                        <div className="w-[70%] ">
                            <Input variant="underlined" value={firstTitle} onChange={e => setFirstTitle(e.target.value)}  size="md" color="primary" placeholder="Enter the first title" className="my-2" />
                            <Input variant="underlined" value={secondTitle} onChange={e => setSecond(e.target.value)}  size="md" color="primary" placeholder="Enter the second title" className="my-2" />
                            <Input variant="underlined" value={fullAbstractSubmission} onChange={e => setAbstra(e.target.value)}  size="md" color="primary" placeholder="Full Abstract submission - ? date " className="my-2" />
                            <Input variant="underlined" value={fullSubmissionSubmission} onChange={e => setFullSubmisson(e.target.value)}  size="md" color="primary" placeholder="Full Paper submission -  date ? " className="my-2" />
                            <Input variant="underlined" value={authorNotification} onChange={e => setAuthor(e.target.value)}  size="md" color="primary" placeholder="Authors Notification - date ? " className="my-2" />
                            <Input variant="underlined" value={cameraReadyDate} onChange={e => setcameraReadyDate(e.target.value)}  size="md" color="primary" placeholder="Camera ready - date ? " className="my-2" />
                            <Input variant="underlined" value={comferenceDate} onChange={e => setcomferenceDate(e.target.value)}  size="md" color="primary" placeholder="Conference Dates - date ? " className="my-2" />
                            <Button className=" my-2 text-lg rounded" onPress={handleSend}>Update</Button>
                        </div>
                    </div>
                </Fade>
            </div>
            </div>
        </div>
    </div>
  
)}

export default HeroAdmin