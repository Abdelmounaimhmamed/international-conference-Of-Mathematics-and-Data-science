import { Button } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { Fade, Zoom } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem
  } from "@nextui-org/react";



const Navbar = () => {
    const [state , setState] = useState(true);
    const [isFixed, setFixed] = useState(false); 

    useEffect(() => {
        const  handleScroll = () =>  {
        const heroSectionEl  = document.getElementById('hero-section');
        const heroSectionRect = heroSectionEl?.getBoundingClientRect();
        // @ts-ignore
        const heroSectionBottom  =  heroSectionRect.bottom ; 
        
        if (window.pageYOffset >= heroSectionBottom) {
            setFixed(true);  
        }
        if (window.pageYOffset <= heroSectionBottom){
            setFixed(false); 
        }
        }

            window.addEventListener('scroll', handleScroll);
            return () => {
            window.removeEventListener('scroll', handleScroll);
            };
        

    }, []);


    const handleClick = () => {
        setState(!state);
    }
   
  return (
    <>
        <div className={`Navbar w-full flex flex-row justify-around items-center flex-nowrap ${isFixed ? 'change-color' : ''}`}>
            <div className=''>
            <Fade cascade damping={0}>
                    <h2 className="text-4xl develus font-extrabold my-2 ">ICMDS'24</h2>
                    <p className="text-gray-300">NEW EDITION</p>
            </Fade>
            </div>
            <Fade cascade duration={200}>
                <ul className='items float-right'>
                    <li><a href="#" className="text-xl font-medium">Home</a></li>
                    <li><a href="#callpaper" className="text-xl  font-medium">CallPapers</a></li>
                    <li><a href="#Speakers" className="text-xl   font-medium">Speakers</a></li>
                    <li><a href="#Orginzers" className="text-xl  font-medium">Organizers</a></li>
                    <li><a href="#Community" className="text-xl  font-medium">Community</a></li>
                    <li><a href="#Pogram" className="text-xl     font-medium">Program</a></li>
                    <li><a href="#ContactUs" className="text-xl font-medium">ContactUs</a></li>
                    <Dropdown>
                        <DropdownTrigger>
                            <Button 
                            variant="bordered" 
                            className={`text-white text-lg font-medium ${isFixed ? 'text-black' : ''}`}
                            >
                            Previous
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Static Actions" className='bg-black rounded-xl border-none border-black'>
                            <DropdownItem key="copy"><a target='_blank' href='https://icmds-ma.com/' className='font-medium text-lg'>ICMDS 21</a></DropdownItem>
                            <DropdownItem key="edit"><a target='_blank' href='https://icmds-ma.com/icmds20/published_papers' className='font-medium text-lg'>ICMDS 20</a></DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <Button className="mx-2 text-white" variant="bordered"><Link to={"/login"} className={`text-lg  font-medium ${isFixed ? 'text-black' : ''}`}>Login</Link></Button>
                    <Button  className={`mx-2 text-white text-lg  font-medium ${isFixed ? 'text-black' : ''}`} variant="bordered"><a href='#register'>Register</a></Button>
                </ul>
                <div className='xl:hidden sm:block' >
                    {state === true ? ( <MenuIcon fontSize='large'  onClick={handleClick} />) : ( <CloseIcon onClick={handleClick} />)}
                </div>
            </Fade>
        </div>
        { state === false && (
            <div className='showed-sm'>
            <Zoom  cascade damping={0.1}> 
                <ul className='items-v2'>
                    <li><Link to="#" onClick={handleClick} className="text-xl font-medium">Home</Link></li>
                    <li><a onClick={handleClick} href="#callpaper" className="text-xl font-medium">CallPapers</a></li>
                    <li><a onClick={handleClick} href="#Speakers" className="text-xl  font-medium">Speakers</a></li>
                    <li><a onClick={handleClick} href="#Orginzers" className="text-xl  font-medium">Orginzers</a></li>
                    <li><a onClick={handleClick} href="#Community" className="text-xl  font-medium">Community</a></li>
                    <li><a onClick={handleClick} href="#Pogram" className="text-xl  font-medium">Pogram</a></li>
                    <li><a onClick={handleClick} href="#ContactUs" className="text-xl font-medium">ContactUs</a></li>
                    <Button className="mx-4 text-white" variant="bordered"><Link to={"/login"} className="text-xl  font-medium">Login</Link></Button>
                </ul>
            </Zoom>
        </div>
        )}
    </>
  )
}

export default Navbar