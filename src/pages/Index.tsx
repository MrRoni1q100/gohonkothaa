import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SignaturePieces from "@/components/SignaturePieces";
import Legacy from "@/components/Legacy";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <SignaturePieces />
      <Legacy />
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default Index;
