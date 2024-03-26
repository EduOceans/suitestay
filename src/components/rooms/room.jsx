import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import hotelRooms from "./hotelRooms";
import { Calendar } from "primereact/calendar";

import { Link } from "react-router-dom";
import { Button } from "primereact/button";
import { Rating } from "primereact/rating";
import { Dialog } from "primereact/dialog";

import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";

export default function Room() {
  // Access the room number from URL parameters
  let { roomNumber } = useParams();
  const [showDialog, setShowDialog] = useState(false);
  const [date, setDate] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const toast = useRef(null);
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
  const handleBookingButtonClick = () => {
    setShowDialog(true);
  };

  const onHide = () => {
    setShowDialog(false);
  };

  const handleSubmit = () => {
    // Construct booking details object
    const bookingDetails = {
      firstName: firstName,
      lastName: lastName,
      date: date ? date.toString() : null,
      room: findRoomByNumber(roomNumber)
    };
  
    // Save booking details to local storage
    localStorage.setItem("bookingDetails", JSON.stringify(bookingDetails));
  
    // Show confirmation toast message
    toast.current.show({
      severity: "success",
      summary: "Booking Successful",
      detail: "Your booking has been confirmed.",
      life: 3000,
    });
  
    // Close the dialog
    setShowDialog(false);
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
              <div className="flex flex-column px-3">
                <Link to="/Rooms">
                  <Button
                    icon="pi pi-angle-left"
                    className="w-full mb-5"
                    label="Back to rooms"
                  ></Button>
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
              <li className="mr-2 inline-flex align-items-center">
                <i className="pi pi-angle-right text-sm"></i>
              </li>
              <li className="mr-2">Category</li>
              <li className="mr-2 inline-flex align-items-center">
                <i className="pi pi-angle-right text-sm"></i>
              </li>
              <li className="mr-2 inline-flex align-items-center">Category</li>
              <li className="mr-2">
                <i className="pi pi-angle-right text-sm"></i>
              </li>
              <li>Category</li>
            </ol>
            <div className="flex align-items-center justify-content-between mb-4">
              <span className="text-xl font-medium text-900">{room.type}</span>
              <span className="text-xl font-medium text-900">
                £{room.pricePerNight}
              </span>
            </div>
            <div className="flex align-items-center justify-content-between lg:justify-content-start mb-5">
              <Rating value={room.rating} readOnly cancel={false} />
            </div>
            <p className="p-0 mt-0 mb-5 line-height-3 text-700">
              {room.roomDetails.roomDescription}
            </p>
            <div className="mb-3 flex align-items-center justify-content-between">
              <span className="font-bold text-900">T&C's</span>
              <a
                tabIndex="0"
                className="cursor-pointer text-600 hover:text-900 transition-colors transition-duration-300 text-sm flex align-items-center"
              >
                T&C's<i className="ml-1 pi pi-angle-right"></i>
              </a>
            </div>
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
            <Button
              icon="pi pi-shopping-cart"
              className="w-full mb-5"
              label="Make a Booking"
              onClick={handleBookingButtonClick}
            ></Button>
            <Dialog
              visible={showDialog}
              onHide={onHide}
              header="Enter Your Details"
              style={{ width: "50vw" }}
              breakpoints={{ "960px": "75vw", "641px": "100vw" }}
              footer={
                <div>
                  <Button
                    label="Cancel"
                    icon="pi pi-times"
                    onClick={onHide}
                    className="p-button-text"
                  />
                  <Button
                    label="Submit"
                    icon="pi pi-check"
                    onClick={handleSubmit}
                    autoFocus
                  />
                </div>
              }
            >
              <div className="grid">
                <div className="col-12">
                  <label htmlFor="firstname1">Firstname</label>
                  <InputText
                    id="firstname1"
                    type="text"
                    className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="lastname1">Lastname</label>
                  <InputText
                    id="lastname1"
                    type="text"
                    className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="date">Date</label>
                  <Calendar
                    id="date"
                    value={date}
                    onChange={(e) => setDate(e.value)}
                    touchUI
                    className="w-full"
                  />
                </div>
              </div>
            </Dialog>

            <Toast ref={toast} />

            <ul className="list-none p-0 m-0 text-sm text-600">
              <li className="flex align-items-center mb-3">
                <i className="pi pi-send mr-2"></i>
                <span>Flexible booking options</span>
              </li>
              <li className="flex align-items-center mb-3">
                <i className="pi pi-user-plus mr-2"></i>
                <span>No additional guest charges</span>
              </li>
              <li className="flex align-items-center">
                <i className="pi pi-credit-card mr-2"></i>
                <span>Secure payment options</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
