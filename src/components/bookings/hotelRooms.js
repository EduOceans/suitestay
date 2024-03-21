import singleRoom from '../../assets/singleroom1.jpg'
import singleRoom2 from '../../assets/singleroom2.jpg'
import deluxeRoom from '../../assets/deluxeroom.jpg'
import deluxeRoom2 from '../../assets/deluxeroom2.jpg'
import SuiteRoom from '../../assets/suiteroom.jpg'
import SuiteRoom2 from '../../assets/suitroom2.jpg'
const hotelRooms = {
    "standard": [
        {
            type: 'Standard Room',
            roomNumber: 101,
            capacity: 2,
            pricePerNight: 100,
            bookedDates: [], // Array to store booked dates for this room
            rating: 2,
            img: singleRoom,
            roomDetails: {
                roomArea: "28m²",
                amenities: [
                    "FREE WI-FI",
                    "Air conditioned",
                    "Alarm Clock",
                    "Balcony",
                    "Complimentary undercover car-parking",
                    "Cots Available",
                    "Daily Room Houskeeping (check Public Holiday’s)",
                    "Desk",
                    "Ensuite bathroom",
                    "Flat screen Television",
                    "Fridge – Bar Fridge",
                ]
            }
        },
        {
            type: 'Standard Room',
            roomNumber: 102,
            capacity: 2,
            pricePerNight: 100,
            bookedDates: [],
            rating: 2,
            img:singleRoom2,
            roomDetails: {
                roomArea: "28m²",
                amenities: [
                    "FREE WI-FI",
                    "Air conditioned",
                    "Alarm Clock",
                    "Balcony",
                    "Complimentary undercover car-parking",
                    "Cots Available",
                    "Daily Room Houskeeping (check Public Holiday’s)",
                    "Desk",
                    "Ensuite bathroom",
                    "Flat screen Television",
                    "Fridge – Bar Fridge",
                    "Hairdryer",
                    "Iron/Ironing board",
                ]
            }
        },
        // need to add more standard rooms maybe
    ],
    "deluxe": [
        {
            type: 'Deluxe Room',
            roomNumber: 201,
            capacity: 3,
            pricePerNight: 150,
            bookedDates: [], // Array to store booked dates for this room
            rating: 3,
            img: deluxeRoom,
            roomDetails: {
                roomArea: "35m²",
                roomDescription: 'The luxuriously elegant suites at the award-winning Grand Palace Hotel are designed to satisfy the most discerning tastes. The welcoming atmosphere, together with the impeccable service of our staff, ensures that our guests will enjoy their experience in Riga, and take with them many fond memories of this historic city.',
                amenities: [
                    "FREE WI-FI",
                    "Air conditioned",
                    "Alarm Clock",
                    "Balcony",
                    "Complimentary undercover car-parking",
                    "Cots Available",
                    "Ensuite bathroom",
                    "Flat screen Television",
                    "Fridge – Bar Fridge",
                    "Hairdryer",
                    "Iron/Ironing board",
                    "Lift/Elevator Access",
                    "Linen and Towels Provided",
                    "Non-smoking (smoking area provided)",
 
                ]
            }
        },
        {
            type: 'Deluxe Room',
            roomNumber: 202,
            capacity: 3,
            pricePerNight: 150,
            bookedDates: [], // Array to store booked dates for this room
            img:deluxeRoom2,
            rating: 3,
            roomDetails: {
                roomArea: "35m²",
                amenities: [
                    "FREE WI-FI",
                    "Air conditioned",
                    "Alarm Clock",
                    "Balcony",
                    "Complimentary undercover car-parking",
                    "Ensuite bathroom",
                    "Flat screen Television",
                    "Fridge – Bar Fridge",
                    "Hairdryer",
                    "Iron/Ironing board",
                    "Lift/Elevator Access",
                    "Linen and Towels Provided",
                    "Non-smoking (smoking area provided)",
                    "Queen bed",
                    "Room Service",
                    "Tea/Coffee Making",
                    "Telephone"
                ]
            }
        },
        // need to add more standard rooms maybe
    ],
    "suite": [
        {
            type: 'Suite Room',
            roomNumber: 301,
            capacity: 4,
            pricePerNight: 200,
            bookedDates: [], // Array to store booked dates for this room
            img: SuiteRoom,
            rating: 5,
            roomDetails: {
                roomArea: "45m²",
                amenities: [
                    "FREE WI-FI",
                    "Air conditioned",
                    "Alarm Clock",
                    "Balcony",
                    "Complimentary undercover car-parking",
                    "Cots Available",
                    "Daily Room Houskeeping (check Public Holiday’s)",
                    "Desk",
                    "Ensuite bathroom",
                    "Flat screen Television",
                    "Fridge – Bar Fridge",
                    "Hairdryer",
                    "Iron/Ironing board",
                    "Lift/Elevator Access",
                    "Linen and Towels Provided",
                    "Non-smoking (smoking area provided)",
                    "Queen bed",
                    "Room Service",
                    "Tea/Coffee Making",
                    "Telephone"
                ]
            }
        },
        {
            type: 'Suite Room',
            roomNumber: 302,
            capacity: 4,
            pricePerNight: 200,
            bookedDates: [], // Array to store booked dates for this room
            img: SuiteRoom2,
            rating: 5,
            roomDetails: {
                roomArea: "45m²",
                amenities: [
                    "FREE WI-FI",
                    "Air conditioned",
                    "Alarm Clock",
                    "Balcony",
                    "Complimentary undercover car-parking",
                    "Cots Available",
                    "Daily Room Houskeeping (check Public Holiday’s)",
                    "Desk",
                    "Ensuite bathroom",
                    "Flat screen Television",
                    "Fridge – Bar Fridge",
                    "Hairdryer",
                    "Iron/Ironing board",
                    "Lift/Elevator Access",
                    "Linen and Towels Provided",
                    "Non-smoking (smoking area provided)",
                    "Queen bed",
                    "Room Service",
                   
                    "Tea/Coffee Making",
                    "Telephone"
                ]
            }
        },
        // Add more suite rooms here
    ],
    //more room types can be added here
};

export default hotelRooms;
