import { Link } from "react-router-dom";
import { logo } from "../assets";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="bg-primary">
      <footer className="max-width flex-center flex-col px-2 sm:px-4 md:px-20 py-4 md:py-12 space-y-4 md:space-y-8 text-white">
        <div className="w-full flex flex-col md:flex-row items-start justify-between gap-8">
          <div className="w-full md:w-1/4 flex-center flex-col gap-3">
            <img src={logo} alt="logo" className="w-20 object-contain" />

            <h3 className="uppercase text-base font-semibold">
              FOOTBALL KENYA FEDERATION
            </h3>
          </div>

          <div className="w-full md:w-3/4 flex justify-between">
            <div className="w-full flex flex-col gap-4">
              <h4 className="text-[#D0D5DD] text-sm font-semibold">Company</h4>

              <nav className="flex flex-col gap-3 text-base font-medium">
                <Link to="/" className="">
                  About Us
                </Link>
                <Link to="/" className="">
                  Contact Us
                </Link>
                <Link to="/" className="">
                  FAQs
                </Link>
              </nav>
            </div>

            <div className="w-full flex flex-col gap-4">
              <h4 className="text-[#D0D5DD] text-sm font-semibold">
                Resources
              </h4>

              <nav className="flex flex-col gap-3 text-base font-medium">
                <Link to="/" className="">
                  News
                </Link>
                <Link to="/" className="">
                  Help Centre
                </Link>
                <Link to="/" className="">
                  Support
                </Link>
              </nav>
            </div>

            <div className="w-full flex flex-col gap-4">
              <h4 className="text-[#D0D5DD] text-sm font-semibold">Leagues</h4>

              <nav className="flex flex-col gap-3 text-base font-medium">
                <Link to="/" className="">
                  FKF PL
                </Link>
                <Link to="/" className="">
                  FKF NSL
                </Link>
                <Link to="/" className="">
                  FKF WNSL
                </Link>
                <Link to="/" className="">
                  Mozzart Bet Cup
                </Link>
                <Link to="/" className="">
                  Women Cup
                </Link>
              </nav>
            </div>
          </div>
        </div>

        <hr className="w-full h-1" />

        <div className="flex-col md:flex-row gap-4 w-full flex-between text-base">
          <div className="w-full md:w-3/5 flex flex-col md:flex-row items-center gap-2 md:gap-4 capitalize">
            <p className="">© {year}</p>
            <p className="">football kenya federation</p>
            <p className="">All rights reserved</p>
          </div>

          <div className="w-full md:w-2/5 flex items-center justify-between">
            <Link to="/" className="">
              Terms
            </Link>
            <Link to="/" className="">
              Privacy
            </Link>
            <Link to="/" className="">
              Cookies
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
