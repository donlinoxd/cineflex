import { useParams } from "react-router-dom";
import variables from "../../Helpers/variables";
import { useFetch } from "../../Hooks/useFetch";

import Video from "./Video";
import Details from "./Details";
import Casts from "./Casts";
import Trailers from "./Trailers";
import SimilarMovies from "./SimilarMovies";

const Movie = () => {
  const { id } = useParams();
  const url = `${variables.BASE_URL}movie/${id}?api_key=${variables.TMDB_API_KEY}&language=en-US`;

  const { data: movie, isLoading } = useFetch(url);

  return (
    <section className="container mx-auto py-24 md:py-28 space-y-6">
      <Video id={id} {...movie} isLoading={isLoading} />

      <div className="w-full bg-gray-800 p-2 md:p-4 xl:p-6 space-y-3 md:space-y-6 rounded-md">
        <Details {...movie} imgPath={variables.IMG_BASE_URL_200} />
        <Casts id={id} />
        <Trailers id={id} />
      </div>

      <SimilarMovies id={id} />
    </section>
  );
};

export default Movie;
