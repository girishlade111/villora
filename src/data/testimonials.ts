export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  location: string;
  image: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "testimonial-1",
    quote: "Villora Castle redefined our understanding of coastal retreat. The privacy, the serene ocean views from our suite, and the meticulous care of the staff made our anniversary truly unforgettable.",
    author: "Leslie Alex",
    location: "New York, USA",
    image: "/assets/images/lesile-alex.webp"
  },
  {
    id: "testimonial-2",
    quote: "From the moment we arrived, the warmth of hospitality and the breathtaking architectural balance took our breath away. The private chef's dinner at sunset was the highlight of our year.",
    author: "Sophie Martin",
    location: "London, UK",
    image: "/assets/images/sophie-martin.webp"
  },
  {
    id: "testimonial-3",
    quote: "An extraordinary haven of tranquility. Floating in the infinity pool while listening to the distant waves felt like time had stopped. We are already planning our return next summer.",
    author: "James Wilson",
    location: "Zurich, Switzerland",
    image: "/assets/images/james-wilson.webp"
  }
];
