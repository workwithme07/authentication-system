import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <div>
      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt="login"
              src="https://i.pinimg.com/originals/de/ec/6e/deec6e477122a4af18d909a97e785997.jpg"
              className="absolute inset-0 h-auto w-auto object-cover "
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

              <form action="#" className="mt-8 grid grid-cols-6 gap-6 text-3xl">
                <div className="col-span-6  sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700">
                    Email
                  </label>

                  <input
                    type="text"
                    id="Email"
                    name="email"
                    className="mt-1 w-full rounded-md border border-gray-200 bg-white text-lg p-1 text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-6  sm:col-span-4">
                  <label
                    htmlFor="Password"
                    className="block text-sm font-medium text-gray-700">
                    Password
                  </label>

                  <input
                    type="password"
                    id="Password"
                    name="password"
                    className="mt-1 w-full rounded-md border border-gray-200 bg-white text-lg p-1 text-gray-700 shadow-sm "
                  />
                </div>

                <div className="col-span-6  sm:flex sm:items-center sm:gap-4">
                  <button className="inline-block shrink-0 rounded-md border border-gray-600 bg-gray-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-gray-600 focus:outline-none focus:ring active:text-gray-500">
                    Sign In
                  </button>

                  <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                    I dont have an account?
                    <Link
                      to="/signup"
                      className="text-gray-700 underline ms-2 hover:no-underline">
                      Sign Up
                    </Link>
                    .
                  </p>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
}
