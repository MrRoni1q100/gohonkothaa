import { ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import pendant from "@/assets/pendant.jpg";
import earrings from "@/assets/earrings.jpg";
import bracelet from "@/assets/bracelet.jpg";

const products = [
  {
    id: 1,
    name: "অরোরা ডায়মন্ড পেন্ডেন্ট",
    name_en: "Aurora Diamond Pendant",
    price: "৳১,৭৫০",
    rating: 5,
    image: pendant,
  },
  {
    id: 2,
    name: "স্বপ্ন গোল্ড কাফ ব্রেসলেট",
    name_en: "Dream Gold Cuff Bracelet",
    price: "৳৩,২০০",
    rating: 5,
    image: bracelet,
  },
  {
    id: 3,
    name: "সেলেস্তিয়া গোল্ড ইয়ারিংস",
    name_en: "Celestia Gold Earrings",
    price: "৳২,৪০০",
    rating: 5,
    image: earrings,
  },
];

const SignaturePieces = () => {
  return (
    <section id="collections" className="py-24 bg-secondary/5">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-2">
              আমাদের সিগনেচার পিস
            </h2>
            <p className="text-muted-foreground">
              প্রিমিয়াম ডিজাইনের কালজয়ী সৌন্দর্য
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex">
            সব দেখুন →
          </Button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative overflow-hidden aspect-square bg-secondary/10">
                  <img 
                    src={product.image} 
                    alt={product.name_en}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="icon" variant="secondary" className="rounded-full shadow-lg">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-serif text-xl font-semibold mb-1">{product.name}</h3>
                    <p className="text-sm text-muted-foreground">{product.name_en}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-serif font-bold">{product.price}</span>
                    <Button size="icon" className="rounded-full">
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignaturePieces;
