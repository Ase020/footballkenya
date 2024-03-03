import { FeaturedNews, HighlightOfTheDay, Leagues } from "./sections";

function Home() {
  return (
    <section className="max-width">
      <Leagues />
      <HighlightOfTheDay />
      <FeaturedNews />
    </section>
  );
}

export default Home;
