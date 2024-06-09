import React from 'react';
import { FaRegSquare, FaRegCheckSquare } from 'react-icons/fa';

const Seat = ({ seat, onClick }) => {
    const getSeatColor = () => {
        if (seat.booked) return 'text-red-500';
        if (seat.selected) return 'text-green-500';
        return 'text-gray-400';
    };

    return (
        <div
            className={`w-12 h-12 flex items-center justify-center cursor-pointer`}
            onClick={() => onClick(seat)}
        >
            {seat.booked ? (
                <FaRegSquare size="24" className={getSeatColor()} />
            ) : (
                <FaRegCheckSquare size="24" className={getSeatColor()} />
            )}
        </div>
    );
};

export default Seat;
