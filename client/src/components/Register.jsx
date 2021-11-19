import React from "react";

function Register({ setRegisterModal }) {
  return (
    <div className="flex justify-center items-center fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity">
      <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
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
          <form>
            <div className="mb-6">
              <label
                for="name"
                class="text-sm font-medium text-gray-900 block mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Your Name"
                required
              />
            </div>
            <div class="mb-6">
              <label
                for="email"
                class="text-sm font-medium text-gray-900 block mb-2"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="john@example.com"
                required
              />
            </div>
            <div class="mb-6">
              <label
                for="password"
                class="text-sm font-medium text-gray-900 block mb-2"
              >
                Your password
              </label>
              <input
                type="password"
                id="password"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
            </div>
            <div class="mb-6">
              <label
                for="password"
                class="text-sm font-medium text-gray-900 block mb-2"
              >
                Confirm password
              </label>
              <input
                type="password"
                id="password"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
            </div>
            <button
              type="submit"
              class=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full"
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
