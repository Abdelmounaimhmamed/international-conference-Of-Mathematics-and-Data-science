import { Image } from "@nextui-org/react"
import { Fade } from "react-awesome-reveal"

const AboutComponent = () => {
    const parag = `
    Mathematics serves as the foundation for advancements in scientific and 
    technological domains, providing insights into natural phenomena within 
    our universe. With ongoing global progress and significant technological 
    advancements, mathematics continues to play a vital role in understanding and 
    shaping our evolving world. Recently, novel themes in applied mathematics have 
    emerged as influential drivers of progress in modern society. This conference 
    endeavors to shed light on the research trends in mathematics that have shaped 
    this scientific evolution. While staying true to the foundational principles of
     applied mathematics, the conference will spotlight contemporary areas of mathematical
      inquiry that intersect with this ongoing advancement. Primarily, it will serve as 
      a platform for researchers, practitioners, and industry experts from across the globe 
      to exchange insights, highlight the latest developments, and engage in discussions 
      on interdisciplinary topics such as machine learning, deep learning, inverse problems, 
      intelligent optimization, and related fields. By fostering collaboration among experts 
      from diverse backgrounds, the conference aims to inspire new avenues of research and 
      accelerate innovation in these rapidly evolving domains.
    
    `

  return (
    <div className="w-full  xl:h-[100vh]  md:h-[100%]">
        <div className="flex flex-col justify-center items-center">
            <Fade cascade damping={0.3}>
                <h1 className="font-medium text-5xl my-12 develus text-center "> About Conference</h1>
                <div className=" flex flex-row justify-evenly items-center flex-wrap">
                        <p className=" text-gray-500 text-lg text-justify xl:w-[55%] sm:w-[30%]">{parag}</p>
                        <Image src="comf.svg" className="max-w-[400px] "  alt="" />
                </div>
            </Fade>
        </div>
    </div>
  )
}

export default AboutComponent