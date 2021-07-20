import Buttons from "./Buttons";
import Genres from "./Genres";

const MovieDetails = ({
  title,
  genre_ids,
  overview,
  release_date,
  vote_average,
  id,
}) => {
  return (
    <div className="absolute w-full h-full bottom-0 flex flex-col justify-center">
      <div className="container mx-auto space-y-4">
        <div className="hidden relative py-2 sm:block">
          <h2 className="text-3xl lg:text-4xl font-normal inline-block">
            {title}
          </h2>
        </div>

        <Genres genres={genre_ids} />

        <div className="hidden sm:block w-1/2 max-h-20 whitespace-pre-line overflow-y-scroll scrollbar-hide">
          <p>{overview}</p>
        </div>
        <div className="hidden font-base-font-normal sm:block space-x-6">
          <strong>{release_date}</strong>
          <strong>
            <i className="fas fa-star text-yellow-400 mr-1"></i>
            {vote_average}
          </strong>
        </div>

        <Buttons id={id} />
      </div>
    </div>
  );
};

export default MovieDetails;
