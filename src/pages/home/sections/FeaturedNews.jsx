import FeaturedNewsCard from "./FeaturedNewsCard";

const FeaturedNews = () => {
  return (
    <div className="flex flex-col gap-8 px-4 sm:px-8 md:px-20 lg:px-28 mb-5 md:mb-10">
      <h3 className="text-primary text-xl font-semibold">Featured News</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
        {Array.from({ length: 14 }).map((_, i) => (
          <FeaturedNewsCard key={i} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedNews;
