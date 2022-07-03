import React, { useState } from "react";
import "../styles/form.css";
import axios from "axios";
import Modal from "./modal.js";

export function Form({
  online,
  isOnline,
  checkLogin,
  checkLoginStatic,
  setUserLogin,
  setUserPass,
  userData,
}) {
  const [users, setUsers] = useState([]);

  const [loginState, setLoginState] = useState(false);

  const listUsers = () => {
    axios.get("http://127.0.0.1:3001/users").then((req) => {
      setUsers(req.data);
    });
  };

  listUsers();
  if (loginState === true) {
    checkLogin();
    setLoginState(false);
  }
  // checkLogin();

  return (
    <div className="form">
      <div className="loginPart">
        <h1>Login</h1>
        <input
          type="text"
          name="username"
          autoComplete="off"
          placeholder="try with test"
          onChange={(event) => setUserLogin(event.target.value)}
        />
        <input
          type="password"
          name="password"
          autoComplete="off"
          placeholder="try with 1234"
          onChange={(event) =>
            setUserPass(event.target.value) &
            setTimeout(() => setLoginState(true), 2000)
          }
        />
        <input
          type="submit"
          value="➤"
          onClick={() =>
            checkLoginStatic(
              document.getElementsByName("username")[0].value,
              document.getElementsByName("password")[0].value
            )
          }
        ></input>
      </div>
      <div className="users_list">
        <h1> Users created: </h1>
        {users.map((user) => (
          <div className="card">
            <img alt={user.username} src={user.avatar} />
            <h2>{user.username}</h2>
          </div>
        ))}
      </div>

      <Modal online={online} checkOnline={isOnline} userData={userData} />
    </div>
  );
}

export default Form;
