import { mozzartBet } from "../../../assets";

const Banner = () => {
  return (
    <div className="border relative w-full h-36 md:h-72">
      <img
        src={mozzartBet}
        alt="banner"
        className="w-full h-full object-cover md:rounded-lg"
      />

      <h3 className="top-1/2 left-1/2 absolute transform -translate-x-1/2 text-white text-xl sm:text-2xl md:text-4xl font-bold">
        Football Kenya Federation
      </h3>
    </div>
  );
};

export default Banner;
