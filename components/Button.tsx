import React from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader';

interface ButtonProps {
  label: string;
  onClick: () => void;
  isLoading?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, isLoading = false, disabled = false }) => {
  const opacity = disabled ? 'opacity-75' : 'opacity-100';
  const cursor = disabled ? 'cursor-not-allowed' : 'cursor-pointer';

  return (
    <button
      onClick={onClick}
      className={`bg-white text-black border-2 border-gray-300 rounded-lg px-5 py-2 text-base outline-none shadow-md transition-all duration-300 ease-in-out ${opacity} ${cursor}`}
    >
    </button>
  );
};

export default Button;