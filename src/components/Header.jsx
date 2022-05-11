import React, { useContext, useState } from "react";
import Navbar from "./Navbar";
import { AiOutlineSearch } from "react-icons/ai";
import { GlobalContext } from "./../context/GlobalState";
import { useNavigate } from "react-router-dom";

function Header() {
  const { searchMovies } = useContext(GlobalContext);

  const navigate = useNavigate();

  const [title, setTitle] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (title === "") {
      return;
    } else {
      searchMovies(title);

      navigate(`/search/${title}`);
    }
  };

  return (
    <header>
      <Navbar />
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Search movies..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">
          <AiOutlineSearch />
        </button>
      </form>
    </header>
  );
}

export default Header;
