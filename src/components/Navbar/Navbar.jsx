import React from "react";
import "./Navbar.scss";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/userActions";

import { Link } from "react-router-dom";

function Navbar() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <aside className="navbar">
      <nav>
        <ul>
          <li className="active">
            <Link to="/dashboard">
              <svg
                id="timeline_black_24dp"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="52"
                viewBox="0 0 30 52"
              >
                <g id="Group_2" data-name="Group 2">
                  <rect
                    id="Rectangle_37"
                    data-name="Rectangle 37"
                    width="30"
                    height="52"
                    fill="none"
                  />
                </g>
                <g
                  id="Group_4"
                  data-name="Group 4"
                  transform="translate(1 19.883)"
                >
                  <g id="Group_3" data-name="Group 3">
                    <path
                      id="Path_14"
                      data-name="Path 14"
                      d="M29,8a2.33,2.33,0,0,1-2.545,2,2.718,2.718,0,0,1-.649-.07l-4.531,3.55a1.416,1.416,0,0,1,.089.52,2.33,2.33,0,0,1-2.545,2,2.33,2.33,0,0,1-2.545-2,1.416,1.416,0,0,1,.089-.52l-3.245-2.55a3.164,3.164,0,0,1-1.324,0L6,15.49a1.363,1.363,0,0,1,.089.51,2.33,2.33,0,0,1-2.545,2A2.33,2.33,0,0,1,1,16a2.33,2.33,0,0,1,2.545-2,2.718,2.718,0,0,1,.649.07L10,9.52A1.416,1.416,0,0,1,9.909,9a2.33,2.33,0,0,1,2.545-2A2.33,2.33,0,0,1,15,9a1.416,1.416,0,0,1-.089.52l3.245,2.55a3.164,3.164,0,0,1,1.324,0L24,8.51A1.363,1.363,0,0,1,23.909,8a2.33,2.33,0,0,1,2.545-2A2.33,2.33,0,0,1,29,8Z"
                      transform="translate(-1 -6)"
                      fill="#8358e8"
                    />
                  </g>
                </g>
              </svg>
              <h3>Overview</h3>
            </Link>
          </li>
          <li>
            <Link to="/study">
              <svg
                id="sticky_note_2_black_24dp"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
              >
                <rect
                  id="Rectangle_39"
                  data-name="Rectangle 39"
                  width="30"
                  height="30"
                  fill="none"
                />
                <path
                  id="Path_19"
                  data-name="Path 19"
                  d="M24.333,5.678V17.727H17.667v6.694h-12V5.678H24.333m0-2.678H5.667A2.68,2.68,0,0,0,3,5.678V24.421A2.68,2.68,0,0,0,5.667,27.1H19l8-8.033V5.678A2.68,2.68,0,0,0,24.333,3ZM15,17.727H8.333V15.049H15Zm6.667-5.355H8.333V9.694H21.667Z"
                  transform="translate(0 0)"
                  fill="#7b7b7b"
                />
              </svg>
              <h3>Study</h3>
            </Link>
          </li>
          <li>
            <Link to="/friends">
              <svg
                id="people_black_24dp"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
              >
                <path
                  id="Path_103"
                  data-name="Path 103"
                  d="M0,0H30V30H0Z"
                  fill="none"
                />
                <path
                  id="Path_104"
                  data-name="Path 104"
                  d="M11.1,17.5c-3.042,0-9.1,1.671-9.1,5V25H20.2V22.5C20.2,19.171,14.142,17.5,11.1,17.5ZM5.042,22.143A11.7,11.7,0,0,1,11.1,20.357a11.7,11.7,0,0,1,6.058,1.786ZM11.1,15a4.8,4.8,0,0,0,4.55-5A4.8,4.8,0,0,0,11.1,5a4.8,4.8,0,0,0-4.55,5A4.8,4.8,0,0,0,11.1,15Zm0-7.143A2.051,2.051,0,0,1,13.05,10a2.051,2.051,0,0,1-1.95,2.143A2.051,2.051,0,0,1,9.15,10,2.05,2.05,0,0,1,11.1,7.857Zm9.152,9.729A6.133,6.133,0,0,1,22.8,22.5V25H28V22.5C28,19.614,23.45,17.971,20.252,17.586ZM18.9,15a4.8,4.8,0,0,0,4.55-5A4.8,4.8,0,0,0,18.9,5a4.152,4.152,0,0,0-1.95.5,8.438,8.438,0,0,1,0,9A4.152,4.152,0,0,0,18.9,15Z"
                  transform="translate(0 0)"
                  fill="#7b7b7b"
                />
              </svg>
              <h3>Friends</h3>
            </Link>
          </li>
          <li>
            <Link to="/payments">
              <svg
                id="credit_card_black_24dp"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
              >
                <path
                  id="Path_20"
                  data-name="Path 20"
                  d="M0,0H30V30H0Z"
                  fill="none"
                />
                <path
                  id="Path_21"
                  data-name="Path 21"
                  d="M25.4,4H4.6A2.658,2.658,0,0,0,2.013,6.75L2,23.25A2.669,2.669,0,0,0,4.6,26H25.4A2.669,2.669,0,0,0,28,23.25V6.75A2.669,2.669,0,0,0,25.4,4Zm0,19.25H4.6V15H25.4Zm0-13.75H4.6V6.75H25.4Z"
                  transform="translate(0 0)"
                  fill="#7b7b7b"
                />
              </svg>
              <h3>Payments</h3>
            </Link>
          </li>
          <li>
            <Link to="/changelog">
              <svg
                id="notes_black_24dp"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
              >
                <path
                  id="Path_22"
                  data-name="Path 22"
                  d="M0,0H30V30H0Z"
                  fill="none"
                />
                <path
                  id="Path_23"
                  data-name="Path 23"
                  d="M27,11.01,3,11v2H27ZM3,16H19v2H3ZM27,6H3V8.01L27,8Z"
                  transform="translate(0 3)"
                  fill="#7b7b7b"
                />
              </svg>

              <h3>Changelog</h3>
            </Link>
          </li>
          <li>
            <Link to="/settings">
              <svg
                id="settings_black_24dp"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  id="Path_15"
                  data-name="Path 15"
                  d="M0,0H24V24H0Z"
                  fill="none"
                />
                <path
                  id="Path_16"
                  data-name="Path 16"
                  d="M19.43,12.98A7.793,7.793,0,0,0,19.5,12a7.793,7.793,0,0,0-.07-.98l2.11-1.65a.5.5,0,0,0,.12-.64l-2-3.46a.5.5,0,0,0-.44-.25.467.467,0,0,0-.17.03l-2.49,1a7.306,7.306,0,0,0-1.69-.98l-.38-2.65A.488.488,0,0,0,14,2H10a.488.488,0,0,0-.49.42L9.13,5.07a7.683,7.683,0,0,0-1.69.98l-2.49-1a.566.566,0,0,0-.18-.03.5.5,0,0,0-.43.25l-2,3.46a.493.493,0,0,0,.12.64l2.11,1.65A7.931,7.931,0,0,0,4.5,12a7.931,7.931,0,0,0,.07.98L2.46,14.63a.5.5,0,0,0-.12.64l2,3.46a.5.5,0,0,0,.44.25.467.467,0,0,0,.17-.03l2.49-1a7.306,7.306,0,0,0,1.69.98l.38,2.65A.488.488,0,0,0,10,22h4a.488.488,0,0,0,.49-.42l.38-2.65a7.683,7.683,0,0,0,1.69-.98l2.49,1a.566.566,0,0,0,.18.03.5.5,0,0,0,.43-.25l2-3.46a.5.5,0,0,0-.12-.64Zm-1.98-1.71a5.343,5.343,0,0,1,.05.73c0,.21-.02.43-.05.73l-.14,1.13.89.7,1.08.84-.7,1.21-1.27-.51-1.04-.42-.9.68a5.857,5.857,0,0,1-1.25.73l-1.06.43-.16,1.13L12.7,20H11.3l-.19-1.35-.16-1.13-1.06-.43a5.674,5.674,0,0,1-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21,1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7L4.72,8.6l.7-1.21,1.27.51,1.04.42.9-.68a5.857,5.857,0,0,1,1.25-.73l1.06-.43.16-1.13L11.3,4h1.39l.19,1.35.16,1.13,1.06.43a5.674,5.674,0,0,1,1.23.71l.91.7,1.06-.43,1.27-.51.7,1.21-1.07.85-.89.7.14,1.13ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2.006,2.006,0,0,1,12,14Z"
                  fill="#7b7b7b"
                />
              </svg>

              <h3>Settings</h3>
            </Link>
          </li>
          <li>
            <Link to="/admin">
              <svg
                id="admin_panel_settings_black_24dp"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
              >
                <g id="Group_5" data-name="Group 5">
                  <rect
                    id="Rectangle_38"
                    data-name="Rectangle 38"
                    width="30"
                    height="30"
                    fill="none"
                  />
                </g>
                <g id="Group_7" data-name="Group 7" transform="translate(3 3)">
                  <g id="Group_6" data-name="Group 6">
                    <circle
                      id="Ellipse_5"
                      data-name="Ellipse 5"
                      cx="1.12"
                      cy="1.12"
                      r="1.12"
                      transform="translate(17.231 15.225)"
                      fill="#7b7b7b"
                    />
                    <path
                      id="Path_17"
                      data-name="Path 17"
                      d="M17,17.5c-.73,0-2.19.36-2.24,1.08a2.729,2.729,0,0,0,4.48,0C19.19,17.86,17.73,17.5,17,17.5Z"
                      transform="translate(1.546 1.901)"
                      fill="#7b7b7b"
                      fill-rule="evenodd"
                    />
                    <path
                      id="Path_18"
                      data-name="Path 18"
                      d="M22.5,13.517V7.251L12.75,3,3,7.251v6.383A13.277,13.277,0,0,0,12.75,26.4a11.916,11.916,0,0,0,2.08-.715A7.794,7.794,0,1,0,22.5,13.517ZM13.4,21.2a7.5,7.5,0,0,0,.3,2.106,8.563,8.563,0,0,1-.949.39A10.67,10.67,0,0,1,5.6,13.634V8.954l7.15-3.12,7.15,3.12v4.563A7.8,7.8,0,0,0,13.4,21.2Zm7.8,5.2a5.2,5.2,0,1,1,5.2-5.2A5.2,5.2,0,0,1,21.2,26.4Z"
                      transform="translate(-3 -3)"
                      fill="#7b7b7b"
                      fill-rule="evenodd"
                    />
                  </g>
                </g>
              </svg>
              <h3>Admin panel</h3>
            </Link>
          </li>
          <li className="plus">
            <h4>
              Upgrade to <strong>Quizzy+ </strong>for more features.
            </h4>
            <Link to="/quizzyplus" className="plusLink">
              Get Quizzy+
            </Link>
          </li>
          <li className="logout">
            <button>
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
                    fill="#7b7b7b"
                  />
                </g>
              </svg>
              <h3 onClick={handleLogout}>Logout</h3>
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Navbar;
