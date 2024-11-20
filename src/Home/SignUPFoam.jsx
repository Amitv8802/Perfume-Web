import React from "react";
import image9 from "../assets/Home/pexels9.jpg"
import { RiFolderReceivedFill } from "react-icons/ri";
import { RiDiscountPercentFill } from "react-icons/ri";
import { MdOutlineDevices } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { GiWeightLiftingUp } from "react-icons/gi";
import { TbPlugConnectedX } from "react-icons/tb";
import { CiGift } from "react-icons/ci";
import { AiFillProduct } from "react-icons/ai";

function ZAuraNewsletterSignup() {
  return (

    // Header Section
    <div className="bg-white px-2 py-2 mx-32 mt-28 rounded">
      <div className="container mx-auto px-10 py-16">
        <div className="px-5">
        <h2 className="text-3xl font-bold mb-6">
          Sign Up for our Newsletter and Get 10% OFF your First Purchase!
        </h2>
        <p className="text-sm text-gray-700 mb-14">
          Sign up for our newsletter and be the first to know about new
          products, exclusive offers, and perfume tips. We'll also send you a
          10% off code <br />for your first purchase.
        </p>
        </div>

    {/* Middile Image */}
        <div className="text-center mb-8">
          <img
            src={image9}
            alt="Perfume Boxes"
            className="border rounded-lg" style={{height:"360px", width:"1120px"}}  
          />
        </div>

    {/* Image Section 1st */}
        <div className="flex -mt-32 px-2 py-4 rounded-lg" style={{width:'900px',marginLeft:'200px'}}>
          <div className="bg-white  rounded-lg">
            <h3 className=" text-base font-semibold mb-4 py-4 px-6">Sign Up Here</h3>
            <form className="space-x-2 px-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="border border-gray-300 p-2 rounded-md mb-4 px-4"
              />
              <button
                type="submit"
                className="bg-white hover:bg-pink-400 border-2 text-black font-bold p-4 py-2 rounded-md"
              >
                Submit →
              </button>
            </form>
          </div>

    {/* Image Section 2nd */}
          <div className="bg-white px-6 py-4 rounded-lg">
            <h3 className="text-base font-semibold mb-8">Pack a Gift</h3>
            <div className="flex space-x-4">
              <button className="bg-gray-200 flex text-black px-4 py-2 rounded-md">
              <AiFillProduct  className="mr-2 w-6 h-6" />
                Collections
              </button>
              <button className="bg-white hover:bg-pink-400 border-2 flex text-black font-bold px-4 py-2 rounded-md">
              <CiGift className="mr-2 w-6 h-6" />
                Send a Gift
              </button>
            </div>
          </div>
        </div>

    {/* Lower Coloumn */}
        <div className="bg-gray-300 flex mx-1 pt-2 mt-10 shadow-md rounded-lg" >
        <div className="flex gap-14 my-4 ml-16">
          <div>
            <h3 className="text-base font-semibold mt-3">
              Benefits of Signing Up
            </h3>
            </div>
            <div className="bg-white p-6 mt-12 -ml-56 mb-8 rounded-lg shadow-md">
            <ul>
            <li className="bg-white text-black py-2 flex">
            <RiFolderReceivedFill className=" mt-1 text" />
           <p className="pl-2">Be the first to know about new products and offers.</p>
         </li>

         <li className="bg-white text-black  py-2 flex">
         <RiDiscountPercentFill className="mt-1 text" />
           <p className="pl-2">Get exclusive discounts and promotions.</p>
         </li>

         <li className="bg-white text-black  py-2 flex">
         <MdOutlineDevices className="  mt-1 text" />
           <p className="pl-2">Receive perfume tips and advice.</p>
         </li>
              
            </ul>
          </div>
          </div>


    {/* Other Benefits Coloumn */}
          <div className="flex gap-14 my-4 ml-12">
          <div className="mt-3 ml-4">
            <h3 className="text-base font-semibold ">
              Other Benefits
            </h3>
            </div>

            <div className="bg-white p-6 mt-12 -ml-40 mb-8 rounded-lg shadow-md">
            <ul>

            <li className="bg-white text-black  py-2 flex">
            <FaRegStar className="  mt-1 text" />
           <p className="pl-2">Long-lasting fragrances that keep you smelling great all day.</p>
         </li>

         <li className="bg-white text-black  py-2 flex">
         <GiWeightLiftingUp className="  mt-1 text" />
           <p className="pl-2">High-quality ingredients for a luxurious scent experience.</p>
         </li>

         <li className="bg-white text-black  py-2 flex">
         <TbPlugConnectedX className="  mt-1 text" />
           <p className="pl-2">Elevate your daily routine.</p>
         </li>
            </ul>
            </div>
            </div>
            </div>
          </div>
        </div>
      
   
  );
}

export default ZAuraNewsletterSignup;





