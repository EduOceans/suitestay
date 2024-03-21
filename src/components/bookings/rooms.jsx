import React from "react";
import hotelRooms from "./hotelRooms";
import { InputText } from "primereact/inputtext";
import { Ripple } from "primereact/ripple";
import { Rating } from "primereact/rating";
import { Link } from "react-router-dom";
import "./rooms.css"; // Import CSS file for styling
function HotelRooms() {
  return (
    <div>
      <div className="surface-section px-4 py-5 md:px-6 lg:px-8">
        <div className="flex md:align-items-center md:justify-content-between flex-column md:flex-row pb-4 border-bottom-1 surface-border">
          <div className="mb-3 lg:mb-0">
            <div className="text-3xl font-medium text-900 mb-3">
              Available Rooms
            </div>
            <div className="text-700 mr-0 md:mr-3">
              Experience luxury redefined at Suitestay – Where Every Stay is a
              Suite Escape.
            </div>
          </div>
          <span className="p-input-icon-left w-full md:w-auto">
            <i className="pi pi-search"></i>
            <InputText
              type="text"
              placeholder="Search"
              className="w-full md:w-auto"
            />
          </span>
        </div>
      </div>
      <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
        <div className="grid border-1 surface-border border-round">
          {Object.keys(hotelRooms).map((roomType) =>
            hotelRooms[roomType].map((room) => (
              <div
                className="col-12 md:col-6 lg:col-4 md:border-right-1 border-bottom-1 surface-border p-ripple"
                key={room.roomNumber}
              >
                <Link to={`/room/${room.roomNumber}`} className="room-link"> 
                  <Ripple
                    pt={{
                      root: { style: { background: "var(--primary-color)" } },
                    }}
                  />
                  <div className="p-4">
                    <div className="text-3xl font-medium text-900 mb-3">
                      {room.type}
                    </div>
                    <img
                      src={room.img}
                      className="w-full"
                      alt={`Room ${room.roomNumber}`}
                    />
                    <div className="flex align-items-center justify-content-between mt-5 mb-3">
                      <span className="text-900 font-medium text-xl">
                        Room {room.roomNumber}
                      </span>
                      <span
                        className="bg-blue-100 text-blue-700 font-bold text-sm px-2 py-1"
                        style={{ borderRadius: "1rem" }}
                      >
                        NEW
                      </span>
                    </div>
                    <span className="text-900">Capacity: {room.capacity}</span>
                    <div className="text-900 text-xl font-medium mt-3 mb-3">
                      £{room.pricePerNight}.00
                    </div>
                    <div className="text-900 text-xl font-medium mt-3 mb-3">
                      Room Area {room.roomDetails.roomArea}
                    </div>
                    <Rating value={room.rating} readOnly cancel={false} />
                    <div className="text-900 mt-3">
                      <h4>Amenities:</h4>
                      <ul>
                        {room.roomDetails.amenities.map((amenity, index) => (
                          <li key={index}>{amenity}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default HotelRooms;
