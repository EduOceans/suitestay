import ImageButton from "../imageButton/ImageButton";
import "./Body.css";
import { Button } from "primereact/button";

function Body() {
  return (
    <div>
      <div className="surface-0">
        <div className="grid justify-content-around overflow-hidden pt-5">
            <ImageButton 
                imgUrl={"https://assets.website-files.com/64be07bb1f833c7c8821b67c/64bfda83ce7792ff7034126a_DeluxeRoom.jpg"}
                heading={"£300/night"}
                subHeading={"Deluxe room"}
            /> 
            <ImageButton 
                imgUrl={"https://assets.website-files.com/64be07bb1f833c7c8821b67c/64bfe055d6a432f7de96be21_PenthouseSuite.jpg"}
                heading={"£450/night"}
                subHeading={"Ocean view suite"}
            /> 
            <ImageButton 
                imgUrl={"https://assets.website-files.com/64be07bb1f833c7c8821b67c/64bfdca47f54ac3ff269a282_PremierSuite2.jpg"}
                heading={"£670/night"}
                subHeading={"Premier suite"}
            /> 
          {/* <div className="col-12 md:col-4 lg:col-4 pt-2">
            <div className="text-center border-round-sm font-bold pt-5">
              <img
                src=""
                className="img-fluid border-round-xl"
                alt=""
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
          <div className="col-12 md:col-4 lg:col-4 pt-2">
            <div className="text-center border-round-sm font-bold pt-5">
              <img
                src=""
                className="img-fluid border-round-xl"
                alt=""
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
          <div className="col-12 md:col-4 lg:col-4 pt-2">
            <div className="text-center border-round-sm font-bold pt-5">
              <img
                src=""
                className="img-fluid border-round-xl"
                alt=""
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
          </div> */}

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
