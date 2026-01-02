import React from "react";
import { navLinks } from "../../constants/constants";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import { CiLogout } from "react-icons/ci";

function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(
    !!localStorage.getItem("jwtToken")
  );
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <>
      {/* Top Bar */}
      <div className="fixed top-0 left-0 w-full z-30 bg-black/50 backdrop-blur text-white flex justify-center">
        <div className="w-[90%] flex items-center justify-between p-3">
          <div
            className="text-2xl md:text-3xl font-bold cursor-pointer"
            onClick={() => navigate("/home")}
          >
            <span className="text-red-600">C</span>ineplex
          </div>

          <input
            type="search"
            placeholder="Search movies..."
            className="bg-transparent border border-white/30 rounded px-3 py-1 w-[60%] md:w-[40%] text-center italic focus:outline-none focus:border-red-500 transition"
          />

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center gap-2 transition ${
                    isActive ? "text-red-500 font-bold" : "hover:text-red-400"
                  }`
                }
              >
                <link.icon />
                {link.name}
              </NavLink>
            ))}

            <Button
              title="Logout"
              isprimary
              onClick={handleLogout}
              text={<CiLogout className="text-black font-bold" />}
            />
          </div>
        </div>
      </div>

      {/* Mobile Bottom Nav */}
      <div className="md:hidden fixed bottom-0 left-0 w-full z-30 bg-black/80 backdrop-blur text-white flex justify-around py-2">
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `flex flex-col items-center text-xs transition ${
                isActive ? "text-red-500" : "text-white/70"
              }`
            }
          >
            <link.icon size={22} />
            <span className="text-[10px]">{link.name}</span>
          </NavLink>
        ))}

        <button
          onClick={handleLogout}
          className="flex flex-col items-center text-white/70 hover:text-red-500 transition"
        >
          <CiLogout size={22} />
          <span className="text-[10px]">Logout</span>
        </button>
      </div>
    </>
  );
}

export default Navbar;
