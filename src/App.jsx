import TestimonialCard from "./sections/Testimonial";
import Header from "./sections/Header";
import Setapp from "./sections/Setapp";
import SetappInfo from "./sections/SetappInfo";
import PricingCard from "./sections/Pricing";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <div className="bg-primary">
      <Header />
      <Setapp />
      <div className="bg-[#FEFEFE]  mt-130  relative z-10">
        <TestimonialCard />
        <SetappInfo/>
      </div>
        <PricingCard/>
        <Footer/>
    </div>
  );
}
