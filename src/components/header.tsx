import React from "react";

const Header = () => {
  return (
    <header className="w-full p-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <div className="ml-4 md:ml-8"> {/* Margem ajustada para desktop */}
          <div className="logo-text">Batalhas CBA</div>
        </div>
      </div>

      <style jsx>{`
        .logo-text {
          font-family: 'Permanent Marker', cursive;
          font-size: 40px;
          font-weight: 400;
          line-height: 60px;
          text-align: left;
          color: #ffffff;
          text-shadow: -1px 4px 4px rgb(147, 153, 184);
        }

        @media (max-width: 768px) {
          .logo-text {
            font-size: 24px; /* Reduz tamanho da fonte para dispositivos móveis */
            line-height: 40px; /* Reduz espaçamento entre linhas para dispositivos móveis */
            text-align: center; /* Centraliza o texto em dispositivos móveis */
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
