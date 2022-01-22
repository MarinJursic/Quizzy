import React from "react";
import "./UserInfo.scss";

import { Link } from "react-router-dom";

function UserInfo() {
  const friends = [
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
  ];

  const scheduleImages = {
    "Recal Session": "images/user/schedule/1.svg",
    "Recal Session Today": "images/user/schedule/3.svg",
    Test: "images/user/schedule/2.svg",
  };

  const schedule = [
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
  ];

  return (
    <aside className="userinfo">
      <div className="imgDiv">
        <img
          src="images/user/pfplarge.svg"
          alt="Profile large"
          width={200}
          height={200}
        />
        <svg class="add-image-icon" viewBox="2 1 81.327 81.327">
          <path
            id="add-image-icon"
            d="M 63.96354293823242 74.58171081542969 L 9.745443344116211 74.58171081542969 L 9.745443344116211 20.36360740661621 L 44.59993743896484 20.36360740661621 L 44.59993743896484 12.6181640625 L 9.745443344116211 12.6181640625 C 5.485449314117432 12.6181640625 2 16.10361480712891 2 20.36360740661621 L 2 74.58171081542969 C 2 78.84170532226562 5.485449314117432 82.32715606689453 9.745443344116211 82.32715606689453 L 63.96354293823242 82.32715606689453 C 68.22353363037109 82.32715606689453 71.708984375 78.84170532226562 71.708984375 74.58171081542969 L 71.708984375 39.72721481323242 L 63.96354293823242 39.72721481323242 L 63.96354293823242 74.58171081542969 Z M 33.7950439453125 62.30517959594727 L 26.20450782775879 53.16555786132812 L 15.55452537536621 66.83626556396484 L 58.15446090698242 66.83626556396484 L 44.44503021240234 48.59574508666992 L 33.7950439453125 62.30517959594727 Z M 71.708984375 12.6181640625 L 71.708984375 1 L 63.96354293823242 1 L 63.96354293823242 12.6181640625 L 52.34537887573242 12.6181640625 C 52.38410949707031 12.65689182281494 52.34537887573242 20.36360740661621 52.34537887573242 20.36360740661621 L 63.96354293823242 20.36360740661621 L 63.96354293823242 31.94304466247559 C 64.00226593017578 31.98177146911621 71.708984375 31.94304466247559 71.708984375 31.94304466247559 L 71.708984375 20.36360740661621 L 83.3271484375 20.36360740661621 L 83.3271484375 12.6181640625 L 71.708984375 12.6181640625 Z"
          ></path>
        </svg>
      </div>
      <h2>Script_ing</h2>
      <h3>Student</h3>
      <p>
        Hi, I'm just a 17 year old high school kid who wants to change the
        world. This is my description, where I can say whatever I want.{" "}
      </p>
      <section className="social">
        <div>
          <h3>{friends.length} Friends</h3>
          <h6>(2 online)</h6>
        </div>
        <div>
          {friends.slice(0, 3).map((friend) => (
            <div className="friends">
              <img src={friend.img} alt={friend.img} width={50} height={50} />
              <div
                className="online"
                style={
                  friend.online
                    ? { backgroundColor: "lime" }
                    : { backgroundColor: "gray" }
                }
              />
            </div>
          ))}
        </div>
      </section>
      <section className="schedule">
        <div className="title">
          <h3>Schedule</h3>
          <button> + Add Task</button>
        </div>
        {schedule.map((task) => (
          <div className="task">
            <div className="content">
              <div className="img">
                <img
                  src={scheduleImages[task.type]}
                  alt={task.name}
                  width={30}
                  height={30}
                />
              </div>
              <div className="info">
                <h4>{task.name}</h4>
                <div className="row">
                  <h5>{task.type}</h5>
                  <h5>{task.time}</h5>
                </div>
              </div>
            </div>
            {task.time === "Today" && (
              <Link to="/study">
                <button>Study</button>
              </Link>
            )}
          </div>
        ))}
        <div className="more">
          <Link to="/study">
            <h3>More</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g id="east_black_24dp" transform="translate(-0.13)">
                <rect
                  id="Rectangle_103"
                  data-name="Rectangle 103"
                  width="24"
                  height="24"
                  transform="translate(0.13)"
                  fill="none"
                />
                <path
                  id="Path_62"
                  data-name="Path 62"
                  d="M15,5,13.59,6.41,18.17,11H2v2H18.17l-4.59,4.59L15,19l7-7Z"
                  fill="#484848"
                />
              </g>
            </svg>
          </Link>
        </div>
      </section>
      <section className="schedule">
        <div className="title">
          <h3>Recent</h3>
        </div>
        {schedule.map((task) => (
          <div className="task">
            <div className="content">
              <div className="img">
                <img
                  src={scheduleImages[task.type]}
                  alt={task.name}
                  width={30}
                  height={30}
                />
              </div>
              <div className="info">
                <h4>{task.name}</h4>
                <div className="row">
                  <h5>{task.type}</h5>
                  <h5>{task.time}</h5>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </aside>
  );
}

export default UserInfo;
