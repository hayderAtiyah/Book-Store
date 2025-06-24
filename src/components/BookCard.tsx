import { React } from "react";
import Button from "@mui/material/Button";
function BookCard({ imgPath, title, description, price }) {
  return (
    <div className="bg-gray-200 p-12  rounded-lg hover:scale-105 transition duration-300">
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
      <div className="flex justify-between mt-8 ">
        <button>See more</button>
        <Button variant="contained">Contained</Button>

        <button>Add to cart</button>
      </div>
    </div>
  );
}

export default BookCard;
