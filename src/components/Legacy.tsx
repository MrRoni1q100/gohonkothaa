import { Button } from "@/components/ui/button";
import bracelet from "@/assets/bracelet.jpg";

const Legacy = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img 
                src={bracelet} 
                alt="Legacy Jewelry" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-4">
                আমাদের ঐতিহ্য, আপনার কমনীয়তা
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                <span className="font-serif font-semibold text-foreground">Gohonkothaa</span> নিরবধি কারুশিল্প এবং ঐতিহ্যের প্রতীক হিসেবে দাঁড়িয়ে আছে। প্রতিটি অলংকার জুয়েলারির শিল্পের প্রতি শ্রদ্ধা, ঐতিহ্যকে আধুনিক ডিজাইনের সাথে মিশ্রিত করে।
              </p>
              <p className="text-muted-foreground">
                আমাদের কারিগরদের দক্ষ হাত প্রতিটি অলংকারে প্রাণ সঞ্চার করে, যা শুধু সুন্দর নয়, বরং আপনার গল্পের অংশ হয়ে ওঠে। প্রতিটি ডিজাইন সৃষ্টি করা হয় যত্ন এবং ভালোবাসার সাথে।
              </p>
            </div>
            
            <Button size="lg" variant="outline">
              আরও জানুন
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Legacy;
