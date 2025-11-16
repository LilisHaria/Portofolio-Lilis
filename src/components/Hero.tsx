import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary-light/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium">
              Welcome to my portfolio
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Hi, I'm Lilis Puspita Haria
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white/95 mb-6">
            Product & Project Manager
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Specializing in Product Strategy, Roadmapping, and Cross-Functional Team Leadership.
          </p>
          <Button
            onClick={scrollToProjects}
            size="lg"
            className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 rounded-full shadow-2xl hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Explore My Work
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
