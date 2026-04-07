import { Download, GraduationCap, Award, FolderOpen, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimateOnScroll from "./AnimateOnScroll";

const education = [
  { year: "2023 – Present", title: "B.Tech – Computer Science & Engineering", place: "Raghu Engineering College, Visakhapatnam, AP", description: "CGPA: 8.7" },
  { year: "2021 – 2023", title: "Intermediate", place: "MJPAPBCWR Junior College, Visakhapatnam, AP", description: "Percentage: 97%" },
];

const certificates = [
  "Cloud Computing – Swayam NPTEL (Jan 2025 – May 2025)",
  "Programming in Cloud Computing – Swayam NPTEL (Aug 2024 – Nov 2024)",
  "Python – Skill Rack (Feb 2024 – Mar 2024)",
];

const achievements = [
  "Solved 200+ coding problems on LeetCode (DSA & problem-solving)",
  "Presented project demos with clear documentation, earning positive faculty feedback",
  "Participated in the Cyber Sleuth ethical hacking workshop",
  "Attended technical seminars on system design & data science by industry experts",
];

const Resume = () => (
  <section id="resume" className="py-20 bg-secondary/30 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
    <div className="max-w-6xl mx-auto px-4 relative z-10">
      <AnimateOnScroll>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-2">Resume</h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />
      </AnimateOnScroll>

      <AnimateOnScroll animation="animate-scale-in" className="flex justify-center mb-14">
        <Button size="lg" className="gap-2 hover:scale-105 transition-transform shadow-lg" asChild>
          <a href="/vara_resume.pdf" download>
            <Download size={18} />
            Download Resume (PDF)
          </a>
        </Button>
      </AnimateOnScroll>

      {/* Education */}
      <div className="max-w-3xl mx-auto mb-14">
        <AnimateOnScroll>
          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <GraduationCap size={22} className="text-primary" /> Education
          </h3>
        </AnimateOnScroll>
        <div className="relative border-l-2 border-primary/30 pl-6 space-y-8">
          {education.map((item, i) => (
            <AnimateOnScroll key={i} animation="animate-fade-in-left" delay={i * 200}>
              <div className="relative group">
                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-primary border-2 border-background group-hover:scale-125 transition-transform" />
                <p className="text-xs font-medium text-primary mb-1">{item.year}</p>
                <h4 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.place}</p>
                <p className="text-sm font-medium text-foreground mt-1">{item.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>

      {/* Certificates */}
      <div className="max-w-3xl mx-auto mb-14">
        <AnimateOnScroll>
          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <BadgeCheck size={22} className="text-primary" /> Certificates
          </h3>
        </AnimateOnScroll>
        <div className="space-y-3">
          {certificates.map((cert, i) => (
            <AnimateOnScroll key={i} animation="animate-fade-in-up" delay={i * 100}>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-background/60 border border-border hover:border-primary/30 hover:shadow-sm transition-all group">
                <BadgeCheck size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{cert}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="max-w-3xl mx-auto">
        <AnimateOnScroll>
          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <Award size={22} className="text-primary" /> Achievements
          </h3>
        </AnimateOnScroll>
        <div className="space-y-3">
          {achievements.map((ach, i) => (
            <AnimateOnScroll key={i} animation="animate-fade-in-up" delay={i * 100}>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-background/60 border border-border hover:border-primary/30 hover:shadow-sm transition-all group">
                <Award size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{ach}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Resume;
