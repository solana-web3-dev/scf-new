import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FileDown } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

// todo: remove mock functionality
const tokenomicsData = [
  { name: "Presale", value: 40, color: "hsl(199, 100%, 59%)" },
  { name: "Liquidity", value: 25, color: "hsl(270, 91%, 65%)" },
  { name: "Development", value: 20, color: "hsl(145, 84%, 72%)" },
  { name: "Marketing", value: 10, color: "hsl(30, 95%, 65%)" },
  { name: "Team", value: 5, color: "hsl(340, 88%, 65%)" },
];

export default function TokenomicsSection() {
  return (
    <section className="py-20 relative" id="tokenomics">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[hsl(var(--neon-blue)/0.03)] to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[hsl(var(--neon-blue))] to-[hsl(var(--neon-purple))] bg-clip-text text-transparent">
              Tokenomics
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Fair distribution designed for long-term growth and community rewards.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="w-full max-w-sm h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={tokenomicsData}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={120}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {tokenomicsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(225, 28%, 7%)",
                      border: "1px solid hsl(225, 25%, 12%)",
                      borderRadius: "8px",
                    }}
                    labelStyle={{ color: "hsl(210, 40%, 98%)" }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="p-6 bg-card/50 border-border/50 backdrop-blur-sm">
              <div className="space-y-4">
                {tokenomicsData.map((item) => (
                  <div key={item.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-foreground font-medium">{item.name}</span>
                    </div>
                    <span className="text-muted-foreground">{item.value}%</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-xl font-bold text-foreground">1,000,000,000</div>
                    <div className="text-sm text-muted-foreground">Total Supply</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-[hsl(var(--neon-green))]">$0.0002899</div>
                    <div className="text-sm text-muted-foreground">Presale Price</div>
                  </div>
                </div>
              </div>
            </Card>

            <Button
              variant="outline"
              className="w-full border-[hsl(var(--neon-blue)/0.5)] text-[hsl(var(--neon-blue))] hover:bg-[hsl(var(--neon-blue)/0.1)]"
              data-testid="button-tokenomics-pdf"
            >
              <FileDown className="w-4 h-4 mr-2" />
              View Full Tokenomics PDF
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
