import productsContent from "../../public/productsContent.ts";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import ProductDetails from "./ProductDetails.tsx";
import { MyContext } from "./../App";
import { useState } from "react";
import BookSlider from "./BookSlider.tsx";
export default function BookSeeMore() {
  const location = useLocation();
  const { id } = location.state;
  const [chosenCat, setChosenCat] = useState("All");
  const navigate = useNavigate();
  return (
    <div className="">
      <Button
        variant="contained"
        className="fixed left-3 top-3 categoryButton"
        onClick={() => navigate(`/categories/${chosenCat}`)}
      >
        Go Back
      </Button>
      <div className="w-full  mx-auto max-w-xs  md:max-w-md lg:max-w-lg flex flex-col items-center justify-center  gap-10 ">
        <h1 className="font-extrabold text-md md:text-lg lg:text-3xl mt-12 pro-animate-insane">
          {" "}
          {productsContent[id - 1].title}
        </h1>

        <div className="flex flex-col gap-2 items-center ">
          <img
            src={productsContent[id - 1].image}
            alt="book cover picture"
            className="w-full max-w-xs md:max-w-md lg:max-w-lg object-contain rounded-2xl shadow-xl border-4 border-gray-200 hover:scale-105 hover:shadow-2xl transition-transform duration-300"
          />
          <p className="text-base md:text-lg text-black bg- bg-[#e7dce8] rounded-lg p-4 shadow-md  leading-relaxed">
            {productsContent[id - 1].description}
          </p>{" "}
          <h2 className="font-bold">${productsContent[id - 1].price}</h2>
          <Button variant="contained" className="categoryButton w-full">
            Add to cart
          </Button>
        </div>
      </div>
      <BookSlider />
    </div>
  );
}
