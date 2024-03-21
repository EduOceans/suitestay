import { useState } from "react";

import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
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

    const [visible, setVisible] = useState(false);

    const formatDate = (date) => {
        
        return (!date) ? '' : `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
    }

    const onClick = () => {
        console.log('click');

        const booking = {
            date: date,
            nights: selectedNumberNights.code,
            roomType: selectedRoom.code,
        }
        localStorage.setItem("booking", JSON.stringify(booking));

        setVisible(true);
    }

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
                <Button type="submit" label="Submit" onClick={onClick}/>
            </div>
            <div className="card flex justify-content-center">
                <Dialog header="Confirmation" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
                    <p className="m-0">
                        We are delighted to let you know that your booking of <b>{selectedRoom?.name} </b>
                        has been confirmed for <b>{formatDate(date)}</b>.
                        <p>We cannot wait to see you!</p>
                    </p>
                </Dialog>
            </div>
        </div>
    )
}

export default Bookings;