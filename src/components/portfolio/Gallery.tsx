import { Camera } from "lucide-react";

const placeholders = [
  "Campus Life",
  "Hackathon",
  "Workshop",
  "Team Project",
  "Presentation",
  "Award Ceremony",
];

const Gallery = () => (
  <section id="gallery" className="py-20 bg-background">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-2">
        Picture Gallery
      </h2>
      <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {placeholders.map((label) => (
          <div
            key={label}
            className="aspect-square rounded-xl bg-accent border border-border flex flex-col items-center justify-center gap-2 hover:shadow-md transition-shadow"
          >
            <Camera className="text-primary/40" size={32} />
            <span className="text-xs text-muted-foreground">{label}</span>
          </div>
        ))}
      </div>
      <p className="text-center text-sm text-muted-foreground mt-6">
        Replace these placeholders with your own photos!
      </p>
    </div>
  </section>
);

export default Gallery;
