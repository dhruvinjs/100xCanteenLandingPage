import { Menu, X } from "lucide-react";
import { useState } from "react";

export interface LinkProps {
  name: string;
  href: string;
}

interface DropDownProps {
  items: LinkProps[];
  children?: React.ReactNode;
  className?: string;
}

export function DropDown({ items, children, className }: DropDownProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`relative ${className || ""}`}>
      <button onClick={() => setOpen((prev) => !prev)}>
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

   

         <div
        className={`
          absolute top-full right-0 mt-2 w-48 bg-gray-800 text-white rounded-md shadow-md
          transition-all duration-300 ease-in-out transform text-center
          ${open ? "scale-100 opacity-100" : "scale-0 opacity-0"}
        `}>  
        <div className="flex flex-col space-y-2">
            {items.map((val, index) => (
              <a
                key={index}
                href={val.href}
                className="hover:underline  hover:font-bold"
              >
                {val.name}
              </a>
            ))}
            {children}
          </div>
        </div>

    </div>
  );
}
