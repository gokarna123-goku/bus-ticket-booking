import React from 'react'
import { FaSearch } from 'react-icons/fa'

import Bus1 from '../../assets/bus1.png';
import Bus2 from '../../assets/bus.png';
import Bus3 from '../../assets/bus5.png';
import Bus4 from '../../assets/bus4.png';
import Bus5 from '../../assets/bus7.png';
import Bus6 from '../../assets/bus6.png';
import { Link } from 'react-router-dom';


const Bus = () => {
    return (
        <div className='w-full lg:px-28 md:px-16 sm:px-7 px-4 mt-[13ch] mb-[10ch] space-y-10'>
            {/* Search and Filter */}
            <div className="w-full grid grid-cols-6 gap-14 bg-neutral-200/60 dark:bg-neutral-900 rounded-md px-6 py-5 items-center justify-between">
                <div className="flex items-center gap-x-2.5 col-span-2">
                    <input type="text" placeholder='Search Bus' className="w-full text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 bg-neutral-200/60 dark:bg-neutral-800/60 px-4 h-11 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none" />
                    <button className="bg-violet-600 h-11 px-4 rounded-md text-base text-neutral-50 font-normal">
                        <FaSearch />
                    </button>
                </div>

                <div className="col-span-2"></div>

                {/* Filter */}
                <div className="col-span-2">
                    <select
                        className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-800/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-800/70"
                    >
                        <option value=''>Choose Bus Type</option>
                        <option value='location1'>Tourist Bus</option>
                        <option value='location2'>Private Bus</option>
                        <option value='location3'>Luxury Bus</option>
                        <option value='location3'>Deluxe Bus</option>
                    </select>
                </div>
            </div>
            {/* Bus collection */}
            <div className="w-full grid grid-cols-3 gap-10">
                
                <Link to={"/bus-details"} className="w-full bg-neutral-200/60 block dark:bg-neutral-900/40 rounded-xl p-4">
                    <img src={Bus1} alt="bus img" className="w-full aspect-video object-contain object-center" />
                    <div className="px-3 py-4 space-y-2">
                        <div className="flex items-center justify-between">
                            <h1 className="text-xl font-semibold text-neutral-800 dark:text-neutral-50">
                                Tourist Bus
                            </h1>
                            <h1 className="text-sm font-normal text-neutral-800 dark:text-neutral-50">
                                60 Passengers
                            </h1>
                        </div>
                    </div>
                </Link>

                <Link to={"/bus-details"} className="w-full bg-neutral-200/60 block dark:bg-neutral-900/40 rounded-xl p-4">
                    <img src={Bus2} alt="bus img" className="w-full aspect-video object-contain object-center" />
                    <div className="px-3 py-4 space-y-2">
                        <div className="flex items-center justify-between">
                            <h1 className="text-xl font-semibold text-neutral-800 dark:text-neutral-50">
                                Tourist Bus
                            </h1>
                            <h1 className="text-sm font-normal text-neutral-800 dark:text-neutral-50">
                                60 Passengers
                            </h1>
                        </div>
                    </div>
                </Link>

                <Link to={"/bus-details"} className="w-full bg-neutral-200/60 block dark:bg-neutral-900/40 rounded-xl p-4">
                    <img src={Bus3} alt="bus img" className="w-full aspect-video object-contain object-center" />
                    <div className="px-3 py-4 space-y-2">
                        <div className="flex items-center justify-between">
                            <h1 className="text-xl font-semibold text-neutral-800 dark:text-neutral-50">
                                Tourist Bus
                            </h1>
                            <h1 className="text-sm font-normal text-neutral-800 dark:text-neutral-50">
                                60 Passengers
                            </h1>
                        </div>
                    </div>
                </Link>
                
                <Link to={"/bus-details"} className="w-full bg-neutral-200/60 block dark:bg-neutral-900/40 rounded-xl p-4">
                    <img src={Bus4} alt="bus img" className="w-full aspect-video object-contain object-center" />
                    <div className="px-3 py-4 space-y-2">
                        <div className="flex items-center justify-between">
                            <h1 className="text-xl font-semibold text-neutral-800 dark:text-neutral-50">
                                Tourist Bus
                            </h1>
                            <h1 className="text-sm font-normal text-neutral-800 dark:text-neutral-50">
                                60 Passengers
                            </h1>
                        </div>
                    </div>
                </Link>

                <Link to={"/bus-details"} className="w-full bg-neutral-200/60 block dark:bg-neutral-900/40 rounded-xl p-4">
                    <img src={Bus5} alt="bus img" className="w-full aspect-video object-contain object-center" />
                    <div className="px-3 py-4 space-y-2">
                        <div className="flex items-center justify-between">
                            <h1 className="text-xl font-semibold text-neutral-800 dark:text-neutral-50">
                                Tourist Bus
                            </h1>
                            <h1 className="text-sm font-normal text-neutral-800 dark:text-neutral-50">
                                60 Passengers
                            </h1>
                        </div>
                    </div>
                </Link>

                <Link to={"/bus-details"} className="w-full bg-neutral-200/60 block dark:bg-neutral-900/40 rounded-xl p-4">
                    <img src={Bus6} alt="bus img" className="w-full aspect-video object-contain object-center" />
                    <div className="px-3 py-4 space-y-2">
                        <div className="flex items-center justify-between">
                            <h1 className="text-xl font-semibold text-neutral-800 dark:text-neutral-50">
                                Tourist Bus
                            </h1>
                            <h1 className="text-sm font-normal text-neutral-800 dark:text-neutral-50">
                                60 Passengers
                            </h1>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Bus