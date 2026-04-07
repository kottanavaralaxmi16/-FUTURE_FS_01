import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AnimateOnScroll from "./AnimateOnScroll";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website built with React and Tailwind CSS to showcase skills, projects, and professional profile.",
    tags: ["React", "Tailwind CSS", "TypeScript"],
  },
  {
    title: "Task Manager App",
    description: "A full-stack task management application with user authentication, CRUD operations, and real-time updates.",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Weather Dashboard",
    description: "A weather forecasting dashboard consuming a REST API, displaying current conditions and 5-day forecasts.",
    tags: ["JavaScript", "API", "CSS"],
  },
];

const Projects = () => (
  <section id="projects" className="py-20 bg-background relative overflow-hidden">
    <div className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
    <div className="max-w-6xl mx-auto px-4 relative z-10">
      <AnimateOnScroll>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-2">Projects</h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />
      </AnimateOnScroll>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <AnimateOnScroll key={p.title} animation="animate-scale-in" delay={i * 150}>
            <Card className="hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="h-40 bg-accent flex items-center justify-center rounded-t-lg overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-500" />
                <span className="text-5xl text-primary/30 font-bold font-['Playfair_Display',serif] group-hover:scale-110 transition-transform duration-300">
                  {p.title.charAt(0)}
                </span>
              </div>
              <CardHeader>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">{p.title}</CardTitle>
                <CardDescription>{p.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground">{t}</span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                <Button variant="outline" size="sm" className="gap-1 hover:scale-105 transition-transform">
                  <Github size={14} /> Code
                </Button>
                <Button size="sm" className="gap-1 hover:scale-105 transition-transform">
                  <ExternalLink size={14} /> Demo
                </Button>
              </CardFooter>
            </Card>
          </AnimateOnScroll>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
