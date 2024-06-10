import { Link } from "react-router-dom"

const Operator = () => {
    return (
        <div className='w-full lg:px-28 md:px-16 sm:px-7 px-4 mb-[8ch]'>
            <div className="w-full flex items-center justify-between">
                <h1 className='text-2xl font-medium mb-6'>Top Operators</h1>
                <Link to="#" className="text-violet-600">View all</Link>
            </div>
            <div className="grid grid-cols-3 gap-6">
                <Link to="#" className="bg-neutral-200/60 block dark:bg-neutral-900/40 rounded-xl px-4 py-5 relative group ease-in-out duration-300 overflow-hidden">
                    <img src={Bus1} alt="bus type" className="w-full aspect-video object-contain" />
                </Link>
            </div>
        </div>
    )
}

export default Operator