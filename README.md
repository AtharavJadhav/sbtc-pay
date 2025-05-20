# sBTC Subscription System

A decentralized subscription system built on Bitcoin and Stacks, allowing users to create and manage subscriptions using sBTC.

## Features

- Create and manage subscriptions with sBTC
- Lock sBTC in smart contracts for automatic payments
- Support for monthly, quarterly, and annual payment intervals
- Real-time subscription status and payment tracking
- Secure and transparent payment processing

## Smart Contracts

The system uses two main Clarity smart contracts:

### 1. Subscription Contract (`contracts/subscription.clar`)
- Manages subscription creation and lifecycle
- Handles payment processing
- Tracks subscription status and history
- Allows subscription cancellation

### 2. sBTC Lock Contract (`contracts/sbtc-lock.clar`)
- Manages sBTC locks for subscription payments
- Handles lock creation and release
- Tracks locked amounts and durations
- Provides read-only functions for lock status

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) to view the application.

## Development

### Prerequisites
- Node.js 18+
- Stacks CLI
- sBTC wallet

### Environment Setup
1. Create a `.env.local` file with your configuration:
```env
NEXT_PUBLIC_STACKS_API_URL=https://api.mainnet.hiro.so
NEXT_PUBLIC_CONTRACT_ADDRESS=your-contract-address
```

### Smart Contract Deployment
1. Deploy the subscription contract:
```bash
clarity-cli deploy contracts/subscription.clar
```

2. Deploy the sBTC lock contract:
```bash
clarity-cli deploy contracts/sbtc-lock.clar
```

## Architecture

The system consists of:
- Next.js frontend for user interface
- Clarity smart contracts for subscription and sBTC lock management
- Stacks Connect for wallet integration
- sBTC for payment processing

## Security

- All payments are processed through smart contracts
- sBTC is locked in escrow until payment is due
- Subscription cancellation returns remaining locked sBTC
- Transparent payment history on the blockchain

