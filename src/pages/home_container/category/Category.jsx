import { Link } from 'react-router-dom'
import Bus1 from "../../../assets/bus.png"
import Bus2 from "../../../assets/bus5.png"
import Bus5 from "../../../assets/bus4.png"

import { motion } from "framer-motion";


const Category = () => {
    return (
        <div className='w-full lg:px-28 md:px-16 sm:px-7 px-4 mb-[8ch]'>
            <div className="w-full flex items-center justify-between">
                <h1 className='text-2xl font-medium mb-6'>Category</h1>
                <Link to="#" className="text-violet-600">View all</Link>
            </div>
            <motion.div
                className="grid grid-cols-3 gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            >
                <Link to="#" className="bg-neutral-200/60 block dark:bg-neutral-900/40 rounded-xl px-4 py-5 relative group ease-in-out duration-300 overflow-hidden">
                    <img src={Bus1} alt="bus type" className="w-full aspect-video object-contain" />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr dark:from-neutral-950/80 dark:to-neutral-950/60 from-neutral-400/80 to-neutral-400/60 group-hover:flex hidden items-center justify-center ease-in-out duration-300">
                        <h2 className="text-2xl font-bold text-center text-neutral-900 dark:text-neutral-50">
                            Private Bus
                        </h2>
                    </div>
                </Link>
                <Link to="#" className="bg-neutral-200/60 block dark:bg-neutral-900/40 rounded-xl px-4 py-5 relative group ease-in-out duration-300 overflow-hidden">
                    <img src={Bus2} alt="bus type" className="w-full aspect-video object-contain" />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr dark:from-neutral-950/80 dark:to-neutral-950/60 from-neutral-400/80 to-neutral-400/60 group-hover:flex hidden items-center justify-center ease-in-out duration-300">
                        <h2 className="text-2xl font-bold text-center text-neutral-900 dark:text-neutral-50">
                            Government Bus
                        </h2>
                    </div>
                </Link>
                <Link to="#" className="bg-neutral-200/60 block dark:bg-neutral-900/40 rounded-xl px-4 py-5 relative group ease-in-out duration-300 overflow-hidden">
                    <img src={Bus5} alt="bus type" className="w-full aspect-video object-contain" />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr dark:from-neutral-950/80 dark:to-neutral-950/60 from-neutral-400/80 to-neutral-400/60 group-hover:flex hidden items-center justify-center ease-in-out duration-300">
                        <h2 className="text-2xl font-bold text-center text-neutral-900 dark:text-neutral-50">
                            Tourist Bus
                        </h2>
                    </div>
                </Link>
            </motion.div>
        </div>
    )
}

export default Category