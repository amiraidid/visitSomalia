import { Link } from 'react-router-dom'
import { SearchCard } from '../components'

function MiniHeader() {
  return (
    <header>
        <div className='flex justify-between max-sm:justify-center items-center mt-2 mx-2'>
            <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="/public/favicon-32x32.png" className="h-8" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-bold uppercase whitespace-nowrap dark:text-white">Somalia</span>
            </Link>
            <SearchCard />
            {/* <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 "><a href="#exploreRegion">Explore {region}</a></button> */}
        </div>
    </header>
  )
}

export default MiniHeader