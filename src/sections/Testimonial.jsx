
import { useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Testimonial_Links } from "../data";


export default function TestimonialCard() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Testimonial_Links.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === Testimonial_Links.length - 1 ? 0 : prev + 1
    );
  };

  const testimonial = Testimonial_Links[currentIndex];

  return (
    <section className=" mx-12.5 -translate-y-[52%] ">
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
        {Testimonial_Links.map((_, index) => (
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
