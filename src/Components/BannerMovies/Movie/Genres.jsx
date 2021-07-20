import genreList from "../../../Helpers/genreslist";

const Genres = ({ genres }) => {
  const [genre1, genre2, genre3] = genres;

  const genreNames = genreList.genres.filter(
    (genre) =>
      genre.id === parseInt(genre1) ||
      genre.id === parseInt(genre2) ||
      genre.id === parseInt(genre3)
  );

  return (
    <ul className="flex justify-center w-full absolute left-0 space-x-3 bottom-28 sm:static sm:justify-start">
      {genreNames.map(({ id, name }) => {
        return (
          <li key={id} className="bg-opacity-30 bg-blue-900 rounded px-3 py-1">
            {name}
          </li>
        );
      })}
    </ul>
  );
};

export default Genres;
