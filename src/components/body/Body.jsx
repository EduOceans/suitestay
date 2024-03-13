import MainImage from "../main-image/Main-Image";
import Gallery from "../gallery/Gallery";
import Bookings from "../bookings/Bookings";


function Body() {
    return (
        <div>
            <section className="main-image">
                <MainImage />
            </section>
            <section className="container">
                <section className="gallery-section">
                    <Gallery />
                </section>
                <section className="booking-section">
                    <Bookings />
                </section>
            </section>
        </div>
    )
}

export default Body;