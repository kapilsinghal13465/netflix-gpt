import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const toggleSignInForm = () => {
    setErrorMessage(null);
    setIsSignInForm(!isSignInForm);
  };

  const handlebuttonClick = (e) => {
    e.preventDefault();

    // validate the form data
    const errMsg = checkValidData(
      isSignInForm ? "Valid" : nameRef.current.value,
      emailRef.current.value,
      passwordRef.current.value,
    );

    setErrorMessage(errMsg);

    if (errMsg) {
      return;
    }

    // Sign Up / Sign In
    if (!isSignInForm) {
      // Sign up logic
      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value,
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: nameRef.current.value,
            photoURL:
              "https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/SO2HoVCx33X8phZh2pZZmQ4QgNY/AAAABf6Nh861wNxGfVfN-tmLT432oRrNfJL0WhX7kx22zbQVcA_0D2UCEr8hgENP_LZN2Y6vTrVN2goVV-vVMygWrztxhDzA-zhSfh2f.png?r=e6e",
          }).then(() => {
            console.log(user);
             const { uid, email, displayName, photoURL } = auth.currentUser;
                    dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
            // ...
            navigate("/browse");
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      // Sign in logic

      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value,
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
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
            ref={nameRef}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700 rounded-lg"
          />
        )}
        <input
          ref={emailRef}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />
        <input
          ref={passwordRef}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />
        <p className="text-red-500 font-bold text-lg p">{errorMessage}</p>
        <button
          className="p-4 my-4 bg-red-700 w-full rounded-lg"
          onClick={handlebuttonClick}
        >
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
