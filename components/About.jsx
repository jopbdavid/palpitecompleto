import React from "react";

const About = () => {
  return (
    <div className=" flex flex-col items-center justify-center pt-12 pb-12 bg-neutral">
      <div className="avatar z-10">
        <div className="w-64 rounded-full">
          <img src="./img/artur.jpg" />
        </div>
      </div>

      <div className="hero-content text-center bg-palpite p-12 rounded-xl -translate-y-12">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold font-kanit">ARTUR SANTOS</h1>
          <p className="py-6">
            Empresário empreendedor com mais de 20 anos de experiência de
            mercado e revenda de material de construção civil.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
