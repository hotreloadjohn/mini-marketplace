import React, { useState } from "react";
import { useRegisterMutation } from "../services/authApi";
import { useNavigate } from "react-router-dom";

function Register({ setRegisterModal }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [error, setError] = useState("");

  const [register, { isLoading, isError }] = useRegisterMutation();
  const navigate = useNavigate();

  const handleOnSubmit = async (e) => {
    setError("");
    e.preventDefault();
    const data = await register({
      name,
      email,
      password,
      confPassword,
    }).unwrap();

    if (data.error) {
      setError("Email already registered Or Password does not match.");
      return;
    }

    setRegisterModal(false);
    navigate("/");
  };
  return (
    <div className="flex justify-center items-center fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity">
      <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="flex justify-end">
            <button onClick={() => setRegisterModal(false)}>
              <svg
                className="ml-auto fill-current text-gray-700 w-6 h-6 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 18 18"
              >
                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
              </svg>
            </button>
          </div>
          {isError ? (
            <p className="text-red-600">
              Email already registered Or Password does not match.
            </p>
          ) : null}
          {error ? (
            <p className="text-red-600">
              Email already registered Or Password does not match.
            </p>
          ) : null}

          <form onSubmit={handleOnSubmit}>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                name="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Your Name"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="john@example.com"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Your password
              </label>
              <input
                type="password"
                name="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Confirm password
              </label>
              <input
                type="password"
                name="confpassword"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
                onChange={(e) => setConfPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
