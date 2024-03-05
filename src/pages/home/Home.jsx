import {
  Banner,
  FeaturedNews,
  Hero,
  HighlightOfTheDay,
  Leagues,
  Table,
} from "./sections";

function Home() {
  return (
    <section className="max-width">
      <Hero />
      <Leagues />
      <HighlightOfTheDay />
      <FeaturedNews />
      <Banner />
      <Table />
    </section>
  );
}

export default Home;
