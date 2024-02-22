import { Accordion, AccordionItem } from "@nextui-org/react";
import { Fade } from "react-awesome-reveal"

const Call = () => {
    const mainParag = "We invite proposals for symposia for the ICMDS'24 conferene. Symposia are the scientific centerpiece of the meeting and will be assigned premium meeting space. These sessions are distinguished from other organized sessions in that they are more explicitly integrated, provide an overall synthesis on their topic, and have broad enough appeal to generate large audiences at the meeting. Proposals are encouraged to address the meeting theme. A symposium consists of at least 6 talks, each 20 minutes in length, followed by a 5-10 minutes period devoted to discussion. Proposals listing more than 8 or fewer than 6 confirmed speakers will not be considered."
    const itemClasses = {
        base: "py-0 w-full",
        title: "font-medium text-xl  text-gray-300  ",
        trigger: "px-2 py-0  rounded-lg h-14 flex items-center bg-gray-900",
        indicator: "text-medium",
        content: "text-small px-2",
      };
  return (
    <div className="w-full flex flex-col justify-center items-center container my-10">
        <h1 className="font-medium text-5xl my-12 develus large-title ">CALL FOR SYMPOSIUM PROPOSALS</h1>
        <div className="w-[90%]">
        <Accordion   itemClasses={itemClasses} className="mt-12 " >
            <AccordionItem key={1} title="SYMPOSIUM PROPOSALS">
                <Fade cascade damping={0.2} className="flex flex-col justify-center items-center">
                <p className="text-lg text-gray-600 w-[80%] text-justify font-medium"> 
                    {mainParag}
                </p>
                </Fade>
            </AccordionItem>
           
        
        <AccordionItem key={2} title="Proposal Format">
                <div className="flex flex-col justify-center items-start text-lg text-gray-500 w-[80%] text-justify font-medium">
            <h1 className="text-2xl my-3  font-bold develus ">Proposal Format</h1>
                <Fade cascade damping={0.2} >
                    <p >Session title </p>
                    <p >Organizer (Name, institution, email). This person is the point of contact for the session and responsible for communicating with speakers.</p>
                    <p >A lest 6 Communiquants (Name, institution, email, and provisional talk title for each). Only communiquants who have been contacted and have committed to the session should be listed.</p>
                    <p >Session description (less than 300 words): May include some background information, goals, objectives, importance, and interest to the conference.</p>
                    <p >Submission should be made by email to the address : icmds@usms.ma.</p>
                </Fade>
                </div>
            </AccordionItem>
        </Accordion>
            
           
        </div>
    </div>
  )
}

export default Call