import type { LucideIcon } from "lucide-react";
import { ArrowUpRight, Newspaper } from "lucide-react";

interface FeaturedBadge {
  text: string;
  url: string;
}

interface ProjectCardProps {
  icon: LucideIcon;
  iconBg: string;
  title: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
  thumbnail?: string;
  caseStudyUrl?: string;
  featuredBadge?: FeaturedBadge;
}

export function ProjectCard({ 
  icon: Icon, 
  iconBg, 
  title, 
  role, 
  period, 
  description, 
  highlights,
  thumbnail,
  caseStudyUrl = "#",
  featuredBadge
}: ProjectCardProps) {
  return (
    <div className="group rounded-2xl bg-card border border-slate-200 overflow-hidden hover:shadow-md hover:border-slate-300 transition-all duration-300">
      {/* Thumbnail Image Section */}
      <div className="relative h-40 w-full bg-slate-100 overflow-hidden">
        {thumbnail ? (
          <img
            src={thumbnail || "/placeholder.svg"}
            alt={`${title} project thumbnail`}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className={`w-full h-full ${iconBg} flex items-center justify-center`}>
            <Icon className="h-12 w-12 text-slate-400" />
          </div>
        )}
        
        {/* Hover Overlay with View Case Study Button */}
        <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <a 
            href={caseStudyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-50 text-slate-900 rounded-lg font-medium text-sm hover:bg-slate-100 transition-colors transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
          >
            View Case Study
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div className={`w-10 h-10 rounded-lg ${iconBg} flex items-center justify-center`}>
            <Icon className="h-5 w-5 text-slate-700" />
          </div>
          <span className="text-xs text-slate-400 font-medium">{period}</span>
        </div>
        
        <h3 className="text-lg font-semibold text-slate-900 mb-1">{title}</h3>
        {featuredBadge && (
          <a
            href={featuredBadge.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-700 border border-amber-200 hover:bg-amber-200 transition-colors cursor-pointer mb-2"
          >
            <Newspaper className="w-3 h-3" />
            {featuredBadge.text}
          </a>
        )}
        <p className="text-sm font-medium text-[#6366f1] mb-3">{role}</p>
        
        <p className="text-sm text-slate-600 mb-4 leading-relaxed">{description}</p>
        
        <ul className="space-y-2">
          {highlights.map((highlight) => (
            <li key={highlight} className="flex items-start gap-2 text-sm text-slate-500">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6366f1] mt-1.5 shrink-0" />
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
