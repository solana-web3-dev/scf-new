import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Rocket, Crosshair, Gamepad2, Globe, Coins, ShoppingCart } from "lucide-react";

const services = [
  {
    icon: Rocket,
    title: "Launch Pad",
    description: "Fair and secure token launches on Solana. We use it and offer it to other creators.",
    color: "neon-blue",
  },
  {
    icon: Crosshair,
    title: "Sniper Bot",
    description: "Lightning-fast trading bot for Solana. Get in early on new token launches.",
    color: "neon-purple",
  },
  {
    icon: Gamepad2,
    title: "Games",
    description: "Lottery, card games, and betting with fun. Provably fair gaming on Solana.",
    color: "neon-green",
  },
  {
    icon: Globe,
    title: "Memecoin Websites",
    description: "Professional website builder for memecoin projects. Stand out from the crowd.",
    color: "neon-blue",
  },
  {
    icon: Coins,
    title: "Token ICO Website",
    description: "Complete ICO platform for your token. Professional, secure, and conversion-optimized.",
    color: "neon-purple",
  },
  {
    icon: ShoppingCart,
    title: "Token Pre-Sale Website",
    description: "Customizable pre-sale platforms. Accept multiple currencies, track contributions.",
    color: "neon-green",
  },
];

export default function EcosystemSection() {
  return (
    <section className="py-20 relative" id="services">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[hsl(var(--neon-purple)/0.03)] to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[hsl(var(--neon-blue))] to-[hsl(var(--neon-purple))] bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We build these dApps for ourselves AND provide them as services to other Solana creators.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item) => (
            <Card
              key={item.title}
              className="group relative p-8 bg-card/50 border-border/50 backdrop-blur-sm overflow-visible hover-elevate cursor-pointer"
              data-testid={`service-${item.title.toLowerCase().replace(/\s/g, "-")}`}
            >
              <div
                className={`absolute inset-0 rounded-lg bg-gradient-to-br from-[hsl(var(--${item.color})/0.1)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />
              <div
                className={`absolute inset-0 rounded-lg ring-1 ring-[hsl(var(--${item.color})/0)] group-hover:ring-[hsl(var(--${item.color})/0.3)] transition-all duration-300`}
              />
              <div className="relative">
                <div className="flex items-start justify-between mb-5">
                  <div
                    className={`w-14 h-14 rounded-xl bg-[hsl(var(--${item.color})/0.1)] flex items-center justify-center`}
                  >
                    <item.icon className={`w-7 h-7 text-[hsl(var(--${item.color}))]`} />
                  </div>
                  <Badge variant="secondary" className="bg-[hsl(var(--neon-purple)/0.2)] text-[hsl(var(--neon-purple))] border-[hsl(var(--neon-purple)/0.3)]">
                    Launching Soon
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            All services are being developed simultaneously. Join the $SCF presale to be part of the ecosystem.
          </p>
        </div>
      </div>
    </section>
  );
}
