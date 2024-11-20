import React from 'react';
import Eco from "../assets/Why/pexels12.jpg";
import { HiArrowPath } from "react-icons/hi2";
import { HiOutlineCursorClick } from "react-icons/hi";
import { IoEyedropOutline } from "react-icons/io5";

function EcoFriendly() {
  return (

  //Header Section
    <div className="bg-gray-100 px-4 ">
      <div className="flex py-12 pl-28">

  {/* Eco Friendly Section */}
      <div className="flex">
        <div>
        <h1 className="text-3xl font-bold">Eco-Friendly Packaging</h1>
        <p className="mt-4 block w-80" style={{fontSize:"12.5px"}}>
        We recognize that sustainable packaging is a crucial aspect of our commitment to the environment. 
        Our eco-friendly packaging initiatives reflect our dedication to reducing waste and minimizing our ecological footprint
        </p>
        <img src={Eco} alt="" className='h-60 w-96 border-2 mt-8 rounded-lg'/>
        </div>

  {/* Right Section */}
        <div className="bg-white px-6 pt-6 rounded ml-28">
      <div class="space-x-8 py-6 px-10 flex border-2 bg-pink-100 rounded-lg">
          <div class="text-black h-24">
          <div className='flex'>
          <HiArrowPath className="h-8 w-8 mt-1"/>
          <h1 className="text-base mt-2 ml-3"><b>Recyclable Material</b></h1>
          </div>
            <p class="text-gray-700 text-sm mt-2">This blog post will explore the histroy of perfume from its origins in ancient egypt to its mordern-day </p>

          </div>     
        </div>

  {/* Bottom Box */}
        <div className='flex space-x-2 '>

  {/* Box-1 */}
        <div class=" mt-4 ">

          <div className="px-10 py-6 bg-pink-100 border-2" style={{width:'350px',height:'200px'}}>
            <div className='flex'>
            <HiOutlineCursorClick className="h-8 w-8 mt-1"/>         
            <h2 class="text-lg font-bold mt-2 ml-2">The Histroy of Perfume</h2>
          </div>
          <p class="text-gray-700 text-sm mt-2">This blog post will explore the histroy of perfume from its origins in ancient egypt to its mordern-day popularity</p>
          </div>     
        </div>

    {/* Box-2 */}

        <div class=" mt-4 ">
          <div className="px-10 py-6 bg-pink-100 border-2" style={{width:'350px',height:'200px'}}>
          <div className='flex'>
          <IoEyedropOutline className="h-8 w-8 mt-1"/>          
          <h2 class="text-lg font-bold mt-2 ml-2">The Histroy of Perfume</h2>
          </div>
          <p class="text-gray-700 text-sm mt-2">This blog post will discuss the science behind perfume including how diffrent ingredients intract to create diffrent.</p>
          </div>     
        </div>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default EcoFriendly;