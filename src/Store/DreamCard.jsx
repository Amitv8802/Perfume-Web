import React from 'react'
import Dream1 from "../assets/Home/USA.jpeg"
import Dream2 from "../assets/Home/UK.png"
import Dream3 from "../assets/Home/SA.jpeg"
import Dream4 from "../assets/Home/France.png"

function DreamCard() {
  return (
    <div>

      {/* Navbar Section */}
        <div className="bg-white px-4 py-4 rounded flex mt-14">
          <div className='p-2 flex rounded-lg'>
        <button className="bg-gray-200 hover:bg-white text-gray-700 font-bold px-4 rounded">
                ←
            </button>
            </div>
          <div className="flex space-x-4 pl-3 pr-3 ">


      {/* 1st Navbar Img */}
            <a href="">
              <div className="flex space-x-2 bg-gray-100 w-64 h-16 py-3 px-4 rounded bg-gray-200 hover:bg-pink-200">
                <img
                  src={Dream1}
                  alt=""
                  className="h-10 w-10 flex rounded"
                />
                <h1 className="text-sm font-semibold">New York City</h1>
                <h1 className="text-xs mt-5" style={{ marginLeft: "-88px" }}>
                  USA
                </h1>
              </div>
            </a>

      {/* 2nd Navbar Img */}
            <a href="">
              <div className="flex space-x-2 bg-gray-100 w-64 h-16 py-3 px-2 rounded bg-gray-200 hover:bg-pink-200">
                <img
                  src={Dream2}
                  alt=""
                  className="h-10 w-10 flex rounded"
                />
                <h1 className="text-sm font-semibold">Paris</h1>
                <h1 className="text-xs mt-5" style={{ marginLeft: "-28px" }}>
                  France
                </h1>
              </div>
            </a>

      {/* 3rd Navbar Img */}
            <a href="">
              <div className="flex space-x-2 bg-gray-100 w-64 h-16 py-3 px-2 rounded bg-gray-200 hover:bg-pink-200">
                <img
                  src={Dream3}
                  alt=""
                  className="h-10 w-10 flex rounded"
                />
                <h1 className="text-sm font-semibold">Dubai</h1>
                <h1 className="text-xs mt-5" style={{ marginLeft: "-36px" }}>
                  Saudi Arabia
                </h1>
              </div>
            </a>

      {/* 4th Navbar Img */}
            <a href="">
              <div className="flex space-x-2 bg-gray-100 w-64 h-16 py-3 px-2 rounded bg-gray-200 hover:bg-pink-200">
                <img
                  src={Dream4}
                  alt=""
                  className="h-10 w-10 flex rounded"
                />
                <h1 className="text-sm font-semibold">London</h1>
                <h1 className="text-xs mt-5" style={{ marginLeft: "-48px" }}>
                  United Kingdom
                </h1>
              </div>
            </a>
          </div>

      {/* Arrow Section */}
          <div className='p-2 flex rounded-lg'>
          <button className="bg-gray-200 hover:bg-white text-gray-700 font-bold py-2 px-4 rounded">
                →
            </button>
            </div>
        </div>
    </div>
  );
}

export default DreamCard;