import React from "react";

const Products = () => {
  return (
    <div className="bg-neutral py-6 md:py-12 lg:py-16 text-palpite flex flex-col justify-center items-center">
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-palpite tracking-[0.25em] ">
        PRODUTOS
      </h1>
      <div className="flex flex-col items-center md:flex-row md:justify-around md:w-full lg:w-full mt-4 md:mt-16 lg:mt-24">
        <div className="flex flex-col p-3 justify-center items-center md:place-self-start md:align-middle">
          <div className="w-10 h-10 mb-4 md:w-24 md:h-24">
            <img src="/img/pipe.gif" alt="canalização" />
          </div>
          <h4 className="mb-0 md:mb-2 font-semibold leading-5 text-[0.7em] md:text-xl lg:text-2xl">
            CANALIZAÇÃO
          </h4>
          <div className="flex flex-col text-[0.5em] mt-2 md:text-sm md:mt-2">
            <p>Ligação e Instalação</p>
          </div>
        </div>
        <div className="flex flex-col p-3 justify-center items-center md:place-self-start">
          <div className="w-10 h-10 mb-4 md:w-24 md:h-24">
            <img src="/img/air.gif" alt="air-conditioner" />
          </div>
          <h4 className="mb-0 md:mb-2 font-semibold leading-5 text-[0.7em] md:text-xl lg:text-2xl">
            AQUECIMENTO
          </h4>
          <div className="flex flex-col text-[0.5em] mt-2 md:text-sm md:mt-2 text-center">
            <p>Equipamentos a Pellets</p>
            <p>Equipamentos Elétricos</p>
            <p>Termoacumuladores e esquentadores</p>
            <p>Radiadores a Água</p>
          </div>
        </div>
        <div className="flex flex-col p-3 justify-center items-center md:place-self-start">
          <div className="w-10 h-10 mb-4 md:w-24 md:h-24">
            <img src="/img/boiler.png" alt="database icon" />
          </div>

          <h4 className="mb-0 md:mb-2 font-semibold leading-5 text-[0.7em] md:text-xl lg:text-2xl">
            CLIMATIZAÇÃO
          </h4>
          <div className="flex flex-col text-[0.5em] mt-2 md:text-sm md:mt-2 text-center">
            <p className="flex flex-row">Ar condicionado</p>
            <p className="flex flex-row">Desumificadores</p>
          </div>
        </div>
        <div className="flex flex-col p-3 justify-center items-center md:place-self-start">
          <div className="w-10 h-10 mb-4 md:w-24 md:h-24">
            <img src="/img/toilet.gif" alt="toilet gif" />
          </div>

          <h4 className="mb-0 md:mb-2 font-semibold leading-5 text-[0.7em] md:text-xl lg:text-2xl">
            ARTIGOS SANITÁRIOS
          </h4>
          <div className="flex flex-col text-[0.5em] mt-2 md:text-sm md:mt-2 text-center">
            <p className="flex flex-row">Artigos Sanitários</p>
            <p className="flex flex-row">Banho e Duche</p>
            <p className="flex flex-row">Torneiras</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
