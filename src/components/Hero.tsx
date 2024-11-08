import Image from "next/image"
import Navbar from "./Navbar"
export  default function  Hero  ()  {
  return (
    <div className="relative min-h-screen ">
<Image  className="lg:w-[500px] xl:w-[620px] h-auto absolute  right-0 top-0 -z-10"
src="/Image/bg.jpg"
alt="hero image"
 width={1000} 
 height={600}/>
 <Navbar/>

 <div className=" container h-[calc(100vh-120px)] grid  items-center">
    <div className="space-y-4 bg-[#fffff9] w-fit p-4">
        <p className="uppercase font-medium">Wide option of choice</p>
        <h2 className="text-4xl sm:text-6xl font-bold">
            Yummy <span className="text-red-600 ">Food</span>
        </h2>
        <p className="text-gray-700 text-[14px] sm:text-[16px]">
            Yummy Food color, aroma and test. <br/>
            What are you waiting for?
        </p>


        <button className="bg-red-600 text-white px-6 py-4 roun ded-3xl text-[14px] sm:text-[16px] hover:red-400">
            View More
            </button>
    </div>
 </div>
  </div>
  )
}
