import React from "react";
import BlogPostCard from "./BlogPostCard";
import store1 from "../assets/Blog/store1.jpg";
import store2 from "../assets/Blog/store2.png";
import store3 from "../assets/Blog/store3.png";
import store4 from "../assets/Blog/store4.jpg";
import { MdOutlineScience } from "react-icons/md";
import { IoIosTimer } from "react-icons/io";
import { SlCalender } from "react-icons/sl";

function BlogCard() {
  return (

    // Header Section
    <div className="bg-gray-100 px-28 rounded-lg">
      <div className="flex space-x-6">
        <div className="bg-white mt-10 rounded-lg" style={{ width: "650px" }}>
          <div className=" py-4 px-8">
            <h1>How to Choose the Right Perfume for You</h1>
          </div>
          <div className="px-8 flex space-x-2">
            <button className="px-4 flex py-2 border-2 rounded-lg">
              <MdOutlineScience className=" text-2xl" />
              <p className="ml-2">Fragrances</p>
            </button>

            <button className="px-4 flex py-2 border-2 rounded-lg">
              <IoIosTimer className=" text-2xl" />
              <p className="ml-2">10 minutes</p>
            </button>

            <button className="px-4 flex py-2 border-2 rounded-lg">
              <SlCalender className=" text-2xl" />
              <p className="ml-2">March 10, 2023</p>
            </button>
          </div>

    {/* Summary 1 Section */}
          <div className="border-2 mx-8 my-8 rounded-lg bg-gray-100">
            <h1 className="text-base px-6 font-bold pt-4">Blog Post Summary</h1>
            <p className="text-sm px-6 py-4">
              This blog post will discuss the different factors to consider when
              choosing a perfume, such as your personal style, skin type, and
              preferences. It will also provide recommendations for specific
              perfumes that would be a good fit for different types of women.
            </p>
          </div>

          <div className="flex px-8 mb-8">
            <img
              src={store1}
              alt=""
              className="w-12 h-12 border-2 rounded-lg"
            />
            <h1 className="px-5 text-sm mt-1">Author</h1>
            <h1
              className="text-sm mt-6 font-bold"
              style={{ marginLeft: "-64px" }}
            >
              Sarah Jones
            </h1>

            <div className="pl-52">
              <button className="bg-white hover:bg-pink-400 border-2 w-52 h-10 rounded-lg">
                View Full Blog
              </button>
            </div>
          </div>
        </div>

    {/* Summary 2 Section */}
        <div className="bg-white mt-10 rounded-lg" style={{ width: "650px" }}>
          <div className=" py-4 px-8">
            <h1>The Histroy of perfume</h1>
          </div>

          <div className="px-8 flex space-x-2">
            <button className="px-4 flex py-2 border-2 rounded-lg">
              <MdOutlineScience className=" text-2xl" />
              <p className="ml-2">Fragrances</p>
            </button>

            <button className="px-4 flex py-2 border-2 rounded-lg">
              <IoIosTimer className=" text-2xl" />
              <p className="ml-2">10 minutes</p>
            </button>

            <button className="px-4 flex py-2 border-2 rounded-lg">
              <SlCalender className=" text-2xl" />
              <p className="ml-2">March 10, 2023</p>
            </button>
          </div>

          <div className="border-2 mx-8 my-8 rounded-lg bg-gray-100">
            <h1 className="text-base px-6 font-bold pt-4">Blog Post Summary</h1>
            <p className="text-sm px-6 py-4">
              This blog post will discuss the different factors to consider when
              choosing a perfume, such as your personal style, skin type, and
              preferences. It will also provide recommendations for specific
              perfumes that would be a good fit for different types of women.
            </p>
          </div>
          <div className="flex px-8 mb-8">
            <img
              src={store2}
              alt=""
              className="w-12 h-12 border-2 rounded-lg"
            />
            <h1 className="px-5 text-sm mt-1">Author</h1>
            <h1
              className="text-sm font-bold mt-6"
              style={{ marginLeft: "-64px" }}
            >
              John Smith
            </h1>

            <div className="pl-52">
              <button className="bg-white hover:bg-pink-400 border-2 w-52 h-10 rounded-lg">
                View Full Blog
              </button>
            </div>
          </div>
        </div>
      </div>


    {/* Summary 3 Section */}
      <div className="flex space-x-6">
        <div className="bg-white mt-10 rounded-lg" style={{ width: "650px" }}>
          <div className=" py-4 px-8">
            <h1>How to Take Care of Your Perfume</h1>
          </div>
          <div className="px-8 flex space-x-2">
            <button className="px-4 flex py-2 border-2 rounded-lg">
              <MdOutlineScience className=" text-2xl" />
              <p className="ml-2">Fragrances</p>
            </button>

            <button className="px-4 flex py-2 border-2 rounded-lg">
              <IoIosTimer className=" text-2xl" />
              <p className="ml-2">10 minutes</p>
            </button>

            <button className="px-4 flex py-2 border-2 rounded-lg">
              <SlCalender className=" text-2xl" />
              <p className="ml-2">March 10, 2023</p>
            </button>
          </div>

          <div className="border-2 mx-8 my-8 rounded-lg bg-gray-100">
            <h1 className="text-base px-6 font-bold pt-4">Blog Post Summary</h1>
            <p className="text-sm px-6 py-4">
              This blog post will discuss the different factors to consider when
              choosing a perfume, such as your personal style, skin type, and
              preferences. It will also provide recommendations for specific
              perfumes that would be a good fit for different types of women.
            </p>
          </div>

          <div className="flex px-8 mb-8">
            <img
              src={store3}
              alt=""
              className="w-12 h-12 border-2 rounded-lg"
            />
            <h1 className="px-3 text-sm mt-1">Author</h1>
            <h1
              className="text-sm font-bold mt-6"
              style={{ marginLeft: "-55px" }}
            >
              Emily Johson
            </h1>

            <div className="pl-48">
              <button className="bg-white hover:bg-pink-400 border-2 w-56 h-10 rounded-lg">
                View Full Blog
              </button>
            </div>
          </div>
        </div>


    {/* Summary 4 Section */}
        <div className="bg-white mt-10 rounded-lg" style={{ width: "650px" }}>
          <div className=" py-4 px-8">
            <h1>The Benefits of Aromatherapy</h1>
          </div>

          <div className="px-8 flex space-x-2">
            <button className="px-4 flex py-2 border-2 rounded-lg">
              <MdOutlineScience className=" text-2xl" />
              <p className="ml-2">Fragrances</p>
            </button>

            <button className="px-4 flex py-2 border-2 rounded-lg">
              <IoIosTimer className=" text-2xl" />
              <p className="ml-2">10 minutes</p>
            </button>

            <button className="px-4 flex py-2 border-2 rounded-lg">
              <SlCalender className=" text-2xl" />
              <p className="ml-2">March 10, 2023</p>
            </button>
          </div>

          <div className="border-2 mx-8 my-8 rounded-lg bg-gray-100">
            <h1 className="text-base px-6 font-bold pt-4">Blog Post Summary</h1>
            <p className="text-sm px-6 py-4">
              This blog post will discuss the different factors to consider when
              choosing a perfume, such as your personal style, skin type, and
              preferences. It will also provide recommendations for specific
              perfumes that would be a good fit for different types of women.
            </p>
          </div>

          <div className="flex px-8 mb-8">
            <img
              src={store4}
              alt=""
              className="w-12 h-12 border-2 rounded-lg"
            />
            <h1 className="pl-4 text-sm mt-1">Author</h1>
            <h1
              className="text-sm mt-6 font-bold"
              style={{ marginLeft: "-45px" }}
            >
              James Roy
            </h1>

            <div className="pl-52">
              <button className="bg-white hover:bg-pink-400 border-2 w-56 h-10 rounded-lg">
                View Full Blog
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
