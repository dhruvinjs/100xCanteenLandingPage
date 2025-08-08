interface ImageCardProps {
  size: "sm" | "md" | "lg";
  image: string;
  className?: string;
}

const sizeDef = {
  sm: "p-2",
  md: "p-4",
  lg: "p-6"
};

export function ImageCard({ image, size, className }: ImageCardProps) {
  return (
    <div
      className={`
        flex flex-col md:flex-row items-center justify-start 
        ${sizeDef[size]} 
        ${className || ""} 
        rounded-xl shadow-lg   
        max-w-md w-full gap-4
        border border-gray-600
      `}
    >
      <img
        src={image}
        alt="Card"
        className="w-24 h-24 rounded-lg object-cover hover:scale-105 transition-transform duration-300"
      />
      <div className="text-center md:text-left">
        <h3 className="text-lg font-semibold text-blue-800">Dish Name</h3>
      </div>
    </div>
  );
}
