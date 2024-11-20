import React from 'react';
import Navbar from '../Home/Navbar';
import Dream from './Dream';
import Visit from './Visit';
import ZAuraNewsletterSignup from '../Home/SignUPFoam';
import Footer from '../Home/Footer';
import image1 from '../assets/Home/pexels8.jpg'
import { MdCardMembership } from "react-icons/md";
import { AiFillProduct } from "react-icons/ai";
import { CiStar } from "react-icons/ci";
import { AiOutlineSafetyCertificate } from "react-icons/ai";


function ZAuraBoutiques() {
  return (


// Header Section
    <div className="bg-gray-100">
      <header className=" bg-gray shadow-sm ">
        <Navbar />
      </header>
      <div className="bg-white mx-32 mt-14">
        <div className="container mx-auto px-16 py-16">
          <h1 className="text-4xl font-bold mb-4">
           Step into Our Enhanching Boutiques
          </h1>
          <p className="text-base text-gray-700 mb-10">
            The Z Aura Signature Collection is our most popular collection of perfume . It features a variety of fragments that are perfect for everyday wear <br />The collection includes both floral and fruity scents, so there is something for everyone
          </p>
 
    {/* Image Section */}
          <div className="justify-center ">
            <img src={image1} alt="" className="border rounded-lg" style={{height:"500px", width:"1120px"}}  />
          </div>


    {/* image Content img */}
          <div className="flex justify-center -mt-8">
            <div className="flex space-x-4">

   {/* 1st Coloumn */}
              <div className="flex items-center bg-white px-4 rounded-lg">
              <div className="border-2 px-4 py-4 bg-pink-200 rounded-lg">
              <MdCardMembership className="h-6 w-6" />
              </div>
                <p className="text-lg font-semibold ml-2">Expert Staff</p>
              </div>

      {/* 2nd Coloumn */}
              <div className="flex items-center bg-white px-4 rounded-lg">
              <div className="border-2 px-4 py-4 bg-pink-200 rounded-lg">
              <AiFillProduct   className="h-6 w-6"  />
              </div>
                <p className="text-lg font-semibold ml-2">Latest Collection</p>
              </div>

      {/* 3rd Coloumn */}
              <div className="flex items-center bg-white px-4 rounded-lg">
              <div className="border-2 px-4 py-4 bg-pink-200 rounded-lg">
              <CiStar  className="h-6 w-6" />
              </div>
                <p className="text-lg font-semibold ml-2">Stylish Interior</p>
              </div>

      {/* 4th Coloumn */}
              <div className="flex items-center bg-white px-4 py-2 rounded-lg">

              <div className="border-2 px-4 py-4 bg-pink-200 rounded-lg">
              <AiOutlineSafetyCertificate className="h-6 w-6" />
              </div>
                <p className="text-lg font-semibold ml-2">Safe Shopping</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Dream/>
      <Visit/>
      <ZAuraNewsletterSignup/>
      <Footer/>
    </div>
  );
}

export default ZAuraBoutiques;