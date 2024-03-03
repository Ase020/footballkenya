import HighlightsCard from "./HighlightsCard";

const HighlightOfTheDay = () => {
  return (
    <div className="flex flex-col gap-8 px-4 sm:px-8 md:px-20 lg:px-28 mb-5 md:mb-10">
      <h3 className="text-primary text-xl font-semibold">
        Highlight of the day
      </h3>
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 w-full h-[576px]">
        <div className="w-1/2 h-full">
          <HighlightsCard />
        </div>

        <div className="w-1/2 h-full flex flex-col justify-between gap-4">
          <div className="w-full h-1/2">
            <HighlightsCard />
          </div>
          <div className="w-full h-1/2 flex items-center gap-4">
            <div className="w-1/2 h-full">
              <HighlightsCard />
            </div>

            <div className="w-1/2 h-full">
              <HighlightsCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighlightOfTheDay;
