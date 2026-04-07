import { Progress } from "@/components/ui/progress";
import AnimateOnScroll from "./AnimateOnScroll";

const skillGroups = [
  {
    category: "Languages",
    skills: [
      { name: "Python", level: 85 },
      { name: "C / C++", level: 75 },
      { name: "DSA using C", level: 70 },
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "NumPy / Pandas", level: 80 },
      { name: "Matplotlib / Seaborn", level: 75 },
      { name: "Sklearn", level: 65 },
      { name: "HTML & CSS", level: 85 },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "MS Excel & Power BI", level: 75 },
      { name: "Jupyter Notebook", level: 80 },
      { name: "Git & GitHub", level: 75 },
    ],
  },
];

const Skills = () => (
  <section id="skills" className="py-20 bg-secondary/30 relative overflow-hidden">
    <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
    <div className="max-w-6xl mx-auto px-4 relative z-10">
      <AnimateOnScroll>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-2">Skills</h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />
      </AnimateOnScroll>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
        {skillGroups.map((group, gi) => (
          <AnimateOnScroll key={group.category} animation="animate-fade-in-up" delay={gi * 150}>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">{group.category}</h3>
              <div className="space-y-4">
                {group.skills.map((s) => (
                  <div key={s.name} className="space-y-1 group">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-foreground group-hover:text-primary transition-colors">{s.name}</span>
                      <span className="text-muted-foreground">{s.level}%</span>
                    </div>
                    <Progress value={s.level} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
