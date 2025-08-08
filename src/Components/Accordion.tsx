import { Minus, Plus } from "lucide-react";
import { useState } from "react";
type AccordionItems={
    question:string
    answer:string
}
interface AccordionProps{
    items:AccordionItems[]
}

export function Accordion({items}:AccordionProps){
    const [showAnswer,setShowAnswer]=useState<number | null> (null)

    function toggleQuestion(index:number){
        setShowAnswer(prev=> prev === index ? null : index)
    }

    return(
        <div className="max-w-xl w-full mx-auto mt-4">
            <div className="shadow-md rounded-md divide-y divide-gray-200 ">

            {
                items.map((val,index)=>(
                    <div className={` bg-white rounded-md `}
                    key={index}
                    >
                    <div className="flex items-center justify-between border-t border-gray-700 py-5 px-4 cursor-pointer" onClick={()=>toggleQuestion(index)}>
                        <span className="font-semibold ">
                            {val.question}
                        </span>
                    {showAnswer === index ? <Minus size={20}/> : <Plus size={20}/>}
                    </div>
                
                 <div
                className={`transition-all duration-300 ease-in-out overflow-hidden px-2 ${
                  showAnswer===index ? "max-h-40 py-3 px-4 " : "max-h-0 px-4"
                }`}
              >
                <span className="text-black text-sm ">
                  {val.answer}
                </span>
              </div>
            </div>
             ))   
            }
            </div>
        </div>
    )


}