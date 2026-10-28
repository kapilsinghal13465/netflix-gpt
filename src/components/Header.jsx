import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { HeaderLogo, SUPPORTED_LANG, UserUrl } from "../utils/constants";
import { toggleGPTSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const showGPTSearch = useSelector(store => store.gpt.showGPTSearch);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // user is signed in
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          }),
        );
        navigate("/browse");
      } else {
        // user is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unsubscribe when component unmounts
    return () => {
      unsubscribe();
    }
  }, [dispatch, navigate]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        // navigate("/error");
      });
  };

  const handleGPTSearchClick = () => {
    // toggle gpt search button
    dispatch(toggleGPTSearchView());
  }

  const handleSelectedLang = (e) => {
    console.log("e", e.target.value)
    const val =  e.target.value;
    dispatch(changeLanguage(val))
  }
  return (
    <div className="absolute flex justify-between px-8 py-2 bg-gradient-to-b from-black z-50 w-full">
      <img className="w-44" src={HeaderLogo} alt="logo" />
      {user && (
        <div className="flex p-2">
          {showGPTSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white"
              onChange={handleSelectedLang}
            >
              {SUPPORTED_LANG.map((lang) => {
                return (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                );
              })}
            </select>
          )}

          <button
            className="py-2 px-4 mx-4 my-2 bg-cyan-500 text-white rounded"
            onClick={handleGPTSearchClick}
          >
            {showGPTSearch ? "Home Page" : "Search"}
          </button>
          <img
            className="w-16 h-12 px-2 mx-4"
            src={user && user.photoURL !== undefined ? user.photoURL : UserUrl}
            alt="user"
          />
          <button className="font-bold text-white" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
