import React from "react";
import { Kanit } from "next/font/google";

const kanit = Kanit({
  subsets: ["latin"],
  weight: "600",
});

const Hero = () => {
  return (
    <div className="hero w-full">
      <img src="./img/2.png" alt="" className="bg-cover w-full" />

      <div className="text-left text-dark-content flex-col flex items-start xl:-ml-[30%] z-0">
        <div>
          <img
            src="./img/palpitelogo-removebg-preview.png"
            alt="logo"
            className="w-1/6 "
          />
          <h1
            className={`text-lg sm:text-5xl lg:text-6xl font-bold text-black w-3/5 mt-8 ${kanit.className}`}
          >
            A <span className="text-neutral-content">RESOLUÇÃO</span> DO SEU
            PROBLEMA
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mt-8 w-3/5">
            COMEÇA AQUI
          </p>
          <p>
            Desde 2016 na vanguarda do comércio de materiais de construção civil
          </p>
          <button className="btn btn-primary w-[40%] mt-8">PRODUTOS</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
