import { Card } from "@/components/ui/card";

// todo: remove mock functionality
const partners = [
  { name: "CoinGecko", abbr: "CG" },
  { name: "LBank", abbr: "LB" },
  { name: "Huobi", abbr: "HB" },
  { name: "CoinMarketCap", abbr: "CMC" },
  { name: "MEXC", abbr: "MX" },
  { name: "DEXTools", abbr: "DT" },
  { name: "BingX", abbr: "BX" },
  { name: "OKX", abbr: "OK" },
  { name: "PancakeSwap", abbr: "PS" },
  { name: "Jupiter", abbr: "JUP" },
  { name: "DexScreener", abbr: "DS" },
  { name: "Uniswap", abbr: "UNI" },
];

export default function PartnersSection() {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[hsl(var(--neon-purple)/0.03)] to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[hsl(var(--neon-blue))] to-[hsl(var(--neon-purple))] bg-clip-text text-transparent">
              Strategic Partners
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Backed by industry leaders and trusted by top exchanges.
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {partners.map((partner) => (
            <Card
              key={partner.name}
              className="group p-6 bg-card/30 border-border/30 backdrop-blur-sm flex items-center justify-center overflow-visible hover-elevate cursor-pointer"
              data-testid={`partner-${partner.name.toLowerCase()}`}
            >
              <div className="text-center">
                <div className="w-12 h-12 mx-auto rounded-xl bg-secondary/50 flex items-center justify-center mb-2 group-hover:bg-[hsl(var(--neon-blue)/0.1)] transition-colors">
                  <span className="text-lg font-bold text-muted-foreground group-hover:text-[hsl(var(--neon-blue))] transition-colors">
                    {partner.abbr}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                  {partner.name}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
