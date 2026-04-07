import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
  <section id="projects" className="py-20 bg-background">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-2">
        Projects
      </h2>
      <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <Card key={p.title} className="hover:shadow-lg transition-shadow">
            <div className="h-40 bg-accent flex items-center justify-center rounded-t-lg">
              <span className="text-4xl text-primary/40 font-bold font-['Playfair_Display',serif]">
                {p.title.charAt(0)}
              </span>
            </div>
            <CardHeader>
              <CardTitle className="text-lg">{p.title}</CardTitle>
              <CardDescription>{p.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter className="gap-2">
              <Button variant="outline" size="sm" className="gap-1">
                <Github size={14} /> Code
              </Button>
              <Button size="sm" className="gap-1">
                <ExternalLink size={14} /> Demo
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
