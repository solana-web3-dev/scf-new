import { SiX, SiTelegram, SiDiscord, SiGithub } from "react-icons/si";

const footerLinks = {
  products: [
    { label: "Wallet", href: "#" },
    { label: "Bridge", href: "#" },
    { label: "Staking", href: "#" },
    { label: "NFT Marketplace", href: "#" },
  ],
  developers: [
    { label: "Documentation", href: "#" },
    { label: "GitHub", href: "#" },
    { label: "SDK", href: "#" },
    { label: "Whitepaper", href: "#" },
  ],
  company: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

const socialLinks = [
  { icon: SiX, href: "https://twitter.com", label: "X" },
  { icon: SiTelegram, href: "https://telegram.org", label: "Telegram" },
  { icon: SiDiscord, href: "https://discord.com", label: "Discord" },
  { icon: SiGithub, href: "https://github.com", label: "GitHub" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[hsl(var(--neon-blue))] to-[hsl(var(--neon-purple))] flex items-center justify-center">
                <span className="text-white font-bold text-sm">YC</span>
              </div>
              <span className="font-bold text-lg text-foreground">YourChain</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6 max-w-xs">
              Next-Generation Layer-1 for Real-Time Apps. The fastest L1 chain built to power the next era of onchain games.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center hover:bg-[hsl(var(--neon-blue)/0.2)] transition-colors"
                  data-testid={`footer-social-${social.label.toLowerCase()}`}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`footer-link-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Developers</h4>
            <ul className="space-y-3">
              {footerLinks.developers.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`footer-link-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`footer-link-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`footer-link-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} YourChain. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with blockchain technology
          </p>
        </div>
      </div>
    </footer>
  );
}
