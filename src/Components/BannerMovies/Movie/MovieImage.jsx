import variables from "../../../Helpers/variables";

const { IMG_BASE_URL, IMG_BASE_URL_500 } = variables;

const MovieImage = ({ poster_path, backdrop_path, title }) => {
  return (
    <>
      <div className="w-full relative">
        <picture className="w-full object-cover">
          <source
            media="(min-width: 640px)"
            srcSet={`${IMG_BASE_URL + backdrop_path}`}
          />
          <img
            className="w-full"
            src={`${IMG_BASE_URL_500 + poster_path}`}
            alt={title}
          />
        </picture>
        <div className="absolute -bottom-1 w-full h-1/2 bg-gradient-to-t from-gray-900 to-transparent"></div>
      </div>
    </>
  );
};

export default MovieImage;
