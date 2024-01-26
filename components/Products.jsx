import React from "react";

const Products = () => {
  return (
    <div className="bg-neutral py-32 text-palpite flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-palpite tracking-[0.25em] ">
        PRODUTOS
      </h1>
      <div className="flex flex-row justify-around w-full mt-24 align-middle">
        <div className="flex flex-col p-3 ">
          <div className="w-24 h-24 mb-4">
            <img src="/img/pipe.gif" alt="canalização" />
          </div>
          <h4 className="mb-2 font-semibold leading-5 text-2xl">CANALIZAÇÃO</h4>
          <div className="flex flex-col text-sm mt-2">
            <p>Ligação e Instalação</p>
          </div>
        </div>
        <div className="flex flex-col p-3 ">
          <div className="w-24 h-24 mb-4">
            <img src="/img/air.gif" alt="air-conditioner" />
          </div>
          <h4 className="mb-2 font-semibold leading-5 text-lg ">AQUECIMENTO</h4>
          <div className="flex flex-col text-sm mt-2">
            <p>Equipamentos a Pellets</p>
            <p>Equipamentos Elétricos</p>
            <p>Termoacumuladores e esquentadores</p>
            <p>Radiadores a Água</p>
          </div>
        </div>
        <div className="flex flex-col p-3 ">
          <div className="w-24 h-24 mb-4">
            <img src="/img/boiler.png" alt="database icon" />
          </div>

          <h4 className="mb-2 font-semibold leading-5 text-lg ">
            CLIMATIZAÇÃO
          </h4>
          <div className="flex flex-col  text-sm mt-2">
            <p className="flex flex-row">Ar condicionado</p>
            <p className="flex flex-row">Desumificadores</p>
          </div>
        </div>
        <div className="flex flex-col p-3 ">
          <div className="w-24 h-24 mb-4">
            <img src="/img/toilet.gif" alt="toilet gif" />
          </div>

          <h4 className="mb-2 font-semibold leading-5 text-lg ">
            ARTIGOS SANITÁRIOS
          </h4>
          <div className="flex flex-col  text-sm mt-2">
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
