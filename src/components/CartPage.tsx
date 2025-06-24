import React from "react";
import productsContent from "../../public/productsContent";

function CartPage() {
  return (
    <>
      <div>CartPage</div>
      <img src={productsContent[0].image} alt={productsContent[0].title} />
    </>
  );
}

export default CartPage;
