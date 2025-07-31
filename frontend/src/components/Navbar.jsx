import { useState } from "react";
import { useSelector } from "react-redux";
import Logout from "./Logout";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white flex items-center justify-between px-6 pt-3">
      {/* Left: Logo */}
      <img src="/images/op2.png" alt="Logo" className="h-26 w-20" />

      {/* Right: Menu */}
      <div className="flex items-center gap-4 md:gap-6">
        <a
          href="/"
          className="text-[var(--p3Maroon)] hover:text-[var(--p4DMaroon)] font-[Nunito] font-bold text-lg"
        >
          Home
        </a>
        <a
          href="/history"
          className="text-[var(--p3Maroon)] hover:text-[var(--p4DMaroon)] font-[Nunito] font-bold text-lg"
        >
          History
        </a>

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--p3Maroon)]"
          >
            <img
              src={user?.avatar}
              alt="User avatar"
              className="h-16 w-16 rounded-full border-2 border-gray-300"
            />
          </button>

          <div
            className={`absolute right-0 mt-2 w-36 p-3 bg-white rounded-md shadow-lg ring-1 ring-[var(--p3Maroon)] ring-opacity-5 z-50 transition-all duration-200 ease-out transform origin-top ${
              open
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            <Logout />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
