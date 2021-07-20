import bookmark from "../../Assets/bookmark.svg";

const Details = ({
  genres = [{ id: 0, name: "NA" }],
  overview,
  poster_path,
  production_countries = [{ id: 0, name: "NA" }],
  release_date,
  tagline,
  title,
  vote_average,
  imgPath,
}) => {
  return (
    <div>
      <div className="w-full flex space-x-3 lg:space-x-6">
        <div className="w-3/12" style={{ minWidth: "110px" }}>
          <img
            className="w-full object-cover"
            src={imgPath + poster_path}
            alt={title}
          />
          <div className="w-full flex justify-center mt-2">
            <button className="flex items-center justify-center bg-red-500 rounded-md p-2 w-full">
              <img src={bookmark} alt="bookmark icon" className="mr-1" />
              Add to List
            </button>
          </div>
        </div>
        <div className="space-y-1 font-thin">
          <div className="text-2xl lg:text-3xl mb-3">
            <h1>{title}</h1>
          </div>
          <div className="flex space-x-4">
            <strong>{release_date}</strong>
            <strong>
              <i className="fas fa-star mr-2 text-yellow-400" />
              {vote_average}
            </strong>
          </div>

          <div className="flex flex-col">
            <div>
              <strong className="opacity-70 mr-2">Duration: </strong>
              <span>95 mins</span>
            </div>
            <div>
              <strong className="opacity-70 mr-2">Genres: </strong>
              {genres.map((genre, index) => {
                if (genres.length - 1 === index) {
                  return (
                    <span key={genre.id + new Date().getMinutes()}>
                      {genre.name}.
                    </span>
                  );
                }
                return (
                  <span key={genre.id + new Date().getMinutes()}>
                    {genre.name},{" "}
                  </span>
                );
              })}
            </div>
            <div>
              <strong className="opacity-70 mr-2">Countries: </strong>
              {production_countries.map((country, index) => {
                if (production_countries.length - 1 === index) {
                  return (
                    <span key={country.id + new Date().getMinutes()}>
                      {country.name}.
                    </span>
                  );
                }
                return (
                  <span key={country.id + new Date().getMinutes()}>
                    {country.name},
                  </span>
                );
              })}
            </div>
            <div>
              <strong className="opacity-70 mr-2">Tagline: </strong>
              <span>"{tagline}"</span>
            </div>
          </div>

          <div className="relative">
            <strong className="opacity-70 mr-2">Sypnosis: </strong>
            <p
              className="max-h-24 overflow-scroll overflow-ellipsis scrollbar-hide"
              style={{ textIndent: "2rem" }}
            >
              {overview}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
