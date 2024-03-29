import React from "react";
import { Menubar } from "primereact/menubar";
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
      label: "Rooms",
      icon: "pi pi-calendar",
      command: () => {
        navigate("/Rooms");
      },
    },
    {
      label: "Explore",
      icon: "pi pi-search",
      command: () => {
        navigate("/explore");
      },
    },
    {
      label: "Contact",
      icon: "pi pi-phone",
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
