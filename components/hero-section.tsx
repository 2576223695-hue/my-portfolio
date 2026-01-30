import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-card border border-slate-200 p-8 md:p-12">
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-6">
          <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
            AI × Operations × Growth
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight text-balance">
          AI Product Operations Manager
        </h1>
        
        <p className="text-lg text-slate-600 max-w-2xl mb-8 leading-relaxed">
          I help ambitious teams build products from 0-1. Specializing in Discord communities, 
          Minecraft ecosystems, and AI-driven workflows. 3 years of hands-on startup experience 
          with a track record of 450+ concurrent users.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button 
            asChild
            className="bg-[#6366f1] hover:bg-[#4f46e5] text-slate-50 rounded-xl px-6 py-3 h-auto font-medium"
          >
            <a href="#skills">
              View My Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button 
            asChild
            variant="outline" 
            className="border-slate-300 text-slate-700 hover:bg-slate-100 rounded-xl px-6 py-3 h-auto font-medium bg-transparent"
          >
            <a href="#contact">
              <Mail className="mr-2 h-4 w-4" />
              Let's Talk
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
