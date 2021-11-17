import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import Login from "./Login";

// https://www.youtube.com/watch?v=CKDkb_x3Ssw
const Navbar = () => {
  const [active, setActive] = useState(false);
  const [modal, setModal] = useState(false);

  const onClick = () => {
    setActive(!active);
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <header className="bg-gray-400 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-2.5">
        <img src={Logo} className="h-10 cursor-pointer" alt="" />
        <div
          onClick={onClick}
          className={`
          md:hidden uppercase
        `}
        >
          Menu
        </div>
        <nav
          className={`
          ${!active && "hidden"}
          absolute flex flex-col bg-gray-400 top-full w-full left-0 z-20
          md:static md:w-auto md:flex
        `}
        >
          <ul className="md:flex-row md:flex">
            <li className="list-none md:mr-5">
              <button
                onClick={toggleModal}
                className="flex w-full text-base uppercase hover:bg-blue-300 bg-blue-400 cursor-pointer p-1 px-2 rounded-md text-white"
              >
                Login
              </button>
            </li>
            {modal ? (
              <>
                <Login isModal={true} setModal={setModal} />
              </>
            ) : null}

            <li className="list-none md:mr-5">
              <Link
                to="/register"
                className="flex w-full text-base uppercase cursor-pointer p-1 text-white"
              >
                Sign up
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
