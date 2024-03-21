import Bookings from "../bookings/Bookings";
import ImageButton from "../imageButton/ImageButton";
import "./Body.css";

function Body() {
  return (
    <div>
        <Bookings />
        <div className="surface-0">
            <div className="grid justify-content-around overflow-hidden pt-5">
                <ImageButton 
                    imgUrl={"src/assets/deluxeroom.jpeg"}
                    heading={"£300/night"}
                    subHeading={"Deluxe room"}
                /> 
                <ImageButton 
                    imgUrl={"src/assets/penthousesuite.jpeg"}
                    heading={"£450/night"}
                    subHeading={"Ocean view suite"}
                /> 
                <ImageButton 
                    imgUrl={"src/assets/premiersuite.jpeg"}
                    heading={"£670/night"}
                    subHeading={"Premier suite"}
                /> 

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
