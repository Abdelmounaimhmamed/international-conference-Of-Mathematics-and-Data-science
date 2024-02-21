import { Facebook, Instagram, Mail, YouTube } from "@mui/icons-material";
import { useEffect, useState } from "react";
import {  Zoom } from "react-awesome-reveal"
import Typewriter from 'typewriter-effect';
import {
  Modal, 
  ModalContent, 
  ModalHeader, 
  ModalBody, 
  ModalFooter,
  useDisclosure,
  Button
} from "@nextui-org/react";


const UpdaeHero = () => {
    const [renderComponent, setRenderComponent] = useState(false);
    useEffect(() => {
      const timer = setTimeout(() => {
        setRenderComponent(true);
      }, 1500); 
  
      return () => {
        clearTimeout(timer); 
      };
    }, []);
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
        <div className='Hero' id="hero-section">
        <div className='opac-time' />
        <img src="robot.jpg" className='image' alt='' />
                {renderComponent && (
                    <div className='social-hero-section'>
                        <div className='w-full flex flex-col justify-center items-center'>
                          <Zoom className="w-full flex flex-col justify-center items-center" cascade  damping={0.1}>
                                <a  href='https://www.instagram.com/data.verse2.0/' target='_blank' className='social-item-hero my-2'><Instagram fontSize="large" /></a>
                                <a  href='https://www.instagram.com/data.verse2.0/' target='_blank' className='social-item-hero my-2'><Mail fontSize="large" /></a>
                                <a  href='https://www.linkedin.com/company/dataverse1/' target='_blank' className='social-item-hero my-2'><YouTube fontSize="large" /> </a>
                                <a  href='https://www.facebook.com/dataverse1.0' target='_blank' className='social-item-hero my-2'><Facebook fontSize="large" /></a>
                          </Zoom>
                        </div>
                    </div>
                )}
    <div className="component">
    <Zoom className="component">
        <div className='flex flex-col justify-center items-center h-full  '>
                    <h1 className=' text-4xl '> The international conference On</h1>
                    <p style={{fontSize:"30px" }}> </p>
                    <h1 className='capitalized'  id="typewriter">
                        <Typewriter 
                            options={{
                                strings: ['  Mathematics and Data science 2024'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                  </h1>
                  <img src="icmds.svg" className="w-[300px] h-[150px] mb-10" alt="" />
                  {/* <p className='parag-hero-sec text-xl text-gray-300'>Work together to bring data and maths lovers together .</p>                    */}
                  <Button  className="my-6 px-6 py-6 text-lg font-medium rounded bg-gray-800 text-gray-300 absolute bottom-0  right-1" onPress={onOpen} > Comference Timing </Button>
                 
        </div>
    </Zoom>
    </div>
        
    </div>
    
    <Modal isOpen={isOpen} className="bg-gray-800 h-[330px]"  onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Comference timing</ModalHeader>
              <ModalBody >
              <div className="flex flex-col justify-start items-start my-2 text-gray-300 text-lg">
                  <Zoom cascade damping={0.3}>
                      <div className="flex flex-row justify-center items-center ">
                          <p>Full Abstract submission  &nbsp;  - &nbsp; </p><span> &nbsp; September 20, 2021</span>
                      </div>
                      <div  className="flex flex-row justify-center items-center my-1 ">
                          <p>Full Paper submission - </p><span>October 05, 2021</span>
                      </div>
                      <div  className="flex flex-row justify-center items-center my-1">
                          <p>Authors Notification - </p><span>October 15, 2021</span>
                      </div>
                      <div  className="flex flex-row justify-center items-center my-1">
                          <p>Camera ready  - </p><span>October 05, 2021</span>
                      </div>
                      <div  className="flex flex-row justify-center items-center my-1">
                          <p>Conference Dates  - </p><span>October 28-30, 2021</span>
                      </div>
                    </Zoom>
                    
                  </div>

              </ModalBody>  
              <ModalFooter>
               
                <Button color="primary" onPress={onClose}>
                   close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>


    </>
  )
}

export default UpdaeHero