import React, { useContext } from "react";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
import { CityContext } from "../context/CityData";
import MiniHeader from "../components/MiniHeader";

function ExploreDestinations() {
  const { cityData, searchText } = useContext(CityContext);
  const cities = cityData.cities;

  return (
    <div className="min-h-screen mx-10 my-5 max-sm:mx-2">
      <MiniHeader />
      <h1 className="text-3xl font-bold text-blue-400 my-5">
        Explore Destinations
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 max-sm:grid-cols-1 gap-8">
        {(searchText && searchText.length > 0  &&
          searchText.map((city, index) => (
            <Link to={`/api/explore/${city.name}`} key={index}>
              <Card
                key={index}
                className="max-w-sm mt-3"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc={city.coverImage}
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {city.name}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {city.description}
                </p>
              </Card>
            </Link>
          ))) ||
          (cities &&
            cities.map((city, index) => (
              <Link to={`/api/explore/${city.name}`} key={index}>
                <Card
                  key={index}
                  className="max-w-sm mt-3"
                  imgAlt="Meaningful alt text for an image that is not purely decorative"
                  // imgSrc={city.coverImage}
                >
                  <img src={city.coverImage} className="w-full h-44 object-cover" alt="" />
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {city.name}
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    {city.description}
                  </p>
                </Card>
              </Link>
            )))}
      </div>
    </div>
  );
}

export default ExploreDestinations;
