import React from "react";
import "./Drawer.css";
import { Link, useNavigate } from "react-router-dom";

function Drawer(props) {
  const drawerItems = props.productItems;
  
  const navigate = useNavigate();

  const itemClickHandler = () => {
    navigate({pathname: "/setText"})
  }
 
  return (
    <div className="drawer-wrapper">
      {/* {drawerItems} */}
      {/* <button onClick={() => console.log(drawerItem)}>{}</button> */}
      <ul className="drawe-items-container">
        {drawerItems.map((drawerItem) => (
          <li onClick={itemClickHandler}>{drawerItem.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Drawer;
