import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => (
  <footer className="py-8 bg-primary text-primary-foreground">
    <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm opacity-80">
        © {new Date().getFullYear()} Kottana Varalakshmi. All rights reserved.
      </p>
      <div className="flex gap-4">
        <a href="#" className="opacity-70 hover:opacity-100 transition-opacity" aria-label="GitHub">
          <Github size={20} />
        </a>
        <a href="#" className="opacity-70 hover:opacity-100 transition-opacity" aria-label="LinkedIn">
          <Linkedin size={20} />
        </a>
        <a href="#" className="opacity-70 hover:opacity-100 transition-opacity" aria-label="Twitter">
          <Twitter size={20} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
