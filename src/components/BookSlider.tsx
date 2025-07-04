import React, { useContext, useState } from "react";
import Marquee from "react-fast-marquee";
import "../BookSlider.css";
import products from "../../public/productsContent";
import { MyContext } from "./../App";
import { useNavigate, useLocation } from "react-router-dom";

function BookSlider() {
  const location = useLocation();
  const { id } = location.state;

  const getCat = products.find((item) => item.id === id)?.category;

  const navigate = useNavigate();
  const { chosenCat, setChosenCat } = useContext(MyContext);
  // console.log("chosenCat: " + chosenCat);
  // console.log("now the cat is " + getCat);
  // console.log("the id now is " + id);
  function filteringBook() {
    const filtered = products.filter((item) =>
      chosenCat === "Other" ? true : item.category === getCat
    );
    return filtered.map((item, idx) => {
      console.log("current ID is: " + item.id + " book is " + item.title);
      return (
        <div className="skill--box" key={idx}>
          <img
            src={item.image}
            alt={item.title}
            onClick={() => {
              navigate("/BookSeeMore", { state: { id: item.id } });
              window.scroll({ top: 120, behavior: "smooth" });
              console.log("clicked book: " + item.title + " id: " + item.id);
            }}
          />
        </div>
      );
    });
  }

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
            {filteringBook()}
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default BookSlider;
