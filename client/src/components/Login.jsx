import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// import { loginPending, loginSuccess, loginFail } from "../features/loginSlice";
// import { login } from "../features/authSlice";
// import { clearMessage, setMessage } from "../features/msgSlice";

// import { useDoLoginMutation } from "../services/loginApi";
import AuthService from "../services/auth.service";

const Login = ({ isModal, setLoginModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // const [doLogin, { isLoading, isError }] = useDoLoginMutation();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      await AuthService.login(email, password).then(
        () => {
          navigate("/main");
          window.location.reload();
        },
        (error) => {
          console.log(error);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  // if (isModal) {
  //   return (
  //     <>
  //       <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
  //         <div className="relative w-auto my-6 mx-auto max-w-3xl">
  //           {/*content*/}
  //           <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
  //             <button onClick={() => setModal(false)}>
  //               <svg
  //                 className="ml-auto fill-current text-gray-700 w-6 h-6 cursor-pointer"
  //                 xmlns="http://www.w3.org/2000/svg"
  //                 viewBox="0 0 18 18"
  //               >
  //                 <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
  //               </svg>
  //             </button>
  //             <div className="bg-white md:shadow-lg shadow-none rounded p-6 w-96">
  //               <form className="space-y-5 mt-5">
  //                 <div className="mb-4 relative">
  //                   <input
  //                     id="email"
  //                     className="w-full rounded px-3 border border-gray-500 pt-5 pb-2 focus:outline-none input active:outline-none"
  //                     type="text"
  //                     autofocus
  //                     placeholder="Your Email"
  //                   />
  //                   <label
  //                     for="email"
  //                     className="label absolute mb-0 -mt-2 pt-4 pl-3 leading-tighter text-gray-500 text-base mt-2 cursor-text"
  //                   ></label>
  //                 </div>
  //                 <div className="relative flex items-center border border-gray-500 focus:ring focus:border-blue-500 rounded">
  //                   <input
  //                     id="password"
  //                     className="w-full rounded px-3 pt-5 outline-none pb-2 focus:outline-none active:outline-none input active:border-blue-500"
  //                     type="password"
  //                     placeholder="Password"
  //                   />
  //                   <label
  //                     for="password"
  //                     className="label absolute mb-0 -mt-2 pt-4 pl-3 leading-tighter text-gray-500 text-base mt-2 cursor-text"
  //                   ></label>
  //                   <a className="text-sm font-bold text-blue-700 hover:bg-blue-100 rounded-full px-2 py-1 mr-1 leading-normal cursor-pointer">
  //                     show
  //                   </a>
  //                 </div>
  //                 <div className="-m-2">
  //                   <a
  //                     className="font-bold text-blue-700 hover:bg-blue-200 hover:underline hover:p-5 p-2 rounded-full"
  //                     href="#"
  //                   >
  //                     Forgot password?
  //                   </a>
  //                 </div>
  //                 <button className="w-full text-center bg-blue-700 hover:bg-blue-900 rounded-full text-white py-3 font-medium">
  //                   Sign in
  //                 </button>
  //               </form>
  //             </div>
  //             {/*footer*/}
  //           </div>
  //         </div>
  //       </div>
  //       <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
  //     </>
  //   );
  // }

  if (isModal) {
    return (
      <div className="flex justify-center items-center fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity">
        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="flex justify-end">
              <button onClick={() => setLoginModal(false)}>
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
                  placeholder="name@flowbite.com"
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
              <button
                type="submit"
                class=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" method="POST" onSubmit={handleOnSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {/* {isLoading ? (
                    <svg
                      className="animate-spin h-5 w-5 mr-3"
                      viewBox="0 0 24 24"
                    ></svg>
                  ) : null} */}
                  Sign in
                </button>
              </div>
            </form>
            <div className="mt-6">
              <div className="relative">
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or</span>
                </div>
                <div className="relative flex justify-center text-sm">
                  OAuth login icons here
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
