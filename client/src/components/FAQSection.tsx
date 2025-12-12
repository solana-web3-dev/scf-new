import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// todo: remove mock functionality
const faqs = [
  {
    question: "What is Solana Creator Fun (SCF)?",
    answer:
      "SCF is a Solana-based ecosystem that builds and provides services for creators on Solana. We develop our own dApps (launch pads, sniper bots, games, websites) and offer these same services to other creators who want to build on Solana.",
  },
  {
    question: "What is the $SCF token used for?",
    answer:
      "The $SCF token is the utility token for our ecosystem. It's used for accessing premium features, reduced fees on our services, staking rewards, governance voting, and exclusive access to new service launches.",
  },
  {
    question: "What services are you launching?",
    answer:
      "We're launching 6 core services: Launch Pad for fair token launches, Sniper Bot for fast trading, Games (lottery, cards, betting), Memecoin Website Builder, Token ICO Website platform, and Token Pre-Sale Website platform. All services are being developed simultaneously.",
  },
  {
    question: "How do I participate in the presale?",
    answer:
      "Connect your Solana wallet using the presale widget on our website. You can purchase $SCF tokens using SOL, USDT, or USDC. The presale has a countdown timer showing the remaining time to participate.",
  },
  {
    question: "When will the services launch?",
    answer:
      "Our roadmap shows Launch Pad and Sniper Bot launching in Q2 2025, Games Platform in Q3 2025, and Creator Tools (Memecoin sites, ICO, Pre-Sale platforms) in Q4 2025. Join our community for the latest updates.",
  },
  {
    question: "Can I use your services for my own project?",
    answer:
      "Yes! That's the core idea behind SCF. We build these services for ourselves first, then offer them to other Solana creators. You'll be able to launch your token, create your memecoin website, run a presale, and more using our platform.",
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
            Everything you need to know about Solana Creator Fun.
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
