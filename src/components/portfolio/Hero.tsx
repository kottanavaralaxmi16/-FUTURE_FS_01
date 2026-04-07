import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImg from "@/assets/vara.jpeg";

const Hero = () => (
  <section
    id="hero"
    className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
  >
    {/* Animated background elements */}
    <div className="absolute inset-0 bg-secondary/30" />
    <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl animate-float" />
    <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary/5 animate-rotate-slow" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-primary/5 animate-rotate-slow" style={{ animationDirection: "reverse", animationDuration: "30s" }} />

    <div className="relative max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10 z-10">
      <div className="flex-1 text-center md:text-left">
        <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2 animate-fade-in-up">
          Welcome to my portfolio
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight animate-fade-in-up" style={{ animationDelay: "200ms" }}>
          Kottana<br />Varalakshmi
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-md animate-fade-in-up" style={{ animationDelay: "400ms" }}>
          Computer Science Student · Passionate about building impactful software solutions
        </p>
        <div className="mt-8 flex gap-4 justify-center md:justify-start animate-fade-in-up" style={{ animationDelay: "600ms" }}>
          <Button asChild size="lg" className="transition-transform hover:scale-105">
            <a href="#contact">Get in Touch</a>
          </Button>
          <Button variant="outline" size="lg" asChild className="transition-transform hover:scale-105">
            <a href="#projects">View Projects</a>
          </Button>
        </div>
      </div>
      <div className="flex-shrink-0 animate-scale-in" style={{ animationDelay: "300ms" }}>
        <div className="relative">
          <div className="w-56 h-56 md:w-72 md:h-72 rounded-full border-4 border-primary/20 overflow-hidden animate-pulse-glow">
            <img
              src={profileImg}
              alt="Kottana Varalakshmi"
              className="w-full h-full object-cover object-top"
            />
          </div>
          {/* Decorative dots */}
          <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-primary/30 animate-float" />
          <div className="absolute -bottom-3 -left-3 w-6 h-6 rounded-full bg-primary/20 animate-float" style={{ animationDelay: "1s" }} />
        </div>
      </div>
    </div>
    <a
      href="#about"
      className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground z-10"
      aria-label="Scroll down"
    >
      <ArrowDown size={28} />
    </a>
  </section>
);

export default Hero;
