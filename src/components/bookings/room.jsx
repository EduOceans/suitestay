import React from "react";
import { useParams } from "react-router-dom";
import hotelRooms from "./hotelRooms";

import { Link } from "react-router-dom";
import { Button } from 'primereact/button';
import { Rating } from "primereact/rating";
export default function Room() {
  // Access the room number from URL parameters
  let { roomNumber } = useParams();

  // Function to find the room by room number
  const findRoomByNumber = (roomNumber) => {
    for (const roomType in hotelRooms) {
      const foundRoom = hotelRooms[roomType].find(
        (room) => room.roomNumber.toString() === roomNumber
      );
      if (foundRoom) {
        return foundRoom;
      }
    }
    return null;
  };

  // Get the room based on the room number
  const room = findRoomByNumber(roomNumber);

  if (!room) {
    return <p>Room not found</p>;
  }

  return (
    <div>
        <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
      <div className="grid">
        <div className="col-12 lg:col-6">
          <div className="flex">
            {/* <div>
              <img src="images/blocks/ecommerce/productoverview/product-overview-1-1.png" className="w-full" alt="Product Overview" />
            </div> */}
            <div className="flex flex-column px-3">
            <Link to="/Rooms">
            <Button icon="pi pi-angle-left" className="w-full mb-5" label="Back to rooms"></Button>
                </Link>
            <div className="text-3xl font-medium text-900 mb-3">
                      {room.type}
                    </div>
            <img
                      src={room.img}
                      className="w-full"
                      alt={`Room ${room.roomNumber}`}
                    />
            </div>
          </div>
        </div>
        <div className="col-12 lg:col-6 py-5 lg:py-3 lg:pl-5">
          <ol className="flex list-none m-0 pt-0 px-0 pb-3 align-items-center text-sm text-600 mb-3 overflow-x-auto">
            <li className="mr-2">Category</li>
            <li className="mr-2 inline-flex align-items-center"><i className="pi pi-angle-right text-sm"></i></li>
            <li className="mr-2">Category</li>
            <li className="mr-2 inline-flex align-items-center"><i className="pi pi-angle-right text-sm"></i></li>
            <li className="mr-2 inline-flex align-items-center">Category</li>
            <li className="mr-2"><i className="pi pi-angle-right text-sm"></i></li>
            <li>Category</li>
          </ol>
          <div className="flex align-items-center justify-content-between mb-4">
            <span className="text-xl font-medium text-900">{room.type}</span>
            <span className="text-xl font-medium text-900">£{room.pricePerNight}</span>
          </div>
          <div className="flex align-items-center justify-content-between lg:justify-content-start mb-5">
            {/* <span className="mr-3">
              <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
              <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
              <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
              <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
              <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
            </span> */}
            <Rating value={room.rating} readOnly cancel={false} />
          </div>
          <p className="p-0 mt-0 mb-5 line-height-3 text-700">
          {room.roomDetails.roomDescription}
          </p>
          {/* <div className="font-bold text-900 mb-3">Color</div>
          <div className="flex align-items-center mb-5">
            <div className="w-2rem h-2rem flex-shrink-0 border-circle bg-cyan-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300"></div>
            <div className="w-2rem h-2rem flex-shrink-0 border-circle bg-purple-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300"></div>
            <div className="w-2rem h-2rem flex-shrink-0 border-circle bg-indigo-500 cursor-pointer border-2 surface-border transition-all transition-duration-300"></div>
          </div> */}
          <div className="mb-3 flex align-items-center justify-content-between">
            <span className="font-bold text-900">T&C's</span>
            <a tabIndex="0" className="cursor-pointer text-600 hover:text-900 transition-colors transition-duration-300 text-sm flex align-items-center">T&C's<i className="ml-1 pi pi-angle-right"></i></a>
          </div>
          {/* <div className="flex align-items-center mb-5">
            <div className="h-2rem w-2rem sm:h-3rem sm:w-3rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-3 cursor-pointer hover:surface-100 transition-duration-150 transition-colors">XS</div>
            <div className="h-2rem w-2rem sm:h-3rem sm:w-3rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-3 cursor-pointer hover:surface-100 transition-duration-150 transition-colors">S</div>
            <div className="h-2rem w-2rem sm:h-3rem sm:w-3rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-3 cursor-pointer hover:surface-100 transition-duration-150 transition-colors">M</div>
            <div className="h-2rem w-2rem sm:h-3rem sm:w-3rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-3 cursor-pointer hover:surface-100 transition-duration-150 transition-colors">L</div>
            <div className="h-2rem w-2rem sm:h-3rem sm:w-3rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-3 cursor-pointer hover:surface-100 transition-duration-150 transition-colors">XL</div>
          </div> */}
          <div className="bg-yellow-200 text-yellow-900 text-sm inline-flex align-items-center px-2 py-1 font-medium mb-2">
            <i className="pi pi-exclamation"></i>
            <span>Only a few Rooms left!</span>
          </div>
          <h3>Amenities:</h3>
      <ul className="mb-6">
        {room.roomDetails.amenities.map((amenity, index) => (
          <li key={index}>{amenity}</li>
        ))}
      </ul>
          <Button icon="pi pi-shopping-cart" className="w-full mb-5" label="Make a Booking"></Button>
          <ul className="list-none p-0 m-0 text-sm text-600">
            <li className="flex align-items-center mb-3">
              <i className="pi pi-credit-card mr-2"></i>
              <span>Pay in 21 days</span>
            </li>
            <li className="flex align-items-center mb-3">
              <i className="pi pi-send mr-2"></i>
              <span>Free Shipping</span>
            </li>
            <li className="flex align-items-center">
              <i className="pi pi-refresh mr-2"></i>
              <span>30 Days Return Policy</span>
            </li>
          </ul>
        </div>
      </div>
    </div>


      {/* <h2>Room {room.roomNumber}</h2>
      <img src={room.img} alt={`Room ${room.roomNumber}`} />
      <p>Capacity: {room.capacity}</p>
      <p>Price per Night: £{room.pricePerNight}</p>
      <p>Room Area: {room.roomDetails.roomArea}</p>
      <p>Rating: {room.rating}</p>
      <h3>Amenities:</h3>
      <ul>
        {room.roomDetails.amenities.map((amenity, index) => (
          <li key={index}>{amenity}</li>
        ))}
      </ul> */}
    </div>
  );
}
