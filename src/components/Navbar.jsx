import { useState, useEffect, useContext } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import MobileNav from "./MobileNav";
import { GlobalContext } from "./../context/GlobalState";

function Navbar() {
  const { user, setUser } = useContext(GlobalContext);

  const navigate = useNavigate();

  const [viewportWidth, setviewPortWidth] = useState(window.innerWidth);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    // track viewport width
    const handleResize = () => {
      setviewPortWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
  }, [viewportWidth]);

  const handleLogout = () => {
    setUser(null);
    navigate("/auth");
  };

  return (
    <nav>
      <Link to="/">
        <h1 style={{ color: "#fff" }}>Filmland</h1>
      </Link>

      {viewportWidth > 768 ? (
        <>
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

          <div className="auth_btn">
            {user ? (
              <>
                <span className="username">
                  <p>{user.email.charAt(0).toUpperCase()}</p>
                </span>
                <button onClick={handleLogout}>Logout</button>
              </>
            ) : (
              <>
                <button onClick={() => navigate("/auth")}>Log In</button>
              </>
            )}
          </div>
        </>
      ) : (
        <div className="auth_btn">
          {user && (
            <span className="username" style={{ margin: "0 20px 0 0" }}>
              <p>{user.email.charAt(0).toUpperCase()}</p>
            </span>
          )}
          <div className="menu_btn">
            {!showNav ? (
              <AiOutlineMenu onClick={() => setShowNav(true)} />
            ) : (
              <AiOutlineClose onClick={() => setShowNav(false)} />
            )}
            {showNav ? <MobileNav /> : ""}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
