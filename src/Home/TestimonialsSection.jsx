import React from "react";
import store1 from "../assets/Home/store1.jpg"
import store2 from "../assets/Home/store2.png"
import store3 from "../assets/Home/store3.png"
import store4 from "../assets/Home/store4.jpg"
import { FaStar } from "react-icons/fa";



function TestimonialsSection() {
  return (

  // Header Section
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-4">
        What People Are Saying About Z-Aura
      </h2>
      <div className="flex">
        <p className="flex text-sm text-gray-600 mb-12">
          Here what our customer have to say about Z-aura perfume!We've gethered a few of our favorite testimonial to share with you 
        </p>
        <div className="ml-48 w-48">
          <button className="flex bg-white hover:bg-pink-400 text-black text-sm px-4 pt-3 pb-3 rounded-md">
            View all Testimonial
            <button className="hover:bg-pink-400 text-gray-700 font-bold pl-4 rounded">
              →
            </button>
          </button>
        </div>
      </div>
    
  {/* People Navbar */}
      <div>
        <div className="bg-white px-4 py-4 rounded flex">
          
          <div className="flex space-x-4 pl-2">
        
  {/* 1st Person */}
            <a href="">
              <div className="flex space-x-2 bg-gray-100 w-72 h-16 py-3 px-4 rounded bg-gray-200 hover:bg-pink-200">
                <img
                  src={store1}
                  alt=""
                  className="h-10 w-10 flex rounded"
                />
                <h1 className="text-sm">Sarah J</h1>
                <h1 className="text-xs mt-5" style={{ marginLeft: "-43px" }}>
                  From New York
                </h1>
              </div>
            </a>
  {/* 2nd Person */}
            <a href="">
              <div className="flex space-x-2 bg-gray-100 w-72 h-16 py-3 px-2 rounded bg-gray-200 hover:bg-pink-200">
                <img
                  src={store2}
                  alt=""
                  className="h-10 w-10 flex rounded"
                />
                <h1 className="text-sm">Jassica B</h1>
                <h1 className="text-xs mt-5" style={{ marginLeft: "-53px" }}>
                  From London
                </h1>
              </div>
            </a>
  {/* 3rd Person */}
            <a href="">
              <div className="flex space-x-2 bg-gray-100 w-72 h-16 py-3 px-2 rounded bg-gray-200 hover:bg-pink-200">
                <img
                  src={store3}
                  alt=""
                  className="h-10 w-10 flex rounded"
                />
                <h1 className="text-sm">Emily o</h1>
                <h1 className="text-xs mt-5" style={{ marginLeft: "-44px" }}>
                  From Dubai
                </h1>
              </div>
            </a>
  {/* 4th Person */}
            <a href="">
              <div className="flex space-x-2 bg-gray-100 w-72 h-16 py-3 px-2 rounded bg-gray-200 hover:bg-pink-200">
                <img
                  src={store4}
                  alt=""
                  className="h-10 w-10 flex rounded"
                />
                <h1 className="text-sm">Katie J</h1>
                <h1 className="text-xs mt-5" style={{ marginLeft: "-40px" }}>
                  From Paris
                </h1>
              </div>
            </a>
          </div>
        </div>
      </div>

  {/* Middle Section */}

      <div className="bg-white px-4 py-4 rounded mt-6 flex">
        <div>
          <div className="flex py-14 pl-14 flex">
            <h1>Sarah J</h1>
            <h2 className="mt-8 text-xs" style={{ marginLeft: "-48px" }}>From New York</h2>
            <div className="ml-72 space-x-2 bg-gray-200 px-2 py-4 pb-2 h-12 w-28.5 flex rounded">
              <button className="bg-white hover:bg-gray-200 text-gray-700 font-bold py-0 px-4 -mt-2 rounded">
                ←
              </button>
              <button className="bg-white hover:bg-gray-200 text-gray-700 font-bold py-0 px-4 -mt-2 rounded">
                →
              </button>
            </div>
      
          </div>

    {/* Star Section */}
          <div className="-mt-10 ml-14 px-2 py-2 space-x-2 bg-gray-100 w-32 rounded-lg">
            <button className="text-yellow-300"><FaStar/></button>
            <button className="text-yellow-300"><FaStar /></button>
            <button className="text-yellow-300"><FaStar /></button>
            <button className="text-yellow-300"><FaStar /></button>
            <button className="text-yellow-300"><FaStar /></button>
          </div>


    {/* Paragraph Section */}
          <div className="text-sm mt-8 ml-14">
            <p>
              "I will wearing Z aura for months now and I absolutely love it
              it's the perfect <br /> perfume for me.It's not too strong but
              it's still noticable It makes me feel <br />
              confident and beautiful and i get compliments on it all the times
              "
            </p>
            

    {/* Read Button */}
            <button className="bg-gray-100  border-2 text-gray-700 font-bold py-2 px-4 mt-10 mb-10 rounded-lg">
              Read Full Story


    {/* Arrow Button */}
              <button className="bg-white hover:bg-pink-400 text-gray-700 font-bold py-2 px-4 ml-2 mt-0 rounded">
                →
              </button>
            </button>
          </div>
        </div>
        <div className="video h-64 w-96  bg-slate-950 ml-52 mt-12 block">
          <video src=""></video>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
