import NavBarAdmin from "./NavBarAdmin"

import {
    Modal, 
    ModalContent, 
    ModalHeader, 
    ModalBody, 
    ModalFooter,
    useDisclosure,
    Button,
    Input
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



const Partner = () => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const data = JSON.parse(localStorage.getItem("admin") || "");
    const [imageUri,setImageUri] =  useState<string>();
    const user = useState(data);
    const [partners , setPartners] = useState([]);
    const navigate = useNavigate();

    const fetchData = async ( ) => {
        try {
            const {data } = await axios.get(BASE_URI+"/getAllPartners");
            setPartners(data);
        } catch (error) {
            
        }
    }
    const handleAdd = async () => {
        try {
                const {data} = await axios.post(BASE_URI+"/createPartner" , {
                    imageUrl :  imageUri
                });
                console.log(data);
                fetchData();
        } catch (error) {
            console.log(error);
        }
    }
    const handleDelete = async (id : number) => {
        try {
            const {data} = await axios.delete(BASE_URI+"/deletePartner/"+id);
            fetchData();
            console.log(data);
        } catch (error) {
            
        }
    } 

    
    useEffect(() => {
        if(user === null || !user){
          navigate("/login");
        }else {
           fetchData();
        }
    },[]) 
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
                                        <ModalHeader className="flex flex-col gap-1">Add new Partner</ModalHeader>
                                        <ModalBody>
                                            <form className="w-full  ">
                                                <Input type="text" value={imageUri} onChange={e => setImageUri(e.target.value)} className="my-4" color="primary" size="lg" placeholder="Enter image url here" variant="underlined" required />
                                            </form>
                                        </ModalBody>
                                        <ModalFooter>
                                                    <Button color="primary"  onPress={onClose}>
                                                    Close
                                                    </Button>
                                                    <Button color="primary" onPress={handleAdd}>
                                                    add partner
                                                    </Button>
                                        </ModalFooter>
                                        </>
                                    )}
                                    </ModalContent>
                </Modal>
                <div className=" col-span-3  w-full rounded-xl">
                    <Fade cascade damping={0.2}>
                        <div className="flex flex-col justify-center items-center w-full">
                            <h1 className="w-[90%] text-black bg-gray-300 p-3 rounded-xl text-xl text-center my-10 font-bold">Update Partners Section </h1>
                            <div className="flex flex-row justify-center items-center">
                                <h2 className="underline mx-6"> Wanna  add new partner ?</h2>
                                <Button onPress={onOpen}>Open Modal</Button>
                            </div>
                            <div className="w-[80%] my-8">
                            <Table aria-label="Example static collection table"
                                classNames={{
                                    wrapper: "min-h-[222px] bg-gray-800",
                                    th : "bg-gray-800 text-gray-300 py-3 border-b-2  rounded-xl border-gray-500 ",
                                    sortIcon : "bg-gray-500",
                                    td : ""
                                }}
                            >
                                <TableHeader>
                                    <TableColumn>imageuri</TableColumn>
                                    <TableColumn>actions</TableColumn>
                                </TableHeader>
                                <TableBody>
                                    {
                                        partners.map((part : any) => {
                                            return (
                                            <TableRow key="1">
                                                <TableCell>{part.imageUrl}</TableCell>
                                                <TableCell>
                                                    <Button className=" mx-2" color="danger" onPress={() => handleDelete(part.id)}>Delete</Button>
                                                </TableCell>
                                            </TableRow>
                                            )
                                        })
                                    }
                                </TableBody>
                            </Table>  
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    </>
  )
}



export default Partner