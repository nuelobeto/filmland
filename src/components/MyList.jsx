import { useContext } from "react";
import Navbar from "./Navbar";
import { GlobalContext } from "./../context/GlobalState";
import { BsPlay, BsTrash } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function MyList() {
  const { List, removeFromMyList } = useContext(GlobalContext);

  const navigate = useNavigate();

  const IMG_API = "https://image.tmdb.org/t/p/w1280";

  const handleRemoveMovie = (id) => {
    removeFromMyList(id);
  };

  return (
    <div>
      <Navbar />
      <div className="my_list">
        <h2>My List</h2>
        <div className="my_list_movies">
          {List.map((item) => (
            <div className="list_movie movie" key={item.id}>
              <img src={IMG_API + item.poster_path} alt={item.title} />
              <div className="actions">
                <span>
                  <BsPlay />
                </span>
                <span>
                  <HiDownload />
                </span>
                <span onClick={() => handleRemoveMovie(item.id)}>
                  <BsTrash />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <span className="back_btn" onClick={() => navigate(-1)}>
        <BiArrowBack /> Go Back
      </span>
    </div>
  );
}

export default MyList;
