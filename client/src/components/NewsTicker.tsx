const newsItems = [
  "Next-Gen Layer-1 for Real-Time Apps",
  "65,000 TPS Ultra-Fast Transactions",
  "Gaming-Optimized Blockchain",
  "Cross-Chain Bridge Live",
  "Join the Presale Now",
  "Built for Developers, by Developers",
];

export default function NewsTicker() {
  const duplicatedItems = [...newsItems, ...newsItems, ...newsItems, ...newsItems];

  return (
    <div className="bg-gradient-to-r from-[hsl(var(--neon-blue)/0.1)] via-[hsl(var(--neon-purple)/0.1)] to-[hsl(var(--neon-blue)/0.1)] border-y border-border/50 py-3 overflow-hidden">
      <div className="flex animate-scroll whitespace-nowrap">
        {duplicatedItems.map((item, index) => (
          <div key={index} className="flex items-center px-8">
            <div className="w-2 h-2 rounded-full bg-[hsl(var(--neon-green))] mr-4" />
            <span className="text-sm font-medium text-foreground">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
