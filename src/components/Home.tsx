// src/components/Home.jsx
import React from "react";
import bgImg from "../assets/bg-img.jpg";
import CategoriesDropDown from "./CategoriesDropDown";
function Home() {
  return (
    <div>
      <div className="relative">
        <div
          className="relative h-[50vh] md:h-[70vh] bg-center bg-cover"
          style={{ backgroundImage: `url(${bgImg})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative  grid grid-cols-4 gap-4 place-items-center h-full px-4">
            {["A", "U", "R", "A"].map((L, i) => (
              <h1
                key={i}
                className="
                text-white
                drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]
                text-[clamp(2rem,10vw,8rem)]
                uppercase
                transition-transform duration-300
                hover:scale-110
              "
              >
                {L}
              </h1>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
