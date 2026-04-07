import { Download, GraduationCap, Award, BadgeCheck, Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimateOnScroll from "./AnimateOnScroll";

const education = [
  {
    year: "2023 – Present",
    title: "B.Tech – Computer Science & Engineering",
    place: "Raghu Engineering College, Visakhapatnam, AP",
    grade: "CGPA: 8.7",
    icon: GraduationCap,
  },
  {
    year: "2021 – 2023",
    title: "Intermediate (MPC)",
    place: "MJPAPBCWR Junior College, Visakhapatnam, AP",
    grade: "Percentage: 97%",
    icon: GraduationCap,
  },
];

const certificates = [
  { name: "Cloud Computing", provider: "Swayam NPTEL", period: "Jan 2025 – May 2025" },
  { name: "Programming in Cloud Computing", provider: "Swayam NPTEL", period: "Aug 2024 – Nov 2024" },
  { name: "Python", provider: "Skill Rack", period: "Feb 2024 – Mar 2024" },
];

const achievements = [
  { text: "Solved 200+ coding problems on LeetCode", highlight: "DSA & problem-solving" },
  { text: "Presented project demos with clear documentation", highlight: "Positive faculty feedback" },
  { text: "Participated in the Cyber Sleuth ethical hacking workshop", highlight: "Cybersecurity" },
  { text: "Attended technical seminars on system design & data science", highlight: "Industry experts" },
];

const Resume = () => (
  <section id="resume" className="py-20 bg-secondary/30 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
    <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
    <div className="max-w-5xl mx-auto px-4 relative z-10">
      <AnimateOnScroll>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-2">Resume</h2>
        <p className="text-center text-muted-foreground mb-2 text-sm">My academic journey & accomplishments</p>
        <div className="w-16 h-1 bg-primary mx-auto mb-10 rounded-full" />
      </AnimateOnScroll>

      {/* Download Button */}
      <AnimateOnScroll animation="animate-scale-in" className="flex justify-center mb-14">
        <Button size="lg" className="gap-2 hover:scale-105 transition-transform shadow-lg px-8 py-6 text-base" asChild>
          <a href="/vara_resume.pdf" target="_blank" rel="noopener noreferrer">
            <Download size={20} />
            View / Download Resume
            <ExternalLink size={14} className="ml-1 opacity-60" />
          </a>
        </Button>
      </AnimateOnScroll>

      {/* Two Column Grid */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Left Column – Education */}
        <div>
          <AnimateOnScroll>
            <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2 border-b border-border pb-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <GraduationCap size={20} className="text-primary" />
              </div>
              Education
            </h3>
          </AnimateOnScroll>
          <div className="space-y-4">
            {education.map((item, i) => (
              <AnimateOnScroll key={i} animation="animate-fade-in-left" delay={i * 150}>
                <div className="p-5 rounded-xl bg-background/80 border border-border hover:border-primary/40 hover:shadow-md transition-all duration-300 group">
                  <div className="flex items-center gap-2 text-xs text-primary font-medium mb-2">
                    <Calendar size={12} />
                    {item.year}
                  </div>
                  <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                    {item.title}
                  </h4>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-2">
                    <MapPin size={11} />
                    {item.place}
                  </div>
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                    {item.grade}
                  </span>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>

        {/* Right Column – Certificates */}
        <div>
          <AnimateOnScroll>
            <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2 border-b border-border pb-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <BadgeCheck size={20} className="text-primary" />
              </div>
              Certificates
            </h3>
          </AnimateOnScroll>
          <div className="space-y-4">
            {certificates.map((cert, i) => (
              <AnimateOnScroll key={i} animation="animate-fade-in-right" delay={i * 150}>
                <div className="p-5 rounded-xl bg-background/80 border border-border hover:border-primary/40 hover:shadow-md transition-all duration-300 group">
                  <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                    {cert.name}
                  </h4>
                  <p className="text-xs text-muted-foreground mb-2">{cert.provider}</p>
                  <div className="flex items-center gap-2 text-xs text-primary/80 font-medium">
                    <Calendar size={12} />
                    {cert.period}
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements – Full Width */}
      <div className="mt-14">
        <AnimateOnScroll>
          <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2 border-b border-border pb-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Award size={20} className="text-primary" />
            </div>
            Achievements
          </h3>
        </AnimateOnScroll>
        <div className="grid sm:grid-cols-2 gap-4">
          {achievements.map((ach, i) => (
            <AnimateOnScroll key={i} animation="animate-fade-in-up" delay={i * 100}>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-background/80 border border-border hover:border-primary/40 hover:shadow-md transition-all duration-300 group h-full">
                <div className="p-1.5 rounded-lg bg-primary/10 mt-0.5 flex-shrink-0">
                  <Award size={14} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-foreground font-medium group-hover:text-primary transition-colors">
                    {ach.text}
                  </p>
                  <span className="text-xs text-muted-foreground mt-1 inline-block">
                    {ach.highlight}
                  </span>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Resume;
