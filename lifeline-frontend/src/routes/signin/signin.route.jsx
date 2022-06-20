import { useEffect, useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    if (email.includes("@") && email.endsWith(".com")) {
      setEmailError("");
    } else {
      setEmailError("Enter a valid email address");
    }
  }, [email]);

  const onChangeHandler = (event) => {
    switch (event.target.name) {
      case "email":
        setEmail(event.target.value);
        break;
      case "password":
        setPassword(event.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="md:pt-16 flex justify-center items-center h-full">
      <div className=" p-8 md:p-10 w-full md:w-1/3 border border-accent-50 rounded-lg">
        <h1 className="text-2xl font-semibold font-Outfit text-center">
          Signin
        </h1>
        <form
          className="font-Roboto font-semibold text-lg"
          onSubmit={handleSubmit}
        >
          <div className="my-4 flex flex-col ">
            <label htmlFor="email" className="my-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              title="Enter your email address"
              placeholder="Enter your email address"
              required
              className=" rounded-sm p-2 font-medium focus:outline-none focus:ring-2 ring-accent-100 bg-gray-100"
              onChange={onChangeHandler}
            />
            {email && emailError.length > 0 && (
              <span className="text-sm text-accent-300 my-2">{emailError}</span>
            )}
          </div>
          <div className="my-4 flex flex-col">
            <label htmlFor="password" className="my-2">
              Password
            </label>

            <input
              type="password"
              name="password"
              title="Enter your password"
              placeholder="Enter your password"
              required
              className=" rounded-sm p-2 font-medium focus:outline-none focus:ring-2 ring-accent-100 bg-gray-100"
              onChange={onChangeHandler}
            />
            {passwordError.length > 0 && (
              <span className="text-sm text-accent-300 my-2">
                {passwordError}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-8 font-Outfit ">
            <button
              type="reset"
              className="bg-gray-100 border-gray-400 border-2 rounded-lg py-2 mt-4 "
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-accent-100 text-white shadow-lg shadow-gray-300   rounded-lg py-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
