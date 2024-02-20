import {Table,TableHeader,TableBody,TableColumn,TableRow,TableCell,Pagination, Button, Spinner,} from "@nextui-org/react";
import axios from "axios";
import React, { useEffect, useState } from 'react';
import { Fade } from "react-awesome-reveal";
import { BASE_URI } from "./Constant";




const Messages = () => {
    const [page, setPage] = React.useState(1);
    const [messages , setMessages] = useState<any>([]);
    const [isLoading ,setIsLoading] = useState(false);
    const fetchMessages =  async () => {
        setIsLoading(true);
        try {
            const {data} = await axios.get(BASE_URI+"/getAllMessages");
            setMessages(data);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    const handleDelete =async  (id: number) => {
        try {
            const response = await axios.post(BASE_URI+"/deleteMessage/"+id);
            fetchMessages();
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchMessages();
        return ;
    },[axios]);

    const handleDownload = (file : File) => {
        const downloadUrl = `${BASE_URI}/${file}`;
        
        window.open(downloadUrl, 'self');
      };

    const rowsPerPage = 4;
    const pages = Math.ceil(messages.length / rowsPerPage);
    const items = React.useMemo(() => {
      const start = (page - 1) * rowsPerPage;
      const end = start + rowsPerPage;
      return messages.slice(start, end);
    }, [page, messages]);
  

  return (
    <div className='w-full flex flex-col justify-center items-center '>
            <h1 className='w-[90%] text-black bg-gray-300 p-3 rounded-xl text-xl text-center my-10 font-bold'>Liste of Messages </h1>
        <div className='w-[90%]'>
            <Fade cascade damping={0.2}>
                {isLoading === true ? (
                    <div className="w-full text-center">
                        <Spinner size="lg" />
                    </div>
                 ) : (

                    <Table 
                        aria-label="Example table with client side pagination"
                bottomContent={
                    <div className="flex w-full justify-center">
                    <Pagination
                            isCompact
                            showControls
                            showShadow
                            color="primary"
                            page={page}
                            total={pages}
                            onChange={(page) => setPage(page)}
                    />
                    </div>
                }
                classNames={{
                    wrapper: "min-h-[222px] bg-gray-800",
                    th : "bg-gray-800 text-gray-300 py-3 border-b-2  rounded-xl border-gray-500 ",
                    sortIcon : "bg-gray-500",
                    td : ""
                } }
                >
                <TableHeader>
                    <TableColumn key="name">email</TableColumn>
                    <TableColumn key="role">firstName</TableColumn>
                    <TableColumn key="status">lastName</TableColumn>
                    <TableColumn key="status">phone</TableColumn>
                    <TableColumn key="status">files</TableColumn>
                    <TableColumn key="status">actions</TableColumn>
                </TableHeader>
                <TableBody items={items}>
                    { 
                        messages.map((mesage : any )=> {
                            return (
                            <TableRow key="1">
                                <TableCell>{mesage.email}</TableCell>
                                <TableCell>{mesage.firstName}</TableCell>
                                <TableCell>{mesage.lastName}</TableCell>
                                <TableCell>{mesage.phone}</TableCell>
                                <TableCell><Button onClick={() => handleDownload(mesage.filePath)}>Download File</Button></TableCell>
                                <TableCell>
                                    <Button color="danger" onPress={() => handleDelete(mesage.id)}>Delete</Button>
                                </TableCell>
                              </TableRow>
                            )
                        })
                    }
                </TableBody>    
                </Table>
                 )}

            </Fade>
        
        </div>
    </div>
    
  )
}

export default Messages;