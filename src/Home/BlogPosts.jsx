import React from 'react';
import { TbLogin2 } from "react-icons/tb";
import { CiPlay1 } from "react-icons/ci";
import { LuPodcast } from "react-icons/lu";

function Blog() {
  return (

  // Header 
    <div className="flex py-16 px-36">

  {/* Left Section */}

      <div className="">
        <h1 className="text-3xl font-bold">What's The Newest?</h1>
        <p className="mt-4 block w-80" style={{fontSize:"12.5px"}}>
          Here what our customer say have to say about a Z-aura perfume We've
          gethered a few of our favorite testimonial to share with you
        </p>

        <button className="bg-white border-2 text-gray-700 font-bold h-12 w-44 mt-10 mb-10 rounded-lg">
          View all blogs
          <button className="bg-gray-200 hover:bg-gray-200 text-gray-700 font-bold py-1 px-3 ml-2 mt-0 rounded">
            →
          </button>
        </button>

        <div className="flex bg-white space-x-2 py-2 pl-1.5 w-80 mt-52 rounded-lg">
        <button className="bg-white hover:bg-pink-400 text-gray-700 font-bold py-2 px-6 rounded-lg flex border-2">
        <TbLogin2 className="-ml-2 pr-1 mt-1 text" />
           <p className="-mr-2">Blogs</p>
         </button>
         <button className="bg-white hover:bg-pink-400 text-gray-700 font-bold py-2 px-5 rounded-lg flex border-2">
         <CiPlay1 className="-ml-2 mt-1 text" />
           <p className="-mr-2">Posts</p>
         </button>
         <button className="bg-white hover:bg-pink-400 text-gray-700 font-bold py-2 px-6 rounded-lg flex border-2">
         <LuPodcast className="-ml-2 mt-1 text" />
           <p className="-mr-1">Podcast</p>
         </button>
        </div>
      </div>


  {/* Blog Navbar */}
      <div>
  
  {/* 1st coloume */}
      <div className="bg-white py-4 px-4 ml-32 rounded-lg">
        <div className="flex space-x-4">
          <a href="">
            <div className="flex space-x-2 bg-gray-200 hover:bg-pink-400 w-24 h-10 py-2 pl-9 rounded-lg ">
              <h1 className="" style={{ fontSize: "14px" }}>
                All
              </h1>
            </div>
          </a>

    {/* 2nd coloume */}
          <a href="">
            <div className="flex space-x-2 bg-gray-200 hover:bg-pink-400 w-24 h-10 py-2 pl-4 rounded-lg ">
              <h1 className="" style={{ fontSize: "14px" }}>
                Fragnance
              </h1>
            </div>
          </a>
    
      {/* 3rd coloume */}
          <a href="">
            <div className="flex space-x-2 bg-gray-200 hover:bg-pink-400 w-24 h-10 py-2 pl-5 rounded-lg ">
              <h1 className="" style={{ fontSize: "14px" }}>
                Self-care
              </h1>
            </div>
          </a>
  {/* 4th coloume */}
          <a href="">
            <div className="flex space-x-2 bg-gray-200 hover:bg-pink-400 w-24 h-10 py-2 pl-6 rounded-lg ">
              <h1 className="" style={{ fontSize: "14px" }}>
                Lifestyle
              </h1>
            </div>
          </a>
  {/* 5th coloume */}
          <a href="">
            <div className="flex space-x-2 bg-gray-200 hover:bg-pink-400 w-24 h-10 py-2 pl-3 rounded-lg ">
              <h1 className="" style={{ fontSize: "13px" }}>
                Tips & Tricks
              </h1>
            </div>
          </a>
  {/* 6th coloume */}
          <a href="">
            <div className="flex space-x-2 bg-gray-200 hover:bg-pink-400 w-24 h-10 py-2 pl-8 rounded-lg ">
              <h1 className="" style={{ fontSize: "14px" }}>
                News
              </h1>
            </div>
          </a>
  {/* 7th coloume */}
          <a href="">
            <div className="flex space-x-2 bg-gray-200 hover:bg-pink-400 w-24 h-10 py-2 pl-7 rounded-lg ">
              <h1 className="" style={{ fontSize: "14px" }}>
                Events
              </h1>
            </div>
          </a>
        </div>
        </div>

  {/* Right Section */}
        <div className="bg-white px-2 py-2 mt-8 rounded ml-32">

  {/* 1St Blog */}
        <div class="space-x-8 p-4 flex">
            <div class="text-black w-28 pl-2">
              <h1 className="text-base"><b>5 Min Read</b></h1>
              <h2 className="text-xs">February 25, 2023</h2>
            </div>
            <div className="w-96 pl-12">
            <h2 class="text-lg font-bold ">Different factors to consider when choosing a perfume</h2>
            <p class="text-gray-700 text-sm mt-2">This blog post will discuss the different factors to consider when choosing a perfume, such as your personal style, skin type, and preferences.</p>
            </div>
            <div className="pl-8">
            <button className="bg-white hover:bg-pink-400 border-2 px-3 pb-0.5 h-10 rounded-lg">
            View Full Blog
          </button>  
          </div>      
          </div>

  {/* 2nd Blog */}
          <div class="space-x-8 p-4 flex ">
            <div class="text-sm text-black w-28 pl-2 ">
            <h1 className="text-base"><b>10 Min Read</b></h1>
            <h2 className="text-xs">February 25, 2023</h2>
            </div>
            <div className="w-96 pl-12">
            <h2 class="text-lg font-bold ">The Histroy of Perfume</h2>
            <p class="text-gray-700 text-sm mt-2">This blog post will explore the histroy of perfume from its origins in ancient egypt to its mordern-day popularity</p>
            </div>
            <div className="pl-8">
            <button className="bg-white hover:bg-pink-400 border-2 px-3 pb-0.5 h-10 rounded-lg">
            View Full Blog
          </button>  
          </div>      
          </div>


  {/* 3rd Blog */}
          <div class="space-x-8  p-4 flex">
            <div class="text-sm text-black w-28 pl-2 ">
            <h1 className="text-base"><b>15 Min Read</b></h1>
            <h2 className="text-xs">February 25, 2023</h2>
            </div>
            <div className="w-96 pl-12">
            <h2 class="text-lg font-bold ">The Science of Perfume</h2>
            <p class="text-gray-700 text-sm mt-2">This blog post will discuss the science behind perfume including how diffrent ingredients intract to create diffrent scents.</p>
            </div>
            <div className="pl-8">
            <button className="bg-white hover:bg-pink-400 border-2 px-3 pb-0.5 h-10 rounded-lg">
            View Full Blog
          </button>  
          </div>      
          </div>
    </div>
      </div>
      </div>
  );
}

export default Blog;
