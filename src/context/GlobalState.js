import React, { createContext, useReducer, useEffect } from "react";
import { reducer } from "./AppReducer";
import axios from "axios";

// Initial state
const initialState = {
  movies: [],
  List: [],
  user: null,
  searchedMovies: [],
};

// Create context
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  // Call useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  // Fetch movies
  useEffect(() => {
    getMovies();
  }, []);

  // Actions

  // get movies from api
  async function getMovies() {
    try {
      const res = await axios.get(
        "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9774c3840a00e5c4fd014c19aca18745&page=1"
      );

      dispatch({
        type: "GET_MOVIES",
        payload: res.data.results,
      });
    } catch (err) {
      console.log(err);
    }
  }

  // add to my list
  function addToMyList(movie) {
    dispatch({
      type: "ADD_TO_MYLIST",
      payload: movie,
    });
  }

  // delete from my list
  function removeFromMyList(id) {
    dispatch({
      type: "REMOVE_FROM_MYLIST",
      payload: id,
    });
  }

  // set user
  function setUser(user) {
    dispatch({
      type: "SET_USER",
      payload: user,
    });
  }

  // search movies from api
  async function searchMovies(title) {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=9774c3840a00e5c4fd014c19aca18745&language=en-US&query=${title}&page=1&include_adult=false`
      );

      dispatch({
        type: "SEARCH_MOVIES",
        payload: res.data.results,
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        movies: state.movies,
        List: state.List,
        user: state.user,
        searchedMovies: state.searchedMovies,
        getMovies,
        addToMyList,
        removeFromMyList,
        setUser,
        searchMovies,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
