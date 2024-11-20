import React from "react";
import image4 from "../assets/Home/pexels12.jpg"
import image5 from "../assets/Home/pexels13.jpg"
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { AiFillProduct } from "react-icons/ai";

function PerfumeCollections() {
  return (
  
  // Header Section
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8">Perfume Collections</h2>
      <div className="flex">
        <p className="text-gray-600 mb-12">
          Z-Aura is a luxury perfume brand that helps women feel more confident
          and beautiful Selves. The perfume is made with a <br />
          brand of rare and axotic ingrediate and it is designed to leave a
          lasting impression on these around you
        </p>
        <div className="ml-48 w-48">
          <button className="flex bg-white hover:bg-pink-400 text-black text-sm px-4 pt-4 pb-4 rounded-md">
            View all product
            <button className=" text-gray-700 font-bold pl-4 rounded">
                →
            </button>
          </button>
          
        </div>
      </div>

  {/* Content Section */}


      <div className="bg-white p-14 rounded-xl">
      <div className=" flex space-x-8">

  {/* 1st Img */}
      <div className="rounded-lg shadow-md bg-gray-100" style={{width:"550px", height:"550px"}}>
        <div className="image-grid border-black text-gray-700 font-bold py-4 px-4 rounded">
          <img src={image4} alt="" className="h-80" style={{width:'550px'}}/> 
          </div>          
          <div className="flex">         
          <h2 className="text-xl font-bold mb-4 pl-8 mt-1">Z aura Originals</h2>
          <button className="bg-pink-200 hover:bg-pink-400 text-gray-700 font-bold rounded ml-48 mt-1 px-4 py-2 my-4">
           $59.99
          </button>
          </div>          
          <p className="text-gray-600 text-sm mb-8 pl-8 pr-8">A light and airy blend of bergamot,jasmine,and amber.It is the perfect everyday scent for women who want to feel confident and beautiful</p>
          <div className="flex space-x-4 pl-8">
          
          <button className="bg-white hover:bg-pink-400 text-gray-700 font-bold py-2 px-16 rounded flex">
          <HiOutlineShoppingBag className="-ml-5 text-2xl" />
           <p className="ml-2"> Shop Now</p>
         </button>
         
         <button className="bg-white hover:bg-pink-400 text-gray-700 font-bold py-2 px-16 rounded flex">
          <AiFillProduct  className="-ml-5 text-2xl" />
           <p className="ml-2"> View Collection</p>
         </button>
        </div>
        </div>


  {/* 2nd Img  */}
        <div className="rounded-lg shadow-md bg-gray-100" style={{width:"550px", height:"550px"}}>
        <div className="image-grid border-black text-gray-700 font-bold py-4 px-4 rounded">
          <img src={image5} alt="" className="h-80" style={{width:'550px'}}/> 
          </div> 
          <div className="flex">         
          <h2 className="text-xl font-bold mb-4 pl-8 mt-1">Z aura Exotic</h2>
          <button className="bg-pink-200 hover:bg-pink-400 text-gray-700 font-bold rounded ml-56 mt-1 px-4 py-2 my-4">
          $69.99
          </button>
          </div>
          <p className="text-gray-600 text-sm mb-8 pl-8 pr-8">A fruity and fioral blend of grapefruit,orchid and sandalwood. It is the perfect night out scent for women who want to turn heads</p>
          <div className="flex space-x-4 pl-8">
          <button className="bg-white hover:bg-pink-400 text-gray-700 font-bold py-2 px-16 rounded flex">
          <HiOutlineShoppingBag className="-ml-5 text-2xl" />
           <p className="ml-2"> Shop Now</p>
         </button>
         <button className="bg-white hover:bg-pink-400 text-gray-700 font-bold py-2 px-16 rounded flex">
          <AiFillProduct  className="-ml-5 text-2xl" />
           <p className="ml-2"> View Collection</p>
         </button>
        </div>
        </div>
      </div>

  {/* Arrow Section */}
      
      <div className="bg-gray-100 p-2 flex rounded-lg" style={{margin:"50px 455px 0 460px"}}>
            <button className="bg-white hover:bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded">
                ←
            </button>
            <div className="flex items-center pl-6 pr-6">
                <div className="w-4 h-1 bg-gray-400 mr-2"></div>
                <div className="w-4 h-1 bg-gray-400 mr-2"></div>
                <div className="w-4 h-1 bg-gray-400"></div>
            </div>
            <button className="bg-white hover:bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded">
                →
            </button>
        </div>
      </div>
    </section>
  );
}

export default PerfumeCollections;
