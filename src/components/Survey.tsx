import Image from "next/image"

export default function Survey  ()  {
  return (
<div className="container pt-40">
  <div className="grid lg:grid-cols-[50%,1fr] gap-20">
    <div>
      <Image 
      className="w-[100%] h-auto lg:w-auto lg:h-[90vh]"
      src="/Image/food-quality-survey-1.webp"
      width={1000}
      height={600}
      alt="survey"
      />
    </div>
    <div className="slef-center">
      <h2 className="text-4xl md:text-6xl font-bold pt-3">Survery</h2>
      <h2 className="text-4xl md:text-6xl font-bold pt-3">
        About Our <span className="text-red-600">Food</span>
      </h2>
      <p className="text-gray-700 pt-16">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt quod provident aliquid dolor fugiat totam, nostrum consequatur beatae incidunt! Deleniti itaque labore harum officiis maxime ipsam voluptates totam doloribus pariatur! Accusamus pariatur dicta voluptas perspiciatis!
         <br/> <br/>
         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt quod provident aliquid dolor fugiat totam, nostrum consequatur beatae incidunt! Deleniti itaque labore harum officiis maxime ipsam voluptates totam doloribus pariatur! Accusamus pariatur dicta voluptas perspiciatis!
      </p>
    </div>
  </div>
</div>
) 
}
