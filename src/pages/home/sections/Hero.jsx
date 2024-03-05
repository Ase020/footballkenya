import { Carousel } from "@material-tailwind/react";
import HeroCard from "./HeroCard";

const Hero = () => {
  return (
    <Carousel
      className="w-full h-96 md:h-[680px]"
      prevArrow={false}
      nextArrow={false}
      autoplay
      autoplayDelay={5000}
      loop
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-6 sm:bottom-12 md:bottom-44 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-full transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-red-600" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      {data.map(({ id, category, image, title, description }) => (
        <HeroCard
          key={id}
          category={category}
          title={title}
          image={image}
          description={description}
        />
      ))}
    </Carousel>
  );
};

export default Hero;

const data = [
  {
    id: 1,
    category: "news of the day",
    image:
      "https://footballkenya.org/wp-content/uploads/2024/02/Tusker-vs-Bidco-United-768x600.jpg",
    title:
      "FKF First Instance Body sanctions Tusker FC as FC Talanta Pays Fine ",
    description:
      "The Football Kenya Federation’s First Instance Body (FIB) – an independent decision-making body set up by all CAF’s member associations – has ordered Tusker FC to pay USD 16,100 for not submitting the contract of its head coach as per an agreement with the licensing body.",
  },
  {
    id: 2,
    category: "goal of the day",
    image:
      "https://footballkenya.org/wp-content/uploads/2024/02/Denmak-vs-Gor-Mahia-1-768x600.jpg",
    title:
      "Denmak FC Pulls Off Another Surprise Win in MozzartBet Cup Round 32 Weekend",
    description:
      "Denmak FC secured a spot in the MozzartBet Cup round of 16 after pulling off a surprise victory against FKF Premier League side Gor Mahia FC in a match held 0n Sunday, February 25, 2024, at Ukunda Show Grounds.",
  },
  {
    id: 3,
    category: "news of the day",
    image:
      "https://footballkenya.org/wp-content/uploads/2024/02/FC-Talanta-vs-Bungoma-Stars-768x599.jpg",
    title: "Underdogs Bungoma Stars Advance to Mozzart Bet Cup Round of 16",
    description:
      "Bungoma Stars executed yet another underdog triumph, advancing to the Mozzart Bet Cup round of 16 by defeating FC Talanta 1-0 on Saturday, February 24, 2024, at the Police Sacco Stadium.",
  },
  {
    id: 4,
    category: "highlight of the day",
    image:
      "https://footballkenya.org/wp-content/uploads/2024/02/Kisped-goal-celebration.jpg",
    title:
      "KISPED, Ulinzi Starlets and Kenya Police Bullets Secure Round of 16 spots",
    description:
      "KISPED Queens secured a spot in the round of 16 by defeating Makolanders in their FKF Women’s Cup preliminary match at Ruaraka grounds on Sunday, February 18, 2024.",
  },
];
