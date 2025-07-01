import React from "react";
import { useParams } from "react-router-dom";
import productsContents from "../../public/productsContent";
import BookCard from "./BookCard";
import samplePic from "../assets/imgs/atomic-habits.jpg";
import { useContext } from "react";
import { MyContext } from "../App";

function ProductDetails() {
  const { chosenCat, setChosenCat } = useContext(MyContext);
  console.log("chosenCat is " + chosenCat);

  return (
    <div>
      <div className="grid   gap-4 p-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {productsContents
          .filter((item) =>
            chosenCat === "All" ? true : item.category === chosenCat
          )
          .map((item) => (
            <BookCard
              id={item.id}
              imgPath={item.image}
              title={item.title}
              price={item.price}
            />
          ))}
      </div>
    </div>
  );
}

export default ProductDetails;
