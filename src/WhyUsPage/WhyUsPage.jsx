import React from "react";
import Sustainablity from "./Sustainablity";
import EcoFriendly from "./EcoFriendly";
import Navbar from "../Home/Navbar";
import Ingrediate from "./Ingrediate";
import ZAuraNewsletterSignup from "../Home/SignUPFoam";
import Footer from "../Home/Footer";
import img2 from "../assets/Why/pexels6.jpg";
import { GiElectric } from "react-icons/gi";
import { SlRocket } from "react-icons/sl";
import { FaRegEye } from "react-icons/fa";
import { CiFlag1 } from "react-icons/ci";

function WhyUsPage() {
  return (

  //Header Section
    <div className="bg-gray-100">
      <header className=" bg-gray shadow-sm ">
        <Navbar />
      </header>
      <div className="bg-gray-100 min-h-screen mt-16">
        <div className="bg-white mx-32">
          <div className="container mx-auto px-16 py-14">
            <div className="">
              <h2 className="text-4xl font-bold mb-4">
                We take pride in crafting exceptional
              </h2>
              <h2 className="text-4xl font-bold mb-8">
                perfumes that evoke emotion
              </h2>
            </div>
            <p className="text-base text-gray-700 mb-8 mr-40">
              Central to our commitment to quality and innovation is the careful
              selection of premium ingredients that compose our exquisite
              fragrances. Each scent is a symphony of harmonious notes,
              meticulously blended to create a captivating olfactory experience.
              We believe in transparency and want to share the essence of our
              creations with you.
            </p>



  {/* Image Section */}
            <div className="text-center">
              <img
                src={img2}
                alt="ZAura Perfume Bottle"
                className="border rounded-lg"
                style={{ height: "500px", width: "1120px" }}
              />


  {/* Image Box Section */}
              <div className="flex justify-center -mt-8">
                <div className="flex space-x-4">

  {/* Box 1 */}
                  <div className="flex items-center bg-white py-4 px-6 rounded-lg">
                    <div className="border-2 px-2 py-2 bg-pink-200 rounded-lg">
                      <GiElectric className="h-6 w-6" />
                    </div>

                    <p className="text-lg font-semibold ml-2">
                      {" "}
                      Premium Quality
                    </p>
                  </div>

  {/* Box 2 */}
                  <div className="flex items-center bg-white py-4 px-6 rounded-lg">
                    <div className="border-2 px-2 py-2 bg-pink-200 rounded-lg">
                    <SlRocket  className="h-6 w-6" />
                    </div>
                    <p className="text-lg font-semibold ml-2">Unique Blends</p>
                  </div>

  {/* Box 3 */}
                  <div className="flex items-center bg-white py-4 px-6 rounded-lg">
                    <div className="border-2 px-2 py-2 bg-pink-200 rounded-lg">
                    <FaRegEye className="h-6 w-6" />
                    </div>
                    <p className="text-lg font-semibold ml-2">Innovation Hub</p>
                  </div>

  {/* Box 4 */}
                  <div className="flex items-center bg-white py-4 px-6 rounded-lg">
                    <div className="border-2 px-2 py-2 bg-pink-200 rounded-lg">
                    <CiFlag1  className="h-6 w-6" />
                    </div>
                    <p className="text-lg font-semibold ml-2">
                      Customer Centri
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Ingrediate />
        <Sustainablity />
        <EcoFriendly />
        <ZAuraNewsletterSignup />
        <Footer />
      </div>
    </div>
  );
}

export default WhyUsPage;
