import { RegionDetail, SinglePlace } from '@/pages'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import { ExploreDestinations } from '../pages'


function AllRoutes() {
    return (
        <div>

            <Routes>
                <Route path="/" element={<Home /> }/>
                <Route path="/api/regions/:region" element={<RegionDetail />}/>
                <Route path="/api/explore/:name" element={<SinglePlace />}/>
                <Route path="/api/explore" element={<ExploreDestinations />}/>
            </Routes>

        </div>
    )
}

export default AllRoutes