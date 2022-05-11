import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import Modal from "./Modal";

function Movie({ data }) {
  const { movies } = useContext(GlobalContext);

  const [showModal, setShowModal] = useState(false);
  const [modalMovie, setModalMovie] = useState(null);

  const IMG_API = "https://image.tmdb.org/t/p/w1280";

  const showMovieInModal = (id) => {
    const clickedMovie = movies.find((item) => item.id === id);
    setModalMovie(clickedMovie);
    setShowModal(true);
  };

  return (
    <>
      <div className="movie" onClick={() => showMovieInModal(data.id)}>
        <img src={IMG_API + data.poster_path} alt={data.title} />

        <div className="movie_overview scroll">
          <h2>Overview:</h2>
          <p>{data.overview}</p>
        </div>
      </div>

      {showModal ? (
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          modalMovie={modalMovie}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default Movie;
