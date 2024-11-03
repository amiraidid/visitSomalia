import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { MiniHeader } from "../components";
import beach from "../assets/beach.jpg";
import laasgeel from "../assets/laasgeel.jpg";
import laasgeel2 from "../assets/laasgeel-2.jpg";
import liido from "../assets/liido.jpg";
import Mogadishu from "../assets/Mogadishu.jpg";

function LandingPage({ region }) {
  const slides = [
    {
      id: 1,
      image: beach,
      text: "Welcome to the stunning landscapes of Somalia! Explore the rich history and natural beauty that await you.",
    },
    {
      id: 2,
      image: laasgeel,
      text: "Discover the hidden gems of Somalia! Immerse yourself in its vibrant culture and breathtaking scenery.",
    },
    {
      id: 3,
      image: liido,
      text: "Journey through the wonders of Somalia! Uncover ancient sites and pristine beaches on your adventure.",
    },
    {
      id: 4,
      image: laasgeel2,
      text: "Welcome to Somalia, where history meets adventure! Experience the unique charm of this incredible land.",
    },
    {
      id: 5,
      image: Mogadishu,
      text: "Experience the beauty of Somalia! From scenic landscapes to rich heritage, there's so much to explore.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleArrow = (direction) => {
    if (direction === "left") {
      setCurrentIndex((current) =>
        current === 0 ? slides.length - 1 : current - 1
      );
    } else if (direction === "right") {
      setCurrentIndex((current) =>
        current === slides.length - 1 ? 0 : current + 1
      );
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleArrow("right");
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: () => handleArrow("right"),
    onSwipedRight: () => handleArrow("left"),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <section>
      <MiniHeader  />
      <div className="" {...handlers}>
        <div className="flex justify-center items-center relative mt-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`${
                index === currentIndex ? "flex" : "hidden"
              } justify-center items-center card-shadow p-2 rounded-lg mt-5`}
            >
              <img
                src={slide.image}
                alt="slide"
                className="w-[100vw] object-cover h-[60vh]"
              />
              <h1 className="absolute top-[50%] max-sm:top-[70] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-white text-center bg-gray-500/50 text-3xl max-sm:text-xl w-3/4 max-sm:w-[340px] font-bold tracking-widest max-sm:tracking-wide px-4 py-2 ">
                {slide.text}
              </h1>
            </div>
          ))}
        </div>
        <button className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 w-fit">
          <a href="#exploreRegion">Explore {region}</a>
        </button>
      </div>
    </section>
  );
}

export default LandingPage;
