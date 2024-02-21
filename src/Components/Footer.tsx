import { Facebook, Instagram, YouTube } from "@mui/icons-material"



const Footer = () => {
  return (
    <div  className="w-full text-gray-400 font-medium h-full bg-black " id="ContactUs">
        <div className="w-full flex flex-row justify-evenly items-center flex-wrap">
            <div className="flex flex-col justify-start items-start max-w-[400px]">
                <h1 className="text-2xl my-5">Our Conference</h1>
                <p className="text-lg mb-3 ">Previous editions : ICMDS'24 </p>
                <p className="text-lg mb-3 ">email : icmds@usms.ma </p>
                <p className="text-lg mb-3 ">Adress: National School of Applied Science (ENSA) Bd Béni Amir, BP 77, Khouribga - Maroc</p>
            </div>
            <div className="flex flex-col justify-start items-start">
                <h1 className="text-2xl my-5">Our Sponsors</h1>
                <p className="text-lg mb-3">National School of Applied Sciences, (ENSAKH)</p>
                <p className="text-lg mb-3">University Sultan Moulay Slimane, (USMS)</p>
                <p className="text-lg mb-3">LIPIM Laboratory</p>
                <p className="text-lg mb-3">CNRST, Maroc</p>
            </div>
            <div className="flex flex-col justify-start items-start">
                <h1 className="text-2xl my-5">Subscribe</h1>
                {/* <div className="flex flex-row justify-center items-center">
                    <Input type="text" className="text-white " placeholder="Email" variant="underlined"  required/>
                    <Button className="text-lg  bg-gray-800 my-3 text-white mx-2 px-5 py-6" color="warning"  >Send </Button>
                </div> */}
                <h1 className="text-xl my-4">Subscribe</h1>
                <div className="w-full flex flex-row justify-start items-center">
                    <Facebook  fontSize="large"  className=" mr-6 my-3 rounded-full " />
                    <YouTube fontSize="large"    className=" mr-6 my-3 rounded-full " />
                    <Instagram fontSize="large"  className=" mr-6 my-3 rounded-full " />
                </div>
            </div>
        </div>
        <div className="w-full flex flex-row justify-evenly items-center flex-nowrap bg-black">
            <h1 className="text-xl mt-2">Copyright © 2024 - All rights reserved.</h1>
            <h1 className="text-xl mt-2"><a href="https://develus.vercel.app" target="_blank">Created with Love By<span className="text-white mx-2 text-2xl underline">Develus</span> </a></h1>
        </div>
    </div>
  )
}

export default Footer