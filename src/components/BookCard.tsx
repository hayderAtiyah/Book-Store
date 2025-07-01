import { React } from "react";
import Button from "@mui/material/Button";
import BookSeeMore from "./BookSeeMore";
import { useNavigate } from "react-router-dom";
function BookCard({ id, imgPath, title, description, price }) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-full justify-between bg-gray-200 p-12  rounded-lg hover:scale-105 transition duration-300">
      <img
        src={imgPath}
        alt="book cover"
        className="w-full max-w-xs h-80 object-cover rounded-lg "
      />
      <div className="flex justify-between">
        {" "}
        <h2 className="font-bold mr-8"> {title}</h2>
        <h3 className=""> ${price}</h3>
      </div>

      <div className="flex  justify-center gap-6 mt-8 ">
        <Button
          variant="contained"
          className="categoryButton"
          onClick={() => navigate("/BookSeeMore", { state: { id } })}
        >
          See details
        </Button>
        <Button variant="contained" className="categoryButton">
          Add to cart
        </Button>
      </div>
    </div>
  );
}

export default BookCard;
