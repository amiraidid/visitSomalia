import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
    const [searchRegion, setSearchRegion] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    const regions = ['Somaliland', 'Benadir', 'South West State', 'Puntland', 'Galmudug', 'Jubaland'];
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (regions.includes(searchRegion)) {
            navigate(`/api/somalia/regions/${searchRegion}`);
        } else {
            alert('Please Enter Valid State Names');
        }
    };

    const handleChange = (e) => {
        const value = e.target.value;
        setSearchRegion(value);

        if (value) {
            const filteredSuggestions = regions.filter(region =>
                region.toLowerCase().includes(value.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    };

    const handleSuggestionClick = (region) => {
        setSearchRegion(region);
        setSuggestions([]);
    };

    return (
        <div id="home" className="relative">
            <div className="bg-gray-800">
                <video src="./visit-somalia.mp4" autoPlay loop muted className="absolute inset-0 object-cover w-full h-full opacity-80"></video>
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center h-screen px-4">
                <h1 className="text-black max-sm:text-xl capitalize text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-5xl sm:text-4xl font-bold tracking-wider px-6 py-4 rounded-lg shadow-lg">
                    Begin Your Dream Journey with Expert Guidance and Support
                </h1>
                
                <form onSubmit={handleSearch} className="max-w-md mx-auto mt-6 w-full">
                    <div className="relative">
                        <input 
                            type="search" 
                            id="default-search" 
                            className="block w-full py-4 pl-10 pr-4 text-lg text-gray-900 placeholder-gray-500 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-600 transition-all shadow-md" 
                            placeholder="Search Regions..." 
                            required 
                            value={searchRegion}  
                            onChange={handleChange}
                        />
                        <button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-full px-6 py-2 hover:bg-blue-700 transition-all shadow-lg">
                            Search
                        </button>
                        {suggestions.length > 0 && (
                            <ul className="absolute z-10 bg-white border border-gray-300 rounded-md shadow-lg mt-1 w-full">
                                {suggestions.map((region, index) => (
                                    <li 
                                        key={index} 
                                        onClick={() => handleSuggestionClick(region)} 
                                        className="py-2 px-4 hover:bg-blue-100 transition-all cursor-pointer"
                                    >
                                        {region}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Hero;
