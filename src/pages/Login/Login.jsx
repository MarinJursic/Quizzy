import React from "react";
import "./Login.scss";

function Login() {
  return (
    <div className="login">
      <main>
        <aside>
          <h1>Quizzy</h1>
          <h3>Ready to claim that A?</h3>
        </aside>
        <section>
          <div className="backtosite">
            <a href="/">
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
            </a>
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
              <a href="/forgotpassword">Forgot password</a>
            </div>
            <div className="submitbutton">
              <button type="submit">Login</button>
              <h6>or</h6>
              <a href="/signup">I need to sign up</a>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}

export default Login;
