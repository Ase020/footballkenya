import { Link } from "react-router-dom";
import { mozzartBet } from "../../../assets";

const HighlightsCard = () => {
  return (
    <Link
      to="/"
      className="w-full h-full bg-cover bg-no-repeat flex items-end justify-center px-8 pb-8 rounded-2xl"
      style={{
        backgroundImage: `url(${mozzartBet})`,
      }}
    >
      <h3 className="text-white text-lg md:text-xl font-semibold text-center line-clamp-2">
        HighlightsCard HighlightsCard HighlightsCard HighlightsCard
        HighlightsCard
      </h3>
    </Link>
  );
};

export default HighlightsCard;
