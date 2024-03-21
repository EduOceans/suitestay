import React from "react";
import { useParams } from "react-router-dom";
import hotelRooms from "./hotelRooms";

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
      <h2>Room {room.roomNumber}</h2>
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
      </ul>
    </div>
  );
}
