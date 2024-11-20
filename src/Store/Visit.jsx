import React from "react";
import { HiOutlineFire } from "react-icons/hi";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { GiElectric } from "react-icons/gi";
import { HiOutlineSparkles } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";

function Visit() {
  return (

      // Header section  
    <div className="px-32 mb-20 mt-20">
      <h1 className="text-3xl font-bold mb-8 ">
        Personalized Fragnance Connsultion
      </h1>
      <p className="text-base mb-8 pr-36">
        Step into the enchanting world of Z-Aura, where fragrant dreams come to
        life. Immerse yourself in captivating scents, explore the artistry of
        perfumery, and embark on a sensory journey like no other. Our luxurious
        perfume boutiques are more than just stores; they are sensory
        sanctuaries crafted to ignite your passion for scents.
      </p>


    {/* Box Section 1 */}
      <div
        className="bg-white px-4 py-4 rounded-lg" style={{ width: "100%", marginLeft: "" }}>
        <div className="flex mx-12 mt-12 space-x-6">

    {/* 1st Box */}
          <div>
            <div className="rounded-lg shadow-md bg-gray-100" style={{ width: "550px", height: "200px" }}>
              <div className="flex -ml-4"> 
              <HiOutlineFire className="mt-4 ml-10 border-2 h-10 w-10 bg-pink-100 rounded-lg"/>
                <h2 className="text-lg font-bold flex mb-1 pl-2 pt-6 pb-3">Personalized Fragnance Consutation</h2>
              </div>
              <p className="text-gray-600 text-sm pl-8 pr-7 mt-5">
                Z Aura perfume is avaliable in three segments 3,4 or 6 the 3
                size is the perfect travel size while the 3,4 size the perfect
                for everyday use
              </p>
            </div>
          </div>

    {/* 1st Box */}
          <div>
            <div
              className="rounded-lg shadow-md bg-gray-100"
              style={{ width: "550px", height: "200px" }}
            >
              <div className="flex -ml-4"> 
              <HiOutlineBuildingStorefront className="mt-5 ml-10 border-2 h-10 w-10 bg-pink-100 rounded-lg"/>
                <h2 className="text-lg font-bold mb-1 pl-2 mt-0.5 pt-6 pb-3">Exculusive In-Store Events</h2>
              </div>

              <p className="text-gray-600 text-sm pl-8 pr-7 mt-5">
                Z Aura perfume is avaliable in three segments 3,4 or 6 the 3
                size is the perfect travel size while the 3,4 size the perfect
                for everyday use
              </p>
            </div>
          </div>
        </div>


    {/* Box Section 2 */}

    
    {/* 1st Box */}
        <div className="flex mx-12 space-x-6 mt-6">
          <div
            className="rounded-lg shadow-md bg-gray-100"
            style={{ width: "550px", height: "200px" }}
          >
            <div className="flex -ml-4">
            <GiElectric className="mt-5 ml-10 border-2 h-10 w-12 bg-pink-100 rounded-lg"/>
              <h2 className="text-lg font-bold mb-1 pl-2 mt-0.5 pt-6 pb-3">
                Explore Limited Edition
              </h2>
            </div>

            <p className="text-gray-600 text-sm pl-8 pr-7 mt-5">
              Z Aura perfume is avaliable in three segments 3,4 or 6 the 3 size
              is the perfect travel size while the 3,4 size the perfect for
              everyday use
            </p>
          </div>

   {/* 2nd Box */}
          <div>
            <div
              className="rounded-lg shadow-md bg-gray-100"
              style={{ width: "550px", height: "200px" }}
            >
              <div className="flex -ml-4">
              <HiOutlineSparkles className="mt-5 ml-10 border-2 h-10 w-12 bg-pink-100 rounded-lg"/>
                <h2 className="text-lg font-bold mb-1 pl-2 mt-0.5 pt-6 pb-3">Touch and Feel</h2>
              </div>

              <p className="text-gray-600 text-sm pl-8 pr-7 mt-5">
                Z Aura perfume is avaliable in three segments 3,4 or 6 the 3
                size is the perfect travel size while the 3,4 size the perfect
                for everyday use
              </p>
            </div>
          </div>
        </div>

     {/* Country Selection */}

        <div className="bg-gray-300 mx-12 mt-8 mb-12 shadow-md rounded-lg">
          <div className="px-10 py-8">
            <h3 className="text-xl font-semibold ">
              Find a Z-aura Store Near You
            </h3>
            <p className="text-sm mt-2">
              enter your location to find your Nearest Z-aura Store
            </p>
          </div>
          <div className=" flex space-x-6 mt-4 px-10 pb-8 ">

      {/* Country Section */}
            <div className="row">
              <div className="mb-3">
                <label for="country">Your Country</label>
              </div>
              <div className="bg-white px-3 py-2 rounded-lg">
                <select id="country" name="country" className="pr-40 rounded-lg">
                  <option value="australia">Australia</option>
                  <option value="canada">Canada</option>
                  <option value="usa">USA</option>
                </select>
              </div>
            </div>

      {/* State Section */}
            <div class="row">
              <div className="mb-3">
                <label for="country">Your State</label>
              </div>
              <div className="bg-white px-3 py-2 rounded-lg">
                <select id="country" name="country" className="pr-40 rounded-lg">
                  <option value="australia">Australia</option>
                  <option value="canada">Canada</option>
                  <option value="usa">USA</option>
                </select>
              </div>
            </div>

      {/* City Section */}
            <div class="row">
              <div className="mb-3">
                <label for="country">Your City</label>
              </div>
              <div className="bg-white px-3 py-2 rounded-lg">
                <select id="country" name="country" className="pr-40 rounded-lg">
                  <option value="australia">Australia</option>
                  <option value="canada">Canada</option>
                  <option value="usa">USA</option>
                </select>
              </div>
            </div>

      {/* Search Bar */}
            <a href="">
              <div className="flex space-x-2 bg-pink-300 w-54 h-10 mt-9 py-2 px-2 rounded bg-gray-200 hover:bg-pink-200">
              <CiSearch 
                  className="h-8 w-8 flex rounded bg-white px-2 -mt-1"
                />
                <h1 className="text-sm">Search For a Store
                </h1>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Visit;
