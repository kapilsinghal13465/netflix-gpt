import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector(store => store.user);
  const navigate = useNavigate();
  
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/")
      })
      .catch((error) => {
        // An error happened.
        navigate("/error")
      });
  };

  return (
    <div className="absolute flex justify-between px-8 py-2 bg-gradient-to-b from-black z-50 w-screen">
      <img
        className="w-44"
        src="https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAVIENVPMEM3Kn4hVzJseX4N8xPjtBDIpwuFDucWksdxQZ8Ss6Xf8U_vt7ThYYfRmzq0x1CS3nOwTGyVrgADvwfB_tPiK_liS2RjvI40RJSzbKRk-o8b3nCxHfCCnBsyB2XBB9_vRoSmN.svg"
        alt="logo"
      />
      <div className="flex p-2">
        <img
          className="w-12 px-2"
          src={user?.photoURL ? user.photoURL : "https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/SO2HoVCx33X8phZh2pZZmQ4QgNY/AAAABf6Nh861wNxGfVfN-tmLT432oRrNfJL0WhX7kx22zbQVcA_0D2UCEr8hgENP_LZN2Y6vTrVN2goVV-vVMygWrztxhDzA-zhSfh2f.png?r=e6e"}
          alt="user"
        />
        <button className="font-bold text-white" onClick={handleSignOut}>
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Header;
