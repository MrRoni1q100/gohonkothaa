import { ShoppingCart, Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-12">
            <h1 className="text-2xl font-serif font-bold cursor-pointer" onClick={(e) => handleNavClick(e as any, "home")}>
              Gohonkothaa
            </h1>
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" onClick={(e) => handleNavClick(e, "home")} className="text-sm hover:text-accent transition-colors cursor-pointer">
                হোম
              </a>
              <a href="#collections" onClick={(e) => handleNavClick(e, "collections")} className="text-sm hover:text-accent transition-colors cursor-pointer">
                কালেকশন
              </a>
              <a href="#about" onClick={(e) => handleNavClick(e, "about")} className="text-sm hover:text-accent transition-colors cursor-pointer">
                আমাদের সম্পর্কে
              </a>
              <a href="#contact" onClick={(e) => handleNavClick(e, "contact")} className="text-sm hover:text-accent transition-colors cursor-pointer">
                যোগাযোগ
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            
            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col gap-6 mt-8">
                  <h2 className="text-2xl font-serif font-bold mb-4">মেনু</h2>
                  <a 
                    href="#home" 
                    onClick={(e) => handleNavClick(e, "home")} 
                    className="text-lg hover:text-accent transition-colors cursor-pointer"
                  >
                    হোম
                  </a>
                  <a 
                    href="#collections" 
                    onClick={(e) => handleNavClick(e, "collections")} 
                    className="text-lg hover:text-accent transition-colors cursor-pointer"
                  >
                    কালেকশন
                  </a>
                  <a 
                    href="#about" 
                    onClick={(e) => handleNavClick(e, "about")} 
                    className="text-lg hover:text-accent transition-colors cursor-pointer"
                  >
                    আমাদের সম্পর্কে
                  </a>
                  <a 
                    href="#contact" 
                    onClick={(e) => handleNavClick(e, "contact")} 
                    className="text-lg hover:text-accent transition-colors cursor-pointer"
                  >
                    যোগাযোগ
                  </a>
                  <div className="pt-6 border-t">
                    <Button variant="ghost" size="lg" className="w-full justify-start gap-2 mb-2">
                      <Search className="h-5 w-5" />
                      সার্চ করুন
                    </Button>
                    <Button variant="ghost" size="lg" className="w-full justify-start gap-2">
                      <ShoppingCart className="h-5 w-5" />
                      কার্ট
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
