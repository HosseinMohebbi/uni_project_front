import React, { useState } from "react";
import "./Register.css";
import { Divider } from "antd";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setLogin, setRegister } from "../store/user.slice";
import { useNavigate } from "react-router";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickName, setNickName] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleOnPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleOnNickNameChange = (e) => {
    setNickName(e.target.value);
  };

  const handleOnLoginSubmitClick = async () => {
    const body = {
      email: email,
      password: password,
      nickName: nickName,
    };
    try {
      const res = await axios.post("http://localhost:3000/auth/register", body);
      if (res.data.status === "success") {
        console.log(res);
        dispatch(
          setRegister({
            email: email,
            nickName: nickName,
          })
        );
        await handleLogin(email, password);
        navigate({ pathname: "/" });
      }
    } catch (error) {
      // console.log(res);
      console.log("error:");
    }
  };
  const handleLogin = async (email, password) => {
    const body = {
      email: email,
      password: password,
    };
    try {
      const res = await axios.post("http://localhost:3000/auth/login", body);
      if (res.data.status === "success") {
        console.log(res);
        dispatch(
          setLogin({
            email: email,
          })
        );
        window.localStorage.setItem("access_token", res.data.data.token);
        navigate({ pathname: "/" });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="register-container">
        <div className="register-title">
          <h2>ثبت نام</h2>
        </div>
        <input
          className="register-input"
          type="email"
          value={email}
          onChange={handleOnEmailChange}
        />
        <input
          className="register-input"
          type="password"
          value={password}
          onChange={handleOnPasswordChange}
        />
        <input
          className="register-input"
          type="text"
          value={nickName}
          onChange={handleOnNickNameChange}
        />
        <button className="register-button" onClick={handleOnLoginSubmitClick}>
          ثبت نام
        </button>
      </div>
    </div>
  );
}

export default Register;
