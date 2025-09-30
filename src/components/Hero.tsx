import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroRing from "@/assets/hero-ring.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm tracking-wider uppercase text-muted-foreground">
                আপনার জন্য নিখুঁত কারুশিল্প
              </p>
              <h2 className="text-5xl lg:text-7xl font-serif font-bold leading-tight">
                আপনার গল্প<br />
                পরুন করুণার সাথে
              </h2>
              <p className="text-lg text-muted-foreground max-w-lg">
                আপনার সবচেয়ে লালিত মুহূর্তের জন্য নিখুঁত এক্সক্লুসিভ জুয়েলারি সংগ্রহ
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                এখনই কিনুন
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Play className="h-4 w-4 fill-current" />
                ভিডিও দেখুন
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square lg:aspect-video rounded-2xl overflow-hidden bg-secondary/20">
              <img 
                src={heroRing} 
                alt="Elegant Diamond Ring" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-8 right-8 bg-background/95 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
              <div className="flex items-center gap-3">
                <button className="w-8 h-8 rounded-full border-2 flex items-center justify-center hover:bg-accent transition-colors">
                  ←
                </button>
                <span className="font-serif font-bold">01</span>
                <button className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors">
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-12 border-t">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-40">
            <div className="text-center font-serif text-xl">Amazon</div>
            <div className="text-center font-serif text-xl">Alibaba</div>
            <div className="text-center font-serif text-xl">Shopify</div>
            <div className="text-center font-serif text-xl">Slack</div>
            <div className="text-center font-serif text-xl">Zapier</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
