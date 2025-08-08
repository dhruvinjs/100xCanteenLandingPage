
import type { ReactElement } from "react"
import { Card } from "../Components/Card"

type FeatureItems={
    icon:string | ReactElement,
    title:string,
    description:string,
}
interface FeaturesProps{
        items:FeatureItems[]
}   

export function Features({items}:FeaturesProps){
    return(
        <>
<div className=" flex flex-col py-12 ">
    <div className="mb-10 text-center">
        <div className="space-y-6">
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-blue-600 to-blue-900">
          Why 100x Canteen
        </h2>

        <p className="text-white -mt-2 mb-8 font-bold ">
          The perfect mix of speed, freshness, and flavor – designed just for you.
        </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

        {
            items.map((val,index)=>(
                <Card 
                content={val.description}
                title={val.title}
                size="sm"
                variant="primary"
                key={index}
                className="rounded-xl"
                />
            ))
        }
        </div>
    </div>
</div>
        </>
    )
}