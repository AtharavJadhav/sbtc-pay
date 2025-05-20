'use client';

import { FC, useState } from 'react';
import { Plus, Clock } from 'lucide-react';
import { isConnected } from '@stacks/connect';
import toast from 'react-hot-toast';

interface Subscription {
  id: string;
  name: string;
  logo: string;
  amount: number;
  interval: 'Monthly' | 'Quarterly' | 'Yearly';
  nextPayment: Date;
  status: 'Active' | 'Paused' | 'Failed';
}

const Dashboard: FC = () => {
  // Mock data
  const [subscriptions] = useState<Subscription[]>([
    {
      id: '1',
      name: 'Notion Pro Plan',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png',
      amount: 0.0004,
      interval: 'Monthly',
      nextPayment: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      status: 'Active'
    },
    {
      id: '2',
      name: 'Bitcoin Magazine+',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg',
      amount: 0.0012,
      interval: 'Yearly',
      nextPayment: new Date(Date.now() + 45 * 24 * 60 * 60 * 1000),
      status: 'Active'
    },
    {
      id: '3',
      name: 'Developer DAO Membership',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg',
      amount: 0.0008,
      interval: 'Monthly',
      nextPayment: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
      status: 'Active'
    }
  ]);

  const getDaysUntilNextPayment = (nextPayment: Date) => {
    const today = new Date();
    const diffTime = nextPayment.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return 'Overdue';
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Tomorrow';
    return `In ${diffDays} days`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
      <div className="mt-12 mb-12">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <button
            onClick={() => {
              if (!isConnected()) {
                toast.error('Please connect to a wallet');
                return;
              }
              // Handle new subscription
            }}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
          >
            <Plus size={16} />
            New Subscription
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {subscriptions.map((subscription) => (
          <div
            key={subscription.id}
            className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg hover:shadow-indigo-200/50 hover:border-indigo-200 transition-all duration-300 flex flex-col h-full"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-lg bg-orange-50 flex items-center justify-center">
                  <img
                    src={subscription.logo}
                    alt={subscription.name}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{subscription.name}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-base font-medium text-gray-900">
                      {subscription.interval}
                    </span>
                    <span className="text-base font-bold text-orange-600">
                      ₿ {subscription.amount}
                    </span>
                  </div>
                </div>
              </div>
              <span className="px-3 py-1.5 text-sm font-medium text-green-700 bg-green-100 rounded-full">
                Active
              </span>
            </div>
            <div className="mt-auto">
              <div className="flex items-center gap-2 text-base text-gray-600 bg-gray-50 px-4 py-3 rounded-lg">
                <Clock size={18} className="text-orange-600" />
                <span>Next Payment: {getDaysUntilNextPayment(subscription.nextPayment)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard; 