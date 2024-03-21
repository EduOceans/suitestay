import { useState } from "react";

import { Button } from 'primereact/button';

import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';



function Bookings () {
    const [date, setDate] = useState(null);

    const [selectedNumberNights, setSelectedNumberNights] = useState(null);
    const nights = [
        { name: '1 night', code: '1' },
        { name: '2 nights', code: '2' },
        { name: '3 nights', code: '3' },
        { name: '4 nights', code: '4' },
        { name: '5 nights', code: '5' }
    ];

    const [selectedRoom, setSelectedRoom] = useState(null);
    const rooms = [
        { name: 'Deluxe room', code: 'DR' },
        { name: 'Ocean view suite', code: 'OS' },
        { name: 'Premier suite', code: 'PS' },
    ];

    return (
        <div className="flex justify-content-center booking-section">
            <div className="card flex justify-content-center check-in mt-5 mr-5">
                <Calendar placeholder="Check-in Date" id="buttondisplay" value={date} onChange={(e) => setDate(e.value)} showIcon />
            </div>
            <div className="card flex justify-content-center mt-5 mr-5">
                <Dropdown value={selectedNumberNights} onChange={(e) => setSelectedNumberNights(e.value)} options={nights} optionLabel="name" 
                    placeholder="Number of nights" className="w-full md:w-14rem" />
            </div>
            <div className="card flex justify-content-center mt-5 mr-5">
                <Dropdown value={selectedRoom} onChange={(e) => setSelectedRoom(e.value)} options={rooms} optionLabel="name" 
                    placeholder="Rooms" className="w-full md:w-14rem" />
            </div>  
            <div className="card flex justify-content-center mt-5 mr-5">
                <Button type="submit" label="Submit" />
            </div>
            
        </div>
    )
}

export default Bookings;