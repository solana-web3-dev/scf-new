import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// todo: remove mock functionality
const faqs = [
  {
    question: "What is YourChain?",
    answer:
      "YourChain is a next-generation Layer-1 blockchain optimized for real-time applications, especially gaming. With 65,000+ TPS and sub-second finality, it's built to handle high-throughput applications without compromising on security or decentralization.",
  },
  {
    question: "How do I participate in the presale?",
    answer:
      "To participate in the presale, connect your wallet using the 'Connect Wallet' button on our presale widget. You can purchase $YRC tokens using ETH, USDT, or USDC across multiple networks including Ethereum, BSC, and Solana.",
  },
  {
    question: "What makes YourChain different from other blockchains?",
    answer:
      "YourChain is purpose-built for gaming with ultra-low latency (150ms), instant finality (1-3 seconds), and a comprehensive Game SDK. Unlike general-purpose chains, we provide specialized tools for game developers including NFT infrastructure, in-game asset management, and cross-chain bridges.",
  },
  {
    question: "Is YourChain audited?",
    answer:
      "Yes, YourChain has undergone comprehensive security audits by leading blockchain security firms including Coinsult and SolidProof. Our smart contracts are thoroughly tested and verified to ensure the highest level of security for our users.",
  },
  {
    question: "When is the mainnet launch?",
    answer:
      "Our mainnet launched in Q2 2024. We are currently focused on expanding our ecosystem with the cross-chain bridge (Q3 2024), developer grants program (Q4 2024), and strategic gaming partnerships (Q1 2025).",
  },
  {
    question: "How can I stake $YRC tokens?",
    answer:
      "Once you have $YRC tokens, you can stake them through our Staking Portal. Staking rewards are distributed automatically based on the amount staked and duration. Visit our documentation for detailed staking instructions.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-20 relative" id="faq">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[hsl(var(--neon-blue)/0.03)] to-transparent" />
      
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[hsl(var(--neon-blue))] to-[hsl(var(--neon-purple))] bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-muted-foreground">
            Everything you need to know about YourChain.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border/50 rounded-lg bg-card/30 backdrop-blur-sm px-6 overflow-hidden"
              data-testid={`faq-item-${index}`}
            >
              <AccordionTrigger className="text-left text-foreground hover:no-underline py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
