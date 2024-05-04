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
      className={`bg-blue-500 text-white text-bold rounded px-4 py-2`}
    >
      {Contents}
    </button>
  );
};

export default Button;