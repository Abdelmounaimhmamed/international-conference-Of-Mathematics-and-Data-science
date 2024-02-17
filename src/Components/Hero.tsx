import { Fade } from "react-awesome-reveal"

const Hero = () => {
  return (
    <div className="w-full  sm:h-[full] xl:h-[80vh] media-class flex flex-col justify-center items-center">
        <div className="flex flex-row w-full justify-around  items-start flex-wrap">
        <div className="flex flex-col justify-start items-start ">
            <Fade cascade damping={0.2} className="my-2">
                
                <h1 className="develus text-5xl">The international conference <br/> </h1>
                <h1 className="develus text-4xl my-3">Of Mathematics and Data science 2024</h1>
                <h3 className="develus text-xl ">At Ensa khouribga</h3>
                <h2 className="my-4 text-gray-400 text-xl">DON'T MISS THE CONFERENCE !</h2>
            </Fade>
            <div className="flex flex-col justify-start items-start text-gray-400 text-lg">
                <Fade cascade damping={0.3}>
                    <div className="flex flex-row justify-center items-center">
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
                </Fade>
            </div>
        </div>
       
        <div className="">
            <Fade cascade damping={0.2}>
                <img src="math.svg" alt="" className="xl:w-[100%] xl:h-[400px] sm:w-[90%] sm:custom-size" />
            </Fade>
        </div>
        </div>
    </div>
  )
}

export default Hero