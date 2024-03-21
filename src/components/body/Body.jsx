import React from "react";
import "./Body.css";
import { Button } from "primereact/button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell, faBed, faWaterLadder, faCalendarDays, faBurger, faWifi } from "@fortawesome/free-solid-svg-icons";

function Body() {
  return (
    <div>
      <div className="surface-0">
        <div class="grid justify-content-around pt-5 ">
          <div class="col-12 md:col-6 lg:col-6 pt-2">
            <div class="text-center border-round-sm font-bold pt-5">
              <img
                src="https://www.iconsuites.com/_storageWeb_/n/17804265468969/ig/5497749322264/b/692033667068/isk/half/ZON_1994-Edit_wide.jpeg"
                className="img-fluid border-round-xl double-image shadow-3"
                alt=""
                width={400}
                height={275}
              />
              <div className="text-2xl font-normal pt-5">Gallery</div>
              <div className="font-light pt-4">
                You can browse our wonderful Suites
              </div>
              <div className="pt-5">
                <Button label="View Suites" outlined />
              </div>
            </div>
          </div>
          <div class="col-12 md:col-6 lg:col-6 pt-2">
            <div class="text-center border-round-sm font-bold pt-5">
              <img
                src="https://webrezpro.com/wp-content/uploads/2022/11/HoldThePhone-BeConfident.jpg"
                className="img-fluid border-round-xl double-image shadow-3"
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

          <div className="col-12 md:col-12 lg:col-12 pt-5">
            <div className="surface-0 background-image">
              <div class="p-3 bg-white font-bold award-winning shadow-3">
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
          </div>
          <div className="col-12 md:col-12 lg:col-12 pt-5 pb-5">
            <div className="text-center content-bottom">
              <div className="Amenities rooftop-title">Amenities</div>
              <div class="grid justify-content-center amenities">
                <div class="col-4 md:col-3 lg:col-2 amenities">
                  <div class="text-center p-3 shadow-3 font-bold amenities-card">
                    <FontAwesomeIcon icon={faBed} className="fa-solid" />
                    <div className="text-md font-light pt-2">Experience luxury and comfort in our exclusive Suite options.</div>
                  </div>
                </div>
                <div class="col-4 md:col-3 lg:col-2 amenities">
                  <div class="text-center p-3 shadow-3 font-bold amenities-card">
                    <FontAwesomeIcon icon={faDumbbell} className="fa-solid" />
                    <div className="text-md font-light pt-2">State-of-the-art gym facilities.</div>
                  </div>
                </div>
                <div class="col-4 md:col-3 lg:col-2 amenities">
                  <div class="text-center p-3 shadow-3 font-bold amenities-card">
                    <FontAwesomeIcon icon={faWaterLadder} className="fa-solid" />
                    <div className="text-md font-light pt-2">Enjoy a refreshing dip in our Infinity Pool.</div>
                  </div>
                </div>
              </div>
              <div class="grid justify-content-center amenities">
                <div class="col-4 md:col-3 lg:col-2 amenities">
                  <div class="text-center p-3 shadow-3 font-bold amenities-card">
                    <FontAwesomeIcon icon={faCalendarDays} className="fa-solid" />
                    <div className="text-md font-light pt-2">Enjoy beautiful events in our versatile event spaces.</div>
                  </div>
                </div>
                <div class="col-4 md:col-3 lg:col-2 amenities">
                  <div class="text-center p-3 shadow-3 font-bold amenities-card">
                    <FontAwesomeIcon icon={faWifi} className="fa-solid" />
                    <div className="text-md font-light pt-2">Stay connected with free high-speed WiFi.</div>
                  </div>
                </div>
                <div class="col-4 md:col-3 lg:col-2 amenities">
                  <div class="text-center p-3 shadow-3 font-bold amenities-card">
                    <FontAwesomeIcon icon={faBurger} className="fa-solid" />
                    <div className="text-md font-light pt-2">Indulge in delectable food and drinks at our onsite venues.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
