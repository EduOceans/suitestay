import React from "react";
import { Menubar } from "primereact/menubar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function navbar(props) {
  const navigate = useNavigate();
  const items = [
    {
      label: "Home",
      icon: "pi pi-envelope",
      command: () => {
        navigate("/");
      },
    },
    {
      label: "Contact",
      icon: "pi pi-phone",
      command: () => {
        navigate("/contact");
      },
    },
    {
      label: "Reservations",
      icon: "pi pi-calendar",
      command: () => {
        navigate("/contact");
      },
    },
  ];

  return (
    <div className="">
      <Menubar model={items}  className="justify-content-center"/>
    </div>
  );
}

export default navbar;
