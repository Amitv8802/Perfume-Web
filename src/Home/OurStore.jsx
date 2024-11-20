import React from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";
import { CgMoreR } from "react-icons/cg";
import image1 from "../assets/Home/images 3.png";
import image2 from "../assets/Home/images.png";
import image3 from "../assets/Home/images 2.jpeg";

function OurStores() {
  return (

    // Header section for Our Stores 
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4">Our Stores</h2>
      <p className="text-gray-600 mb-12 ">
      Z-Aura is a luxury perfume brand that helps women feel more confident
          and beautiful Selves. The perfume is made with a
          brand of rare and axotic ingrediate and <br /> it is designed to leave a
          lasting impression on these around you
      </p>

  {/* Middile Content */}
      <div className="bg-white p-16 rounded-xl">
      <div className=" flex space-x-8">

  {/* 1st Img */}

      <div className="rounded-lg shadow-md bg-gray-100" style={{width:"350px", height:"500px"}}>
        <div className=" border-black text-gray-700 font-bold py-4 rounded">
          <img src={image1} alt="" className="w-96 h-56 px-8"/> 
          </div>          
          <div>         
          <h2 className="text-xl font-bold mb-1 pl-8 mt-0.5">Z aura Boutique</h2>
          <h3 className='text-sm mb-4 pl-8 '>New York City</h3>
          </div>          
          <p className="text-gray-600 text-sm mb-6 pl-8 pr-8">Discover out flagship boutique in the heart of New York City, Where you can explore out full range of perfumes and receive personalized service</p>
          <div className="flex space-x-3 pl-8 ">
          <button className="bg-white hover:bg-pink-400 text-gray-700 font-bold py-2 px-6 rounded flex">
          <CgMoreR  className="-ml-2 pr-1 mt-1 text" />
           <p className="-mr-2">  Know more</p>
         </button>
         <button className="bg-white hover:bg-pink-400 text-gray-700 font-bold py-2 px-8 rounded flex">
          <FaMapMarkerAlt  className="-ml-4 pr-1 mt-1 text" />
           <p className="-mr-4">  Get Direction</p>
         </button>
        </div>
        </div>
  
   {/* 2nd Img */}

        <div className="rounded-lg shadow-md bg-gray-100" style={{width:"350px", height:"500px"}}>
        <div className="image-grid border-black text-gray-700 font-bold py-4 px-4 rounded">
          <img src={image2} alt="" className="w-96 h-56 px-4"/> 
          </div>          
          <div>         
          <h2 className="text-xl font-bold mb-1 pl-8 mt-0.5">Z-aura Gallery </h2>
          <h3 className='text-sm mb-4 pl-8 '>Paris</h3>
          </div>          
          <p className="text-gray-600 text-sm mb-8 pl-8 pr-8">Experiance the alume of Z-Aura in the romantic city of paris.Visit our gallery for a sensory journey throgh our enhancing fragnance collection</p>
          <div className="flex space-x-4 pl-8">
          <button className="bg-white hover:bg-pink-400 text-gray-700 font-bold py-2 px-6 rounded flex">
          <CgMoreR  className="-ml-2 pr-1 mt-1 text" />
           <p className="-mr-2">  Know more</p>
         </button>
         <button className="bg-white hover:bg-pink-400 text-gray-700 font-bold py-2 px-8 rounded flex">
          <FaMapMarkerAlt  className="-ml-4 pr-1 mt-1 text" />
           <p className="-mr-4">  Get Direction</p>
         </button>
        </div>
        </div>

     {/* 3rd Img */}

        <div className="rounded-lg shadow-md bg-gray-100" style={{width:"350px", height:"500px"}}>
        <div className="image-grid border-black text-gray-700 font-bold py-4 px-4 rounded">
          <img src={image3} alt="" className="w-96 h-56 px-4"/> 
          </div> 
          <div>         
          <h2 className="text-xl font-bold mb-1 pl-8 mt-0.5">Z-aura Elegance</h2>
          <h3 className='text-sm mb-4 pl-8 '>London</h3>
          </div>
          <p className="text-gray-600 text-sm mb-8 pl-8 pr-8">Step into a fragnance at our London store where dimless fragnance blend with British sophistication to create an unforgottable experience</p>
          <div className="flex space-x-4 pl-8">
          <button className="bg-white hover:bg-pink-400 text-gray-700 font-bold py-2 px-6 rounded flex">
          <CgMoreR  className="-ml-2 pr-1 mt-1 text" />
           <p className="-mr-2">  Know more</p>
         </button>
         <button className="bg-white hover:bg-pink-400 text-gray-700 font-bold py-2 px-8 rounded flex">
          <FaMapMarkerAlt  className="-ml-4 pr-1 mt-1 text" />
           <p className="-mr-4">  Get Direction</p>
         </button>
        </div>
        </div>
      </div>

    {/* View Store Section */}
      <div className="text-center mt-12">
        <button className="bg-gray-200 hover:bg-pink-400 text-gray-700 font-bold py-2 px-4 rounded">
          View All Stores
        </button>
      </div>
      </div>
    </section>
  );
}

export default OurStores;