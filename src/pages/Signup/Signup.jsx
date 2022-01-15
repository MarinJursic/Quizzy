import React from "react";
import "./Signup.scss";

function Signup() {
  return (
    <div className="signup">
      <main>
        <aside>
          <h1>Quizzy</h1>
          <h3>
            That sweet A is coming, but we have to get you signed up before you
            can claim it.
          </h3>
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
          <h3>Sign Up</h3>
          <div className="line"></div>
          <p>
            Welcome to Quizzy! Before you can get started with learning, you
            need to sign up. Fill out the form below, and let's get learning!
          </p>
          <form>
            <label for="username">Username</label>
            <input
              type="text"
              placeholder="Enter desired username"
              id="username"
              name="username"
            />
            <label for="email">Email</label>
            <input
              type="text"
              placeholder="Enter email address"
              id="email"
              name="email"
            />
            <label for="password">Password</label>
            <input
              type="text"
              placeholder="Enter desired password"
              id="password"
              name="password"
            />
            <label for="retype-password">Retype password</label>
            <input
              type="text"
              placeholder="Retype your password"
              id="retype-password"
              name="retype-password"
            />
            <div className="options">
              <div className="left">
                <input type="checkbox" id="tos" name="tos" />
                <label for="tos">I agree to the Terms & Conditions</label>
              </div>
            </div>
            <div className="submitbutton">
              <button type="submit">Sign Up</button>
              <h6>or</h6>
              <a href="/login">I already have an account</a>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}

export default Signup;
