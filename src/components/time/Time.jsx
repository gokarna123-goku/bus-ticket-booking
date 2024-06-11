import React, { useState } from 'react'

const BusTime = () => {
    const [busLeavingTime, setBusLeavingTime] = useState('');

    const handleBusLeavingChange = (event) => {
        setBusLeavingTime(event.target.value);
    };

    return (
        <div className="w-full space-y-4">
            {!busLeavingTime ? (
                <>
                    {/* <h2 className="text-xl text-neutral-800 dark:text-neutral-100 font-medium">
                        Choose your BusTime
                    </h2> */}
                    <div className="w-full grid grid-cols-2 gap-10">
                        <div className="">
                            <label htmlFor="busLeavingTime" className="block mb-2 font-bold">
                                Bus Time
                            </label>
                            <select
                                id="busLeavingTime"
                                value={busLeavingTime}
                                onChange={handleBusLeavingChange}
                                className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-10 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900"
                            >
                                <option value="">Select a Time</option>
                                <option value="04:00 AM">4:00 AM</option>
                                <option value="05:00 AM">5:00 AM</option>
                                <option value="12:00 PM">12:00 PM</option>
                                <option value="05:15 PM">5:15 PM</option>
                                <option value="06:00 PM">6:00 PM</option>
                            </select>
                        </div>
                    </div>
                </>
            ) : (
                <div className='space-y-5'>
                    <div className="w-full flex items-center gap-x-3">
                        <div className="w-fit text-base font-semibold">
                            Bus Leaving At:-  <span className="ml-1.5 font-medium">
                                {busLeavingTime}
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default BusTime