// Header.tsx
import React from 'react';

interface HeaderProps {
  title: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, buttonLabel, onButtonClick }) => {
  const shouldShowButton = buttonLabel && onButtonClick;

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-gray-800 text-white">
      <h1 className="text-xl font-semibold">{title}</h1>
      {shouldShowButton && (
        <button
          onClick={onButtonClick}
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
        >
          {buttonLabel}
        </button>
      )}
    </header>
  );
};

export default Header;
