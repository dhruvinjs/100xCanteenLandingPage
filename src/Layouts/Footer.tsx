import {  Linkedin, Twitter } from "lucide-react"
import { Instagram } from 'lucide-react';

export function Footer(){
    const link="https://images.pexels.com/photos/19048375/pexels-photo-19048375.jpeg"
    const legalLinks=[
        {"name":"Terms and Conditions","href":"/"},
        {"name":"Privacy Policy","href":"/"}
    ]
    return(
        <>  
        <footer className=" py-4 px-6 bg-black text-white mt-4  ">
            <div className="max-w-7xl flex flex-col md:flex-row flex-wrap justify-between  mx-auto w-full gap-y-8 md:gap-x-20 items-center ">

            <div className="flex items-center space-x-4 justify-center">
                <img src={link} alt="" className="h-32 w-32 rounded-2xl object-cover"/>
             <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-blue-500 to-blue-700">
            100xCanteen
          </h2>
            </div>
            <div className="flex flex-col items-center gap-y-2">
                <span className="font-semibold text-center">Follow Us</span>
                <div className="flex space-x-4 ">
                <a href="">{<Twitter/>}</a>
                <a href="">{<Instagram/>}</a>
                <a href="">{<Linkedin/>}</a>
                </div>
            </div>

            <div className="flex  flex-col items-center justify-center text-center ">
                <span className="font-bold">100xLegal</span>
                <div className="space-x-4 flex flex-col items-center justify-center">
                   {
                    legalLinks.map((val,index)=>{
                        return(
                            <a href={val.href} key={index}>
                                {val.name}
                            </a>
                        )
                    })
                   }
                </div>
            </div>

            </div>
        </footer>
        </>
    )
}