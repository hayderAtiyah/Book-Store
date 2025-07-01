import React, { useContext, useState } from "react";
import Marquee from "react-fast-marquee";
import "../BookSlider.css";
import products from "../../public/productsContent";
import { MyContext } from "./../App";
function BookSlider() {
  const { chosenCat, setChosenCat } = useContext(MyContext);
  const filtered = products.filter((item) =>
    chosenCat === "All" ? true : item.category === chosenCat
  );
  console.log("count is " + filtered.length);
  console.log("chosenCat: " + chosenCat);
  return (
    <div id="skills" className="skills">
      <div className="skillsHeader">
        <h2>See More</h2>
      </div>
      <div className="skillsContainer">
        <div className="skill--scroll">
          <Marquee
            gradient={false}
            speed={80}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="left"
          >
            {filtered.map((item, id) => (
              <div className="skill--box" key={id}>
                <img
                  src={item.image}
                  alt={item.title}
                  //   onMouseEnter={() => <div>`${item.title}`</div>}
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default BookSlider;
