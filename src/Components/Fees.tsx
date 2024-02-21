import { Zoom } from "react-awesome-reveal"
import {  Card, CardBody,  CardHeader, Image } from "@nextui-org/react";




const Fees = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center container">
        <h1 className="font-medium text-5xl my-12 develus">{"Fees".toUpperCase()}</h1>
        <p className="text-gray-400 text-lg px-3 text-center max-w-[80%]">We offer three types of registrations. Participants should choose between these types at account creation. It is also possible to upgrade from one type to another by contacting us by email.</p>
        <div className="flex flex-row justify-center items-center flex-wrap">
            <Zoom cascade damping={0.2} >
                <Card className="py-4 bg-gray-900 mx-3 my-10" >
                        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start ">
                            <p className="  text-gray-300 mb-1  font-medium">Access to the conferences and sessions</p>
                            <p className="  text-gray-300 mb-1  font-medium">Conference Registration Package</p>
                            <p className="  text-gray-300 mb-1  font-medium">Certificate of Participation</p>
                            <h4 className="font-bold text-2xl my-2 text-gray-100">Communication</h4>
                        </CardHeader>
                        <CardBody className="overflow-visible py-2">
                                        <Image
                                        alt="Card background"
                                        className="object-cover rounded-xl"
                                        src={`comm.svg`}
                                        width={270}
                                        height={200}
                                        />
                        </CardBody>
                    </Card>

                <Card className="py-4 bg-gray-900 mx-3 my-10" >
                                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start ">
                                        <p className=" text-gray-300 mb-1 font-medium">Access to the conferences and sessions</p>
                                        <p className=" text-gray-300 mb-1 font-medium">in-person or pre-recorded virtual presentation</p>
                                        <p className=" text-gray-300 mb-1 font-medium">Conference Registration Package</p>
                                        <p className=" text-gray-300 mb-1 font-medium">Certificate of participation</p>
                                        <p className=" text-gray-300 mb-1 font-medium">Certificate of communication</p>
                                        <h4 className="font-bold text-2xl  text-gray-100 my-2">Participation</h4>
                                    </CardHeader>
                                    <CardBody className="overflow-visible py-2">
                                        <Image
                                        alt="Card background"
                                        className="object-cover rounded-xl"
                                        src={`parti.svg`}
                                        width={270}
                                        
                                        />
                                    </CardBody>
                </Card>
                    <Card className="py-4 bg-gray-900 mx-3 my-10" >
                                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start ">
                                        <p className=" text-gray-300 mb-2  font-medium">Access to the conferences and sessions</p>
                                        <p className=" text-gray-300 mb-2  font-medium">in-person or pre-recorded virtual presentation</p>
                                        <p className=" text-gray-300 mb-2  font-medium">Conference Registration Package</p>
                                        <p className=" text-gray-300 mb-2  font-medium">Certificate of participation</p>
                                        <p className=" text-gray-300 mb-2  font-medium">Paper submission</p>
                                        <p className=" text-gray-300 mb-2  font-medium">Certificate of communication</p>
                                        <h4 className="font-bold text-2xl text-gray-100">Paper</h4>
                                    </CardHeader>
                                    <CardBody className="overflow-visible py-2">
                                        <Image
                                        alt="Card background"
                                        className="object-cover rounded-xl max-h-[200px]"
                                        src={`paper.svg`}
                                        width={270}
                                        height={200}
                                        />
                                    </CardBody>
                    </Card>                    

            </Zoom>
        </div>

    </div>
  )
}

export default Fees