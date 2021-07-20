import { useFetch } from "../../Hooks/useFetch";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import variables from "../../Helpers/variables";

// no image available
import noImage from "../../Assets/no-image.svg";

import { Loader3 } from "../../Helpers/SkeletonLoaders";
import { useEffect, useState } from "react";

const SimilarMovies = ({ id }) => {
  const [movies, setMovies] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [hasMore, setHasMore] = useState(false);

  const url = `${variables.BASE_URL}movie/${id}/similar?api_key=${variables.TMDB_API_KEY}&language=en-US&page=${pageNum}`;
  const { data, isLoading } = useFetch(url);

  const handleHasMore = () => {
    setHasMore(() => (data.results ? true : false));
  };

  useEffect(() => {
    if (!isLoading) {
      setMovies((movies) => [...movies, ...data.results]);
      setHasMore(false);
    }
  }, [data, isLoading]);

  return (
    <>
      <div className="bg-gray-800 p-2 md:p-4 xl:p-6 rounded-md">
        <div className="mb-1 lg:mb-2 text-lg sm:text-xl cursor-pointer font-bold tracking-wider">
          <h2>You might be interested in</h2>
        </div>
        <InfiniteScroll
          className="w-full relative grid grid-cols-2 gap-x-3 gap-y-6 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
          dataLength={movies.length}
          next={() => setPageNum(pageNum + 1)}
          hasMore={hasMore}
          loader={<Loader3 />}
        >
          {movies.map(
            ({ title, overview, id, release_date, backdrop_path }) => (
              <div
                key={id}
                className="flex flex-col col-span-1 relative bg-gray-900 rounded-md pb-2"
              >
                <div className="w-full play-active relative overflow-hidden">
                  <Link to={`/movie/${id}`}>
                    <img
                      src={
                        backdrop_path
                          ? variables.IMG_BASE_URL_300 + backdrop_path
                          : noImage
                      }
                      alt={title}
                      className="object-fit transition-all duration-500 transform hover:scale-110"
                    />
                  </Link>
                </div>
                <div className="p-2 h-40 flex flex-col">
                  <h2 className="text-center mb-1 tracking-wide">
                    {title}{" "}
                    {release_date && (
                      <span>({new Date(release_date).getFullYear()})</span>
                    )}
                  </h2>
                  <p
                    className="overflow-y-auto overflow-ellipsis text-sm opacity-70 text-justify scrollbar-hide"
                    style={{ textIndent: "2rem" }}
                  >
                    {overview}
                  </p>
                </div>
              </div>
            )
          )}

          {hasMore || (
            <div
              className="w-full col-span-full flex justify-center cursor-pointer"
              onClick={handleHasMore}
            >
              <span className="bg-gray-900 py-2 px-8 rounded-md">
                Load More
              </span>
            </div>
          )}
        </InfiniteScroll>
      </div>
    </>
  );
};

export default SimilarMovies;

/*
 <>
      {isLoading ? (
        <Loader3 />
      ) : !data.total_results ? (
        <div className="text-xl absolute tracking-wider w-full flex justify-center">
          <h2>NO SIMILAR MOVIES FOUND :(</h2>
        </div>
      ) : (
        <div className="bg-gray-800 p-2 md:p-4 xl:p-6 rounded-md">
          <div className="mb-1 lg:mb-2 text-lg sm:text-xl cursor-pointer font-bold tracking-wider">
            <h2>You might be interested in</h2>
          </div>
          <div className="w-full relative grid grid-cols-2 gap-x-1 gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
            
          </div>
        </div>
      )}
    </>
*/
