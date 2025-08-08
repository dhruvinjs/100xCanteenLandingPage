import { Accordion, CallToAction, ImageCard } from "../Components";
import { Testimonials } from "../Components/Testimonials";
import { Footer, NavBar } from "../Layouts";
import { Features } from "../Section/Features";
import { Hero } from "../Section/Hero";

export function LandingPage(){
    const navbarItems = [
        { name: "Features", href: "#features" },
    { name: "Food Items", href: "#fooditems" }
  ];

  const accordionData = [
    {
      question: "What kind of food is served at the 100xCanteen?",
      answer: "We serve a diverse, optimized menu that includes balanced meals designed to boost cognitive function and sustained energy."
    },
    {
      question: "How do I place an order?",
      answer: "You can place your order through our dedicated 100xCanteen mobile app or at one of the self-service kiosks."
    },
    {
        question: "Is the menu customizable?",
        answer: "Yes, our menu is agile and iterative. We offer options to customize meals to fit your dietary preferences or restrictions."
    },
    {
        question: "What are the hours of operation?",
        answer: "The 100xCanteen is open from 8 AM to 8 PM, Monday through Friday. We also offer extended hours for late-night coding sessions and special events. Check the app for real-time updates."
    }
];

const imageData = [
    { image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg" },
    { image: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg" },
    { image: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg" },
    { image: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg" }
  ];

  const testimonialData = [
    { testimonial: "Absolutely delicious! The food at 100xCanteen is always fresh and full of flavor.", name: "Priya S." },
    { testimonial: "Great food at great prices. A total lifesaver on busy days.", name: "Rahul M." },
    { testimonial: "Quick service and fantastic value. 100xCanteen never disappoints.", name: "Anjali K." },
    { testimonial: "This isn’t just food, it’s a full-on blockbuster experience. Every bite is a hit.", name: "Shah Rukh Khan." },
];
const featuresData = [
    {
        title: "Nutritionally Balanced Meals",
        description: "Every dish is crafted with the perfect balance of taste and nutrition to keep you energized and focused.",
        icon: "🥗"
    },
    {
        title: "Lightning-Fast Service",
        description: "From order to plate in record time, so you can fuel up without losing momentum.",
        icon: "⚡"
    },
    {
    title: "Customizable Menu",
    description: "Personalize your meals to suit your mood, diet, and creativity—because one size never fits all.",
    icon: "🎨"
},
{
    title: "Fresh & Local Ingredients",
    description: "We source from trusted local farms to bring freshness straight to your plate.",
    icon: "🌾"
  },
  {
    title: "Tech-Powered Ordering",
    description: "Order seamlessly through our app or kiosk with real-time menu updates.",
    icon: "📱"
},
{
    title: "Affordable Excellence",
    description: "Top-quality meals that don’t burn a hole in your pocket—flavor meets value.",
    icon: "💰"
}
];

return (
    <>
    <div className="bg-black min-h-screen pt-16 transition-all duration-75">
      <NavBar items={navbarItems} brandName="100xCanteen" variant="fixed">
        <button className="bg-blue-600 hover:bg-blue-700 text-white rounded px-4 py-2 transition-all">
          Get Started
        </button>
        </NavBar>
      <Hero />

     <div className="py-12 w-full mx-auto bg-gray-800" id="features">
        <Features items={featuresData}/>
          </div>


      <div className="py-12 px-6 max-w-6xl mx-auto text-center" id="fooditems">
        <h2 className="text-3xl font-semibold text-blue-400 mb-8">
          Some of Our Greatest Dishes
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {imageData.map((val, index) => (
              <ImageCard
              key={index}
              image={val.image}
              size="md"
              className="hover:scale-105 duration-300 transition-transform"
              />
            ))}
        </div>
      </div>
         
      <div className="py-12 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-blue-400 mb-8">
          Early Reviews
        </h2>
        <Testimonials items={testimonialData} />
      </div>

    <div className="py-12 px-6 max-w-4xl mx-auto text-black">
        <h2 className="text-3xl font-black mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <Accordion items={accordionData} />
      </div>

      <div className="py-12 px-6 flex justify-center">
        <CallToAction />
      </div>

    
      <Footer />
    </div>
    </>
  );
}