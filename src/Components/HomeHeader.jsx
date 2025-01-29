import { useNavigate } from "react-router-dom";

const HomeHeader = () => {
    let navigate = useNavigate();
    const route = (route) => {
        navigate("/"+ route)
    }
    return <>
        <div className="container mx-auto mt-4 flex justify-between">
            <div>
                <img src="../../src/assets/logo.jpg" className=" w-24 h-12" />
                </div>
            <div>
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-80 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" id="default-search" className="block w-96 p-3 ps-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white shadow-xl" placeholder="Search" required />
                </div>
            </div>
            <div className="w-60 flex justify-evenly">
                <button className="h-8" onClick={()=>route('sign-in')}>
                    Sign In
                </button>
                <button className="border-spacing-2 shadow-md 
                    border-black border-2 w-28 rounded-3xl h-8"
                    onClick={()=>route('sign-up')}>
                    Sign Up
                </button>
            </div>
        </div>
    </>
    }

export default HomeHeader;