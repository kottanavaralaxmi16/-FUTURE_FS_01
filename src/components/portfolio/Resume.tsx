import { Download, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimateOnScroll from "./AnimateOnScroll";

const timeline = [
  { year: "2021 – Present", title: "B.Tech in Computer Science", place: "University Name", description: "Pursuing a Bachelor's degree with focus on software engineering and data structures." },
  { year: "2019 – 2021", title: "Intermediate (MPC)", place: "College Name", description: "Completed intermediate education with Mathematics, Physics, and Chemistry." },
  { year: "2019", title: "SSC (10th Grade)", place: "School Name", description: "Completed secondary education with distinction." },
];

const Resume = () => (
  <section id="resume" className="py-20 bg-secondary/30 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
    <div className="max-w-6xl mx-auto px-4 relative z-10">
      <AnimateOnScroll>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-2">Resume</h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />
      </AnimateOnScroll>

      <AnimateOnScroll animation="animate-scale-in" className="flex justify-center mb-12">
        <Button size="lg" className="gap-2 hover:scale-105 transition-transform shadow-lg">
          <Download size={18} />
          Download Resume (PDF)
        </Button>
      </AnimateOnScroll>

      <div className="max-w-2xl mx-auto">
        <AnimateOnScroll>
          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <GraduationCap size={22} className="text-primary" /> Education
          </h3>
        </AnimateOnScroll>
        <div className="relative border-l-2 border-primary/30 pl-6 space-y-8">
          {timeline.map((item, i) => (
            <AnimateOnScroll key={i} animation="animate-fade-in-left" delay={i * 200}>
              <div className="relative group">
                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-primary border-2 border-background group-hover:scale-125 transition-transform" />
                <p className="text-xs font-medium text-primary mb-1">{item.year}</p>
                <h4 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.place}</p>
                <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Resume;
