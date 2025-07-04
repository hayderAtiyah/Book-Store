import React from "react";
import aboutPic from "../assets/aboutImg.jpg";
function About() {
  return (
    <div>
      <h1 className="font-extrabold  text-2xl text-center aboutHeading mt-12">
        About Our Bookstore
      </h1>

      <div className="flex flex-col justify-between p-12 gap-12 md:flex-row justify-between lg:flex-row justify-between">
        <div
          className="flex flex-col bg-[#EFE8F1] rounded-lg text-center max-w-md md:max-w-lg lg:max-w-xl gap-1 
  ml-auto hover:scale-105 transition-transform duration-1000 p-12"
        >
          <p className="text-sm md:text-base lg:text-lg">
            <strong>Welcome!</strong> We love connecting readers with the{" "}
            <strong>best books</strong>, from
            <span className="font-semibold"> classics</span> and{" "}
            <span className="font-semibold">thrillers</span>
            to <span className="font-semibold">biographies</span> and{" "}
            <span className="font-semibold">non-fiction</span>. Our selection is{" "}
            <strong>handpicked</strong> to spark curiosity and grow your love of
            reading.
          </p>
          <h2 className="p-4 text-lg font-bold">Our Mission</h2>
          <p className="text-sm md:text-base lg:text-lg">
            We want to <strong>inspire a passion for reading</strong> by
            offering something for everyone. Our space helps you{" "}
            <span className="font-semibold">find new favorites</span>,
            <span className="font-semibold"> explore new ideas</span>, and join
            a great community of book lovers.
          </p>
          <h2 className="p-4 text-lg font-bold">Why Choose Us?</h2>
          <ul className="list-disc list-inside space-y-1 text-left ml-6">
            <li>
              <strong>Huge variety</strong> of genres for every reader
            </li>
            <li>
              <strong>Personal recommendations</strong> from our experts
            </li>
            <li>
              <strong>Safe shopping</strong> and <strong>fast shipping</strong>
            </li>
            <li>
              <strong>Member discounts</strong> and early access to new books
            </li>
            <li>
              <strong>Friendly support</strong> to help you find your next read
            </li>
          </ul>
        </div>

        <img
          src={aboutPic}
          alt="picture did not load"
          className="w-full max-w-64 md:max-w-80 lg:max-w-lg rounded-lg shadow-xl mr-auto hover:scale-105
        transition-transform duration-1000"
        />
      </div>
    </div>
  );
}

export default About;
