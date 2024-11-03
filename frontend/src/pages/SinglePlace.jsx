import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Spinner } from "flowbite-react";

function SinglePlace() {
  const { name } = useParams();
  const [places, setPlaces] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCityInfo = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/explore/${name}`);
        setPlaces(response.data.place);
        setLoading(false);
      } catch (error) {}
    };
    fetchCityInfo();
  }, [name]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner aria-label="Medium sized spinner example" size="md" />
        <p className="text-center">Loading...</p>
      </div>
    );
  }

  return (
    <section className="">
      {/* <MiniHeader /> */}

      <div className="flex flex-wrap justify-between max-sm:block md:h-screen">
        {/* left side */}
        <div className="flex-1 m-8 max-sm:m-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="/public/favicon-32x32.png" className="h-8" alt="" />
            <span className="self-center text-2xl font-bold uppercase whitespace-nowrap dark:text-white">
              Somalia
            </span>
          </Link>

          <div className="relative w-full h-fit py-5 ">
            <img
              src={places.coverImage}
              className="object-cover w-full h-full max-sm:h-screen md:h-[600px] blur-sm"
              alt=""
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div>{" "}
            {/* Gradient overlay */}
            <div className="mx-11 p-8 absolute top-44 left-0 right-0 w-2/3 h- bg-white bg-opacity-80 rounded-lg shadow-lg md:top-28 md:p-6 max-sm:top-16 max-sm:w-3/4 max-sm:p-4">
              <h1 className="text-7xl max-sm:text-4xl text-red-900 font-bold tracking-wider py-4 text-shadow">
                {places.name}
              </h1>
              <p className="text-2xl text-gray-700 font-medium py-4 mx-4">
                {places.description}
              </p>
              <h1 className="text-xl text-gray-600 font-medium mx-4">
                Best Time To Visit:{" "}
                <span className="font-semibold text-gray-800">
                  {places.best_time_to_visit}
                </span>
              </h1>
              <h1 className="text-xl text-gray-600 font-medium mx-4">
                Category:{" "}
                <span className="font-semibold text-gray-800">
                  {places.category}
                </span>
              </h1>
              <h1 className="text-xl text-gray-600 font-medium mx-4">
                Peace Status:{" "}
                <span className="font-semibold text-gray-800">
                  {places.peace_status}
                </span>
              </h1>
              <h1 className="text-xl text-gray-600 font-medium mx-4">
                Region:{" "}
                <span className="font-semibold text-gray-800">
                  {places.region}
                </span>
              </h1>
              <h1 className="text-xl text-gray-600 font-medium mx-4">
                Spending Time:{" "}
                <span className="font-semibold text-gray-800">
                  {places.spending_time}
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SinglePlace;
