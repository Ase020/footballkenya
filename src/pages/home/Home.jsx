import {
  Banner,
  FeaturedNews,
  HighlightOfTheDay,
  Leagues,
  Table,
} from "./sections";

function Home() {
  return (
    <section className="max-width">
      <Leagues />
      <HighlightOfTheDay />
      <FeaturedNews />
      <Banner />
      <Table />
    </section>
  );
}

export default Home;
