import { User, Mail, Phone } from "lucide-react";

const About = () => (
  <section id="about" className="py-20 bg-background">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-2">
        About Me
      </h2>
      <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="w-48 h-48 rounded-2xl bg-accent border border-border flex items-center justify-center flex-shrink-0">
          <User className="text-primary" size={64} />
        </div>
        <div className="flex-1 text-center md:text-left">
          <p className="text-muted-foreground leading-relaxed mb-6">
            Hi! I'm <span className="font-semibold text-foreground">Kottana Varalakshmi</span>, a
            Computer Science student with a passion for full-stack web development, problem-solving,
            and building innovative digital experiences. I love exploring new technologies, contributing
            to open-source projects, and continually expanding my technical skill set.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Mail size={16} className="text-primary" />
              kottanavaralakshmi16@gmail.com
            </span>
            <span className="flex items-center gap-2">
              <Phone size={16} className="text-primary" />
              8179559350
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
