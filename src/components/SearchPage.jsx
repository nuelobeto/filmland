import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Movie from "./Movie";

function SearchPage() {
  const { searchedMovies } = useContext(GlobalContext);

  return (
    <div className="movies">
      {searchedMovies.map((item) => (
        <Movie key={item.id} data={item} />
      ))}
    </div>
  );
}

export default SearchPage;
