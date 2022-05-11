import Movies from "./components/Movies";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import MyList from "./components/MyList";
import AuthPage from "./components/AuthPage";
import SearchPage from "./components/SearchPage";

function App() {
  return (
    <div className="app_container">
      <Routes>
        <Route path="auth" element={<AuthPage />} />
        <Route
          path="/"
          element={
            <>
              <Header />
              <Movies />
            </>
          }
        />
        <Route
          path="search/:movie"
          element={
            <>
              <Header />
              <SearchPage />
            </>
          }
        />
        <Route path="mylist" element={<MyList />} />
      </Routes>
    </div>
  );
}

export default App;
