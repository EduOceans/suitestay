import Bookings from "../bookings/Bookings";
import History from "../history/History";
import ImageButton from "../imageButton/ImageButton";
import "./Body.css";
import deluxeRoom from '../../assets/deluxeroom.jpeg';
import penthousesuite from '../../assets/penthousesuite.jpeg';
import premiersuite from '../../assets/premiersuite.jpeg';

function Body() {
  return (
    <div>
        <Bookings />
        <div className="surface-0">
            <div className="grid justify-content-around overflow-hidden pt-5">
                <ImageButton 
                    imgUrl={deluxeRoom}
                    heading={"£300/night"}
                    subHeading={"Deluxe room"}
                /> 
                <ImageButton 
                    imgUrl={penthousesuite}
                    heading={"£450/night"}
                    subHeading={"Ocean view suite"}
                /> 
                <ImageButton 
                    imgUrl={premiersuite}
                    heading={"£670/night"}
                    subHeading={"Premier suite"}
                /> 

                <div className="col-12 md:col-6 lg:col-6 pt-5">
                    <div className="text-center text-6xl pt-5 about">
                        A dream for all your senses with amazing views of the ocean
                    </div>
                </div>

                
                <History />
                
            </div>
        </div>
    </div>
  );
}

export default Body;
