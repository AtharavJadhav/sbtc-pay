import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-gray-100 py-4">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-600 text-sm">
          © 2025 sBTC-Pay. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 