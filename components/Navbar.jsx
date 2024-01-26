import React from "react";

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
              <a>PALPITE</a>
            </li>
            <li>
              <a>PRODUTOS</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>CONTACTOS</a>
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
        <ul className="menu menu-horizontal px-1 font-kanit tracking-[0.25em] font-bold lg:text-lg md:text-[0.75em] ">
          <li>
            <a>
              <span>PALPITE</span>
            </a>
          </li>
          <li>
            <details>
              <summary>PRODUTOS</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>CONTACTOS</a>
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
