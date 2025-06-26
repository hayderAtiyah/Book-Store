import React from "react";
import { useParams } from "react-router-dom";
import productsContents from "../../public/productsContent";
import BookCard from "./BookCard";
import samplePic from "../assets/imgs/atomic-habits.jpg";

function ProductDetails() {
  return (
    <div>
      <div className="grid   gap-4 p-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {productsContents.map((item) => (
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
