import NavBarAdmin from "./NavBarAdmin"
import {
    Modal, 
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure,
    Button,
    Input,
    Spinner
  } from "@nextui-org/react";
import {
    Table,
    TableHeader,
    TableBody,
    TableColumn,
    TableRow,
    TableCell
  } from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";
import { BASE_URI } from "./Constant";


const SpeakersAdmin = () => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const user  = useState<string>(JSON.parse(localStorage.getItem("admin") || "") );
    const [speakers , setSpeakers] = useState([]);
    const [title , setTitle] = useState<string>();
    const [fullName , setFullName] = useState<string>();
    const [isLoading , setIsLoading] = useState(false);

    const navigate = useNavigate();
    const fetchAllSpeakers = async () => {
      setIsLoading(true);
        try {
        const {data} = await axios.get(BASE_URI+"/getAllSpeakers");
        setSpeakers(data);
        setIsLoading(false);    
           
        } catch (error) {
        }
    }

    const handleAddOfUser = async () => {
        try {
            const {data} = await axios.post(BASE_URI+"/createOneSpeaker", {
                title,fullName
            });
            console.log(data);
            fetchAllSpeakers();
           
        } catch (error) {
        }
    }
    const handleDelete = async (id : number) => {
        try {
            const reponse = await axios.delete(BASE_URI+"/deleteSpeaker/"+id);
            console.log(reponse.data);
            fetchAllSpeakers();

        } catch (error) {
            console.log(error);
        }
    }
  
    useEffect(() => {
        if(user === null || !user){
            navigate("/login");
        }else {
            fetchAllSpeakers();
            return ;
        }
    },[axios]) 

  return (
    <>
        <div className='custom-class'></div>
        <div  className="w-full h-[100vh] ">
            <div className="grid grid-cols-4 grid-flow-col ">
                <div className=" bg-gray col-span-1 w-full h-[100vh] bg-black ">
                <NavBarAdmin />
                </div>
                <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="bg-gray-700">
                                    <ModalContent>
                                    {(onClose) => (
                                        <>
                                        <ModalHeader className="flex flex-col gap-1">Add new Speaker</ModalHeader>
                                        <ModalBody>
                                            <form className="w-full  ">
                                                <Input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} isRequired className="my-4" color="primary" size="lg" placeholder="Enter speaker full name" variant="underlined" required />
                                                <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} isRequired className="my-4" color="primary" size="lg" placeholder="Enter speaker university " variant="underlined" required />
                                                <Input type="text" className="my-4" color="primary" size="lg" placeholder="Enter speaker website  profile " variant="underlined" required />
                                                <Input type="text" className="my-4" color="primary" size="lg" placeholder="Enter speaker linkedin profile " variant="underlined" required />
                                            </form>
                                        </ModalBody>
                                        <ModalFooter>
                                                    <Button color="primary"  onPress={onClose}>
                                                    Close
                                                    </Button>
                                                    <Button color="primary" onPress={handleAddOfUser}>
                                                        Add  speaker
                                                    </Button>
                                        </ModalFooter>
                                        </>
                                    )}
                    </ModalContent>
                </Modal>
                <div className=" col-span-3  w-full rounded-xl">
                <Fade>
                    <div className="flex flex-col justify-center items-center w-full">
                            <h1 className="w-[90%] text-black bg-gray-300 p-3 rounded-xl text-xl text-center my-10 font-bold">Update Speakers Section </h1>
                            <div className="flex flex-row justify-center items-center">
                                <h2 className="underline mx-6"> Wanna  add new Speaker ?</h2>
                                <Button onPress={onOpen}>Open Modal</Button>
                            </div>
                            <div className="w-[80%] my-8">
                                {isLoading === true ? (
                                    <Spinner  />
                                ) : ( 

                                    <Table aria-label="Example static collection table"
                                        classNames={{
                                            wrapper: "min-h-[222px] bg-gray-800",
                                            th : "bg-gray-800 text-gray-300 py-3 border-b-2  rounded-xl border-gray-500 ",
                                            sortIcon : "bg-gray-500",
                                            td : ""
                                        }}
                                    >
                                        <TableHeader>
                                            <TableColumn>title</TableColumn>
                                            <TableColumn>full name</TableColumn>
                                            <TableColumn>actions</TableColumn>
                                        </TableHeader>
                                        <TableBody>
                                            {
                                                    speakers.map((one : any) => {
                                                        return (
                                                                <TableRow key="1">
                                                                    
                                                                        <TableCell>{one.fullName}</TableCell>
                                                                        <TableCell>{one.title}</TableCell>
                                                                        <TableCell>
                                                                            <Button className=" mx-2" color="danger" onPress={() => handleDelete(one.id)}>Delete</Button>
                                                                        </TableCell>
                                                                </TableRow>                      
                                                    )})
                                            }
                                        </TableBody>
                                    </Table> 
                                )}
                            </div>
                        </div>
                    </Fade>                        
                </div>
            </div>
        </div>
    </>
  )
}

export default SpeakersAdmin