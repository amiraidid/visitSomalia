import React, { useContext, useState } from 'react'
import { CityContext } from '../context/CityData'


function SearchCard() {

    const [query, setQuery] = useState()

    const { handleSearch } = useContext(CityContext)

    const searchFunction = (e) => {
        e.preventDefault();
        handleSearch(query);
        console.log(query)
    }

    return (
        <form className="flex items-center mx-8 max-sm:mx-4 max-sm:justify-end">   
            {/* <label htmlFor="simple-search" className="sr-only">Search</label> */}
            <div className="relative w-full max-sm:w-fit">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"/>
                    </svg>
                </div>
                <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} id="simple-search" className="capitalize bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full max-sm:w-fit ps-10 p-2.5 " placeholder="Search branch name..." required />
            </div>
            <button type="submit" onClick={searchFunction} className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span className="sr-only">Search</span>
            </button>
        </form>
        
    )
}

export default SearchCard