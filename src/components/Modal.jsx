import { useContext } from "react";
import { AiOutlineCloseCircle, AiOutlinePlus } from "react-icons/ai";
import { BsPlayFill, BsPlay } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { GlobalContext } from "./../context/GlobalState";

function Modal({ showModal, setShowModal, modalMovie }) {
  const { addToMyList, List } = useContext(GlobalContext);
  const IMG_API = "https://image.tmdb.org/t/p/w1280";

  const handleAddToList = (movie, id) => {
    setShowModal(!showModal);
    if (List.some((item) => item.id === id)) {
      return;
    }

    addToMyList(movie);
  };

  return (
    <div className="modal">
      <div className="modal_movie">
        <div className="close_modal">
          <AiOutlineCloseCircle onClick={() => setShowModal(!showModal)} />
        </div>

        <div className="modal_movie-secI">
          <img src={IMG_API + modalMovie.poster_path} alt="" />
          <div className="desc">
            <h3>{modalMovie.title}</h3>
            <span>{modalMovie.release_date}</span>
            <p className="scroll">{modalMovie.overview}</p>
          </div>
        </div>

        <div className="modal_movie-secII">
          <span className="play">
            <BsPlayFill />
            Play
          </span>
          <span className="download span">
            <HiDownload />
            Download
          </span>
          <span className="preview span">
            <BsPlay />
            Preview
          </span>
        </div>

        <div className="modal_movie-secIII">
          <span
            className="add_to_mylist"
            onClick={() => handleAddToList(modalMovie, modalMovie.id)}
          >
            Add to Watchlist <AiOutlinePlus />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Modal;
