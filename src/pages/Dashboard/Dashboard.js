import React from "react";
import "./Dashboard.scss";
import Navbar from "../../components/Navbar/Navbar";
import UserInfo from "../../components/UserInfo/UserInfo";

function Dashboard() {
  return (
    <main>
      <Navbar />
      <section className="dashboard">
        <div className="content">
          <div className="warning">
            <h2>
              Quizzy will be going under maintenance from 7-12PM EST on
              Thursday. Thanks for your cooperation.
            </h2>
          </div>
          <h1>Hi Script</h1>
          <section className="infoBar">
            <div className="infoBox">
              <div className="infoImage" style={{ backgroundColor: "#FFCEA8" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25.602"
                  height="40.96"
                  viewBox="0 0 25.602 40.96"
                >
                  <g
                    id="flame-svgrepo-com"
                    transform="translate(-114.73 0.001)"
                  >
                    <path
                      id="Path_200"
                      data-name="Path 200"
                      d="M121.509,40.905a.442.442,0,0,0,.577-.629A10.127,10.127,0,0,1,121.5,30.24c3.345-7.478,5.381-11.351,5.381-11.351a26.925,26.925,0,0,0,4.018,8.539c2.825,3.868,4.371,8.733,1.878,12.785a.442.442,0,0,0,.576.626c3.085-1.578,6.546-4.744,6.936-11.044a21.555,21.555,0,0,0-1.152-8.021c-1.388-4.311-3.095-6.322-4.082-7.186a.442.442,0,0,0-.73.362c.288,4.651-1.462,5.831-2.458,3.171a16.277,16.277,0,0,1-.63-5.138,17.569,17.569,0,0,0-3.464-10.677A12.092,12.092,0,0,0,125.6.093a.442.442,0,0,0-.71.381c.183,2.526.017,9.764-6.333,18.411-5.758,8.021-3.527,14.182-2.735,15.85A13.058,13.058,0,0,0,121.509,40.905Z"
                      transform="translate(0 0)"
                      fill="#ff8626"
                    />
                  </g>
                </svg>
              </div>
              <div className="infoContent">
                <h3>Streak</h3>
                <h2>2</h2>
              </div>
            </div>
            <div className="infoBox">
              <div className="infoImage" style={{ backgroundColor: "#D6D6D6" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34.875"
                  height="47"
                  viewBox="0 0 34.875 47"
                >
                  <g id="pending_actions_black_24dp" transform="translate(4.5)">
                    <rect
                      id="Rectangle_165"
                      data-name="Rectangle 165"
                      width="29"
                      height="47"
                      transform="translate(-2)"
                      fill="none"
                    />
                    <path
                      id="Path_76"
                      data-name="Path 76"
                      d="M29.187,22.312A9.688,9.688,0,1,0,38.875,32,9.691,9.691,0,0,0,29.187,22.312Zm3.2,14.241-4.166-4.166v-6.2h1.938v5.406l3.584,3.584ZM31.125,4.875H24.964a5.789,5.789,0,0,0-10.927,0H7.875A3.886,3.886,0,0,0,4,8.75V37.813a3.886,3.886,0,0,0,3.875,3.875H19.713a13.065,13.065,0,0,1-2.751-3.875H7.875V8.75H11.75v5.813h15.5V8.75h3.875v9.842A13.621,13.621,0,0,1,35,19.755v-11A3.886,3.886,0,0,0,31.125,4.875ZM19.5,8.75a1.938,1.938,0,1,1,1.938-1.938A1.943,1.943,0,0,1,19.5,8.75Z"
                      transform="translate(-8.5 0.938)"
                      fill="#4b4b4b"
                    />
                  </g>
                </svg>
              </div>
              <div className="infoContent">
                <h3>Pending</h3>
                <h2>2</h2>
              </div>
            </div>
            <div className="infoBox">
              <div className="infoImage" style={{ backgroundColor: "#A8FFAB" }}>
                <svg
                  id="task_black_24dp"
                  xmlns="http://www.w3.org/2000/svg"
                  width="41.554"
                  height="41.554"
                  viewBox="0 0 41.554 41.554"
                >
                  <g id="Group_13" data-name="Group 13">
                    <path
                      id="Path_77"
                      data-name="Path 77"
                      d="M0,0H41.554V41.554H0Z"
                      fill="none"
                    />
                  </g>
                  <g
                    id="Group_14"
                    data-name="Group 14"
                    transform="translate(6.926 3.463)"
                  >
                    <path
                      id="Path_78"
                      data-name="Path 78"
                      d="M21.314,2H7.463A3.458,3.458,0,0,0,4.017,5.463L4,33.166a3.458,3.458,0,0,0,3.446,3.463H28.24A3.473,3.473,0,0,0,31.7,33.166V12.389ZM28.24,33.166H7.463V5.463h12.12V14.12H28.24ZM12.345,21.132,9.887,23.574,16.016,29.7l9.8-9.8-2.441-2.441L16.033,24.8Z"
                      transform="translate(-4 -2)"
                      fill="#3dae45"
                    />
                  </g>
                </svg>
              </div>
              <div className="infoContent">
                <h3>Completed</h3>
                <h2>2</h2>
              </div>
            </div>
            <div className="infoBox">
              <div className="infoImage" style={{ backgroundColor: "#C8A8FF" }}>
                <svg
                  id="people_black_24dp"
                  xmlns="http://www.w3.org/2000/svg"
                  width="43.433"
                  height="43.433"
                  viewBox="0 0 43.433 43.433"
                >
                  <path
                    id="Path_85"
                    data-name="Path 85"
                    d="M0,0H43.433V43.433H0Z"
                    fill="none"
                  />
                  <path
                    id="Path_86"
                    data-name="Path 86"
                    d="M14.668,20.835C10.433,20.835,2,22.952,2,27.169v3.167H27.336V27.169C27.336,22.952,18.9,20.835,14.668,20.835ZM6.235,26.717a17.449,17.449,0,0,1,8.433-2.262A17.449,17.449,0,0,1,23.1,26.717Zm8.433-9.049a6.334,6.334,0,1,0-6.334-6.334A6.341,6.341,0,0,0,14.668,17.668Zm0-9.049a2.715,2.715,0,1,1-2.715,2.715A2.711,2.711,0,0,1,14.668,8.619Zm12.74,12.324a7.587,7.587,0,0,1,3.547,6.225v3.167h7.239V27.169C38.194,23.513,31.86,21.432,27.408,20.944Zm-1.882-3.276A6.334,6.334,0,1,0,25.526,5a6.235,6.235,0,0,0-2.715.633,9.883,9.883,0,0,1,0,11.4A6.235,6.235,0,0,0,25.526,17.668Z"
                    transform="translate(1.619 4.049)"
                    fill="#623dae"
                  />
                </svg>
              </div>
              <div className="infoContent">
                <h3>Friends Online</h3>
                <h2>2</h2>
              </div>
            </div>
          </section>
        </div>
      </section>
      <UserInfo />
    </main>
  );
}

export default Dashboard;
