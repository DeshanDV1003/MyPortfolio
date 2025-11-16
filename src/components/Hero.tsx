import { Button } from "@/components/ui/button";
import { ArrowRight, Code2 } from "lucide-react";
import profileImg from "../assets/profile.png"; // 👈 same path you used in Index

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-glow" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-glow"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="p-4 bg-gradient-primary rounded-2xl shadow-glow">
              <Code2 className="w-12 h-12 text-primary-foreground" />
            </div>
          </div>

          {/* Photo + "Hi, I'm Deshan" */}
          <div className="flex flex-col items-center gap-4">
            <img
              src={profileImg}
              alt="Deshan Vimukthi"
              style={{
                width: "180px",
                height: "180px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "3px solid #0ea5e9",
              }}
            />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground flex items-center gap-2">
              Hi, I’m Deshan <span>👋</span>
            </h2>
          </div>

          {/* Main Headline (your tagline) */}
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent leading-tight">
            Engineering Code. Empowering People. Elevating Technology.
          </h1>

          {/* Subheadline */}
         {/* <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
           I’m <span className="font-semibold text-foreground">Deshan Vimukthi</span> – 
          </p> */}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-glow text-base font-semibold group"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all text-base font-semibold"
              onClick={() => scrollToSection("contact")}
            >
              Contact Me
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="pt-12 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary rounded-full mx-auto flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
