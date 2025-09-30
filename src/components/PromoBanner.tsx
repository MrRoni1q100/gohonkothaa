import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const PromoBanner = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-accent/10 via-accent/5 to-primary/10 py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(40,80,50,0.1),transparent_50%)]"></div>
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <div className="bg-accent/20 p-4 rounded-full">
              <Sparkles className="h-8 w-8 text-accent" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-wider text-muted-foreground mb-1">
                বিশেষ অফার
              </p>
              <h3 className="text-3xl lg:text-4xl font-serif font-bold">
                নতুন কালেকশনে ২০% ছাড়
              </h3>
              <p className="text-muted-foreground mt-1">
                সীমিত সময়ের জন্য সকল প্রিমিয়াম জুয়েলারিতে
              </p>
            </div>
          </div>
          
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shrink-0">
            এখনই কিনুন
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
