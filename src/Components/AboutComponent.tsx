import axios from 'axios';
import { useState, useEffect } from 'react';
import { Zoom } from "react-awesome-reveal"
import { BASE_URI } from './Constant';

const AboutComponent = () => {
  const [parag1 , setparag1] = useState<string>("");
  const [parag2 , setparag2] = useState<string>("");
  const [parag3 , setparag3] = useState<string>("");
  const [parag4 , setparag4] = useState<string>("");
  console.log(parag1);
  console.log(parag2);
  console.log(parag3);
  console.log(parag4);
  
  const fetchers = async () => {
    try {
      const {data} = await axios.get(BASE_URI+"");
      setparag1(data.parag1);
      setparag2(data.parag2);
      setparag3(data.parag3);
      setparag4(data.parag4);

    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchers();

    return () => {};
  }, [axios])

  return (
    <div className="w-full  container xl:h-[100vh]  md:h-[100%]">
          <h1 className="font-medium text-5xl my-5 develus text-center "> {"About Conference".toUpperCase()}</h1>
        <div className="flex flex-row justify-center items-center flex-wrap max-w-[100%] ">
            <Zoom>
              <div className="wrapper  w-[450px] box h-[230Px] m-2 bg-[#ecf5ff] rounded-xl flex flex-col justify-center items-center">
                <p className="p-5 text-justify text-gray-500 font-medium">Mathematics serves as the foundation for advancements in scientific and technological domains, providing insights into natural phenomena within our universe. With ongoing global progress and significant technological advancements, mathematics continues to play a vital role in understanding and shaping our evolving world.</p>
              </div>
              <div className="wrapper  w-[450px] box h-[230Px] m-2 bg-[#ecf5ff] rounded-xl flex flex-col justify-center items-center">
                <p className="p-5 text-justify text-gray-500 font-medium">Recently, novel themes in applied mathematics have emerged as influential drivers of progress in modern society. This conference endeavors to shed light on the research trends in mathematics that have shaped this scientific evolution.</p>
              </div>
              <div className="wrapper  w-[450px] box h-[230Px] m-2 bg-[#ecf5ff] rounded-xl flex flex-col justify-center items-center">
                <p className="p-5 text-justify text-gray-500 font-medium">While staying true to the foundational principles of applied mathematics, the conference will spotlight contemporary areas of mathematical inquiry that intersect with this ongoing advancement.</p>
              </div>
              <div className="wrapper  w-[450px] box h-[230Px] m-2 bg-[#ecf5ff] rounded-xl flex flex-col justify-center items-center">
                <p className="p-5 text-justify text-gray-500 font-medium">The conference will be a global platform for exchanging insights, highlighting latest developments, and discussing interdisciplinary topics such as machine learning and deep learning. Experts from diverse backgrounds, including researchers, practitioners, and industry professionals, will engage in collaborative discussions..</p>
              </div>
            </Zoom>
        </div>
    </div>
  )
}

export default AboutComponent