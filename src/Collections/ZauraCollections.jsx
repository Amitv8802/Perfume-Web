import React from "react";
import ZAuraFeaturedPerfumes from "./PerfumeData";
import Navbar from "../Home/Navbar";
import ZAuraNewsletterSignup from "../Home/SignUPFoam";
import Footer from "../Home/Footer";
import collection1 from "../assets/Home/pexels5.jpg"
import { MdOutlineWbSunny } from "react-icons/md";
import { GiElectric } from "react-icons/gi";
import { TbHanger2 } from "react-icons/tb";
import { HiWifi } from "react-icons/hi2";


function ZAuraSignatureCollection() {
  return (

    // header Section
    <div className="bg-gray-100">
      <header className=" bg-gray shadow-sm ">
        <Navbar />
      </header>
      <div className="bg-white mx-32 mt-14">
        <div className="container mx-auto px-16 py-16">
          <h1 className="text-4xl font-bold mb-4">
            Z Aura Signature Collection
          </h1>
          <p className="text-base text-gray-700 mb-10">
            The Z Aura Signature Collection is our most popular collection of perfume . It features a variety of fragments that are perfect for everyday wear <br />The collection includes both floral and fruity scents, so there is something for everyone
          </p>


    {/* Image  */}
          <div className="justify-center ">
            <img src={collection1} alt="" className="border rounded-lg" style={{height:"500px", width:"1120px"}}  />
          </div>


    {/* image Content img */}
          <div className="flex justify-center -mt-8">
            <div className="flex space-x-4">

      {/* 1st Coloumn */}
              <div className="flex items-center bg-white py-2 px-4 rounded-lg">
                <div className="border-2 px-4 py-4 bg-pink-200 rounded-lg">
              <MdOutlineWbSunny className="h-6 w-6" />
              </div>
                <p className="text-lg font-semibold ml-2">All-day Freshness</p>
              </div>

    {/* 2nd Coloumn */}
              <div className="flex items-center bg-white py-2 px-4 rounded-lg">

              <div className="border-2 px-4 py-4 bg-pink-200 rounded-lg">
              <GiElectric className="h-6 w-6" />
              </div>

                <p className="text-lg font-semibold ml-2">luxurious Bottle</p>
              </div>
 
     {/* 3rd Coloumn */}
              <div className="flex items-center bg-white py-2 px-4 rounded-lg">

              <div className="border-2 px-4 py-4 bg-pink-200 rounded-lg">
              <TbHanger2 className="h-6 w-6" />
              </div>

                <p className="text-lg font-semibold ml-2">Unique Formulas</p>
              </div>

      {/* 4th Coloumn */}
              <div className="flex items-center bg-white py-2 px-4 rounded-lg">

              <div className="border-2 px-4 py-4 bg-pink-200 rounded-lg">
              <HiWifi className="h-6 w-6" />
              </div>

                <p className="text-lg font-semibold ml-2">Lasting Impressions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ZAuraFeaturedPerfumes/>
      <ZAuraNewsletterSignup/>
      <Footer/>
    </div>
  );
}

export default ZAuraSignatureCollection;
