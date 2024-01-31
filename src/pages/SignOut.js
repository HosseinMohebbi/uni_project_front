import React, { useState } from "react";
import "./SignOut.css";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../store/user.slice";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

function SignOut() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoginSelector = useSelector((state) => state.isLogin);

  const handleOnLogOutClick = async () => {
    try {
      dispatch(
        setLogout({
          email: undefined,
        })
      );
      window.localStorage.removeItem("access_token");
      navigate({ pathname: "/" });
      console.log(isLoginSelector);
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
