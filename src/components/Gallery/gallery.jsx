import { useRef, useState } from "react";
import RoomCard from "../roomcard/Roomcard";
import data from "../../assets/json/Hotel.json"
import StudioApartment from "../../assets/Hotel Room Photos/Studio_apartment.jpg"
import OneBedroomHotelSuite from "../../assets/Hotel Room Photos/OneBedroomHotelSuite"
import TwoBedroomHotelSuite from "../../assets/Hotel Room Photos/TwoBedroomHotelSuite"
import LuxuryPenthouse from "../../assets/Hotel Room Photos/LuxuryPenthouse"
import HistoricTownhouse from "../../assets/Hotel Room Photos/HistoricTownhouse"
export default function Gallery() {
  return (
    <div className="">
      <RoomCard room = {data.hotel_rooms[0]} photo = {StudioApartment}/> 
      <RoomCard room = {data.hotel_rooms[1]} photo = {OneBedroomHotelSuite}/> 
      <RoomCard room = {data.hotel_rooms[2]} photo = {TwoBedroomHotelSuite}/> 
      <RoomCard room = {data.hotel_rooms[3]} photo ={LuxuryPenthouse}/> 
      <RoomCard room = {data.hotel_rooms[4]} photo ={HistoricTownhouse}/> 
    </div>
  );
}
