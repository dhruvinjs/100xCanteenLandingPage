import { Button } from "../Components/Button";
import { Card } from "../Components/Card";

export const Hero = () => {
  const features = [
    {
      title: "Optimized Menus",
      content: "Our menu is as dynamic as your code."
    },
    {
      title: "Zero-Downtime Service",
      content: "Quick code, quick bites."
    },
  ];

  return (
    <section className="bg-black text-white py-20">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center w-full gap-10 px-6 max-w-screen-xl mx-auto">
        
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl sm:text-2xl md:text-3xl font-extrabold leading-tight">
            The <span className="text-blue-800">100xCanteen</span>
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            One solution for maximum refactoring and minimal downtime. 
            Eat better, code faster, and never lose focus.
          </p>

          <div className="mt-6">
            <Button variant="primary" size="md" text="Explore Menu" />
          </div>
        </div>

<div className="flex-1 max-w-lg w-full mx-auto md:mx-0">
  <div className="flex flex-col gap-4">
    <Card
      title="Join the waitlist"
      content="Join the 1000's of devs who are waiting to get their tummy full"
      size="sm"
      variant="primary"
      className="rounded-xl py-4 px-5"
    >
      <div className="flex flex-col sm:flex-row gap-3 mt-4">
        <input
          className="flex-1 outline-none bg-white text-black font-bold rounded-md p-2 text-sm sm:text-base"
          type="email"
          placeholder="Enter your email"
        />
        <button
          className="bg-blue-800 hover:bg-blue-900 transition-transform duration-200 transform hover:scale-[0.98] py-2 px-4 rounded-md font-semibold text-sm sm:text-base"
        >
          Subscribe
        </button>
      </div>
    </Card>
  </div>
</div>

    </div>
    </section>
  );
};
