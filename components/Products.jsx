import React from "react";

const Products = () => {
  return (
    <div className="bg-palpite p-6">
      <h1 className="text-3xl font-bold ">PRODUTOS</h1>
      <div className="grid gap-2 row-gap-3 w-full grid-cols-4 mt-12">
        <div className="flex flex-col  p-3 ">
          <div className="w-16 h-16 mb-4 mx-auto">
            <img src="/img/pipe.gif" alt="front end icon" />
          </div>
          <h4 className="mb-2 font-semibold leading-5 text-lg">CANALIZAÇÃO</h4>
          <div className="flex flex-col text-sm mt-2">
            <p className="flex flex-row">Ligação e Instalação</p>
          </div>
        </div>
        <div className="flex flex-col  p-3 ">
          <div className="w-16 h-16 mb-4 mx-auto">
            <img src="/img/air.gif" alt="air-conditioner" />
          </div>
          <h4 className="mb-2 font-semibold leading-5 text-lg text-gray-900">
            AQUECIMENTO
          </h4>
          <div className="flex flex-col text-sm mt-2">
            <p className="flex flex-row">Equipamentos a Pellets</p>
            <p className="flex flex-row">Equipamentos Elétricos</p>
            <p className="flex flex-row">Termoacumuladores e esquentadores</p>
            <p className="flex flex-row">Radiadores a Água</p>
          </div>
        </div>
        <div className="flex flex-col  p-3 ">
          <div className="w-16 h-16 mb-4 mx-auto">
            <img src="/img/boiler.png" alt="database icon" />
          </div>

          <h4 className="mb-2 font-semibold leading-5 text-lg text-gray-900">
            CLIMATIZAÇÃO
          </h4>
          <div className="flex flex-col  text-sm mt-2">
            <p className="flex flex-row">Ar condicionado</p>
            <p className="flex flex-row">Desumificadores</p>
          </div>
        </div>
        <div className="flex flex-col  p-3 ">
          <div className="w-16 h-16 mb-4 mx-auto">
            <img src="/img/toilet.gif" alt="toilet gif" />
          </div>

          <h4 className="mb-2 font-semibold leading-5 text-lg text-gray-900">
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
