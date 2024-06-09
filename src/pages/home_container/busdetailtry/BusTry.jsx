import React, { useState } from 'react';
import Seat from '../../../components/seat/Seat';
import { FaCircle } from 'react-icons/fa6';

const seatsData = [
    { id: 1, booked: true, selected: false },
    { id: 2, booked: true, selected: false },
    { id: 3, booked: false, selected: false },
    { id: 4, booked: false, selected: false },
    { id: 5, booked: false, selected: false },
    { id: 6, booked: false, selected: false },
    { id: 7, booked: false, selected: false },
    { id: 8, booked: false, selected: false },
    { id: 9, booked: false, selected: false },
    { id: 10, booked: false, selected: false },
    { id: 11, booked: false, selected: false },
    { id: 12, booked: false, selected: false },
    { id: 13, booked: false, selected: false },
    { id: 14, booked: false, selected: false },
    { id: 15, booked: false, selected: false },
    { id: 16, booked: false, selected: false },
    { id: 17, booked: false, selected: false },
    { id: 18, booked: false, selected: false },
    { id: 19, booked: false, selected: false },
    { id: 20, booked: false, selected: false },
    { id: 21, booked: false, selected: false },
    { id: 22, booked: false, selected: false },
    { id: 23, booked: false, selected: false },
    { id: 24, booked: false, selected: false },
];

const BusDetails = () => {
    const [seats, setSeats] = useState(seatsData);

    const handleSeatClick = (clickedSeat) => {
        if (clickedSeat.booked) return;

        setSeats((prevSeats) =>
            prevSeats.map((seat) =>
                seat.id === clickedSeat.id
                    ? { ...seat, selected: !seat.selected }
                    : seat
            )
        );
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Bus Details</h1>
            <div className="flex">
                <div className="flex flex-col justify-center items-center mr-4">
                    {/* <FontAwesomeIcon icon={faCircle} size="2x" className="text-neutral-700 mb-2" /> */}
                    <FaCircle className='text-neutral-700 mb-2 text-2xl' />
                    <div className="text-neutral-700">Driver</div>
                </div>
                <div className="grid grid-cols-4 gap-2">
                    {seats.map((seat) => (
                        <Seat key={seat.id} seat={seat} onClick={handleSeatClick} />
                    ))}
                </div>
            </div>
            <div className="mt-4">
                <h2 className="text-xl font-bold">Selected Seats:</h2>
                {seats.filter(seat => seat.selected).length > 0 ? (
                    <ul>
                        {seats.filter(seat => seat.selected).map((seat) => (
                            <li key={seat.id}>Seat {seat.id}</li>
                        ))}
                    </ul>
                ) : (
                    <p>No seats selected.</p>
                )}
            </div>
        </div>
    );
};

export default BusDetails;
