import React from "react";
import "./Login.scss";

import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/userActions";

import { Navigate } from "react-router-dom";

import { Link } from "react-router-dom";

const userData = {
  name: "Script_ing",
  image: "pfplarge.svg",
  description:
    "Hi, I'm just a 17 year old high school kid who wants to change the world. This is my description, where I can say whatever I want.",
  role: "Student",
  friends: [
    {
      img: "images/user/friends/1.svg",
      online: true,
    },
    {
      img: "images/user/friends/2.svg",
      online: true,
    },
    {
      img: "images/user/friends/3.svg",
      online: false,
    },
  ],
  schedule: [
    {
      name: "Accounting Flashcards",
      type: "Recal Session",
      time: "Today",
    },
    {
      name: "Physics Flashcards",
      type: "Recal Session",
      time: "Tommorow",
    },
    {
      name: "AP Physics Unit 1 Test",
      type: "Test",
      time: "Tommorow",
    },
  ],
  verified: true,
};

function Login() {
  const dispatch = useDispatch();

  const loggedIn = useSelector((state) => state.user.loggedIn);

  const handleLogin = () => {
    dispatch(login(userData));
  };
  return (
    <div className="login">
      {loggedIn && <Navigate to="/dashboard" />}
      <main>
        <aside>
          <h1>Quizzy</h1>
          <h3>Ready to claim that A?</h3>
        </aside>
        <section>
          <div className="backtosite">
            <Link to="/">
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
              >
                <path d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z" />
              </svg>
              <h6>Back to website</h6>
            </Link>
          </div>
          <h3>Log in to Quizzy</h3>
          <div className="line"></div>
          <p>
            Welcome back! Before we can get back to learning, we have to get you
            signed in. Please log in to continue.
          </p>
          <form>
            <label for="username">Username or email</label>
            <input
              type="text"
              placeholder="Enter username or email address"
              id="username"
              name="username"
            />
            <label for="password">Password</label>
            <input
              type="text"
              placeholder="Enter password"
              id="password"
              name="password"
            />
            <div className="options">
              <div className="left">
                <input type="checkbox" id="remember" name="remember" />
                <label for="remember">Remember me</label>
              </div>
              <Link to="/forgotpassword">Forgot password</Link>
            </div>
            <div className="submitbutton">
              <button type="submit" onClick={handleLogin}>
                Login
              </button>
              <h6>or</h6>
              <Link to="/signup">I need to sign up</Link>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}

export default Login;
