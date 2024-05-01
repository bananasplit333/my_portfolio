import React from 'react';
import RiseLoader from 'react-spinners/RiseLoader';

interface ButtonProps {
  label: string;
  onClick: () => void;
  isLoading?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, isLoading}) => {

  const Contents = isLoading ? (
    <RiseLoader
      color="#000"
      size={6}
      margin={3}
    />
  ) : (
    <p>{label}</p>
  )

  return (
    <button
      onClick={onClick}
      className={`bg-white text-black border-2 border-gray-300 rounded-lg px-5 py-2 text-base outline-none shadow-md transition-all duration-300 ease-in-out`}
    >
      {Contents}
    </button>
  );
};

export default Button;