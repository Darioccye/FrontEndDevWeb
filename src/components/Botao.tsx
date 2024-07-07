import React, { useState } from 'react';
import '../index.css';
import deleteIcon from "../assets/skin/database_delete.png";

const Botao: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(!isLoading);
  };

  return (
    <button onClick={handleClick} className="action-button">
      {!isLoading ? (
        <img src={deleteIcon} alt="Imagem do Botão" className="button-image" />
      ) : (
        <div className="spinner"></div>
      )}
    </button>
  );
};

export default Botao;