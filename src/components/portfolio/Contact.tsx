import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import AnimateOnScroll from "./AnimateOnScroll";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "Thank you for reaching out. I'll get back to you soon." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-secondary/30 relative overflow-hidden">
      <div className="absolute top-20 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <AnimateOnScroll>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-2">Contact Me</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <AnimateOnScroll animation="animate-fade-in-left">
            <div className="space-y-6">
              <p className="text-muted-foreground">
                Feel free to reach out for collaborations, opportunities, or just a friendly hello!
              </p>
              <div className="space-y-4">
                {[
                  { icon: Mail, label: "Email", value: "kottanavaralakshmi16@gmail.com" },
                  { icon: Phone, label: "Phone", value: "8179559350" },
                  { icon: MapPin, label: "Location", value: "India" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 text-sm group hover:translate-x-1 transition-transform">
                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <item.icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                      <p className="font-medium text-foreground">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="animate-fade-in-right">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="transition-all focus:scale-[1.01]"
              />
              <Input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="transition-all focus:scale-[1.01]"
              />
              <Textarea
                placeholder="Your Message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                className="transition-all focus:scale-[1.01]"
              />
              <Button type="submit" className="w-full hover:scale-[1.02] transition-transform">
                Send Message
              </Button>
            </form>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Contact;
