# HoodyGang - NFT Marketplace & Staking Platform

A Next.js based Web3 application for HoodyGang NFT collection featuring marketplace, staking, traits store, and inventory management.

## Features

- 🎨 **NFT Marketplace** - Buy, sell, and trade HoodyGang NFTs
- 💎 **NFT Minting** - Mint new NFTs with CrossMint integration
- 🔒 **Staking System** - Stake/unstake NFTs to earn Hoody Points
- 🛍️ **Traits Store** - Buy and sell NFT traits
- 📦 **Inventory Management** - View and manage your NFT collection
- 🎯 **Points System** - Earn and claim Hoody Points through staking
- 🔗 **Referral Program** - Referral code system for users

## Tech Stack

- **Framework**: Next.js 13.4.7
- **Blockchain**: Ethereum (Ethers.js, Wagmi, RainbowKit)
- **Styling**: Tailwind CSS, SCSS
- **UI Components**: Material-UI, Headless UI
- **State Management**: React Hooks
- **Data**: The Graph (Subgraph)

## Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
├── components/        # React components
│   ├── base/         # Reusable UI components
│   ├── home/         # Landing page components
│   ├── layout/       # Header, Footer
│   ├── main/         # Main app pages (marketplace, inventory, etc.)
│   └── sections/     # Landing page sections
├── pages/            # Next.js pages
├── abis/             # Smart contract ABIs
├── utils/            # Utilities (contracts, interactions, constants)
├── public/           # Static assets
└── styles/           # Global styles
```

## Smart Contracts

- HoodyGang (Main NFT Contract)
- HoodyToken (Token Contract)
- HoodyGangStake (Staking Contract)
- HoodyTraits (Traits Contract)
- HoodyTraitsMarketplace (Traits Marketplace)
- HoodyBuildingBlock
- HoodyMigrate

## Environment Setup

Create a `.env` file with required environment variables for:
- RPC endpoints
- Contract addresses
- API endpoints
- CrossMint configuration

## License

Private

