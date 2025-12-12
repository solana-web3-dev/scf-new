import { Card } from "@/components/ui/card";
import { Check, Circle } from "lucide-react";

// todo: remove mock functionality
const roadmapItems = [
  {
    quarter: "Q1 2025",
    title: "Presale & Community",
    description: "Launch $SCF token presale, build community, and finalize service development.",
    status: "in-progress",
  },
  {
    quarter: "Q2 2025",
    title: "Launch Pad & Sniper Bot",
    description: "Release Launch Pad and Sniper Bot services for the Solana ecosystem.",
    status: "upcoming",
  },
  {
    quarter: "Q3 2025",
    title: "Games Platform",
    description: "Launch lottery, card games, and betting platform with provably fair mechanics.",
    status: "upcoming",
  },
  {
    quarter: "Q4 2025",
    title: "Creator Tools",
    description: "Release Memecoin Website Builder, Token ICO, and Pre-Sale Website services.",
    status: "upcoming",
  },
  {
    quarter: "Q1 2026",
    title: "Ecosystem Expansion",
    description: "Additional services, partnerships, and cross-chain integrations.",
    status: "upcoming",
  },
];

export default function RoadmapSection() {
  return (
    <section className="py-20 relative" id="roadmap">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[hsl(var(--neon-purple)/0.03)] to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[hsl(var(--neon-blue))] to-[hsl(var(--neon-purple))] bg-clip-text text-transparent">
              Roadmap
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our journey to build the ultimate Solana creator ecosystem.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[hsl(var(--neon-blue))] via-[hsl(var(--neon-purple))] to-[hsl(var(--neon-green))] hidden lg:block" />

          <div className="space-y-8 lg:space-y-12">
            {roadmapItems.map((item, index) => (
              <div
                key={item.quarter}
                className={`relative flex flex-col lg:flex-row items-center gap-6 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                  <Card className="p-6 bg-card/50 border-border/50 backdrop-blur-sm inline-block">
                    <div
                      className={`text-sm font-medium mb-2 ${
                        item.status === "completed"
                          ? "text-[hsl(var(--neon-green))]"
                          : item.status === "in-progress"
                          ? "text-[hsl(var(--neon-blue))]"
                          : "text-muted-foreground"
                      }`}
                    >
                      {item.quarter}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground max-w-sm">{item.description}</p>
                  </Card>
                </div>

                <div className="relative z-10 flex items-center justify-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      item.status === "completed"
                        ? "bg-[hsl(var(--neon-green))]"
                        : item.status === "in-progress"
                        ? "bg-gradient-to-r from-[hsl(var(--neon-blue))] to-[hsl(var(--neon-purple))] animate-pulse-glow"
                        : "bg-secondary border-2 border-border"
                    }`}
                  >
                    {item.status === "completed" ? (
                      <Check className="w-6 h-6 text-background" />
                    ) : (
                      <Circle
                        className={`w-4 h-4 ${
                          item.status === "in-progress" ? "text-white" : "text-muted-foreground"
                        }`}
                      />
                    )}
                  </div>
                </div>

                <div className="flex-1 hidden lg:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
