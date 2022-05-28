import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import SearchMovie from "./SearchMovie";

function SearchPage() {
  const { searchedMovies } = useContext(GlobalContext);

  return (
    <div className="movies">
      {searchedMovies.map((item) => (
        <SearchMovie key={item.id} data={item} />
      ))}
    </div>
  );
}

export default SearchPage;
