import { Sparkles } from "lucide-react";

export function CoreCompetencyCard() {
  return (
    <div className="rounded-2xl bg-slate-900 p-8 text-slate-50">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="h-5 w-5 text-[#6366f1]" />
        <h3 className="text-lg font-semibold">Core Competency</h3>
      </div>
      
      <p className="text-slate-300 leading-relaxed mb-4">
        I bridge the gap between strategy and execution. I can write code, conduct user research, 
        manage teams, and ship products—without losing sight of the business fundamentals.
      </p>
      
      <p className="text-slate-400 text-sm">
        This makes me effective at startup environments where titles blur and impact matters most.
      </p>
    </div>
  );
}
