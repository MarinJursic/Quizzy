import React from "react";
import "./Header.scss";
import SearchBar from "./SearchBar/SearchBar";
import Account from "./Account/Account";
import { useLocation, Link } from "react-router-dom";

function Header() {
  const location = useLocation();

  return (
    <>
      {!["/signup", "/login", "/404"].includes(location.pathname) && (
        <header
          style={
            location.pathname.includes("/quizzyplus")
              ? { background: "transparent", position: "absolute" }
              : null
          }
        >
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
