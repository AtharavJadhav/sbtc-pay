'use client';

import { FC } from 'react';
import SubscriptionForm from '../../components/subscription-form';

const NewSubscriptionPage: FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <main className="py-8 px-4 md:px-6">
        <SubscriptionForm />
      </main>
    </div>
  );
};

export default NewSubscriptionPage; 