import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "flowbite-react";
import { CityContext } from "../context/CityData";

function RegionDetailCard({ region, regionData }) {
  const { searchText } = useContext(CityContext);

  return (
    <section id="exploreRegion">
      <h1 className="text-black text-center text-5xl max-sm:text-xl font-bold tracking-wide pt-8 mt-6 mx-16 ">
        Explore More About {region}{" "}
      </h1>
      <h1 className="text-red-600 text-center font-medium pb-8 mb-5">
        Here are the Places You Can Explore{" "}
      </h1>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 max-sm:grid-cols-1 gap-5 mx-16 ">
        {(searchText &&
          searchText.length > 0  &&
          searchText.map((city, index) => (
            <Link to={`/api/somalia/explore/${city.name}`} key={index}>
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
          (regionData &&
            regionData.length > 0 &&
            regionData.map((item, index) => (
              <div
                key={index}
                className="lg:w-96 md:w-80 mb-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <Link to={`/api/somalia/explore/${item.name.trim()}`}>
                  <img
                    className="rounded-t-lg h-48 w-full object-cover"
                    src={item.coverImage}
                    alt={item.name}
                  />
                </Link>
                <div className="p-5">
                  <Link to={`/api/somalia/explore/${item.name.trim()}`}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {item.name}
                    </h5>
                  </Link>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Category:{" "}
                    <span className="text-gray-950 font-semibold">
                      {item.category}
                    </span>
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Best time to visit:{" "}
                    <span className="text-gray-900 font-semibold">
                      {item.best_time_to_visit}
                    </span>
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    peace_status:{" "}
                    <span className="text-gray-950 font-semibold">
                      {item.peace_status}
                    </span>
                  </p>
                </div>
              </div>
            )))}
      </div>
    </section>
  );
}

export default RegionDetailCard;
