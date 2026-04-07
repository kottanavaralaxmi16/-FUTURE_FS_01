import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => (
  <section
    id="hero"
    className="min-h-screen flex items-center justify-center pt-16 bg-secondary/30"
  >
    <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
      <div className="flex-1 text-center md:text-left">
        <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">
          Welcome to my portfolio
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
          Kottana<br />Varalakshmi
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-md">
          Computer Science Student · Passionate about building impactful software solutions
        </p>
        <div className="mt-8 flex gap-4 justify-center md:justify-start">
          <Button asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#projects">View Projects</a>
          </Button>
        </div>
      </div>
      <div className="flex-shrink-0">
        <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-accent border-4 border-primary/20 flex items-center justify-center overflow-hidden">
          <span className="text-5xl text-primary font-bold font-['Playfair_Display',serif]">KV</span>
        </div>
      </div>
    </div>
    <a
      href="#about"
      className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground"
      aria-label="Scroll down"
    >
      <ArrowDown size={28} />
    </a>
  </section>
);

export default Hero;
