import { Link } from "react-router-dom";
import { mozzartBet } from "../../../assets";

const FeaturedNewsCard = () => {
  return (
    <Link
      to="/"
      className="flex flex-col rounded-2xl shadow border overflow-hidden h-full"
    >
      <img
        src={mozzartBet}
        alt="presidential"
        className="w-full object-cover"
      />
      <div className="flex flex-col px-3 py-4 gap-1">
        <h3 className="text-base sm:text-lg leading-tight font-semibold">
          RECAP: Find out what the presidential aspirants had to say
        </h3>

        <p className="line-clamp-2 text-sm font-normal text-gray-500">
          Find out what the Presidential aspirants had to say as they submitted
          their nomination papers to the FKF Electoral Board
        </p>

        <span className="text-sm font-normal text-gray-400">
          Oct 19, 2021 • 5min read
        </span>
      </div>
    </Link>
  );
};

export default FeaturedNewsCard;
