import React from "react";
import { useDispatch } from "react-redux";
import { clearUserInfo } from "../redux/features/authSlice";
import { persistor } from "../redux/store";
import { useNavigate } from "react-router-dom";

function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(clearUserInfo());
    persistor.purge();

    // Disable Google's auto account selection
    if (window.google?.accounts?.id) {
      window.google.accounts.id.disableAutoSelect();
    }

    window.open("https://accounts.google.com/Logout", "_blank");
    navigate("/");

    console.log("User logged out");
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-[var(--p1DPink)] text-white font-[Nunito] px-4 py-2 font-medium border-2 border-[var(--p3Maroon)] rounded cursor-pointer 
             hover:bg-[var(--p3Maroon)] transition duration-300 transform hover:scale-95 active:scale-90"
    >
      Logout
    </button>
  );
}

export default Logout;
