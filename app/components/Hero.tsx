import { FC } from 'react';

const Hero: FC = () => {
  return (
    <div className="flex flex-col items-center text-center max-w-4xl mx-auto px-4 py-16 sm:py-24">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
        Pay Monthly. In Bitcoin. No Middlemen.
      </h1>
      <p className="text-lg sm:text-xl text-black mb-8 max-w-2xl">
        The future of subscription payments is here. Manage recurring payments using Bitcoin (sBTC) for subscriptions, services, and content. Powered by smart contracts, built for Web3.
      </p>
      <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-indigo-500/25">
        Connect Wallet
      </button>
    </div>
  );
};

export default Hero; 