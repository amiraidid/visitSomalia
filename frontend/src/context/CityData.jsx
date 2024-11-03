import { createContext, useEffect, useState } from "react";
import axios from "axios";



export const CityContext = createContext(null);

export const CityProvider = ({children}) => {
    const [cityData, setCityData] = useState([]);
    const [searchText, setSearchText] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async() => {
            try {
                setLoading(true)
                const response = await axios.get(`http://localhost:8000/api/explore`)
                setCityData(response.data)
                setLoading(false)
            } catch (error) {
                console.log(error.message)
                setLoading(true)
            }
        }
        fetchData()
    }, [])

    const handleSearch = (query) => {
        const city = cityData?.cities
        if (city) {
            const filteredCities = city.filter((city) => {
                return city.name.toLowerCase() === query.toLowerCase()
            })
            setSearchText(filteredCities)
        }
        else {
            console.log("no data");
        }
    }

    
    return (
        <CityContext.Provider value={{cityData, setCityData, loading, setLoading, searchText, setSearchText, handleSearch }}>
            {children}
        </CityContext.Provider>
    )
}