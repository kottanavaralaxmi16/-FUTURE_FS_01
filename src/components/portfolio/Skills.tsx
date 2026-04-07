import { Progress } from "@/components/ui/progress";

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
  <section id="skills" className="py-20 bg-secondary/30">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-2">
        Skills
      </h2>
      <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {skills.map((s) => (
          <div key={s.name} className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="font-medium text-foreground">{s.name}</span>
              <span className="text-muted-foreground">{s.level}%</span>
            </div>
            <Progress value={s.level} className="h-2" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
