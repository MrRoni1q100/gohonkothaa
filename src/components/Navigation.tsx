import { ShoppingCart, Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-12">
            <h1 className="text-2xl font-serif font-bold">Gohonkothaa</h1>
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-sm hover:text-accent transition-colors">হোম</a>
              <a href="#collections" className="text-sm hover:text-accent transition-colors">কালেকশন</a>
              <a href="#about" className="text-sm hover:text-accent transition-colors">আমাদের সম্পর্কে</a>
              <a href="#contact" className="text-sm hover:text-accent transition-colors">যোগাযোগ</a>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
