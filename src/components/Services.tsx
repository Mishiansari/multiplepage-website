import Dash from "./Dash"
import ServiceCard from "./ServiceCard"


const servicesData=[
    {
        img:"/Image/chef.jpg",
        title:"chef",
        desc:"lorem ispum dolor sit amet consectetur adipiscing elit. Atque, odio"
    },
    {
        img:"/Image/dlivery.jpeg",
        title:"Delivery",
        desc:"orem ispum dolor sit amet consectetur adipiscing elit. Atque, odio"
    },
    {
        img:"/Image/Drinks.png",
        title:"Drink list",
        desc:"orem ispum dolor sit amet consectetur adipiscing elit. Atque, odio"
    },
    {
        img:"/Image/WIFI.png",
        title:"Free wifi",
        desc:"orem ispum dolor sit amet consectetur adipiscing elit. Atque, odio"
    }
]


export default function Services  ()  {
  return (
    <div className="container pt-40">
        <div className="space-y-4 w-fit mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold">
                Choose Best <span className="text-red-600">Service</span>
            </h2>
            <p className="text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br/>
            Quiem aesse enum animi?
           
            </p>
            <div className="w-fit mx-auto">
                <Dash/>

            </div>
        </div>



        <div className="grid gap-10 md:grid-cols-4 md:gap-4 pt-8">
            {servicesData.map((item, index) =>
                 <ServiceCard key={index}
                  img={item.img} 
                  title={item.title} 
                 desc={item.desc}
                 />
                 )}
            
        </div>
    
    </div>
  )
}
