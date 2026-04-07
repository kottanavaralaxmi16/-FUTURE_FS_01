import { Progress } from "@/components/ui/progress";
import AnimateOnScroll from "./AnimateOnScroll";

const skills = [
  { name: "HTML & CSS", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "React.js", level: 80 },
  { name: "Python", level: 75 },
  { name: "Java", level: 70 },
  { name: "SQL / Databases", level: 70 },
  { name: "Git & GitHub", level: 80 },
  { name: "Data Structures", level: 75 },
];

const Skills = () => (
  <section id="skills" className="py-20 bg-secondary/30 relative overflow-hidden">
    <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
    <div className="max-w-6xl mx-auto px-4 relative z-10">
      <AnimateOnScroll>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-2">Skills</h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />
      </AnimateOnScroll>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {skills.map((s, i) => (
          <AnimateOnScroll key={s.name} animation="animate-slide-up" delay={i * 100}>
            <div className="space-y-2 group">
              <div className="flex justify-between text-sm">
                <span className="font-medium text-foreground group-hover:text-primary transition-colors">{s.name}</span>
                <span className="text-muted-foreground">{s.level}%</span>
              </div>
              <Progress value={s.level} className="h-2 transition-all duration-500" />
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
