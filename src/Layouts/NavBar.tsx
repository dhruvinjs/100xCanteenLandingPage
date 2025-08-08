import {  type ReactElement, type ReactNode } from "react";
import { DropDown } from "../Components/DropDown";
export interface NavBarItems{
    name:string,
    href:string
}
interface NavBarProps{
items:NavBarItems[],
logo?:ReactElement,
brandName:string,
children?:ReactNode
variant:"fixed" | "static"
}
const variantDef={
    "fixed":"top-0 left-0 right-0 fixed",
    "static":"static z-50"
}
const defaultStyle="bg-black  text-white flex justify-around items-center py-3 px-4"


export function NavBar(props:NavBarProps){
const {children,items,logo,brandName,variant}=props
return(
    <>
    <nav className={`
        ${variantDef[variant]}
        ${defaultStyle}
        border-b border-gray-800
    `
    }>
        <div className="flex items-center  justify-around md:justify-between md mx-auto w-full max-w-6xl">

    <div className="flex space-x-2 text-xl font-bold">
        {logo} <span className="">{brandName}</span>
    </div>
        <div className=" hidden md:flex space-x-8 md:w-auto">
            {items.map((val,index)=>{
                return(
                    <a href={val.href} key={index} className="hover:font-bold hover:scale-120 transition-all duration-200">
                        {val.name}
                    </a>
                )
            })}
        </div>
       <div className="flex items-center gap-4">
            {children}
          <div className="md:hidden">
          <DropDown items={items} className="md:hidden block mt-2"/>
          </div>
          </div>
        </div>
    </nav>
    </>
)
}