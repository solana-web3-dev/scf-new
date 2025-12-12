import { Card } from "@/components/ui/card";
import { Check, Circle } from "lucide-react";

// todo: remove mock functionality
const roadmapItems = [
  {
    quarter: "Q1 2024",
    title: "Testnet Launch",
    description: "Public testnet deployment with developer tools and documentation.",
    status: "completed",
  },
  {
    quarter: "Q2 2024",
    title: "Mainnet Launch",
    description: "Full mainnet deployment with cross-chain bridge integration.",
    status: "completed",
  },
  {
    quarter: "Q3 2024",
    title: "Bridge v1 Release",
    description: "Launch of cross-chain bridge supporting ETH, BSC, and Solana.",
    status: "in-progress",
  },
  {
    quarter: "Q4 2024",
    title: "Developer Grants",
    description: "Launch of $10M developer grants program for ecosystem growth.",
    status: "upcoming",
  },
  {
    quarter: "Q1 2025",
    title: "Game Partnerships",
    description: "Strategic partnerships with top gaming studios and publishers.",
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
            Our journey to revolutionize blockchain gaming.
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
