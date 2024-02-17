import { Button } from "@nextui-org/react"
import { Fade } from "react-awesome-reveal"

const Hero = () => {
  return (
    <div className="w-full  relative sm:h-[full] xl:h-[80vh] media-class flex flex-col justify-center items-center">
        <div className="flex flex-row w-full justify-center  items-center ">
            <Fade cascade damping={0.2} className="my-2">
        <div className="flex flex-col justify-center items-start ">
                <h1 className="develus text-5xl">The international conference   </h1>
                <h1 className="develus text-4xl my-3">Of Mathematics and Data science 2024</h1>
                <Button className="custom-bg ">See More</Button>
                {/* <h3 className="develus text-xl ">At Ensa khouribga</h3> */}
                {/* <h2 className="my-4 text-gray-400 text-xl">DON'T MISS THE CONFERENCE !</h2> */}
        </div>
   
         </Fade>

            {/* 
                </Fade>
            </div> */}
       
        {/* <div className="">
            <Fade cascade damping={0.2}>
                <img src="math.svg" alt="" className="xl:w-[100%] xl:h-[400px] sm:w-[90%] sm:custom-size" />
            </Fade>
        </div> */}
        </div>
    </div>
  )
}

export default Hero