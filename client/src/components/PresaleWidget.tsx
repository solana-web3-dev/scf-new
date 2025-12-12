import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { ChevronDown, Wallet, CreditCard } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const networks = [
  { id: "eth", name: "ETH", icon: "Ξ" },
  { id: "bsc", name: "BSC", icon: "B" },
  { id: "sol", name: "SOL", icon: "S" },
];

const currencies = [
  { id: "eth", name: "ETH", icon: "Ξ" },
  { id: "usdt", name: "USDT", icon: "$" },
  { id: "usdc", name: "USDC", icon: "$" },
];

// todo: remove mock functionality
const PRESALE_END = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
const RAISED = 60477.72;
const TARGET = 385699.13;

export default function PresaleWidget() {
  const [selectedNetwork, setSelectedNetwork] = useState(networks[0]);
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
  const [amount, setAmount] = useState("");
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = PRESALE_END.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const receiveAmount = amount ? (parseFloat(amount) / 0.0002899).toFixed(2) : "0";
  const progress = (RAISED / TARGET) * 100;

  return (
    <Card className="p-6 bg-card/80 border-border backdrop-blur-xl max-w-md w-full">
      <h3 className="text-xl font-bold text-center mb-6 bg-gradient-to-r from-[hsl(var(--neon-blue))] to-[hsl(var(--neon-purple))] bg-clip-text text-transparent">
        BUY $YRC NOW!
      </h3>

      <div className="grid grid-cols-4 gap-3 mb-6">
        {[
          { label: "DAYS", value: timeLeft.days },
          { label: "HOURS", value: timeLeft.hours },
          { label: "MINUTES", value: timeLeft.minutes },
          { label: "SECONDS", value: timeLeft.seconds },
        ].map((item) => (
          <div key={item.label} className="text-center">
            <div className="text-2xl font-bold text-foreground">{String(item.value).padStart(2, "0")}</div>
            <div className="text-xs text-muted-foreground">{item.label}</div>
          </div>
        ))}
      </div>

      <div className="mb-6">
        <Progress value={progress} className="h-3 mb-2" />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>${RAISED.toLocaleString()}</span>
          <span>${TARGET.toLocaleString()}</span>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="text-sm text-muted-foreground mb-2 block">Network:</label>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full justify-between" data-testid="dropdown-network">
                <span className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-xs">
                    {selectedNetwork.icon}
                  </span>
                  {selectedNetwork.name}
                </span>
                <ChevronDown className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full">
              {networks.map((network) => (
                <DropdownMenuItem
                  key={network.id}
                  onClick={() => setSelectedNetwork(network)}
                  data-testid={`network-${network.id}`}
                >
                  <span className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-xs mr-2">
                    {network.icon}
                  </span>
                  {network.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-muted-foreground">Pay with {selectedCurrency.name}:</span>
            <span className="text-muted-foreground">Balance: 0.00000</span>
          </div>
          <div className="relative">
            <Input
              type="number"
              placeholder="0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="pr-24"
              data-testid="input-amount"
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                className="h-7 text-xs text-[hsl(var(--neon-blue))]"
                onClick={() => setAmount("1")}
                data-testid="button-use-max"
              >
                USE MAX
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-7 px-2" data-testid="dropdown-currency">
                    <span className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center text-xs">
                      {selectedCurrency.icon}
                    </span>
                    <ChevronDown className="w-3 h-3 ml-1" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {currencies.map((currency) => (
                    <DropdownMenuItem
                      key={currency.id}
                      onClick={() => setSelectedCurrency(currency)}
                      data-testid={`currency-${currency.id}`}
                    >
                      <span className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center text-xs mr-2">
                        {currency.icon}
                      </span>
                      {currency.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>

        <div>
          <div className="text-sm text-muted-foreground mb-2">Receive $YRC:</div>
          <div className="p-3 rounded-md bg-secondary/50 border border-border">
            <span className="text-lg font-semibold">{receiveAmount}</span>
          </div>
        </div>

        <div className="text-center text-sm text-muted-foreground">
          1 $YRC = $0.0002899
        </div>

        <Button
          className="w-full bg-gradient-to-r from-[hsl(var(--neon-blue))] to-[hsl(var(--neon-purple))] text-white font-semibold"
          size="lg"
          data-testid="button-connect-wallet"
        >
          <Wallet className="w-5 h-5 mr-2" />
          CONNECT WALLET
        </Button>

        <Button
          variant="ghost"
          className="w-full text-muted-foreground"
          data-testid="button-pay-card"
        >
          <CreditCard className="w-4 h-4 mr-2" />
          Pay with card
        </Button>
      </div>
    </Card>
  );
}
