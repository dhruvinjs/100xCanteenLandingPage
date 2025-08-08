import { Card } from "./Card";

type TestimonialItems = {
  name: string;
  testimonial: string;
};

interface TestimonialProps {
  items: TestimonialItems[];
}

export function Testimonials({ items }: TestimonialProps) {
  return (
    <div className="w-full px-2 py-4 ">
      <div className="flex flex-wrap justify-center gap-6">
        {items.map((val, index) => (
          <Card
            key={index}
            title={val.name}
            content={val.testimonial}
            size="sm"
            variant="primary"
            className="rounded-xl max-w-xs text-center "
content_className="whitespace-pre-line md:whitespace-normal break-words overflow-hidden text-sm sm:text-base"
          />
        ))}
      </div>
    </div>
  );
}
