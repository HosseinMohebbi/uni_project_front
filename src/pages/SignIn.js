import React, { useState } from "react";
import "./SignIn.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setLogin } from "../store/user.slice";
import { useNavigate } from "react-router";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();

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
        window.localStorage.setItem("access_token", res.data.data.token);
        navigate({ pathname: "/" });
      }
    } catch (error) {
      console.log("login error", error);
      setErrors({
        email: Object.values(
          error.response.data.errors.find((error) => error.property === "email")
            .constraints
        )[0],
        password: Object.values(
          error.response.data.errors.find(
            (error) => error.property === "password"
          ).constraints
        )[0],
      });
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
          placeholder="ایمیل"
        />
        <p>{errors.email}</p>
        <input
          className="login-input"
          type="password"
          value={password}
          onChange={handleOnPasswordChange}
          placeholder="رمز عبور"
        />
        <p>{errors.password}</p>
        <button className="login-button" onClick={handleOnLoginSubmitClick}>
          ورود
        </button>
      </div>
    </div>
  );
}

export default SignIn;
