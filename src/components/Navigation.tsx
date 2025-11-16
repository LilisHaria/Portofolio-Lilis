import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary-dark to-primary bg-clip-text text-transparent">
            Lilis Haria
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Projects
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-primary hover:bg-primary-dark text-primary-foreground rounded-full px-6"
            >
              Contact
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              size="sm"
              onClick={() => scrollToSection("contact")}
              className="text-sm bg-primary hover:bg-primary-dark rounded-full"
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
