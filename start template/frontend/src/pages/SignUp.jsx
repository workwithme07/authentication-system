import { useState } from "react";
import { Link } from "react-router-dom";
import Otp from "../components/Otp.jsx";
export default function SignUp() {
  const [otp, setOtp] = useState(false);
  const [image, setImage] = useState("");

  return (
    <div>
      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <aside className="hidden sm:block  order-last col-span-5 h-screen xl:col-span-6">
            <img
              alt=""
              src="https://i.pinimg.com/originals/78/7b/8c/787b8c93a84d6f54dfd1eb0a182f5914.jpg"
              className="inset-0 h-full w-full object-cover"
            />
          </aside>

          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <a className="block text-blue-600" href="#">
                <span className="sr-only">Home</span>
                <img
                  src="/images/logo.AVIF"
                  alt="logo"
                  className="h-16 w-auto object-cover rounded-full "
                />
              </a>

              <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Welcome to Work With Me
              </h1>

              {otp ? (
                <Otp />
              ) : (
                <form
                  action="#"
                  className="mt-8 grid grid-cols-7 gap-6 text-3xl">
                  <div className="col-span-7 sm:col-span-6 text-center ">
                    <span className=" text-slate-400 text-xl">
                      Profile Image
                    </span>
                    {image ? (
                      <img
                        src={image}
                        alt="Landscape picture"
                        className="h-36 w-36 rounded-full mx-auto my-2  object-cover"
                      />
                    ) : (
                      <label className="flex flex-col items-center my-2 justify-center w-1/2 mx-auto  h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <svg
                            className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 16">
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                            />
                          </svg>
                          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">
                              Click to upload
                            </span>{" "}
                            or drag and drop
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            SVG, PNG, JPG (MAX. 500x500px)
                          </p>
                        </div>
                        <input
                          id="dropzone-file"
                          type="file"
                          name="profilePicture"
                          accept="image/*"
                          className="hidden"
                        />
                      </label>
                    )}
                  </div>

                  <div className="col-span-6  sm:col-span-3">
                    <label
                      htmlFor="FirstName"
                      className="block text-sm font-medium text-gray-700">
                      First Name
                    </label>

                    <input
                      type="text"
                      id="FirstName"
                      name="firstname"
                      className="mt-1 w-full rounded-md border border-gray-200 bg-white text-lg p-1 text-gray-700 shadow-sm"
                    />
                  </div>

                  <div className="col-span-6  sm:col-span-3">
                    <label
                      htmlFor="LastName"
                      className="block text-sm font-medium text-gray-700">
                      Last Name
                    </label>

                    <input
                      type="text"
                      id="LastName"
                      name="lastname"
                      className="mt-1 w-full rounded-md border border-gray-200 bg-white text-lg p-1 text-gray-700 shadow-sm "
                    />
                  </div>

                  <div className="col-span-6 ">
                    <label
                      htmlFor="Email"
                      className="block text-sm font-medium text-gray-700">
                      {" "}
                      Email{" "}
                    </label>

                    <input
                      type="email"
                      id="Email"
                      name="email"
                      className="mt-1 w-full rounded-md border border-gray-200 bg-white text-lg p-1 text-gray-700 shadow-sm"
                    />
                  </div>

                  <div className="col-span-6  sm:col-span-3">
                    <label
                      htmlFor="Password"
                      className="block text-sm font-medium text-gray-700">
                      {" "}
                      Password{" "}
                    </label>

                    <input
                      type="password"
                      id="Password"
                      name="password"
                      className="mt-1 w-full rounded-md border border-gray-200 bg-white text-lg p-1 text-gray-700 shadow-sm"
                    />
                  </div>

                  <div className="col-span-6  sm:col-span-3">
                    <label
                      htmlFor="PasswordConfirmation"
                      className="block text-sm font-medium text-gray-700">
                      Password Confirmation
                    </label>

                    <input
                      type="password"
                      id="PasswordConfirmation"
                      name="password_confirmation"
                      className="mt-1 w-full rounded-md border border-gray-200 bg-white text-lg p-1 text-gray-700 shadow-sm"
                    />
                    {passwordConfirmationError && (
                      <div className="text-red-500 mt-2 text-sm">
                        {passwordConfirmationError}
                      </div>
                    )}
                  </div>
                  <div className="col-span-6 text-center">
                    <p className="text-sm text-red-500 my-2"></p>
                  </div>
                  <div className="col-span-6 ">
                    <p className="text-sm text-gray-500">
                      By creating an account, you agree to our
                      <a href="#" className="text-gray-700 underline">
                        {" "}
                        terms and conditions{" "}
                      </a>
                      and
                      <a href="#" className="text-gray-700 underline">
                        privacy policy
                      </a>
                      .
                    </p>
                  </div>

                  <div className="col-span-6  sm:flex sm:items-center sm:gap-4">
                    <button className="inline-block shrink-0 rounded-md border border-gray-600 bg-gray-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-gray-600 focus:outline-none focus:ring active:text-gray-500">
                      Create an account
                    </button>

                    <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                      Already have an account?
                      <Link
                        to="/"
                        className="text-gray-700 underline ms-2 hover:no-underline">
                        Sign In
                      </Link>
                      .
                    </p>
                  </div>
                </form>
              )}
            </div>
          </main>
        </div>
      </section>
    </div>
  );
}
