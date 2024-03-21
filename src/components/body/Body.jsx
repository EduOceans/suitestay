import "./Body.css";

import ImageButton from "../imageButton/ImageButton";
import Anouncement from "../anouncement/Anouncement";
import About from "../about/About";
import History from "../history/History";


import { Button } from "primereact/button";
import { Link } from "react-router-dom";

function Body() {
  return (
    <div>
      <div className="surface-0">
        <div className="grid justify-content-around overflow-hidden pt-5 border-top-2">
          <div className="col-12 md:col-6 lg:col-6 pt-2">
            <div className="text-center border-round-sm font-bold pt-5">
              <img
                src="https://www.iconsuites.com/_storageWeb_/n/17804265468969/ig/5497749322264/b/692033667068/isk/half/ZON_1994-Edit_wide.jpeg"
                className="img-fluid border-round-xl"
                alt=""
                width={400}
                height={275}
              />
              <div className="text-2xl font-normal pt-5">Gallery</div>
              <div className="font-light pt-4">
                You can browse our wonderful Suites
              </div>
              <div className="pt-5">
              <Link to="/Rooms">
                  <Button label="View Suites" outlined />
                </Link>

              </div>
            </div>
          </div>
          <div className="col-12 md:col-6 lg:col-6 pt-2">
            <div className="text-center border-round-sm font-bold pt-5">
              <img
                src="https://webrezpro.com/wp-content/uploads/2022/11/HoldThePhone-BeConfident.jpg"
                className="img-fluid border-round-xl"
                alt=""
                width={400}
                height={275}
              />
              <div className="text-2xl font-normal pt-5">
                Check Availability
              </div>
              <div className="font-light pt-4">
                Get ready for the trip of a lifetime
              </div>
              <div className="pt-5">
                <Button label="Book" outlined />
              </div>
            </div>
          </div>
          <div className="col-12 md:col-6 lg:col-6 pt-5">
            <div className="text-center text-6xl pt-5 about">
              A dream for all your senses with amazing views of the ocean
            </div>
          </div>

          <div className="col-12 md:col-6 lg:col-12 pt-5">
            <div className="surface-0 background-image">
              <div className="p-3 bg-white font-bold award-winning">
                <div className="text-container">
                  <h5 className="rooftop-heading ">ROOFTOP</h5>
                  <h2 className="rooftop-title">AWARD WINNING PARADISE</h2>
                  <p className="rooftop-text">
                    At our Sea View Rooftop, indulge in panoramic ocean vistas.
                    Savor drinks with the sea as your backdrop, embracing
                    tranquility and natural beauty.
                  </p>
                </div>
              </div>
            </div>
            <div className="surface-0 background-image">
              <div className="text-center p-3 bg-primary font-bold"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
