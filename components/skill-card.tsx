import type { LucideIcon } from "lucide-react";

interface SkillCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  skills: string[];
}

export function SkillCard({ icon: Icon, title, description, skills }: SkillCardProps) {
  return (
    <div className="group rounded-2xl bg-card border border-slate-200 p-6 hover:shadow-sm transition-all duration-300">
      <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center mb-4 group-hover:bg-[#6366f1]/10 transition-colors">
        <Icon className="h-5 w-5 text-slate-600 group-hover:text-[#6366f1] transition-colors" />
      </div>
      
      <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-500 mb-4 leading-relaxed">{description}</p>
      
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="inline-flex items-center rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
