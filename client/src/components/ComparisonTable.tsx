import { Card } from "@/components/ui/card";
import { Check, X } from "lucide-react";

// todo: remove mock functionality
const blockchains = [
  {
    name: "Bitcoin",
    icon: "BTC",
    throughput: "7",
    latency: "10 min",
    finality: "60 min",
    gameSpecific: false,
    gameDevTools: false,
  },
  {
    name: "Ethereum",
    icon: "ETH",
    throughput: "15",
    latency: "15 sec",
    finality: "90 sec",
    gameSpecific: false,
    gameDevTools: false,
  },
  {
    name: "Solana",
    icon: "SOL",
    throughput: "50,000",
    latency: "400 ms",
    finality: "5-12 sec",
    gameSpecific: false,
    gameDevTools: false,
  },
  {
    name: "YourChain",
    icon: "YRC",
    throughput: "65,000",
    latency: "150 ms",
    finality: "1-3 sec",
    gameSpecific: true,
    gameDevTools: true,
    highlight: true,
  },
];

export default function ComparisonTable() {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[hsl(var(--neon-blue)/0.03)] to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[hsl(var(--neon-blue))] to-[hsl(var(--neon-purple))] bg-clip-text text-transparent">
              YourChain vs Other Blockchains
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See how we compare to other leading blockchain platforms.
          </p>
        </div>

        <Card className="overflow-hidden bg-card/50 border-border/50 backdrop-blur-sm">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">Blockchain</th>
                  <th className="text-center p-4 text-sm font-medium text-muted-foreground">Tx Throughput</th>
                  <th className="text-center p-4 text-sm font-medium text-muted-foreground">Latency</th>
                  <th className="text-center p-4 text-sm font-medium text-muted-foreground">Finality</th>
                  <th className="text-center p-4 text-sm font-medium text-muted-foreground">Game-Specific</th>
                  <th className="text-center p-4 text-sm font-medium text-muted-foreground">Game Dev Tools</th>
                </tr>
              </thead>
              <tbody>
                {blockchains.map((chain) => (
                  <tr
                    key={chain.name}
                    className={`border-b border-border last:border-0 ${
                      chain.highlight
                        ? "bg-gradient-to-r from-[hsl(var(--neon-blue)/0.1)] to-[hsl(var(--neon-purple)/0.1)]"
                        : ""
                    }`}
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                            chain.highlight
                              ? "bg-gradient-to-r from-[hsl(var(--neon-blue))] to-[hsl(var(--neon-purple))] text-white"
                              : "bg-secondary text-muted-foreground"
                          }`}
                        >
                          {chain.icon}
                        </div>
                        <span className={`font-medium ${chain.highlight ? "text-foreground" : "text-muted-foreground"}`}>
                          {chain.name}
                        </span>
                      </div>
                    </td>
                    <td className={`text-center p-4 ${chain.highlight ? "text-foreground font-medium" : "text-muted-foreground"}`}>
                      {chain.throughput}
                    </td>
                    <td className={`text-center p-4 ${chain.highlight ? "text-foreground font-medium" : "text-muted-foreground"}`}>
                      {chain.latency}
                    </td>
                    <td className={`text-center p-4 ${chain.highlight ? "text-foreground font-medium" : "text-muted-foreground"}`}>
                      {chain.finality}
                    </td>
                    <td className="text-center p-4">
                      {chain.gameSpecific ? (
                        <Check className="w-5 h-5 text-[hsl(var(--neon-green))] mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-destructive mx-auto" />
                      )}
                    </td>
                    <td className="text-center p-4">
                      {chain.gameDevTools ? (
                        <Check className="w-5 h-5 text-[hsl(var(--neon-green))] mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-destructive mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </section>
  );
}
