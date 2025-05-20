import { FC } from 'react';

interface LogoProps {
  showText?: boolean;
  className?: string;
}

const Logo: FC<LogoProps> = ({ showText = true, className = '' }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="h-8 w-8 rounded-md bg-indigo-600 flex items-center justify-center text-white font-bold">
        sP
      </div>
      {showText && (
        <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          sBTC-Pay
        </span>
      )}
    </div>
  );
};

export default Logo; 