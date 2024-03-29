import axios from "axios";
import { useEffect, useState } from "react";
import {  Zoom } from "react-awesome-reveal";
import { BASE_URI } from "./Constant";


const Orginizer = () => {
    const [org , setOrg] = useState([]);
    const fetchers = async () => {
        const  {data} = await axios.get(BASE_URI + "/getAllPartners");
        setOrg(data);
        console.log(org);
    }

    useEffect(() => {
        fetchers();
        return ;
    } , [axios]);


    const someData = [
        {id : 1 , imguri : "ensa.png" , link : "" ,name : "The National School of Applied Sciences of Khouribga"},
        {id : 2 , imguri : "icmds.png" , link : "" ,name : "AMMDS Morrocan Association of Mathematics and Data Science"},
        {id : 3 , imguri : "usms.jpg" , link : "" ,name : "Sultan Moulay Sliman University"},
        {id : 4 , imguri : "labo.png" , link : "" ,name : "Laboratoire Ingénierie des Procédés Informatique et Mathématiques LIPIM"},
        {id : 7 , imguri : "auf.png" , link : "1337.ma" ,name : "Agence Universitaire de la Francophonie"}
    ]

  return (
    <div id="Orginzers" className="w-full  flex flex-col justify-center items-center h-[100%]">
        <h1 className="font-medium text-5xl my-12 develus large-title ">ORGANIZERS & PARTNERS</h1>

        <div className=" flex flex-row justify-center items-center flex-wrap">
            <Zoom cascade damping={0.2}>
                {
                    someData.map(data => {
                        return (
                            // <div className="bg-gray-900 w-[350px] min-h-[200Px] border-2 border-gray-500 rounded-xl flex flex-col justify-evenly items-center m-5" key={data.id}>
                            //     <Image  src={`${data.imguri}`} alt="" className="w-[150px] h-[80px] my-3 border-2 border-gray-500"/>
                            //     <div className="flex flex-col justify-center items-center">
                            //         <h1 className="text-gray-300 p-4 text-center font-bold">{data.name}</h1>
                            //         <AdsClickIcon fontSize="large" className="mb-2" />
                            //     </div>
                            // </div>
                            <div className="">
                                <img src={`${data.imguri}`} className="w-[230px] h-[170px] mx-4" alt="" />
                            </div>
                        )
                    })
                }
            </Zoom>
            
        </div>


    </div>
  )
}

export default Orginizer