import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AnimateOnScroll from "./AnimateOnScroll";

const projects = [
  {
    title: "Personal Health & Hygiene Tracker",
    description: "Python-based application to track daily health and hygiene habits. Analyzed lifestyle data using Pandas and visualized trends with Matplotlib to generate actionable health recommendations.",
    tags: ["Python", "Pandas", "Matplotlib", "Data Analysis"],
    github: "https://github.com/kottanavaralaxmi16",
  },
  {
    title: "Weather Dashboard",
    description: "A real-time weather forecasting dashboard that fetches data from a REST API, displaying current conditions, 5-day forecasts, and location-based weather alerts with interactive charts.",
    tags: ["Python", "API", "Matplotlib", "Seaborn"],
    github: "https://github.com/kottanavaralaxmi16",
  },
  {
    title: "Student Management System",
    description: "A C-based console application for managing student records with CRUD operations, file handling for persistent storage, and search/sort functionality using DSA concepts.",
    tags: ["C", "DSA", "File Handling"],
    github: "https://github.com/kottanavaralaxmi16",
  },
  {
    title: "Data Visualization Dashboard",
    description: "Built interactive data visualizations using Power BI and Python libraries to analyze and present large datasets with meaningful insights through charts, graphs, and KPI metrics.",
    tags: ["Power BI", "Python", "NumPy", "Sklearn"],
    github: "https://github.com/kottanavaralaxmi16",
  },
  {
    title: "Portfolio Website",
    description: "A responsive personal portfolio website built with React and Tailwind CSS featuring smooth animations, dark mode toggle, and SEO-friendly structure to showcase skills and projects.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/kottanavaralaxmi16",
  },
  {
    title: "LeetCode Problem Solver Tracker",
    description: "A Python tool to track and categorize 200+ solved LeetCode problems by topic, difficulty, and time complexity. Generates progress reports and identifies weak areas for improvement.",
    tags: ["Python", "DSA", "Data Analysis"],
    github: "https://github.com/kottanavaralaxmi16",
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
          <AnimateOnScroll key={p.title} animation="animate-scale-in" delay={i * 100}>
            <Card className="hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group h-full flex flex-col">
              <div className="h-36 bg-accent flex items-center justify-center rounded-t-lg overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-500" />
                <span className="text-5xl text-primary/30 font-bold font-['Playfair_Display',serif] group-hover:scale-110 transition-transform duration-300">
                  {p.title.charAt(0)}
                </span>
              </div>
              <CardHeader className="flex-1">
                <CardTitle className="text-base group-hover:text-primary transition-colors">{p.title}</CardTitle>
                <CardDescription className="text-xs">{p.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground">{t}</span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                <Button variant="outline" size="sm" className="gap-1 hover:scale-105 transition-transform" asChild>
                  <a href={p.github} target="_blank" rel="noopener noreferrer">
                    <Github size={14} /> Code
                  </a>
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
