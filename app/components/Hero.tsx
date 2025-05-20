'use client';

import { FC } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import toast from 'react-hot-toast';
import { isConnected } from '@stacks/connect';

const Hero: FC = () => {
  const handleGetStartedClick = (e: React.MouseEvent) => {
    if (!isConnected()) {
      e.preventDefault();
      toast.error('Please connect to a wallet');
    }
  };

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
      <Link 
        href="/dashboard"
        onClick={handleGetStartedClick}
        className="flex items-center gap-2 border-2 border-indigo-600 bg-indigo-50 hover:bg-indigo-600 text-indigo-600 hover:text-white font-semibold py-3 px-8 rounded-md transition-all duration-200 transform hover:scale-105 shadow-sm hover:shadow-indigo-500/25 group"
      >
        Get Started
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
};

export default Hero; 