import { Menubar } from "primereact/menubar";
import "./Header.css";
import { Button } from "primereact/button";
// import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { Ripple } from "primereact/ripple";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
function Header() {
  return (
    <div>
      <div className="flex flex-column align-items-center">
          <a
            className="cursor-pointer block lg:hidden text-700 p-ripple"
            style={{
              selector: "@next",
              enterClass: "hidden",
              leaveToClass: "hidden",
              hideOnOutsideClick: true,
            }}
          >
            <i className="pi pi-bars text-4xl"></i>
          </a>
            {/* LOGO */}
            {/* <div className="header-logo">
                <div className="logo">SUITESTAY</div>
                <div className="lines-container">
                <div className="line-left"></div>
                <div className="hotel-sign">H O T E L</div>
                <div className="line-right"></div>
                </div>
            </div> */}
            {/* MENU */}
            <div className="menu mt-4">
                <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row">
                <li>
                    {/* <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 p-ripple">
                    <i className="pi pi-home mr-2"></i>
                    <span>BOOKING</span>
                    </a> */}
                    {/* <Link to={`/Contact`}>

                    <Ripple
                    pt={{
                    root: { style: { background: "var(--primary-color)" } },
                    }}
                />
                    </Link> */}
                    <NavLink
                    to="/Bookings"
                    className="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 p-ripple"
                    >
                    <i className="pi pi-home mr-2"></i>
                    <span>Booking</span>
                    <Ripple
                pt={{
                  root: { style: { background: "var(--primary-color)" } },
                }}
              />
                    </NavLink>
                </li>
                <li className="lg:relative">
                    {/* <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 p-ripple">
                    <i className="pi pi-home mr-2"></i>
                    <span>CONTACT</span>
                    </a> */}
                    <NavLink
                    to="/Contact"
                    className="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 p-ripple"
                    style={{
                        selector: "@next",
                        enterClass: "hidden",
                        enterActiveClass: "scalein",
                        leaveToClass: "hidden",
                        leaveActiveClass: "fadeout",
                        hideOnOutsideClick: true,
                    }}
                    >
                    <i className="pi pi-image mr-2"></i>
                    <span>Contact</span>
                    <Ripple
                pt={{
                  root: { style: { background: "var(--primary-color)" } },
                }}
              />
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to="/Contact"
                    className="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 p-ripple"
                    style={{
                        selector: "@next",
                        enterClass: "hidden",
                        enterActiveClass: "scalein",
                        leaveToClass: "hidden",
                        leaveActiveClass: "fadeout",
                        hideOnOutsideClick: true,
                    }}
                    >
                    <i className="pi pi-envelope mr-2"></i>
                    <span>Reservations</span>
                    <Ripple
                pt={{
                  root: { style: { background: "var(--primary-color)" } },
                }}
              />
                    </NavLink>
                    {/* <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 p-ripple">
                    <i className="pi pi-home mr-2"></i>
                    </a> */}
                </li>
                </ul>
            </div>
            <div className="header-logo">
            <NavLink
                  to="/"
                  className="block text-white font-medium px-6 py-3 lg:px-3 lg:py-2 hover:text-900 hover:surface-100 border-round cursor-pointer transition-colors transition-duration-150 p-ripple"
                >

                <div className="logo">SUITESTAY</div>
                <div className="lines-container">
                <div className="line-left"></div>
                <div className="hotel-sign">H O T E L</div>
                <div className="line-right"></div>
                
                </div>
                <Ripple
                pt={{
                  root: { style: { background: "var(--primary-color)" } },
                }}
              />
                </NavLink>
            </div>
        </div>
    </div>
  );
}

export default Header;
