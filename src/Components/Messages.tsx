import {
    Table,
    TableHeader,
    TableBody,
    TableColumn,
    TableRow,
    TableCell,
    getKeyValue,
    Pagination,

    Button
  } from "@nextui-org/react";
import React from 'react';
import { Fade } from "react-awesome-reveal";


const Messages = () => {
    const [page, setPage] = React.useState(1);
    const rowsPerPage = 4;
  
    const users = [
        {id : 1 , name : "mounaim@gmail.com" , role : "admin" , lastName : "oauth", status : <Button >Download file</Button>},
        {id : 2 , name : "mounaim@gmail.com" , role : "admin" , lastName : "oauth", status : <Button >Download file</Button>},
        {id : 3 , name : "mounaim@gmail.com" , role : "admin" , lastName : "oauth", status : <Button >Download file</Button>},
        {id : 4 , name : "mounaim@gmail.com" , role : "admin" , lastName : "oauth", status : <Button >Download file</Button>},
        {id : 5 , name : "mounaim@gmail.com" , role : "admin" , lastName : "oauth", status : <Button >Download file</Button>},
        {id : 6 , name : "mounaim@gmail.com" , role : "admin" , lastName : "oauth", status : <Button >Download file</Button>},
        {id : 7 , name : "mounaim@gmail.com" , role : "admin" , lastName : "oauth", status : <Button >Download file</Button>},
    ];
    const pages = Math.ceil(users.length / rowsPerPage);
  
    const items = React.useMemo(() => {
      const start = (page - 1) * rowsPerPage;
      const end = start + rowsPerPage;
  
      return users.slice(start, end);
    }, [page, users]);
  

  return (
    <div className='w-full flex flex-col justify-center items-center '>
            <h1 className='w-[90%] text-black bg-gray-300 p-3 rounded-xl text-xl text-center my-10 font-bold'>Liste of Messages </h1>
        <div className='w-[90%]'>
            <Fade cascade damping={0.2}>

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
                    <TableColumn key="status">files</TableColumn>
                </TableHeader>
                <TableBody items={items}>
                    {(item) => (
                    <TableRow key={item.name}>
                        {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                    </TableRow>
                    )}
                </TableBody>    
                </Table>
            </Fade>
        
        </div>
    </div>
    
  )
}

export default Messages;