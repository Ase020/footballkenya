import { HighlightOfTheDay, Leagues } from "./sections";

function Home() {
  return (
    <section className="max-width">
      <Leagues />
      <HighlightOfTheDay />
    </section>
  );
}

export default Home;
