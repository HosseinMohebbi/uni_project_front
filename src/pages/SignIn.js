import React, { useState } from "react";
import "./SignIn.css";
import { Divider } from "antd";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../store/user.slice";
import { useNavigate } from "react-router";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoginSelector = useSelector((state) => state.isLogin);

  const handleOnEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleOnPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleOnLoginSubmitClick = async () => {
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
        navigate({ pathname: "/" });
        console.log(isLoginSelector);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="sign-in-container">
        <div className="register-title">
          <h2>ورود</h2>
        </div>
        <input
          className="login-input"
          type="email"
          value={email}
          onChange={handleOnEmailChange}
        />
        <input
          className="login-input"
          type="password"
          value={password}
          onChange={handleOnPasswordChange}
        />
        <button className="login-button" onClick={handleOnLoginSubmitClick}>
          ورود
        </button>
      </div>
    </div>
  );
}

export default SignIn;
