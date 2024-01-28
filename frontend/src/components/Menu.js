import React from "react";
import "./css/menu.css";
import logo from "../icons/logo.png";

export default function Menu({ menus }) {
  return (
    <div className="menu col-md-3 col-lg-3 col-sm-12">
      <div className="top-logo">
        <img src={logo} alt="" className="logo" />
        <span>TBN</span>
      </div>
      <div className="nav-des">
        <h3>Menu</h3>
      </div>
      <ul>
        {menus.map((item) => (
          <div className="icon-label">
            <img src={item.iconSrc} alt={item.name} />
            <li className="menu-label" key={item.id}>{item.name}</li>
          </div>
        ))}
      </ul>
      <div className="info">
        <div
          className="info-img"
          // style={{ backgroundImage: URL(placeholderImg) }}
        ></div>
        <div className="name-email">
          <span className="info-name">Johne Doe</span>
          <span className="info-email">John@aau.edu.et</span>
        </div>
      </div>
    </div>
  );
}
