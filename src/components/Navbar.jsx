import { Link } from "react-router-dom";
import { logo } from "../assets";

const Navbar = () => {
  return (
    <header className="bg-transparent px-10 max-width flex-between border h-20">
      <Link to="/">
        <img src={logo} alt="logo" className="object-contain w-16" />
      </Link>

      <nav className="flex-between space-x-8 text-base font-semibold">
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
    </header>
  );
};

export default Navbar;
