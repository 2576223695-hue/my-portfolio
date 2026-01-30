import { GraduationCap } from "lucide-react";

export function EducationCard() {
  return (
    <div className="rounded-2xl bg-card border border-slate-200 p-6 hover:shadow-sm transition-shadow">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
          <GraduationCap className="h-5 w-5 text-slate-600" />
        </div>
        <div>
          <h3 className="font-semibold text-slate-900">Education</h3>
          <p className="text-sm text-slate-500">Background</p>
        </div>
      </div>
      
      <div className="border-t border-slate-100 pt-4">
        <p className="font-medium text-slate-900">沧州师范学院</p>
        <p className="text-sm text-slate-500">2022 - 2026 (Expected)</p>
        <p className="text-sm text-slate-600 mt-2">Bachelor's Degree</p>
      </div>
    </div>
  );
}
