import { FC } from 'react';
import { WalletConnectButton } from './wallet-connect-button';

const Hero: FC = () => {
  return (
    <div className="flex flex-col items-center text-center max-w-4xl mx-auto px-4 py-16 sm:py-24 mt-20 bg-white">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
        <span className="text-black">Pay Monthly.</span>
        <span className="text-indigo-600"> In Bitcoin.</span>
        <br />
        <span className="text-black">No Middlemen.</span>
      </h1>
      <p className="text-lg sm:text-xl text-black mb-8 max-w-2xl">
        The future of subscription payments is here. Manage recurring payments using Bitcoin (sBTC) for subscriptions, services, and content. Powered by smart contracts, built for Web3.
      </p>
      <WalletConnectButton />
    </div>
  );
};

export default Hero; 