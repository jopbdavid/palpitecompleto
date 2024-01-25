import React from "react";
import { Kanit } from "next/font/google";

const Hero = () => {
  return (
    <div className="hero w-full justify-items-start">
      <img src="./img/2.png" alt="" className="bg-cover w-full" />

      <div className=" flex-col flex z-0 w-[55%] ml-2">
        <div>
          <img
            src="./img/palpitelogo-removebg-preview.png"
            alt="logo"
            className="w-48 h-48 "
          />
          <h1 className="text-lg sm:text-3xl lg:text-6xl text-black w-full mt-4 font-kanit font-bold">
            A <span className="text-neutral-content">RESOLUÇÃO</span> DO SEU
            PROBLEMA
          </h1>
          <p className="text-lg md:text-xl lg:text-3xl mt-4 w-full tracking-[0.5em] text-neutral-content font-kanit text-center">
            COMEÇA AQUI
          </p>
          <p className="mt-4 font-kanit lg:text-xl text-right">
            Desde 2016 na vanguarda do comércio de materiais de construção civil
          </p>
          <button className="btn btn-primary w-[40%] mt-8">PRODUTOS</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
