
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
import { Fade } from "react-awesome-reveal";



const Program = () => {
  return (
    <div id="Pogram" className="flex flex-col justify-center items-center h-[100vh]">
        <h1 className="font-medium text-5xl my-12 develus">CONFERENCE PROGRAM</h1>
    <div className="flex w-full flex-col  container  " >
    <Fade cascade damping={0.2}>
        
      <Tabs aria-label="Options" className="w-full" 
          classNames={{
            tabList: "gap-6 w-full relative rounded-xl border-b border-divider bg-gray-800",
            cursor: "w-full bg-gray-400",
            tab:" bg-gray-800",
            tabContent: "group-data-[selected=true]:text-white  font-bold text-xl"
          }}
      >
        <Tab key="photos" title="Day 1" className="text-white"> 
          <Card >
            <CardBody className="bg-gray-900 text-white min-h-[250px] ">
                <div className="flex flex-col justify-center items-center text-2xl">
                    <h1 className="develus font-medium">The program  of the first day</h1>
                    <div className="w-full flex flex-row justify-center items-center flex-wrap">
                        <Fade cascade damping={0.2}>
                            <div className="topic rounded-xl">
                                <h2 className="class-box">08:00-09:30</h2>
                                <p className="class-box-p">Reception of participants</p>

                            </div>
                            <div className="topic rounded-xl">
                                <h2 className="class-box">08:00-09:30</h2>
                                <p className="class-box-p">Reception of participants</p>

                            </div>
                        </Fade>

                    </div>
                </div>
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="music" title="Day 2">
          <Card>
            <CardBody className="bg-gray-900 text-white min-h-[250px] ">
                <div className="flex flex-col justify-center items-center text-2xl">
                        <h1 className="develus font-medium">The program  of the first day</h1>
                        <div className="w-full flex flex-row justify-center items-center flex-wrap">
                            <Fade cascade damping={0.2}>
                                <div className="topic rounded-xl">
                                    <h2 className="class-box">08:00-09:30</h2>
                                    <p className="class-box-p">Reception of participants</p>

                                </div>
                                <div className="topic rounded-xl">
                                    <h2 className="class-box">08:00-09:30</h2>
                                    <p className="class-box-p">Reception of participants</p>

                                </div>
                            </Fade>

                        </div>
                    </div>            
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="videos" title="Day 3">
          <Card>
            <CardBody className="bg-gray-900 text-white min-h-[250px] ">
            <div className="flex flex-col justify-center items-center text-2xl">
                        <h1 className="develus font-medium">The program  of the first day</h1>
                        <div className="w-full flex flex-row justify-center items-center flex-wrap">
                            <Fade cascade damping={0.2}>
                                <div className="topic rounded-xl">
                                    <h2 className="class-box">08:00-09:30</h2>
                                    <p className="class-box-p">Reception of participants</p>

                                </div>
                                <div className="topic rounded-xl">
                                    <h2 className="class-box">08:00-09:30</h2>
                                    <p className="class-box-p">Reception of participants</p>

                                </div>
                            </Fade>

                        </div>
                    </div>         
            </CardBody>
          </Card>  
        </Tab>
      </Tabs>
    </Fade>
    </div>  
    </div>
  )
}

export default Program