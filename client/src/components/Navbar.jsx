import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../assets/logo.svg";
import { selectCurrentUser, setCredentials } from "../features/authSlice";
import Login from "./Login";
import Register from "./Register";
import SearchBar from "./SearchBar";
import ProfilePic from "../assets/profile.png";
import { Link, useNavigate } from "react-router-dom";
import { persistor } from "../store";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [loginmodal, setLoginModal] = useState(false);
  const [registermodal, setRegisterModal] = useState(false);
  const [userMenuToggle, setUserMenuToggle] = useState(false);

  const ref = useRef();
  const user = useSelector(selectCurrentUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onClick = () => {
    setActive(!active);
  };

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (userMenuToggle && ref.current && !ref.current.contains(e.target)) {
        setUserMenuToggle(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [userMenuToggle]);

  const toggleLoginModal = () => {
    setLoginModal(!loginmodal);
  };

  const toggleRegisterModal = () => {
    setRegisterModal(!registermodal);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    // Call backend logout to invalidate jwt
    dispatch(
      setCredentials({
        token: null,
        user: null,
      })
    );
    setUserMenuToggle(false);
    persistor.purge();
    navigate("/");
  };

  const showLoginRegisterMenu = () => {
    return (
      <ul className="md:flex-row md:flex bg-red-300">
        <li className="list-none md:mr-2">
          <button
            onClick={toggleLoginModal}
            className="flex w-full text-base uppercase hover:bg-blue-300 bg-blue-400 cursor-pointer p-1 px-2 rounded-md text-white"
          >
            Login
          </button>
        </li>
        {loginmodal ? (
          <>
            <Login isModal={true} setLoginModal={setLoginModal} />
          </>
        ) : null}

        {registermodal ? (
          <>
            <Register setRegisterModal={setRegisterModal} />
          </>
        ) : null}

        <li className="list-none md:mr-1">
          <button
            onClick={toggleRegisterModal}
            className="flex w-full text-base uppercase cursor-pointer p-1 px-2 rounded-md text-black"
          >
            Register
          </button>
        </li>
      </ul>
    );
  };

  const showUserNav = () => {
    return (
      <div className="relative inline-block text-left bg-red-300">
        <div className="flex space-x-4 items-center">
          <button
            type="button"
            className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-4 py-2 text-center mr-6 md:mr-0 uppercase"
            onClick={() => navigate("/sell")}
          >
            Sell
          </button>
          <h3>Hello! {user.name}</h3>
          <button
            type="button"
            className="mr-3 md:mr-0 bg-gray-800 flex text-sm rounded-full focus:ring-4 focus:ring-gray-300"
            aria-expanded="true"
            aria-haspopup="true"
            onClick={() => setUserMenuToggle(!userMenuToggle)}
          >
            <img className="h-8 w-8 rounded-full" src={ProfilePic} alt=""></img>
          </button>
        </div>
        <div
          ref={ref}
          className={`${
            userMenuToggle ? "" : "hidden"
          } origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"`}
        >
          <div className="py-1" role="none">
            <Link
              className="hover:bg-gray-100 text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              to="/listings"
              onClick={() => setUserMenuToggle(false)}
            >
              My Product Listing
            </Link>
            <Link
              to="#"
              className="hover:bg-gray-100 text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
            >
              My Purchases
            </Link>
            <Link
              to="#"
              className="hover:bg-gray-100text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
            >
              Profile settings
            </Link>
            <form onSubmit={handleLogout}>
              <button
                type="submit"
                className="hover:bg-gray-100 text-gray-700 block w-full text-left px-4 py-2 text-sm"
                role="menuitem"
              >
                Sign out
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  };

  return (
    <header className="bg-gradient-to-r from-red-100 via-red-300 to-red-300 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-2.5">
        <Link to="/">
          <img src={Logo} className="h-10 cursor-pointer" alt="" />
        </Link>
        <div
          onClick={onClick}
          className={`
          md:hidden uppercase
        `}
        >
          Menu
        </div>
        <SearchBar />
        <nav
          className={`
          ${!active && "hidden"}
          absolute flex flex-col bg-gray-400 top-full w-full left-0 z-20
          md:static md:w-auto md:flex
        `}
        >
          {user ? showUserNav() : showLoginRegisterMenu()}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
