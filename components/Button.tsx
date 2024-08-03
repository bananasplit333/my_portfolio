import React from 'react';
import RiseLoader from 'react-spinners/RiseLoader';

interface ButtonProps {
  label: string;
  className: string; 
  onClick: () => void;
  isLoading?: boolean;
  disabled?: boolean;
}

const Button = ({ label, className, onClick, isLoading} : ButtonProps) => {

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
      className={className}
    >
      {Contents}
    </button>
  );
  
};

export default Button;