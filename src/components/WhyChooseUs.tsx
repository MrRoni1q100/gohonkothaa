import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import lifestyleRings from "@/assets/lifestyle-rings.jpg";
import lifestyleNecklace from "@/assets/lifestyle-necklace.jpg";
import earrings from "@/assets/earrings.jpg";

const features = [
  {
    title: "অনায়াস পরিধান",
    title_en: "Effortless Wear",
    description: "জুয়েলারি ডিজাইন করা হয়েছে যা আপনার জীবনযাত্রায় নিখুঁতভাবে মানানসই, হালকা এবং আরামদায়ক, যা আপনি সারাদিন পরতে পারবেন কোন অস্বস্তি ছাড়াই।",
    image: lifestyleRings,
  },
  {
    title: "খাঁটি সোনা",
    title_en: "Pure Gold",
    description: "আমাদের সংগ্রহে রয়েছে শুধুমাত্র খাঁটি সোনা এবং প্রকৃত রত্নপাথর, যা নিশ্চিত করে দীর্ঘস্থায়িত্ব এবং মূল্য। প্রতিটি অলংকার উচ্চ মানের প্রতিশ্রুতির সাথে তৈরি।",
    image: lifestyleNecklace,
  },
  {
    title: "সাহসী এবং সুন্দর",
    title_en: "Bold & Beautiful",
    description: "আমাদের ডিজাইন সাহসী বিবৃতি দিতে ভয় পায় না। প্রতিটি অলংকার তৈরি করা হয়েছে মনোযোগ আকর্ষণ করতে এবং আপনার অনন্য ব্যক্তিত্ব প্রকাশ করতে।",
    image: earrings,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-secondary/5">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-4">
            কেন আমাদের বেছে নেবেন
          </h2>
          <p className="text-lg text-muted-foreground">
            আমাদের প্রতিশ্রুতি হলো শ্রেষ্ঠত্ব এবং আপনার সন্তুষ্টি
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg group hover:shadow-xl transition-all">
              <CardContent className="p-0">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img 
                    src={feature.image} 
                    alt={feature.title_en}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-2xl font-serif font-bold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{feature.title_en}</p>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                  <Button variant="ghost" className="group-hover:text-accent transition-colors">
                    আরও জানুন →
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
