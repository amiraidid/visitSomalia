import { Link } from 'react-router-dom'
import Mogadishu from '../../assets/moga.jpg'
import laas from '../../assets/laas.jpg'
import hargeisa from '../../assets/harg.jpeg'


function Destinations() {
    const destinations = [
        {name: 'Mogadishu', image: Mogadishu, text: 'Explore the capital city with its historical landmarks, vibrant markets, and beautiful coastline. Visit the National Museum, and Liido Beach for a taste of the local culture and history.'},
        {name: 'Laasgeel', image: laas, text: 'Discover the ancient rock art of Laas Geel, some of the best-preserved cave paintings in Africa. This archaeological site offers a glimpse into the region\'s prehistoric past and is a must-visit for history enthusiasts.'},
        {name: 'Hargeisa', image: hargeisa, text: 'The capital of Somaliland, Hargeisa is known for its bustling markets and friendly atmosphere. Visit the famous Hargeisa War Memorial and enjoy the local cuisine and hospitality.'},
    ]
    return (
        <div className='overflow-hidden destiny' id='destinations'>
            <h1 className='text-3xl font-bold text-blue-400 m-8'>DESTINATIONS</h1>
            <h1 className='text-2xl font-semibold text-blue-600 mt-4 m-8' >TOP DESTINATIONS</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 max-sm:grid-cols-1 gap-8 mx-5 content-center'>
                {
                    destinations.map((city, index) => (
                        <Link to={`/api/somalia/explore/${city.name}`} key={index}><div className='lg:w-96 md:w-80  max-sm:w-full shadow-2xl rounded-lg max-sm:mb-4'>
                            <img src={city.image} alt={city.name} className='w-full h-32 object-cover rounded-tr-lg rounded-tl-lg'/>
                            <h1 className='p-3 font-bold text-2xl text-slate-200'>{city.name}</h1>
                            <p className='p-3 text-sm text-white '>{city.text}</p>
                        </div></Link>
                    ))
                }
            </div>
            <Link to='/api/somalia/explore'><button className='my-4 m-8 py-2 px-4 text-white text-xl bg-blue-700 rounded-lg hover:bg-blue-800'>Explore More Destinations </button></Link>
        </div>
    )
}

export default Destinations
