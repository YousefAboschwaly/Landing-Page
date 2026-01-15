import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";
import { testimonials } from "../data";
import SetappCard from "../components/ui/setapp-info/SetappCard";

export default function SetappInfo() {
  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / cardsPerPage);

  const getCurrentTestimonials = () => {
    const startIndex = currentPage * cardsPerPage;
    return testimonials.slice(startIndex, startIndex + cardsPerPage);
  };

  const goToPrevious = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  return (
    <section className="pt-30 px-32.5 -mt-90 pb-100 relative">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 gap-25">
        <h2 className="text-[36px] tracking-[1.3px] leading-[47.88px] font-semibold text-primary pr-25">
          Setapp in your words.
        </h2>

        <div className="flex ">
          <p className="text-[18px] leading-[32.04px] text-primary pr-6.25 pl-2.5">
            What you say about how Setapp
            <br />
            powers you up.
          </p>

          {/* Social Media Icons */}
          <div className="flex items-center gap-2.5 pl-17">
            <button className="w-12 h-12 rounded-full bg-[#3b5998] text-white flex items-center justify-center hover:opacity-90 transition-opacity">
              <Facebook />
            </button>
            <button className="w-12 h-12 rounded-full bg-[#1DA1F2] text-white flex items-center justify-center hover:opacity-90 transition-opacity">
              <Twitter />
            </button>
            <button className="w-12 h-12 rounded-full bg-linear-to-br from-[#f09433] via-[#e6683c] to-[#bc1888] text-white flex items-center justify-center hover:opacity-90 transition-opacity">
              <Instagram />
            </button>
            <button className="w-12 h-12 rounded-full bg-[#FF0000] text-white flex items-center justify-center hover:opacity-90 transition-opacity">
              <Youtube />
            </button>
          </div>
        </div>
      </div>

      <div className=" mb-8 space-y-5">
        {/* Navigation Arrows */}
        <div className=" w-fit ml-auto  flex items-center gap-5 ">
          <button
            onClick={goToPrevious}
            className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-8 h-8" strokeWidth={1.5} />
          </button>
          <button
            onClick={goToNext}
            className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-8 h-8" strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex gap-5 items-center justify-center  transition-transform duration-500 ease-in-out">
          {getCurrentTestimonials().map((testimonial, index) => (
            <SetappCard
              i={index}
              key={`${currentPage}-${index}`}
              quote={testimonial.quote}
              name={testimonial.name}
              handle={testimonial.handle}
              platform={testimonial.platform}
              bgColor={testimonial.bgColor}
            />
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex items-center justify-center gap-2 pb-4">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentPage ? "bg-gray-800" : "bg-gray-300"
            }`}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>
      <hr className="bg-gray-300 h-[3px] mt-4 w-full absolute right-0 left-0" />
    </section>
  );
}
