interface StatItemProps {
  value: string;
  label: string;
}

function StatItem({ value, label }: StatItemProps) {
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-slate-900">{value}</div>
      <div className="text-sm text-slate-500 mt-1">{label}</div>
    </div>
  );
}

export function StatsCard() {
  const stats: StatItemProps[] = [
    { value: "450+", label: "Concurrent Players" },
    { value: "1.2K+", label: "Community Members" },
    { value: "50%", label: "Production Time Saved" },
  ];

  return (
    <div className="rounded-2xl bg-card border border-slate-200 p-8 hover:shadow-sm transition-shadow">
      <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-6 text-center">
        Recognized For
      </p>
      <div className="grid grid-cols-3 gap-4">
        {stats.map((stat) => (
          <StatItem key={stat.label} {...stat} />
        ))}
      </div>
    </div>
  );
}
