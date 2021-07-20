import React from "react";
import { Link } from "react-router-dom";
import variables from "../../Helpers/variables";

const Movies = ({ movies }) => {
  return (
    <>
      <div className="w-full grid grid-cols-3 gap-x-1 gap-y-4 md:gap-x-2 md:gap-y-6 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
        {movies &&
          movies.map(
            ({ poster_path, id, title }) =>
              poster_path && (
                <div
                  key={id + 1}
                  className="play-active col-span-1 relative bg-gray-900 rounded-md overflow-hidden"
                >
                  <Link to={`/movie/${id}`}>
                    <img
                      className="transform hover:scale-110 transition-all duration-500"
                      src={variables.IMG_BASE_URL_200 + poster_path}
                      alt={title}
                    />
                  </Link>
                </div>
              )
          )}
      </div>
    </>
  );
};

export default React.memo(Movies);
