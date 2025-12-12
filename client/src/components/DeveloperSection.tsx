import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Copy, Download, Check } from "lucide-react";
import { useState } from "react";

const codeSnippet = `// Connect to YourChain RPC
import { ethers } from 'ethers';

const provider = new ethers.JsonRpcProvider(
  'https://rpc.yourchain.io'
);

// Get latest block
const block = await provider.getBlock('latest');
console.log('Block:', block.number);`;

const rpcEndpoints = [
  { name: "Mainnet RPC", url: "https://rpc.yourchain.io" },
  { name: "Testnet RPC", url: "https://testnet.rpc.yourchain.io" },
  { name: "WebSocket", url: "wss://ws.yourchain.io" },
];

const sdks = [
  { name: "JavaScript SDK", version: "v2.1.0" },
  { name: "Python SDK", version: "v1.8.0" },
  { name: "Rust SDK", version: "v0.9.0" },
];

export default function DeveloperSection() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[hsl(var(--neon-blue)/0.03)] to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[hsl(var(--neon-blue))] to-[hsl(var(--neon-purple))] bg-clip-text text-transparent">
              Build on YourChain
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Developer-friendly tools and comprehensive documentation to get you started.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="p-6 bg-card/50 border-border/50 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-muted-foreground">Quick Start</span>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-[hsl(var(--neon-green))]/60" />
              </div>
            </div>
            <pre className="p-4 rounded-lg bg-background/80 overflow-x-auto">
              <code className="text-sm text-muted-foreground font-mono whitespace-pre">
                {codeSnippet}
              </code>
            </pre>
          </Card>

          <div className="space-y-6">
            <Card className="p-6 bg-card/50 border-border/50 backdrop-blur-sm">
              <h3 className="text-lg font-semibold mb-4 text-foreground">RPC Endpoints</h3>
              <div className="space-y-3">
                {rpcEndpoints.map((endpoint, index) => (
                  <div
                    key={endpoint.name}
                    className="flex items-center justify-between p-3 rounded-lg bg-background/50"
                  >
                    <div>
                      <div className="text-sm font-medium text-foreground">{endpoint.name}</div>
                      <div className="text-xs text-muted-foreground font-mono">{endpoint.url}</div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => copyToClipboard(endpoint.url, index)}
                      data-testid={`button-copy-${endpoint.name.toLowerCase().replace(/\s/g, "-")}`}
                    >
                      {copiedIndex === index ? (
                        <Check className="w-4 h-4 text-[hsl(var(--neon-green))]" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-card/50 border-border/50 backdrop-blur-sm">
              <h3 className="text-lg font-semibold mb-4 text-foreground">SDKs</h3>
              <div className="grid grid-cols-3 gap-3">
                {sdks.map((sdk) => (
                  <button
                    key={sdk.name}
                    className="p-3 rounded-lg bg-background/50 text-center hover-elevate"
                    data-testid={`button-sdk-${sdk.name.toLowerCase().replace(/\s/g, "-")}`}
                  >
                    <Download className="w-5 h-5 mx-auto mb-2 text-[hsl(var(--neon-blue))]" />
                    <div className="text-xs font-medium text-foreground">{sdk.name}</div>
                    <div className="text-xs text-muted-foreground">{sdk.version}</div>
                  </button>
                ))}
              </div>
            </Card>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-[hsl(var(--neon-blue))] to-[hsl(var(--neon-purple))] text-white font-semibold"
            data-testid="button-open-docs"
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            Open Developer Docs
          </Button>
        </div>
      </div>
    </section>
  );
}
