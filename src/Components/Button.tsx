import type { ReactElement } from "react"

export interface ButtonProps{
    variant:"primary" | "secondary" | "custom",
    size:"sm" | "md" | "lg",
    className?:string,
    text?:string,
    onClick?:()=>void,
    icon?:ReactElement
}
const variantDef={
    "primary":"bg-cyan-800 ",
    "secondary":"bg-black",
    "custom":""
}
const sizeDef={
    "sm":"py-1 px-2",
    "md":"py-3 px-4",
    "lg":"py-5 px-6",
}
export function Button(props:ButtonProps){
const {variant,size,className,text,icon}=props
return(
    <button className={` ${className || ""} ${variantDef[variant]} ${sizeDef[size]} rounded-xl`}
    >
       {icon} {text || ""}
    </button>
)
}