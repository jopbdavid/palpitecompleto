import React from "react";

const Partner = () => {
  return (
    <div className="hero h-full">
      <img
        src="./img/palpite2.png"
        alt="showroom"
        className="w-full bg-cover h-full"
      />
      <div className="hero-overlay bg-opacity-20"></div>
      <div className="hero-content flex-col text-center text-neutral-content rounded-xl bg-opacity-70 bg-neutral p-12 lg:p-16 ">
        <h1 className="mb-2 md:mb-16 lg:mb-32 text-5xl lg:text-6xl font-bold opacity-70">
          PARCEIROS
        </h1>

        <div className="container grid grid-cols-3 gap-12 md:grid-cols-5 mt-2 items-center opacity-100 ">
          <img src="./img/logo/vulcano.png" alt="" />
          <img src="./img/logo/OLI.png" alt="" />
          <img src="./img/logo/valsir.png" alt="" />
          <img src="./img/logo/bosch.svg" alt="" />
          <img src="./img/logo/geberit.png" alt="" />
          <img src="./img/logo/grohe.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Partner;
