import { Accordion, AccordionItem } from "@nextui-org/react"
import { Fade } from "react-awesome-reveal";

const Journal = () => {
    const mainParag = "ICMDS'21 has teamed up with specialised high quality indexed and impacted journals to offer multiple Special Journal Issues covering a variety of topics. A number of selected high-impact full text papers presented as oral communication during the conference will be considered for the special issues. Submitted papers must not be under consideration by any other journal or publication and must meet the quality criteria of the publishing journals. The final decision for paper selection will be made based on peer review reports by editors.";

    const itemClasses = {
        base: "py-0 w-full",
        title: "font-medium text-xl  text-gray-400 border-b-2 border-gray-700 ",
        trigger: "px-2 py-0  rounded-lg h-14 flex items-center",
        indicator: "text-medium",
        content: "text-small px-2",
        
      };

      const data = [
        {id : 1 , image : "https://www.liebertpub.com/action/showCoverImage?journalCode=big" , title : "Big Data" , ISSN : "2167-6461" , impactFactor : "3.644" ,SRJ : "0,973/Q1" ,specialIssue : " Mathematics of Data Science"},
        {id : 2 , image : "https://www.rairo-ro.org/img_covers/ro_cover.jpg" , title : "RAIRO - Operations Research" , ISSN : "0399-0559/1290-3868" , impactFactor : " 1.025" ,SRJ : " 0,38/Q3" ,specialIssue : " Mathematics of Data Science"},
        {id : 3 , image : "https://icmds-ma.com/images/SOIC.png" , title : "Statistics, Optimization and Information Computing" , ISSN : "2310-5070" , impactFactor : "" ,SRJ : " 0,279/Q3" ,specialIssue : " Mathematics of Data Science"},
        {id : 4 , image : "https://icmds-ma.com/journal.jpeg" , title : "Journal of Physics: Conference Series" , ISSN : "1742-6596" , impactFactor : "" ,SRJ : "0,21/Q4" ,specialIssue : " Mathematics of Data Science"},
        {id : 5 , image : "https://icmds-ma.com/images/amma_son.jpg" , title : "Advanced Mathematical Models & Applications" , ISSN : "2519-4445" , impactFactor : "" ,SRJ : "" ,specialIssue : " Mathematics of Data Science"},
      ]

  return (
    <div className="w-full flex flex-col justify-center items-center container">
        <h1 className="font-medium text-5xl my-12 develus">PEER REVIEWED JOURNAL PUBLICATION</h1>
        <div className="w-[90%]">
            <Accordion   itemClasses={itemClasses} className="m-12 w-[90%]">
                <AccordionItem key={1} title="SYMPOSIUM PROPOSALS" >
                    <Fade cascade damping={0.2} className="flex flex-col justify-center items-center">
                    <p className="text-lg text-gray-400 w-[80%] text-justify"> 
                        {mainParag}
                    </p>
                    </Fade>
                </AccordionItem>
            </Accordion>
        </div>
        <div className="flex flex-row justify-center flex-wrap items-center ">
        <Fade cascade damping={0.2}>
                {
                    data.map(dt => {
                        return ( 
                            <div key={dt.id}  className="w-[500px] p-4 border-2 border-gray-500 rounded-xl flex flex-row justify-around m-5 items-center flex-nowrap">
                                <div className="mr-2">
                                    <img  src={`${dt.image}`} alt=""  className="min-w-[150px] min-h-[200px] rounded-xl"/>
                                </div>
                                <div className="">
                                    {/* <h1 className=" text-center backdrop-blur-sm bg-gray-600/30 rounded-xl py-2 m-2 text-xl text-gray-500">Book data</h1> */}
                                    <div className="flex flex-row justify-start flex-wrap items-start">
                                        <Fade cascade damping={0.2} >
                                            <p className="text-gray-400 text-medium p-2 text-gray-400 backdrop-blur-sm bg-gray-600/30 mx-2 rounded-xl mb-2 mx-2 ">Title   {dt.title}</p>
                                            <p className="text-gray-400 text-medium p-1 text-gray-400 backdrop-blur-sm bg-white/30 mx-2 rounded-xl mb-2 ">ISSN :  {dt.ISSN}</p>
                                            <p className="text-gray-400 text-medium p-1 text-gray-400 backdrop-blur-sm bg-white/30 mx-2 rounded-xl mb-2 ">Impact Factory : {dt.impactFactor}</p>
                                            <p className="text-gray-400 text-medium p-1 text-gray-400 backdrop-blur-sm bg-white/30 mx-2 rounded-xl mb-2 "> SRJ {dt.SRJ}</p>
                                            <p className="text-gray-400 text-medium p-1 text-gray-400 backdrop-blur-sm bg-white/30 mx-2 rounded-xl mb-2 ">Special Issue :  {dt.specialIssue}</p>
                                            
                                        </Fade>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

        </Fade>
        </div>
    </div>
  )
}

export default Journal