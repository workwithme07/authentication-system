import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Otp from "../components/Otp.jsx";
import toast from "react-hot-toast";
export default function SignUp() {
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [otp, setOtp] = useState(false);
  const [passwordConfirmationError, setpasswordConfirmationError] =
    useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [registerform, setregisterform] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    profilePicture: null,
  });

  function HandleChange(event) {
    const { name, value } = event.target;
    setregisterform((prevFormdata) => ({
      ...prevFormdata,
      [name]: value,
    }));
  }
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setregisterform({ ...registerform, profilePicture: file });
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  async function RegisterForm(e) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("firstname", registerform.firstname);
    formData.append("lastname", registerform.lastname);
    formData.append("email", registerform.email);
    formData.append("password", registerform.password);
    if (registerform.profilePicture) {
      formData.append("profilePicture", registerform.profilePicture);
    }
    try {
      const response = await axios.post(
        "http://localhost:3000/api/users/register",
        formData
      );
      setLoading(false);
      setOtp(true);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  }

  useEffect(() => {
    if (passwordConfirmation !== registerform.password) {
      setpasswordConfirmationError("Passwords do not match");
    } else {
      setpasswordConfirmationError("");
    }
  }, [passwordConfirmation]);
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
                <Otp
                  email={registerform.email}
                  password={registerform.password}
                />
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
                          onChange={handleFileChange}
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
                      onChange={HandleChange}
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
                      onChange={HandleChange}
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
                      onChange={HandleChange}
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
                      onChange={HandleChange}
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
                      onChange={(e) => setPasswordConfirmation(e.target.value)}
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
                    <p className="text-sm text-red-500 my-2">{errorMessage}</p>
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
                    <button
                      className="inline-block shrink-0 rounded-md border border-gray-600 bg-gray-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-gray-600 focus:outline-none focus:ring active:text-gray-500"
                      onClick={RegisterForm}>
                      {loading ? (
                        <svg
                          aria-hidden="true"
                          className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-white"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                          />
                        </svg>
                      ) : (
                        "Create an account"
                      )}
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
