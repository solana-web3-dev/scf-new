# Design Guidelines: YourChain Blockchain Website

## Design Approach
**Reference-Based Approach**: Directly inspired by wallstreetchain.com's premium dark futuristic aesthetic. This is a high-conversion blockchain landing page with gaming/fintech energy, neon accents, and luxury L1 chain positioning.

## Core Visual Identity

### Typography
- **Hero Headlines**: Extra bold, 4xl-6xl size, uppercase or sentence case, high impact
- **Section Headers**: Bold, 3xl-4xl size, clear hierarchy
- **Body Text**: Clean, minimal, 16-18px base, excellent readability against dark backgrounds
- **CTA Text**: Medium-bold weight, 16-18px, clear contrast

### Layout System
**Spacing Units**: Use Tailwind units of 4, 8, 12, 16, 20, 24, 32 (p-4, p-8, p-12, etc.)
- Section padding: py-16 to py-32 on desktop, py-12 to py-20 on mobile
- Card spacing: gap-6 to gap-8
- Container max-width: max-w-7xl centered

### Visual Treatment
- **Background**: Deep navy/black (#0a0e1a, #000000) with gradient overlays
- **Accents**: Electric Blue (#30AFFF), Neon Purple (#A855F7), Lime Green (#71FF92)
- **Effects**: Glowing borders (box-shadow with accent colors), soft ambient light, gradient overlays
- **Borders**: Subtle borders with glow effects on cards and interactive elements

## Component Library

### Navigation
- **Sticky header** with backdrop blur
- Logo left, nav links center, "Buy $WSC" CTA button right
- Mobile: Hamburger menu with full-screen overlay
- Language selector dropdown with flag icons

### Hero Section
- **Layout**: Split layout - bold headline + subheading left (60%), animated visual right (40%)
- **Headline**: "Next-Generation Layer-1 for Real-Time Apps" or similar bold statement
- **CTAs**: Two prominent buttons side-by-side - "Buy Tokens" (primary gradient) and "Read Whitepaper" (outline)
- **Background**: Animated gradient with particle simulation or flowing lines
- **Visual Element**: Floating dollar bills, chain animations, or 3D blockchain visualization
- **Badges**: "Audited by" logos below hero content

### Animated Ticker
- Horizontal scrolling news ticker at top or between sections
- Repeating news items: "From Wall Street to Main Street - Everyone Wants $WSC" style messages
- Seamless infinite scroll animation

### Feature Cards Section
- **Grid**: 4 cards in 2x2 or horizontal row
- **Cards**: Dark cards with gradient borders, icon top, title, description
- **Icons**: Large (48-64px) using heroicons or custom crypto icons
- **Features**:
  1. Ultra-fast Transactions (65,000 TPS)
  2. Gaming-Optimized Chain
  3. Cross-Chain Bridge Support
  4. Security & Audited Smart Contracts

### Tokenomics Section
- **Donut Chart**: Interactive chart showing token distribution (40% presale, 25% liquidity, 20% development, 15% marketing example)
- **Table**: Distribution breakdown with percentages
- **CTA**: "View Full Tokenomics PDF" button

### Ecosystem Grid
- **Layout**: 3x2 or 2x3 grid of large cards
- **Cards**: Hover effect with glow, icon + title + brief description
- **Items**: Wallet, Bridge, Staking Portal, dApp Builder, NFT Marketplace, Game SDK

### Presale Widget
- **Countdown Timer**: Large digits showing Days:Hours:Minutes:Seconds
- **Progress Bar**: Visual progress with current/target amounts ($60,477 / $385,699 style)
- **Network Selector**: Dropdown for ETH/BSC/SOL with chain icons
- **Currency Selector**: Dropdown for payment method (ETH/USDT/USDC)
- **Input Fields**: Amount input with "USE MAX" button, receive amount display
- **Exchange Rate**: "1 $WSC = $0.0002899" display
- **Connect Wallet**: Large primary button
- **Alternative**: "Pay with card" link below

### Comparison Table
- **Rows**: WSC vs BTC, ETH, SOL with metrics
- **Columns**: Tx Throughput, Latency, Finality, Game-Specific, Game Dev Tools
- **Visual**: Checkmarks (green) and X marks (red) for boolean features
- **Highlight**: WSC row with gradient background

### Benefits Cards
- **Layout**: 4-5 vertical cards with decorative backgrounds
- **Content**: Icon, headline, description
- **Items**: 
  - True Asset Ownership
  - Instant Transactions
  - Cross-Platform Wallet
  - Based Scalability
  - Low Gas Fees

### Roadmap Timeline
- **Layout**: Vertical or horizontal timeline with connected nodes
- **Milestones**: 
  - Q1 2024: Testnet Launch
  - Q2 2024: Mainnet Launch
  - Q3 2024: Bridge v1 Release
  - Q4 2024: Developer Grants Program
  - Q1 2025: Game Partnerships
- **Visual**: Line connecting milestones, gradient nodes, completion status

### Developer Section
- **Code Snippet**: Dark terminal-style code block showing integration example
- **RPC Endpoints**: List display with copy buttons
- **SDK Cards**: Download cards for different languages/frameworks
- **CTA**: "Open Developer Docs" button

### Partners Grid
- **Layout**: 4x3 grid of partner logos on dark cards
- **Partners**: CoinGecko, LBank, Huobi, CoinMarketCap, MEXC, DEXTools, BingX, OKX, PancakeSwap, Jupiter, Dexscreener, Uniswap (placeholders)
- **Style**: Grayscale logos with hover effect revealing full color

### Footer
- **Layout**: Multi-column layout
- **Columns**: 
  - Logo + tagline + social icons
  - Products (Wallet, Bridge, Staking, NFT Marketplace)
  - Developers (Docs, GitHub, SDK, Whitepaper)
  - Company (About, Blog, Careers, Contact)
  - Legal (Privacy, Terms, Cookies)
- **Bottom**: Copyright + additional links

## Animations & Effects
- **Scroll Animations**: Fade-in on scroll using intersection observer
- **Parallax**: Hero background subtle parallax movement
- **Particle Effects**: Floating particles or grid animations in hero
- **Hover States**: Glow effects, scale transforms on cards
- **Loading States**: Skeleton screens for dynamic content
- **Micro-interactions**: Button press effects, input focus glows

## Images
- **Hero**: Floating money/coins imagery (similar to wallstreetchain.com dollar bills) overlaid on animated gradient - use PNG with transparency
- **Section Backgrounds**: Abstract blockchain grid patterns, glowing nodes, or geometric shapes as decorative elements
- **Partner Logos**: Actual crypto exchange and tool logos (grayscale treatment)
- **Audit Badges**: Coinsult and SolidProof security audit logos

## Responsive Behavior
- **Desktop (lg+)**: Full multi-column layouts, side-by-side sections
- **Tablet (md)**: 2-column grids, reduced spacing
- **Mobile (base)**: Single column, stacked sections, hamburger nav, simplified charts