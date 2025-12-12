import { Zap, Gamepad2, Link2, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "Ultra-Fast Transactions",
    description: "65,000+ TPS with 150ms latency. Keep your game smooth even when thousands of players flood in.",
    color: "neon-blue",
  },
  {
    icon: Gamepad2,
    title: "Gaming-Optimized Chain",
    description: "Purpose-built for gaming with dev-friendly toolkit. Build, deploy, and scale your game fast.",
    color: "neon-purple",
  },
  {
    icon: Link2,
    title: "Cross-Chain Bridge",
    description: "Move assets between chains from a single wallet. Seamless interoperability with major networks.",
    color: "neon-green",
  },
  {
    icon: Shield,
    title: "Battle-Tested Security",
    description: "Top-tier protection with PoS + dBFT consensus. Audited smart contracts for peace of mind.",
    color: "neon-blue",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 relative" id="features">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[hsl(var(--neon-purple)/0.03)] to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[hsl(var(--neon-blue))] to-[hsl(var(--neon-purple))] bg-clip-text text-transparent">
              Why Choose YourChain?
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Built from the ground up for performance, security, and developer experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="group relative p-6 bg-card/50 border-border/50 backdrop-blur-sm overflow-visible hover-elevate"
            >
              <div
                className={`absolute inset-0 rounded-lg bg-gradient-to-br from-[hsl(var(--${feature.color})/0.1)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />
              <div className="relative">
                <div
                  className={`w-12 h-12 rounded-lg bg-[hsl(var(--${feature.color})/0.1)] flex items-center justify-center mb-4`}
                >
                  <feature.icon className={`w-6 h-6 text-[hsl(var(--${feature.color}))]`} />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
