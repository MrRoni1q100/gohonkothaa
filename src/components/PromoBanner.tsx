import { Sparkles, Gift, Award, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const promos = [
  {
    icon: Sparkles,
    label: "বিশেষ অফার",
    title: "নতুন কালেকশনে ২০% ছাড়",
    description: "সীমিত সময়ের জন্য সকল প্রিমিয়াম জুয়েলারিতে",
  },
  {
    icon: Gift,
    label: "বিনামূল্যে উপহার",
    title: "৫,০০০ টাকার বেশি কিনলে উপহার পান",
    description: "সিলভার ইয়ারিং সেট সম্পূর্ণ ফ্রি",
  },
  {
    icon: Award,
    label: "প্রিমিয়াম সার্ভিস",
    title: "ফ্রি হোম ডেলিভারি ও রিটার্ন",
    description: "সব অর্ডারে বিনামূল্যে ডেলিভারি ও ৩০ দিনের রিটার্ন",
  },
];

const PromoBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % promos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + promos.length) % promos.length);
  };

  const currentPromo = promos[currentSlide];
  const Icon = currentPromo.icon;

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-accent/10 via-accent/5 to-primary/10 py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(40,80,50,0.1),transparent_50%)]"></div>
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4 flex-1">
            <button
              onClick={prevSlide}
              className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-background/50 hover:bg-background/80 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            <div className="flex items-center gap-4 flex-1 min-w-0">
              <div className="bg-accent/20 p-4 rounded-full shrink-0">
                <Icon className="h-8 w-8 text-accent" />
              </div>
              <div className="min-w-0">
                <p className="text-sm uppercase tracking-wider text-muted-foreground mb-1">
                  {currentPromo.label}
                </p>
                <h3 className="text-2xl lg:text-4xl font-serif font-bold truncate">
                  {currentPromo.title}
                </h3>
                <p className="text-muted-foreground mt-1">
                  {currentPromo.description}
                </p>
              </div>
            </div>
            
            <button
              onClick={nextSlide}
              className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-background/50 hover:bg-background/80 transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          
          <div className="flex flex-col items-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shrink-0">
              এখনই কিনুন
            </Button>
            <div className="flex gap-2">
              {promos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentSlide ? "w-8 bg-primary" : "w-2 bg-primary/30"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
