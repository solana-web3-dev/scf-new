import { Zap, Users, Wrench, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "Built on Solana",
    description: "Lightning-fast transactions with low fees. Perfect for creators who need speed and reliability.",
    color: "neon-blue",
  },
  {
    icon: Users,
    title: "For Creators, By Creators",
    description: "We use every service we build. If it's good enough for us, it's good enough for you.",
    color: "neon-purple",
  },
  {
    icon: Wrench,
    title: "Full-Service Platform",
    description: "From launch pads to games, we've got everything you need to build on Solana.",
    color: "neon-green",
  },
  {
    icon: Shield,
    title: "Secure & Audited",
    description: "All our smart contracts and services undergo rigorous security audits.",
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
              Why Choose SCF?
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We don't just build for others - we use these services ourselves.
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
