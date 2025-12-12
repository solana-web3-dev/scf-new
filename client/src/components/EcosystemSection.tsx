import { Card } from "@/components/ui/card";
import { Wallet, ArrowLeftRight, Landmark, Code2, Image, Gamepad2 } from "lucide-react";

const ecosystemItems = [
  {
    icon: Wallet,
    title: "YRC Wallet",
    description: "Secure, multi-chain wallet for all your assets",
    color: "neon-blue",
  },
  {
    icon: ArrowLeftRight,
    title: "Cross-Chain Bridge",
    description: "Seamlessly move assets between networks",
    color: "neon-purple",
  },
  {
    icon: Landmark,
    title: "Staking Portal",
    description: "Earn rewards by staking your $YRC tokens",
    color: "neon-green",
  },
  {
    icon: Code2,
    title: "dApp Builder",
    description: "No-code tools to build decentralized apps",
    color: "neon-blue",
  },
  {
    icon: Image,
    title: "NFT Marketplace",
    description: "Create, buy, and sell digital collectibles",
    color: "neon-purple",
  },
  {
    icon: Gamepad2,
    title: "Game SDK",
    description: "Complete toolkit for blockchain game development",
    color: "neon-green",
  },
];

export default function EcosystemSection() {
  return (
    <section className="py-20 relative" id="ecosystem">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[hsl(var(--neon-purple)/0.03)] to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[hsl(var(--neon-blue))] to-[hsl(var(--neon-purple))] bg-clip-text text-transparent">
              Ecosystem
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A complete suite of tools and products built on YourChain.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ecosystemItems.map((item) => (
            <Card
              key={item.title}
              className="group relative p-8 bg-card/50 border-border/50 backdrop-blur-sm overflow-visible hover-elevate cursor-pointer"
              data-testid={`ecosystem-${item.title.toLowerCase().replace(/\s/g, "-")}`}
            >
              <div
                className={`absolute inset-0 rounded-lg bg-gradient-to-br from-[hsl(var(--${item.color})/0.1)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />
              <div
                className={`absolute inset-0 rounded-lg ring-1 ring-[hsl(var(--${item.color})/0)] group-hover:ring-[hsl(var(--${item.color})/0.3)] transition-all duration-300`}
              />
              <div className="relative">
                <div
                  className={`w-14 h-14 rounded-xl bg-[hsl(var(--${item.color})/0.1)] flex items-center justify-center mb-5`}
                >
                  <item.icon className={`w-7 h-7 text-[hsl(var(--${item.color}))]`} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
