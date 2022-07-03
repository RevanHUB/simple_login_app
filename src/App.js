import React, { useState } from "react";
import axios, { Axios, AxiosError } from "axios";
import Form from "./components/form.js";
import "./styles/nav.css";
import "./styles/main.css";

function App() {
  const [online, isOnline] = useState(false);
  const [userLogin, setUserLogin] = useState("");
  const [userPass, setUserPass] = useState("");
  const [userData, setUserData] = useState([]);
  const checkLogin = () => {
    axios
      .get("http://127.0.0.1:3001/checkLogin/" + userLogin + "&" + userPass)
      .then((req) => {
        req.data !== "" ? isOnline(true) : isOnline(false);
        setUserData(req.data);
      });
  };
  const checkLoginStatic = (userLogin, userPass) => {
    axios
      .get("http://127.0.0.1:3001/checkLogin/" + userLogin + "&" + userPass)
      .then((req) => {
        req.data !== "" ? isOnline(true) : isOnline(false);
        setUserData(req.data);
      });
  };
  return (
    <div className="App">
      {online === true ? (
        <nav data-category="online">
          <h1>Online</h1>
        </nav>
      ) : (
        <nav data-category="offline">
          <h1>Offline</h1>
        </nav>
      )}
      <Form
        online={online}
        isOnline={isOnline}
        checkLogin={checkLogin}
        checkLoginStatic={checkLoginStatic}
        setUserLogin={setUserLogin}
        setUserPass={setUserPass}
        userData={userData}
      />
      <svg preserveAspectRatio="xMidYMid" viewBox="0 0 1547 471">
        <g transform="translate(773.5,485.5) scale(1,-1) translate(-773.5,-485.5)">
          <linearGradient
            id="lg-0.6379737664099316"
            x1="0"
            x2="1"
            y1="0"
            y2="0"
          >
            <stop stopColor="#0099FF" offset="0"></stop>
            <stop stopColor="#0099FF" offset="1"></stop>
          </linearGradient>
          <path d="" fill="url(#lg-0.6379737664099316)" opacity="1">
            <animate
              attributeName="d"
              dur="5s"
              repeatCount="indefinite"
              keyTimes="0;0.333;0.667;1"
              calcMode="spline"
              keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1"
              begin="0s"
              values="M0 0L 0 565.4292812471946Q 154.7 579.5356784200844  309.4 548.7140844560932T 618.8 533.6401972419987T 928.2 515.8952031401776T 1237.6 538.3918620026659T 1547 492.6735361868615L 1547 0 Z;M0 0L 0 575.7315926200788Q 154.7 571.4397737610597  309.4 530.7876699148503T 618.8 549.9016977938765T 928.2 527.8058697006373T 1237.6 538.7255421258963T 1547 525.1874152108046L 1547 0 Z;M0 0L 0 549.9180643285194Q 154.7 585.2577114806902  309.4 555.6878978679043T 618.8 521.8255052173113T 928.2 535.6974725403333T 1237.6 528.3897364678888T 1547 500.26706000843745L 1547 0 Z;M0 0L 0 565.4292812471946Q 154.7 579.5356784200844  309.4 548.7140844560932T 618.8 533.6401972419987T 928.2 515.8952031401776T 1237.6 538.3918620026659T 1547 492.6735361868615L 1547 0 Z"
            ></animate>
          </path>
        </g>
      </svg>
    </div>
  );
}

export default App;
