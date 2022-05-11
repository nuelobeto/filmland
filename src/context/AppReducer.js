export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_MOVIES":
      return {
        ...state,
        movies: action.payload,
      };
    case "ADD_TO_MYLIST":
      return {
        ...state,
        List: [action.payload, ...state.List],
      };
    case "REMOVE_FROM_MYLIST":
      return {
        ...state,
        List: state.List.filter((item) => item.id !== action.payload),
      };
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "SEARCH_MOVIES":
      return {
        ...state,
        searchedMovies: action.payload,
      };
    default:
      return state;
  }
};
