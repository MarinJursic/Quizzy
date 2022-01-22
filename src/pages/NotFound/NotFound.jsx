import React from "react";
import "./NotFound.scss";

import { Link, useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="not_found">
      <h4>Quizzy</h4>
      <h1>404</h1>
      <h4>The page you were looking for does not exist</h4>
      <p>
        Uh oh! Looks like you studied your way into an error page!
        <br /> We {"can't"} find the file {"you're"} looking for.
        <br /> {"It's"} best not to get distracted.
        {"Let's"} get back to studying.
      </p>
      <button onClick={() => navigate(-2)}>Go back</button>
      <Link to="/dashboard">
        <button>Home</button>
      </Link>
    </div>
  );
}

export default NotFound;
