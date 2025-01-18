import React from 'react';

const PaletaCromatica = ({ color, children, size = 'medium' }) => {
  const paleta = {
    primary: 'linear-gradient(to right, #52307C, #842AF3, #842AF3)', 
    secondary: '#B06AFF',
    background: '#FFFF', 
    text: '#000000', 
    border: '#B4A6C5',
  };

  const selectedColor = paleta[color] || paleta.text;
  const buttonSize = {
    small: 'py-2 px-4 text-sm',
    medium: 'py-4 px-3 text-base',
    large: 'py-4 px-8 text-lg',
  };

  return (
    <div
    style={{
      color: selectedColor
    }}
    className={`rounded-full ${buttonSize[size]}`}
  >
    {children}
  </div>
  );
};

export default PaletaCromatica;
