import { Zoom } from "react-awesome-reveal"
import {  Card, CardBody,  CardHeader, Image } from "@nextui-org/react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";




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
        <div className=" w-full flex  flex-col justify-center items-center">
            <h2 className="text-xl text-gray-800 w-[90%] mb-5">Once you choose your registration option. You are ought to pay the registration fees corresponding to your chosen plan. The fees are subdivided as follows:</h2>
            <Table aria-label="Example static collection table" className="w-[90%]">
                <TableHeader>
                    <TableColumn className="">Participation Type	</TableColumn>
                    <TableColumn className="">Virtual</TableColumn>
                    <TableColumn className="">In-Person	</TableColumn>
                    <TableColumn className="">Virtual	</TableColumn>
                    <TableColumn className="">In-Person	</TableColumn>
                </TableHeader>
                <TableBody>
                    <TableRow key="1" className="text-black font-medium">
                    <TableCell className="font-medium text-lg">Standard Price	</TableCell>
                    <TableCell className="font-medium text-lg">30 €	</TableCell>
                    <TableCell className="font-medium text-lg">50 €</TableCell>
                    <TableCell className="font-medium text-lg">80 €</TableCell>
                    <TableCell className="font-medium text-lg">100 €</TableCell>
                    </TableRow>
                    <TableRow key="2" className="text-black">
                    <TableCell className="font-medium text-lg">Student Price		</TableCell>
                    <TableCell className="font-medium text-lg">20  €	</TableCell>
                    <TableCell className="font-medium text-lg">35 €</TableCell>
                    <TableCell className="font-medium text-lg">50 €</TableCell>
                    <TableCell className="font-medium text-lg">70 €</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <p className="text-gray-700 w-[90%] my-5">In the table above 1 € = 10 DH, beware that registrations made after 5 October 2021 will be subject to an additional fee of 50 € on top of the fees of each option. Authors submitting a paper need to pay an additional fee of 100 € per paper.</p>
            <div className="w-[87%]">
                <p className="text-gray-600 text-start w-full ">You can find below the bank account information of the conference:</p>
                <ul className="text-gray-700">
                    <li className=" list-disc">Recipient</li>
                    <li className=" list-disc">Bank Name</li>
                    <li className=" list-disc">IBAN</li>
                    <li className=" list-disc">SWIFT</li>
                </ul>
            </div>
        </div>

    </div>
  )
}

export default Fees