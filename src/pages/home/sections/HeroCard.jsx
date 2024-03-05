/* eslint-disable react/prop-types */
import { Typography } from "@material-tailwind/react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Link } from "react-router-dom";

const HeroCard = ({ category, title, image, description }) => {
  return (
    <div className="relative h-full w-full">
      <img src={image} alt={title} className="h-full w-full object-cover" />
      <div className="absolute inset-0 h-full w-full bg-black/20 flex items-center justify-center">
        <div className="w-full text-center md:w-4/5 flex-center flex-col gap-3 md:gap-5">
          <Typography
            variant="small"
            color="white"
            className="bg-red-600 w-fit mx-auto px-3 py-1.5 uppercase text-sm font-medium"
          >
            {category}
          </Typography>
          <Typography
            variant="h2"
            color="white"
            className="text-3xl md:text-4xl lg:text-5xl font-bold"
          >
            {title}
          </Typography>

          <p className="text-white line-clamp-1 px-4 md:px-6">{description}</p>

          <Link
            to="/"
            className="bg-primary text-white flex items-center gap-2 px-4 py-2 rounded-3xl"
          >
            <span className="text-base">Read news</span>
            <ArrowOutwardIcon fontSize="small" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
