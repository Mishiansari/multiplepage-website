import Dash from "./Dash";
import Image from "next/image";

export default function Features () {
  return (
    <div className="container pt-40">
        <h2 className="text-6xl font-bold">Our</h2>
        <h2 className="text-6xl font-bold pt-2">
            Features <span className="text-red-600">Food</span>
        </h2>
        <p className="max-w-[550px] pt-10 text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore repudiandae esse blanditiis aliquid hic odit repellendus, quas quasi quae minus dignissimos aperiam tenetur odio nesciunt voluptate quod. 
        </p>

        <Dash/>
        <div className="grid md:grid-cols-[1fr,37%,1fr] gap-16 mt-10">
          <div className="w-fit mx-auto self-end">
            <Image 
            className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl"
            src="/Image/spicy egges.avif"
            width={300}
            height={600}
            alt="grid-image"
            />

           <div className="space-y-4">
            <Dash/>
            <h2 className="font-medium text-xl">Spicy peservec Eggs</h2>
            <p className="text-gray-700 text-[14px] xl:text-[16px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, maxime!
            </p>
            </div> 
          </div>


          <div className="w-fit mx-auto">
            <Image 
            className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl"
            src="/Image/french desert.jpg"
            width={500}
            height={900}
            alt="grid-image"
            />

           <div className="space-y-4">
            <Dash/>
            <h2 className="font-medium text-xl">French Deserte</h2>
            <p className="text-gray-700 text-[14px] xl:text-[16px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, maxime!
            </p>
            </div> 
          </div>



          <div className="w-fit mx-auto self-end">
            <Image 
            className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl"
            src="/Image/grid3.jpeg"
            width={300}
            height={600}
            alt="grid-image"
            />

           <div className="space-y-4">
            <Dash/>
            <h2 className="font-medium text-xl">cherries beaf</h2>
            <p className="text-gray-700 text-[14px] xl:text-[16px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, maxime!
            </p>
            </div> 
          </div>



        </div>
    </div>
  )
}
