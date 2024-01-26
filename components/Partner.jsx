import React from "react";

const Partner = () => {
  return (
    <div className="hero h-screen mb-24">
      <img
        src="./img/palpite2.png"
        alt="showroom"
        className="w-full bg-cover"
      />
      <div className="hero-overlay bg-opacity-20"></div>
      <div className="hero-content flex-col text-center text-neutral-content rounded-xl opacity-70 bg-neutral p-12">
        <h1 className="mb-5 text-5xl font-bold">PARCEIROS</h1>

        <div className="container grid grid-cols-5 gap-12 mt-20 w-[70%] items-center">
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
