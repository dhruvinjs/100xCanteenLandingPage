import type { ReactNode } from "react";

interface CardProps{
    title:string,
    content:string,
    variant:"primary" | "secondary" ,
    size:"md" | "lg" | "sm",
    children?:ReactNode,
    className?:string,
    content_className?:string
    logo?:React.ReactElement
}
const sizeDef={
    "sm":"py-1 px-3 max-w-xs sm:max-w-sm ",
    "md":"py-3 px-7 max-w-xs md:max-w-md",
    "lg":"py-7 px-11 max-w-lg md:max-w-xl"
}
const variantDef={
    "primary":"bg-blue text-white",
    "secondary":"bg-cyan-400 text-white"
}
export const Card=(props:CardProps)=>{
    const {children,title,content,size,variant,className,content_className}=props
    
    return(
        <>
        <div className={` ${sizeDef[size]} ${variantDef[variant]} flex flex-col
        ${className || ""} bg-gradient-to-r from-sky-700 to-sky-900 space-y-5
       
        `}>
            <div className="text-center font-bold text-xl md:text-2xl text-wrap">
                {title}
            </div>
            <div className={`leading-normal text-wrap md:text-base text-sm ${content_className || ""}`}>
                {content}
            </div>
        <div className="flex items-center justify-center">
            {children}
        </div>
        </div>
        </>
    )
}