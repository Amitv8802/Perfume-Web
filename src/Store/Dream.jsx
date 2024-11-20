import React from 'react';
import DreamCard from './DreamCard';
import img1 from "../assets/Store/Store1.jpeg"
import img2 from "../assets/Store/Store2.jpeg"
import img3 from "../assets/Store/Store3.jpeg"
import img4 from "../assets/Store/Store4.jpeg"
import img5 from "../assets/Store/Store5.jpeg"
import { MdOutlineLocalPhone } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { CiShop } from "react-icons/ci";

function Dream() {
  return (

    // Header section
    <div className="container mx-auto mt-20 px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Where Fragrance Dreams Come True</h1>
      <p className="text-base mb-8 pr-36">
        Step into the enchanting world of Z-Aura, where fragrant dreams come to life. Immerse yourself in captivating scents, explore the artistry of perfumery, and embark on a sensory journey like no other. Our luxurious perfume boutiques are more than just stores; they are sensory sanctuaries crafted to ignite your passion for scents.
      </p>

    <DreamCard/>

    {/* Image Section */}
     <div className="bg-white flex mt-6">
        <div className='py-14 px-14'>
          <img src={img1} alt="" className=' border rounded-lg' style={{height:'380px',width:'550px'}}/>
          <div className='py-4 px-2 flex border-2 space-x-2'>
          <img src={img2} alt="" className=' border rounded-lg h-12 w-24'/>
          <img src={img3} alt="" className=' border rounded-lg h-12 w-24'/>
          <img src={img4} alt="" className=' border rounded-lg h-12 w-24'/>
          <img src={img5} alt="" className=' border rounded-lg h-12 w-24'/>
        </div>
        </div>

    {/* Deatils Section */}
        <div className='mt-14 pr-40'>
        <h1 className='text-2xl font-bold'>Z - Aura Boutiques</h1>
        <h3 className='mb-6 text-sm'>New York City</h3>
        <p className='mb-6 text-sm'>A light airy blend of bergonet,jasmine and amber. It is the perfect everyday scent for women who want to feel confident and beautiful</p>

        
        
        <div className='flex bg-white border-gray-300 border-2 mb-8 py-3 pl-5 rounded-lg' style={{height:'250px',width:'430px'}}>
        <div className=''>

    {/* 1st Column */}
        <h1>
              <div className="flex space-x-2 bg-gray-100 w-96 h-16 py-3 px-4 mb-4 rounded bg-gray-200 hover:bg-pink-200">
              <MdOutlineLocalPhone className='border-2 bg-white h-10 w-10 px-2 rounded-lg'/>
                <h1 className="text-sm">Contact</h1>
                <h1 className="text-xs mt-5 font-semibold" style={{ marginLeft: "-48px" }}>
                  (123) 456-7890
                </h1>
              </div>
            </h1>

    {/* 2nd Column */}
            <h1>
              <div className="flex space-x-2 bg-gray-100 w-96 h-16 py-3 px-4 mb-4  rounded bg-gray-200 hover:bg-pink-200">
              <CiLocationOn className='border-2 bg-white h-10 w-10 px-2 rounded-lg'/>
                <h1 className="text-sm">Address</h1>
                <h1 className="text-xs mt-5 font-semibold" style={{ marginLeft: "-52px" }}>
                  123 Fifth Avenue,New York,NY 10001
                </h1>
              </div>
            </h1>

    {/* 3rd Column */}
            <h1>
              <div className="flex space-x-2 bg-gray-100 w-96 h-16 py-3 px-4 rounded bg-gray-200 hover:bg-pink-200">
              <CiShop className='border-2 bg-white h-10 w-10 px-2 rounded-lg'/>
                <h1 className="text-sm">Hours</h1>
                <h1 className="text-xs mt-5 font-semibold" style={{ marginLeft: "-36px" }}>
                Mon-Sat: 10:00 AM - 8:00 PM
                </h1>
              </div>
            </h1>
        </div>
        </div>

    {/* Direction Button */}
        <div>
          <button className="bg-gray-100 hover:bg-pink-400 border-2 flex text-gray-700 font-bold py-2 px-36 rounded">
          <CiLocationOn className='h-6 w-10 px-2 rounded-lg'/>
            Get direction
            
         </button>
        
        </div>
        </div>
      </div>      
    </div>
  );
}

export default Dream;