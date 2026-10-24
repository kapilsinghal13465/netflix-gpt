import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute w-screen">
        <video
          className="w-screen"
          src="https://occ-0-3646-3647.1.nflxso.net/so/soa1/728/1780063559357945089.mp4?v=1&e=1792877914&t=soyTMx7qGZWaGD90sYfvjkrLYLo"
        />
      </div>
      <form className="absolute bg-black w-4/12 my-36 mx-auto right-0 left-0 p-8 text-white bg-opacity-80">
        <h1 className="fond-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700 rounded-lg"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />
        <button className="p-4 my-4 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already Register, Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
