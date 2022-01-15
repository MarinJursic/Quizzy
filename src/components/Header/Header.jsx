import React from "react";
import "./Header.scss";
import SearchBar from "./SearchBar/SearchBar";
import Account from "./Account/Account";
import { useLocation, Link } from "react-router-dom";

function Header() {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/signup" && location.pathname !== "/login" && (
        <header>
          <Link to="/dashboard">
            <h1>Quizzy</h1>
          </Link>
          <div className="right">
            <SearchBar />
            <Account />
          </div>
        </header>
      )}
    </>
  );
}

export default Header;
