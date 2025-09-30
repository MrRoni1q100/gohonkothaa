import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">Gohonkothaa</h3>
            <p className="text-primary-foreground/80 mb-6">
              নিরবধি কমনীয়তা এবং কারুশিল্প যা আপনার গল্প বলে
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-serif font-semibold mb-4">লিংকসমূহ</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#home" className="hover:text-accent transition-colors">হোম</a></li>
              <li><a href="#collections" className="hover:text-accent transition-colors">কালেকশন</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">আমাদের সম্পর্কে</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">যোগাযোগ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif font-semibold mb-4">সহায়তা</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">শিপিং নীতি</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">রিটার্ন নীতি</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">গোপনীয়তা নীতি</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">শর্তাবলী</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif font-semibold mb-4">যোগাযোগ</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>ঢাকা, বাংলাদেশ</li>
              <li>ফোন: +৮৮০ ১৭xxxxxxxx</li>
              <li>ইমেইল: info@gohonkothaa.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>© ২০২৫ Gohonkothaa. সর্বস্বত্ব সংরক্ষিত।</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
