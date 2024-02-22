

import AddLinkIcon from '@mui/icons-material/AddLink';
import { Avatar } from '@nextui-org/react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {  Zoom } from 'react-awesome-reveal';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URI } from './Constant';

const Speakers = () => {
    const [data , setData] = useState([]);
    const fetcher = async () => {
        try {
            const {data : asData} = await axios.get(BASE_URI+"");
            setData(asData);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetcher();
    },[axios])

    const profiles = [
        {id: 1 , profile : "Caen University, France" , icon : <AddLinkIcon />, username : "A. ELMOATAZ" , place : "" , link : "" },
        {id: 2 , profile : "Polytechnique Montréal, Canada" , icon : <AddLinkIcon />, username : "I. Elhalloui " , place : "" , link : "" },
        {id: 3 , profile : "Pau et des Pays de l'Adour University, France" , icon : <AddLinkIcon />, username : "M. DAMBRINE " , place : "" , link : "" },
        {id: 4 , profile : "Ural Federal University, Russia" , icon : <AddLinkIcon />, username : "A. HENDY " , place : "" , link : "" },
        {id: 5 , profile : "Institute of Technology, Rochester, NY, USA" , icon : <AddLinkIcon />, username : "A. KHAN" , place : "" , link : "" },
    ]
  return (
    <div id="Speakers" className="container flex flex-col justify-center items-center ">
        <h1 className="font-medium text-5xl my-12 develus">SPEAKERS</h1>
        <div className='w-full h-full flex flex-row justify-center items-center flex-wrap '>
            <Zoom cascade damping={0.1}>
                {
                    profiles.map(profile => {
                        return (
                            <div className='w-[300px] min-h-[200px] bg-gray-900 flex rounded-xl flex-col justify-center items-center m-4' key={profile.id}>
                                <Avatar isBordered  src="user.jpg"   className='w-20 h-20 my-3' />
                                <div className='flex flex-col justify-center items-center'>
                                    <h1 className='font-medium  text-xl'>{profile.username}</h1>
                                    <p className='text-center p-3 text-gray-400' >{profile.profile.toLowerCase()}</p>
                                </div>
                                <div className='backdrop-blur-md backdrop-brightness-150  w-[270px] h-[60px] rounded-xl my-3 flex flex-row justify-around items-center'>
                                    <AddLinkIcon  fontSize='large'  />
                                    <LinkedInIcon fontSize='large'  />
                                </div>
                            </div>
                        )
                    })
                }
            </Zoom>
        </div>
    </div>
  )
}

export default Speakers