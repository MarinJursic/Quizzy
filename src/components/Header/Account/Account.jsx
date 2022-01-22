import React, { useState } from "react";
import "./Account.scss";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../actions/userActions";

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

function Account() {
  const dispatch = useDispatch();

  const loggedIn = useSelector((state) => state.user.loggedIn);
  const user = useSelector((state) => state.user.user);

  const [menu, setMenu] = useState(false); // ovo je trebalo bit za dropdown al ae

  const handleMenu = () => {
    setMenu((menu) => !menu);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="account">
      {loggedIn ? (
        <div className="user">
          <div className="info" onClick={handleMenu}>
            <img
              src="/images/user/pfp.svg"
              alt={user.name + "profile image"}
              width={35}
              height={35}
            />
            <h3>{user.name}</h3>
          </div>

          {menu && (
            <div id="user-options">
              <Link to="/overview">Overview</Link>
              <Link to="/settings">Settings</Link>
              <Link to="/quizzyplus">Upgrade</Link>
              <div id="user-option-separator" class="separator"></div>
              <span id="option-logout" onClick={handleLogout}>
                <svg class="logout-icon" viewBox="3 3 18 18">
                  <path
                    id="logout-icon"
                    d="M 17 8 L 15.59000015258789 9.409999847412109 L 17.17000007629395 11 L 9 11 L 9 13 L 17.17000007629395 13 L 15.59000015258789 14.57999992370605 L 17 16 L 21 12 L 17 8 Z M 5 5 L 12 5 L 12 3 L 5 3 C 3.900000095367432 3 3 3.900000095367432 3 5 L 3 19 C 3 20.10000038146973 3.900000095367432 21 5 21 L 12 21 L 12 19 L 5 19 L 5 5 Z"
                  ></path>
                </svg>
                Logout
              </span>
            </div>
          )}
        </div>
      ) : (
        <>
          <Link to="/signup" className="button">
            <h4>Sign Up</h4>
          </Link>
          <Link to="/login" className="button">
            <h4>Login</h4>
          </Link>
        </>
      )}
    </div>
  );
}

export default Account;
