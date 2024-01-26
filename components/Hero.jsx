import React from "react";

const Hero = () => {
  return (
    <div className="hero max-h-[50ev] justify-items-start">
      <img src="./img/2.png" alt="logo" className="bg-cover w-full" />

      <div className=" flex-col flex z-0 w-[55%] ml-2">
        <div>
          <img
            src="./img/palpitelogo-removebg-preview.png"
            alt="logo"
            className="w-12 h-12 lg:w-48 lg:h-48 md:w-32 md:h-32"
          />
          <h1 className="text-sm md:text-3xl lg:text-6xl text-black w-full mt-4 font-kanit font-bold">
            A <span className="text-neutral-content">RESOLUÇÃO</span> DO SEU
            PROBLEMA
          </h1>
          <p className="text-[0.5em] md:text-lg lg:text-3xl mt-4 w-full tracking-[0.5em] text-neutral-content font-kanit text-center">
            COMEÇA AQUI
          </p>
          <p className="text-[0.5em] mt-2 font-kanit lg:text-xl md:text-[0.6em] text-right">
            Desde 2016 na vanguarda do comércio de materiais de construção civil
          </p>
          {/* <button className="btn btn-primary w-[40%] mt-8 hidden">
            PRODUTOS
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
