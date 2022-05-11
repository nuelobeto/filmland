import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { GlobalContext } from "./../context/GlobalState";

function MobileNav() {
  const { user, setUser } = useContext(GlobalContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <div className="mobile_nav">
      <ul>
        <li>
          <a href="#tvshows">TV Shows</a>
        </li>
        <li>
          <a href="#movies">Movies</a>
        </li>
        <li>
          <Link to="/mylist">My List</Link>
        </li>
      </ul>

      <div className="auth_btn mobile_auth_btn">
        {user ? (
          <button style={{ margin: "0" }} onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <button style={{ margin: "0" }} onClick={() => navigate("/")}>
            Log In
          </button>
        )}
      </div>
    </div>
  );
}

export default MobileNav;
