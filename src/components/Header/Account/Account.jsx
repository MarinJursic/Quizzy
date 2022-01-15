import React, { useState } from "react";
import "./Account.scss";

function Account() {
  const [user, setUser] = useState(true);
  const userData = {
    name: "Script_ing",
    img: "scriptinglogo.png",
    verified: true,
  };

  return (
    <div className="account">
      {user ? (
        <>
          <img
            src="/images/user/pfp.svg"
            alt={userData.name + "profile image"}
            width={35}
            height={35}
          />
          <h3>{userData.name}</h3>
          {userData.verified && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
            >
              <g
                id="Group_43"
                data-name="Group 43"
                transform="translate(-1712 -45)"
              >
                <path
                  id="Path_42"
                  data-name="Path 42"
                  d="M12.5,0A12.5,12.5,0,1,1,0,12.5,12.5,12.5,0,0,1,12.5,0Z"
                  transform="translate(1712 45)"
                  fill="#00b1ff"
                />
                <text
                  id="_"
                  data-name="✓"
                  transform="translate(1718 63)"
                  fill="#fff"
                  font-size="17"
                  font-family="SegoeUIEmoji, Segoe UI Emoji"
                >
                  <tspan x="0" y="0">
                    ✓
                  </tspan>
                </text>
              </g>
            </svg>
          )}
          <button className="button" onClick={() => setUser(false)}>
            <svg
              id="logout_black_24dp"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g id="Group_10" data-name="Group 10">
                <path
                  id="Path_32"
                  data-name="Path 32"
                  d="M0,0H24V24H0Z"
                  fill="none"
                />
              </g>
              <g id="Group_11" data-name="Group 11">
                <path
                  id="Path_33"
                  data-name="Path 33"
                  d="M17,8,15.59,9.41,17.17,11H9v2h8.17l-1.58,1.58L17,16l4-4ZM5,5h7V3H5A2.006,2.006,0,0,0,3,5V19a2.006,2.006,0,0,0,2,2h7V19H5Z"
                  fill="#8358e8"
                />
              </g>
            </svg>
            <h4>Logout</h4>
          </button>
        </>
      ) : (
        <>
          <a href="/signup" className="button">
            <h4>Sign Up</h4>
          </a>
          <a href="/login" className="button">
            <h4>Login</h4>
          </a>
        </>
      )}
    </div>
  );
}

export default Account;
