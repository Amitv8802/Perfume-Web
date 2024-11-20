import React from 'react';
import Women from './Women';
import Mission from './Mission';
import ZAuraNewsletterSignup from '../Home/SignUPFoam';
import Footer from '../Home/Footer';
import Navbar from '../Home/Navbar';
import img1 from '../assets/About Us/About1.jpeg';
import { GiElectric } from "react-icons/gi";
import { RiGlobalLine } from "react-icons/ri";
import { FaRegLightbulb } from "react-icons/fa";
import { HiOutlineFire } from "react-icons/hi";

function AboutUs() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="bg-gray-100">
      <header className=" bg-gray shadow-sm ">
        <Navbar/>
      </header>
      <div className="bg-white mx-32 mt-14">
        <div className="container mx-auto px-16 py-16">
          <h1 className="text-4xl font-bold mb-4">
          The Scent of Confidence
          </h1>
          <p className="text-base text-gray-700 mb-10">
          Z Aura is a perfume brand that was created to help women feel confident and beautiful. Our fragrances are carefully crafted with a blend of natural and synthetic ingredients that are sure to flatter any woman. We believe that every woman deserves to feel her best, and we're committed to creating fragrances that help women achieve that feeling.
          </p>

          <div className="justify-center ">
            <img src={img1} alt="" className="border rounded-lg" style={{height:"500px", width:"1120px"}}  />
          </div>

          <div className="flex justify-center -mt-8">
            <div className="flex space-x-4">
              <div className="flex items-center bg-white py-2 px-4 rounded-lg">
              
              <div className="border-2 px-2 py-2 bg-pink-200 rounded-lg">
              <GiElectric className="h-6 w-6" />
              </div>

                <p className="text-lg font-semibold ml-2">Creative Team</p>
              </div>
              <div className="flex items-center bg-white py-2 px-4 rounded-lg">

              <div className="border-2 px-2 py-2 bg-pink-200 rounded-lg">
              <RiGlobalLine className="h-6 w-6" />
              </div>

                <p className="text-lg font-semibold ml-2">Global Inspiration</p>
              </div>
              <div className="flex items-center bg-white py-2 px-4 rounded-lg">

              <div className="border-2 px-2 py-2 bg-pink-200 rounded-lg">
              <FaRegLightbulb className="h-6 w-6" />
              </div>

                <p className="text-lg font-semibold ml-2">Future Ambitions</p>
              </div>
              <div className="flex items-center bg-white py-2 px-4 rounded-lg">
              <div className="border-2 px-2 py-2 bg-pink-200 rounded-lg">
              <HiOutlineFire className="h-6 w-6"/>
              </div>
              

                <p className="text-lg font-semibold ml-2">Founder's Dream</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Women/>
      <Mission/>
      <ZAuraNewsletterSignup/>
      <Footer/>
    </div>
  );
}

export default AboutUs;