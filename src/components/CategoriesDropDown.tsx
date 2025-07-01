import React from "react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import ProductDetails from "./ProductDetails";
import { useState } from "react";
import { MyContext } from "../App";
import { useContext } from "react";

import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { Link } from "react-router-dom";
const categories = [
  "All",
  "Programming",
  "Career",
  "Improvement",
  "Design",

  "Productivity",
  "Motivation",
  "Finance",
  "Science",
  "Health",
  "Philosophy",
  "Leadership",
  "Relationships",
  "Gym",
  "Other",
];
function CategoriesDropDown() {
  const { chosenCat, setChosenCat } = useContext(MyContext);

  return (
    <Menu as="div" className="relative inline-block text-left group">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 hover:text-white">
          Categories
          <ChevronDownIcon
            aria-hidden="true"
            className="-mr-1 size-5 text-black-900"
          />
        </MenuButton>
      </div>

      <MenuItems
        className="absolute top-full  left-1/2 transform -translate-x-1/2 z-[9999] mt-2   bg-[#e7dce8] rounded-lg 
      shadow-lg p-4 gap-4 grid grid-cols-2  md:grid-cols-2 lg:grid-cols-3 w-[90vw] overflow-auto max-h-[80vh] md:w-[400px] md: lg:w-[600px] "
      >
        <Transition>
          {categories.map((item) => (
            <div className="py-1">
              <MenuItem>
                <Link
                  to={`/categories/${item}`}
                  className="block px-4 py-2 text-sm text-black-900 data-[focus]:bg-gray-100 rounded-lg data-[focus]:text-black-900 data-[focus]:outline-none"
                  key={item}
                  onClick={() => setChosenCat(`${item}`)}
                >
                  {item}
                </Link>
              </MenuItem>
            </div>
          ))}
        </Transition>
      </MenuItems>
    </Menu>
  );
}
export default CategoriesDropDown;
