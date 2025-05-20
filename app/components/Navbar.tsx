import { FC } from 'react';
import Logo from './Logo';
import { WalletConnectButton } from './wallet-connect-button';

const Navbar: FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Logo />

          {/* Center Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/dashboard"
              className="text-gray-600 hover:text-indigo-600 transition-colors duration-200"
            >
              Dashboard
            </a>
          </div>

          {/* Right Side - Connect Wallet */}
          <WalletConnectButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 