import TestimonialCard from "./sections/Testimonial";
import Header from "./sections/Header";
import Setapp from "./sections/Setapp";

export default function App() {
  return (
    <div>
      <Header />
      <Setapp />
      <div className="bg-[#FEFEFE]  mt-130   relative z-10">
        <TestimonialCard />
      </div>
    </div>
  );
}
