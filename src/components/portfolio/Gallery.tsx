import { Camera } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const placeholders = [
  "Campus Life",
  "Hackathon",
  "Workshop",
  "Team Project",
  "Presentation",
  "Award Ceremony",
];

const Gallery = () => (
  <section id="gallery" className="py-20 bg-background relative overflow-hidden">
    <div className="absolute bottom-10 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
    <div className="max-w-6xl mx-auto px-4 relative z-10">
      <AnimateOnScroll>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-2">Picture Gallery</h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />
      </AnimateOnScroll>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {placeholders.map((label, i) => (
          <AnimateOnScroll key={label} animation="animate-scale-in" delay={i * 100}>
            <div className="aspect-square rounded-xl bg-accent border border-border flex flex-col items-center justify-center gap-2 hover:shadow-xl hover:-translate-y-1 hover:border-primary/30 transition-all duration-300 group cursor-pointer">
              <Camera className="text-primary/40 group-hover:text-primary/70 group-hover:scale-110 transition-all duration-300" size={32} />
              <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">{label}</span>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
      <p className="text-center text-sm text-muted-foreground mt-6">
        Replace these placeholders with your own photos!
      </p>
    </div>
  </section>
);

export default Gallery;
