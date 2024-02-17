import { Button } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { Fade, Zoom } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';




const Navbar = () => {
    const [state , setState] = useState(true);
    const [isFixed, setFixed] = useState(false); 

    useEffect(() => {
        const  handleScroll = () =>  {
        const heroSectionEl  = document.getElementById('hero-section');
        const heroSectionRect = heroSectionEl?.getBoundingClientRect();
        if(heroSectionRect !== undefined){
            const heroSectionBottom  =  heroSectionRect.bottom ; 
            if (window.pageYOffset >= heroSectionBottom) {
                setFixed(true);  
            }
            if(window.pageYOffset <= heroSectionBottom){
                setFixed(false); 
            }
            }
            window.addEventListener('scroll', handleScroll);
            return () => {
            window.removeEventListener('scroll', handleScroll);
            };
        }

    }, []);


    const handleClick = () => {
        setState(!state);
    }
   
  return (
    <>
        <div className={`Navbar  ${isFixed ? 'change-color' : ''}`}>
            <div className=''>
            <Fade cascade damping={0}>
                    <h2 className="text-3xl develus">ICMDS'24</h2>
                    <p className="text-gray-500">NEW EDITION</p>
            </Fade>
            </div>
            <Fade cascade duration={200}>
                <ul className='items'>
                    <li><Link to="/" className="text-xl font-medium">Home</Link></li>
                    <li><a href="#callpaper" className="text-xl font-medium">CallPapers</a></li>
                    <li><a href="#Speakers" className="text-xl  font-medium">Speakers</a></li>
                    <li><a href="#Orginzers" className="text-xl  font-medium">Orginzers</a></li>
                    <li><a href="#Community" className="text-xl  font-medium">Community</a></li>
                    <li><a href="#Pogram" className="text-xl  font-medium">Pogram</a></li>
                    <li><a href="#ContactUs" className="text-xl font-medium">ContactUs</a></li>
                    <Button className="mx-4 text-white" variant="bordered"><Link to={"/login"} className="text-xl  font-medium">Login</Link></Button>
                </ul>
                <div className='xl:hidden sm:block' >
                    {state === true ? ( <MenuIcon fontSize='large'  onClick={handleClick} />) : ( <CloseIcon onClick={handleClick} />)}
                </div>
            </Fade>
        </div>
        { state === false && (
            <div className='showed-sm'>
            <Zoom  cascade>
                <ul className='items-v2'>
                        <li><a href="/dataverse">Acceuil</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#team">Team</a></li>
                        <li><a href="#event">Event Program</a></li>
                        <li><a href="contact">Contact</a></li>
                </ul>
            </Zoom>
        </div>
        )}
    </>
  )
}

export default Navbar