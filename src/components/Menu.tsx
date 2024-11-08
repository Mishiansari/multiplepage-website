import Dash from './Dash'
import Image from 'next/image'
import { MenuCard } from './MenuCard'

const menuData =[
    {
        img:"/Image/cake.jpeg",
        title:"Yummy cake",
        desc: "2x tuma sehmi, 2x noodles",
        price:"$29.50"
    },
    {
        img:"/Image/chocolate Macrons.jpeg",
        title:"Chocolate Macrons",
        desc: "2x tuma sehmi, 2x noodles",
        price:"$14.50"
    },
    {
        img:"/Image/BBQ.jpeg",
        title:"BBQ pizza fires",
        desc: "2x tuma sehmi, 2x noodles",
        price:"$13.50"
    },
    {
        img:"/Image/bEAD.avif",
        title:"cheeze Beaf Burger",
        desc: "2x tuma sehmi, 2x noodles",
        price:"$19.50"
    },
    {
        img:"/Image/zinger.jpeg",
        title:"Zinger Burger",
        desc: "2x tuma sehmi, 2x noodles",
        price:"$18.50"
    },
    {
        img:"/Image/Tandori Mushroom pizza.jpeg",
        title:"Tendori Pizza",
        desc: "2x tuma sehmi, 2x noodles",
        price:"$13.50"
    },
    {
        img:"/Image/pepperoni pizza roll.jpeg",
        title:"Tpepperoni pizza roll",
        desc: "2x tuma sehmi, 2x noodles",
        price:"$23.50"
    },
    {
        
        img:"/Image/fish.jpeg",
        title:"Fish",
        desc: "2x tuma sehmi, 2x noodles",
        price:"$25.50"
    }
]


export  default function Menu ()  {
  return (
     <div className='container pt-40'>
        <div className='space-y-4 w-fit  mx-auto text-center'>
        <h2 className='text-4xl md:6xl font-bold'>
            Our <span className='text-red-600'>Menu</span>
        </h2>
        <p className='text-gray-700'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, ipsa!
            <br/>
            quidem esse enum aninmal?
        </p>
        <div className='w-fit mx-auto'>
            <Dash/>
        </div>
         </div>


        <ul className='mt-hidden sm:flex gap-6 md:gap-10 lg:gap-20 w-fit mx-auto'>
            <li className='bg-red-600 text-white p-1'>Appetizers</li>
            <li className='hover:bg-red-500'>Breakfast</li>
            <li className='hover:bg-red-500'>Slads</li>
            <li className='hover:bg-red-500'>Soup</li>
            <li className='hover:bg-red-500'>Meat&Fish</li>
            <li className='hover:bg-red-500'>Desert</li>
            <li className='hover:bg-red-500'>Drinks</li>
        </ul>

        <div className='grid lg:grid-cols-[35%,1fr]  gap-10 pt-10'>
            <div className='w-fit mx-auto'>
                <Image className="w-[100%] max-w-[400px] h-auto" 
                src="/Image/FOOD.avif"
                width={500}
                height={500}
                alt="dish"
                />
            </div>


            <div className='grid w-fit max-auto sm:grid-cols-2 gap-4'>
             {menuData.map((item,index)=>
                 <MenuCard key={index} 
                 img={item.img}
                  title={item.title}
                   desc={item.desc} 
                   price={item.price}
                   />
                   )}
            </div>
        </div>
         
          



         </div>
  )
}
