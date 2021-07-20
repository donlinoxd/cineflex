import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useFetch } from "../../Hooks/useFetch";
import Movies from "../../Components/Movies";

import InfiniteScroll from "react-infinite-scroll-component";

import variables from "../../Helpers/variables";
import { Loader2 } from "../../Helpers/SkeletonLoaders";

const Search = () => {
  const location = useLocation();
  const [query, setQuery] = useState("a");
  const [pageNum, setPageNum] = useState(1);
  const [movies, setMovies] = useState([]);
  const [results, setResults] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    setQuery(location.search.slice(7));
  }, [location]);

  const url = `${variables.BASE_URL}search/movie?api_key=${variables.TMDB_API_KEY}&language=en-US&query=${query}&page=${pageNum}`;

  const { data, isLoading } = useFetch(url);

  useEffect(() => {
    setMovies([]);
    setPageNum(1);
    setResults(0);
    setTotalPages(0);
    setTotalResults(0);
  }, [query]);

  useEffect(() => {
    if (!isLoading) {
      setMovies((movies) => [...movies, ...data.results]);
      setResults((results) => results + data.results.length);
      setTotalPages(data.total_pages);
      setTotalResults(data.total_results);
    }
  }, [data, isLoading]);

  return (
    <section className="container mx-auto py-28">
      <div className="mb-4">
        <h1 className="text-3xl tracking-wide">Search results for {query}</h1>
        <span className="opacity-70">
          Page {pageNum} of a total of {totalPages}. There are {results} results
          out of {totalResults} shown.
        </span>
      </div>
      {isLoading && <Loader2 />}
      {movies && (
        <InfiniteScroll
          dataLength={movies.length}
          next={() => setPageNum(pageNum + 1)}
          hasMore={true}
        >
          <Movies movies={movies} />
        </InfiniteScroll>
      )}
    </section>
  );
};

export default Search;

/*
  <InfiniteScroll
        dataLength={movies.length}
        next={() => setPageNum(pageNum + 1)}
        hasMore={true}
      >
        <div className="mb-4">
          <h1 className="text-3xl tracking-wide">Search results for {query}</h1>
          <span className="opacity-70">
            Page {pageNum} of a total of {totalPages}. There are {results}{" "}
            results out of {totalResults} shown.
          </span>
        </div>
        <Movies movies={movies} />
      </InfiniteScroll>
*/
