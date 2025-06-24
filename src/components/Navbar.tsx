import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import SearchBar from "./SearchBar";
import CategoriesDropDown from "./CategoriesDropDown";
function Navbar() {
  return (
    <header className=" bg-[#e7dce8] p-8 w-full ">
      <nav className="  flex flex-wrap justify-between items-center w-full  max-w-7xl mx-auto">
        <h1 className=" text-2xl font-bold mr-auto">AURA</h1>

        <div className="flex flex-row">
          <ul className="  gap-2 md:gap-8 lg:gap-[40px] text-lg  ">
            <li className="nav-item hover:text-white">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item relative overflow-visible">
              <CategoriesDropDown />
            </li>
            <li className="nav-item hover:text-white">
              <Link to="/about">About</Link>
            </li>
            <li className="nav-item hover:text-white">
              <Link to="/reviews">Reviews</Link>
            </li>
            <li className="nav-item hover:text-white">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <form className="  flex justify-center ">
          <div className="w-full max-w-xs md:max-w-md lg:max-w-lg xl:w-[500px]">
            <SearchBar />
          </div>
        </form>
        <div className=" transition duration-200 hover:scale-125 rounded-lg">
          <Link to="/cart">
            <ShoppingCart />
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
