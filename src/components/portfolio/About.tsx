import { User, Mail, Phone } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";
import profileImg from "@/assets/vara.jpeg";

const About = () => (
  <section id="about" className="py-20 bg-background relative overflow-hidden">
    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
    <div className="max-w-6xl mx-auto px-4 relative z-10">
      <AnimateOnScroll>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-2">
          About Me
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />
      </AnimateOnScroll>
      <div className="flex flex-col md:flex-row items-center gap-10">
        <AnimateOnScroll animation="animate-fade-in-left" className="flex-shrink-0">
          <div className="w-48 h-48 rounded-2xl overflow-hidden border border-border shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src={profileImg} alt="Kottana Varalakshmi" className="w-full h-full object-cover object-top" />
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll animation="animate-fade-in-right" className="flex-1 text-center md:text-left">
          <p className="text-muted-foreground leading-relaxed mb-6">
            Hi! I'm <span className="font-semibold text-foreground">Kottana Varalakshmi</span>, a
            Computer Science student with a passion for full-stack web development, problem-solving,
            and building innovative digital experiences. I love exploring new technologies, contributing
            to open-source projects, and continually expanding my technical skill set.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start text-sm text-muted-foreground">
            <span className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail size={16} className="text-primary" />
              kottanavaralakshmi16@gmail.com
            </span>
            <span className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone size={16} className="text-primary" />
              8179559350
            </span>
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  </section>
);

export default About;
