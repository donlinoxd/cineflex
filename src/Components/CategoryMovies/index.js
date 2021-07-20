import { useCallback, useEffect, useState } from "react";

import Movies from "./Movies";
import movieList from "../../Helpers/movieList";

const Categorized = () => {
  const [index, setIndex] = useState(3);

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + window.pageYOffset >= document.body.offsetHeight &&
      movieList.length >= index
    ) {
      setIndex(index + 1);
    }
  }, [index]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <main className="container mx-auto space-y-3 md:space-y-6 lg:space-y-8 relative lg:-top-6 xl:-top-24 2xl:-top-32 z-10">
      {movieList
        .filter((movie, i) => i < index)
        .map((movie) => (
          <Movies key={movie.heading} {...movie} />
        ))}
    </main>
  );
};

export default Categorized;
