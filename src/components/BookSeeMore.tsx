import productsContent from "../../public/productsContent.ts";
import { useLocation } from "react-router-dom";
import Button from "@mui/material/Button";

export default function BookSeeMore() {
  const location = useLocation();
  const { id } = location.state;
  console.log("id is " + id);
  return (
    <div>
      <Button variant="contained" className="fixed left-3 top-3 categoryButton">
        Go Back
      </Button>
      <div className="w-full  mx-auto max-w-xs  md:max-w-md lg:max-w-lg flex flex-col items-center justify-center  gap-10">
        <h1 className="font-bold text-xs md:text-md lg:text-lg mt-12 ">
          {" "}
          {productsContent[id - 1].title}
        </h1>

        <div className="flex flex-col gap-2 items-center">
          <img
            src={productsContent[id - 1].image}
            alt="book cover picture"
            className="w-full"
          />
          <p>{productsContent[id - 1].description}</p>
          <h2 className="font-bold">${productsContent[id - 1].price}</h2>
          <Button variant="contained" className="categoryButton w-full">
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
}
