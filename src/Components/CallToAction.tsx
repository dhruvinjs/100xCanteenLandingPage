import { Button } from "./Button";

export function CallToAction() {
    const buttonAction=["Sign-In",'Order',"Dine-In"]
  return (
    <>
    <div className="max-w-2xl w-full mx-auto bg-cyan-900 rounded-xl py-6 px-4 flex justify-center items-center gap-4  flex-col">
    <h2 className="text-white text-xl font-semibold">Quick Actions</h2>

        <div className="flex flex-wrap justify-center gap-8 hover">

      {
        buttonAction.map((val,index)=>(
            <Button
            size="md"
            variant="primary"
            text={val}
            key={index}
            className="hover:scale-125 hover:cursor-pointer transition-all hover:font-bold duration-200"
            />
        ))
      }
        </div>
    </div>
        </>
  );
}
