import { useState } from "react";
import { Link } from "react-router-dom";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import { logo } from "../assets";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative bg-transparent px-2 md:px-10 max-width flex-between h-20">
      <Link to="/">
        <img src={logo} alt="logo" className="object-contain w-16" />
      </Link>

      <nav className="hidden md:flex-between space-x-8 text-base font-semibold">
        <Link to="/" className="underline underline-offset-4">
          Home
        </Link>
        <Link to="/" className="underline-offset-4">
          Leagues & Tournaments
        </Link>
        <Link to="/" className="underline-offset-4">
          Rules and governance
        </Link>
        <Link to="/" className="underline-offset-4">
          Integrity
        </Link>
      </nav>

      <div className="flex-center md:hidden mr-3 px-1">
        {isOpen ? (
          <CloseRoundedIcon
            fontSize="large"
            onClick={() => setIsOpen((prev) => !prev)}
          />
        ) : (
          <MenuRoundedIcon
            fontSize="large"
            onClick={() => setIsOpen((prev) => !prev)}
          />
        )}
      </div>

      {/* mobile nav */}
      <nav
        className="absolute top-20 left-0 bg-white h-[calc(100vh-80px)] w-screen flex-center text-center px-2 flex-col gap-12 text-3xl z-[999]"
        style={isOpen ? { display: "flex" } : { display: "none" }}
      >
        <Link
          to="/"
          className="underline underline-offset-4"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          Home
        </Link>
        <Link
          to="/"
          className="underline-offset-4"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          Leagues & Tournaments
        </Link>
        <Link
          to="/"
          className="underline-offset-4"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          Rules and governance
        </Link>
        <Link
          to="/"
          className="underline-offset-4"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          Integrity
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
