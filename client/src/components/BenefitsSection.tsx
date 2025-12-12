import { Card } from "@/components/ui/card";
import { Rocket, Wrench, Users, Coins, Zap } from "lucide-react";

const benefits = [
  {
    icon: Rocket,
    title: "Launch Your Project",
    description: "Use our launch pad and pre-sale platforms to get your token to market.",
  },
  {
    icon: Wrench,
    title: "All-in-One Platform",
    description: "Everything you need to build, launch, and grow on Solana.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "$SCF holders get access to premium features and governance.",
  },
  {
    icon: Coins,
    title: "Revenue Sharing",
    description: "Stake $SCF to earn a share of platform fees.",
  },
  {
    icon: Zap,
    title: "Solana Speed",
    description: "All services built on Solana for lightning-fast transactions.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[hsl(var(--neon-green)/0.03)] to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[hsl(var(--neon-blue))] to-[hsl(var(--neon-green))] bg-clip-text text-transparent">
              Why Hold $SCF?
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Be part of the Solana Creator ecosystem. Access services, earn rewards, and help shape the future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {benefits.map((benefit) => (
            <Card
              key={benefit.title}
              className="group relative p-6 bg-card/50 border-border/50 backdrop-blur-sm overflow-visible hover-elevate"
            >
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[hsl(var(--neon-blue)/0.05)] via-transparent to-[hsl(var(--neon-purple)/0.05)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative text-center">
                <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-[hsl(var(--neon-blue)/0.2)] to-[hsl(var(--neon-purple)/0.2)] flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-[hsl(var(--neon-blue))]" />
                </div>
                <h3 className="text-base font-semibold mb-2 text-foreground">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
