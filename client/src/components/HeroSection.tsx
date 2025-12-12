import { Button } from "@/components/ui/button";
import { FileText, Coins, ArrowRight, Shield, Zap } from "lucide-react";
import heroImage from "@assets/generated_images/floating_crypto_coins_hero_visual.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden" id="about">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-[hsl(var(--neon-purple)/0.1)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--neon-blue)/0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--neon-purple)/0.1),transparent_50%)]" />
      
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[hsl(var(--neon-blue))] rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[hsl(var(--neon-purple))] rounded-full blur-[128px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(var(--neon-blue)/0.1)] border border-[hsl(var(--neon-blue)/0.3)]">
              <Zap className="w-4 h-4 text-[hsl(var(--neon-blue))]" />
              <span className="text-sm font-medium text-[hsl(var(--neon-blue))]">65,000 TPS</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-foreground">Next-Generation</span>
              <br />
              <span className="bg-gradient-to-r from-[hsl(var(--neon-blue))] via-[hsl(var(--neon-purple))] to-[hsl(var(--neon-green))] bg-clip-text text-transparent">
                Layer-1
              </span>
              <br />
              <span className="text-foreground">for Real-Time Apps</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg">
              The fastest L1 chain built to power the next era of onchain games. 
              Ultra-fast transactions, gaming-optimized, with cross-chain bridge support.
              Built for developers, by developers.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[hsl(var(--neon-blue))] to-[hsl(var(--neon-purple))] text-white border-0 font-semibold px-8"
                data-testid="button-hero-buy-tokens"
              >
                <Coins className="w-5 h-5 mr-2" />
                Buy Tokens
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border font-semibold"
                data-testid="button-hero-whitepaper"
              >
                <FileText className="w-5 h-5 mr-2" />
                Read Whitepaper
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-[hsl(var(--neon-green))]" />
                <span className="text-sm text-muted-foreground">Audited by Coinsult</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-[hsl(var(--neon-green))]" />
                <span className="text-sm text-muted-foreground">Verified by SolidProof</span>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--neon-blue)/0.3)] to-[hsl(var(--neon-purple)/0.3)] rounded-full blur-3xl" />
              <img
                src={heroImage}
                alt="Blockchain visualization"
                className="relative w-full max-w-md lg:max-w-lg animate-float"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Transactions/sec", value: "65,000+" },
            { label: "Latency", value: "150ms" },
            { label: "Finality", value: "1-3 sec" },
            { label: "Active Users", value: "50K+" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm"
            >
              <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[hsl(var(--neon-blue))] to-[hsl(var(--neon-purple))] bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
