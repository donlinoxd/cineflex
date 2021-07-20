import variables from "./variables";

const { TMDB_API_KEY, BASE_URL } = variables;

let movieList = [
  {
    heading: "Upcoming in Theatres",
    url: `${BASE_URL}movie/upcoming?api_key=${TMDB_API_KEY}&language=en-US&page=1`,
  },
  {
    heading: `Action Thriller`,
    url: `${BASE_URL}discover/movie?api_key=${TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=28%2C53`,
  },

  {
    heading: "Popular Now",
    url: `${variables.BASE_URL}movie/popular?api_key=${variables.TMDB_API_KEY}&language=en-US&page=1`,
  },
  {
    heading: "Romantic Movies",
    url: `${variables.BASE_URL}discover/movie?api_key=${variables.TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=10749`,
  },
  {
    heading: `Sci-Fi Movies`,
    url: `${variables.BASE_URL}discover/movie?api_key=${variables.TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=878`,
  },
  {
    heading: "Western Movies",
    url: `${variables.BASE_URL}discover/movie?api_key=${variables.TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=37`,
  },
  {
    heading: "Action & Adventure",
    url: `${BASE_URL}discover/movie?api_key=${TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=28%2C12`,
  },
  {
    heading: "Horror",
    url: `${variables.BASE_URL}discover/movie?api_key=${variables.TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=27`,
  },
  {
    heading: "Romantic Comedy",
    url: `${variables.BASE_URL}discover/movie?api_key=${variables.TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=10749%2C35`,
  },
  {
    heading: "Documentaries",
    url: `${variables.BASE_URL}discover/movie?api_key=${variables.TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=99`,
  },
  {
    heading: "Family Movies",
    url: `${variables.BASE_URL}discover/movie?api_key=${variables.TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=10751`,
  },
  {
    heading: "Animation",
    url: `${variables.BASE_URL}discover/movie?api_key=${variables.TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=16`,
  },
  {
    heading: "Comedy Movie",
    url: `${variables.BASE_URL}discover/movie?api_key=${variables.TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=35`,
  },
  {
    heading: "Drama",
    url: `${variables.BASE_URL}discover/movie?api_key=${variables.TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=18`,
  },
  {
    heading: "Fantasy Movies",
    url: `${variables.BASE_URL}discover/movie?api_key=${variables.TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=14`,
  },
  {
    heading: "Top Rated Movies",
    url: `${BASE_URL}movie/top_rated?api_key=${TMDB_API_KEY}&language=en-US&page=1`,
  },
  {
    heading: "Music & Romance",
    url: `${variables.BASE_URL}discover/movie?api_key=${variables.TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=10402%2C10749`,
  },
];

export default movieList;
