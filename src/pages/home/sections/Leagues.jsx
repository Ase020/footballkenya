import { nsl, pl, wcup, wpl } from "../../../assets";

function Leagues() {
  return (
    <div className="flex-center flex-col py-4 md:py-6 gap-4 md:gap-6">
      <h2 className="capitalize text-primary text-xl md:text-2xl font-semibold">
        Our Leagues
      </h2>

      <div className="flex items-center md:justify-center gap-5 md:gap-10 w-full overflow-scroll">
        {leagues.map(({ id, title, image }) => (
          <img
            key={id}
            src={image}
            alt={title}
            className="w-40 h-24 object-contain"
          />
        ))}
      </div>
    </div>
  );
}

export default Leagues;

const leagues = [
  {
    id: 1,
    title: "nsl",
    image: nsl,
  },
  {
    id: 2,
    title: "premier league",
    image: pl,
  },
  {
    id: 3,
    title: "womens cup",
    image: wcup,
  },
  {
    id: 4,
    title: "wpl",
    image: wpl,
  },
];
