import React, { useState } from "react";
import "./SignOut.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../store/user.slice";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function SignOut() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoginSelector = useSelector((state) => state.isLogin);

  const handleOnLogOutClick = async () => {
    let text = "آیا مطمئن هستید که میخواهید از حساب خود خارج شوید؟";
    // if(confirm(text) == true){
    //   dispatch(
    //     setLogout({
    //       email: undefined,
    //     })
    //   );
    //   navigate({ pathname: "/" });
    //   console.log(isLoginSelector);
    //   // }
    // }else {
    //    return;
    // }
    // const body = {
    //   email: email,
    //   password: password,
    // };
    try {
      // const res = await axios.post("http://localhost:3000/auth/login", body);
      // if (res.data.status === "success") {
      //   console.log(res);
      dispatch(
        setLogout({
          email: undefined,
        })
      );
      window.localStorage.removeItem("access_token")
      navigate({ pathname: "/" });
      console.log(isLoginSelector);
      // }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button onClick={handleOnLogOutClick} className="logout-container">
        <div>خروج از حساب</div>
        <FontAwesomeIcon icon={faArrowRightFromBracket} />
      </button>
    </div>
  );
}

export default SignOut;
