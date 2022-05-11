import { useContext } from "react";
import Movie from "./Movie";
import { GlobalContext } from "./../context/GlobalState";

function Movies() {
  const { movies } = useContext(GlobalContext);

  return (
    <div className="movies">
      {movies.map((item) => (
        <Movie key={item.id} data={item} />
      ))}
    </div>
  );
}

export default Movies;
