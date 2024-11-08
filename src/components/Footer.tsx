import { BsPinterest, BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export  default function Footer  ()  {
  return (
    <div className="container pt-40">
        <div className="grid  md:grid-cols-3 gap-16">
            <div className="space-y-4">
                <h2 className="text-xl font-bold">About us</h2>
                <p className="leading-[1.8]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit iste nisi veniam cum voluptates expedita, impedit deleniti hic consectetur neque, necessitatibus praesentium? Nulla sit beatae quas, id dolore qui, dolores aliquid dolorum error quod aut.

                </p>
            </div>


          <div className="space-y-4">
            <h2 className="text-xl font-bold">The Resturant</h2>
            <ul className="space-y-2">
                <li>About US</li>
                <li>Chefs</li>
                <li>Evets</li>
                <li>Content</li>
            </ul>
          </div>
          <div>

            <div className="flex  gap-8 text-red-600 text-2xl pt-16">
              <FaFacebookF/>
              <BsTwitter/>
              <BsPinterest/>
              <FaLinkedinIn/>
            </div>
            
          </div>
        </div>
    </div>
  )
}
