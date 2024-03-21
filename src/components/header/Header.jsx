import React from "react";
import { Menubar } from "primereact/menubar";
import "./Header.css";
import {
  NavLink,
} from "react-router-dom";

function Header() {
  return (
    <div className="backgroundImage row">
      <div className="col-12">
        <div className="header-logo">
          <NavLink className="nav-links" to="/">
            <div className="logo">SUITESTAY</div>
            <div className="lines-container">
              <div className="line-left"></div>
              <div className="hotel-sign">H O T E L</div>
              <div className="line-right"></div>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header;
