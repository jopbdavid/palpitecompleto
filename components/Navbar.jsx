import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 sticky top-0 z-20 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden sm:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
          >
            <li>
              <a>PRODUTOS</a>
              {/* SUBMENU */}
              <ul className="p-2 ">
                <li>
                  <a>Sistemas de Evacuação (PVC)</a>
                </li>
                <li>
                  <a>Sistemas de Pressão</a>
                </li>
                <li>
                  <a>Acessórios Canalização</a>
                </li>
                <li>
                  <a>Gás</a>
                  {/* <ul>
                    <li>
                      <a>Auth management system</a>
                    </li>
                    <li>
                      <a>VScode theme</a>
                    </li>
                    <li>
                      <a>Color picker app</a>
                    </li>
                  </ul> */}
                </li>
                <li>
                  <a href=""> Águas Quentes Sanitárias (AQS) e AVAC</a>
                </li>
                <li>
                  <a href="">Rega, Jardim e Mangueiras</a>
                </li>
                <li>
                  <a href="">Utilitários (Ferramentas)</a>
                </li>
              </ul>

              {/* SUBMENU */}
            </li>
            <li>
              <a>EMPRESA</a>
              <ul>
                <li>
                  <a>Sobre Nós</a>
                </li>
                <li>
                  <a>Contactos</a>
                </li>

                <li>
                  <a>Carreiras</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl h-full">
          <img
            src="./img/palpitelogo2.png"
            alt="logo"
            className="w-36 ml-16 object-contain md:w-62 md:ml-0 lg:w-72 lg:ml-0"
          />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex sm:flex ">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary className="font-kanit tracking-[0.25em] font-bold lg:text-lg md:text-[0.75em] px-10 ">
                <Link href="/products">PRODUTOS</Link>
              </summary>
              <ul className=" text-[0.8em]">
                <div className="border-l-[0.1em] ml-2 border-palpite ">
                  <li>
                    <a>Sistemas de Evacuação (PVC)</a>
                  </li>
                  <li>
                    <a>Sistemas de Pressão</a>
                  </li>
                  <li>
                    <a>Acessórios Canalização</a>
                  </li>
                  <li>
                    <a>Gás</a>
                    {/* <ul>
                    <li>
                      <a>Auth management system</a>
                    </li>
                    <li>
                      <a>VScode theme</a>
                    </li>
                    <li>
                      <a>Color picker app</a>
                    </li>
                  </ul> */}
                  </li>
                  <li>
                    <a href=""> Águas Quentes Sanitárias (AQS) e AVAC</a>
                  </li>
                  <li>
                    <a href="">Rega, Jardim e Mangueiras</a>
                  </li>
                  <li>
                    <a href="">Utilitários (Ferramentas)</a>
                  </li>
                </div>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary className="font-kanit tracking-[0.25em] font-bold lg:text-lg md:text-[0.75em] px-10 ">
                EMPRESA
              </summary>
              <ul className="text-[0.8em]">
                <div className="border-l-[0.1em] ml-2 border-palpite ">
                  <li>
                    <a>Sobre Nós</a>
                  </li>
                  <li>
                    <a>Contactos</a>
                  </li>

                  <li>
                    <a>Carreiras</a>
                  </li>
                </div>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end hidden">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
