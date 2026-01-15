"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const testimonials = [
  {
    quote:
      "Musicians like Jason use Setapp to push the limits of their creativity, dancing through tasks for more time to play.",
    name: "Jason Staczek",
    image: "/images/image-2067.png",
  },
  {
    quote:
      "Setapp has transformed the way I work. Having access to so many powerful apps in one subscription is a game changer.",
    name: "Sarah Mitchell",
    image: "/images/image-2067.png",
  },
  {
    quote:
      "As a developer, I need reliable tools. Setapp delivers exactly what I need without the hassle of managing multiple licenses.",
    name: "Michael Chen",
    image: "/images/image-2067.png",
  },
  {
    quote: "The convenience of having all my essential apps in one place has made my workflow incredibly efficient.",
    name: "Emma Rodriguez",
    image: "/images/image-2067.png",
  },
]
export default function TestimonialCard() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const testimonial = testimonials[currentIndex];

  return (
    <section className=" mx-12.5 -translate-y-[52%]">
      <div className="bg-[#765070] relative rounded-[20px] ">
        <div className="flex flex-col md:flex-row justify-between items-center  ">
          {/* Left Content */}
          <div className=" pl-22.75 space-y-33 ">
            <div className="space-y-5 max-w-139">
              <h3 className="font-medium">
                {testimonial.quote}
              </h3>
              <p className="leading-[100%] tracking-normal">{testimonial.name}</p>
            </div>

            {/* Play Button */}
            <button
              className="w-18.5 h-18.5 bg-white rounded-full flex items-center justify-center hover:bg-white/90 transition-colors"
              aria-label="Play video"
            >
              <Play className="w-4 h-4 text-[#9D9CA2] fill-[#9D9CA2] " />
            </button>
          </div>

          {/* Right Image */}
          <div className="relative min-h-75 md:min-h-full pt-7.5 pr-16.5">
            <img
              src="/testimonial.png" 
              alt={testimonial.name}
              className="object-cover object-top"
              priority
            />
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute top-16.25  right-7.5 flex items-center gap-11.5">
          <button
            onClick={handlePrev}
            className="w-10 h-10 flex items-center justify-center text-white/70 hover:text-white transition-colors cursor-pointer"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-full h-full" />
          </button>
          
          <button
            onClick={handleNext}
            className="w-10 h-10  flex items-center justify-center text-white/70 hover:text-white transition-colors cursor-pointer"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-full h-full" />
          </button>
        </div>



      </div>


      {/* Pagination Dots */}
      <div className="flex items-center justify-center gap-6.25 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
              index === currentIndex ? "bg-neutral-800" : "bg-neutral-300"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

    </section>
  );
}
