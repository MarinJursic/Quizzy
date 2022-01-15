import React from "react";
import "./UserInfo.scss";

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
    <aside>
      <img
        src="images/user/pfplarge.svg"
        alt="Profile large"
        width={200}
        height={200}
      />
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
          {friends.map((friend) => (
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
            {task.time === "Today" && <button>Study</button>}
          </div>
        ))}
        <div className="more">
          <a href="/study">
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
          </a>
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
