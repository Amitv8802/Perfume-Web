import React from 'react';
import Navbar from './Navbar';
import PerfumeCollections from './PerfumeCollections';
import OurStores from './OurStore';
import FAQSection from './FAQCard';
import TestimonialsSection from './TestimonialsSection';
import Blog from './BlogPosts';
import SignupFoam from './SignUPFoam';
import Footer from './Footer';
import SignUp from './SignUPFoam';
import image1 from "../assets/Home/pexels.jpg"
import image2 from "../assets/Home/pexels4.jpg"
import image3 from "../assets/Home/pexels11.jpg"
import { GiVanillaFlower } from "react-icons/gi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { AiFillProduct } from "react-icons/ai";

function Home() {
  return (

    // Home Section

    
    <div className="bg-gray-100">
      <header className=" bg-gray shadow-sm ">
        <Navbar/>
      </header>

      <section className="hero bg-gray py-16">
        <div className="container mx-48 px-0">
          <h1 className="text-lg text-left mx-0">
            The Perfume That Surrounds You in an 
          </h1>
          <div className='text-3xl font-bold text-left my-1 mb-6'>
          <div className='border-solid border-0 border-black flex bg-white rounded-lg w-5/12 h-14 w-54 px-4 py-2 '>
          <GiVanillaFlower  className=" mt-1" />
            <p className='text-black pl-4'>Aura of Confidence and Beauty</p>
            </div>
          </div>
          <div className="mb-3">
          <p className='w-80 text-base'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, mollitia debitis iure quis id eos ducimus asperiores soluta neque quos, aperiam inventore ipsa excepturi ab nulla illo laborum molestias obcaecati!</p>  
          </div>
          <div className="space-x-4 flex">
          <button className="bg-white hover:bg-pink-400 text-gray-700 font-bold py-2 px-4 rounded flex">
          <HiOutlineShoppingBag className=" text-2xl" />
           <p className="ml-2"> Shop Now</p>
         </button>
         
         <button className="bg-white hover:bg-pink-400 text-gray-700 font-bold py-2 px-4 rounded flex">
          <AiFillProduct  className=" text-2xl" />
           <p className="ml-2"> View Collection</p>
         </button>
          </div>

    {/* Images Section */}

          <div className='flex space-x-10'>
          <div className="image-grid mt-8 border-black bg-white text-gray-700 font-bold py-4 px-4 rounded">
          <img src={image1} alt="" className="w-80 h-48"/> 
          </div>
          <div className="image-grid -mt-40 border-black bg-white text-gray-700 font-bold py-4 px-4 rounded">
          <img src={image2} alt="" className="w-80 h-96"/> 
          </div>
          <div>
          <div className="image-grid -mt-72 border-black bg-white text-gray-700 font-bold py-4 px-5 rounded">
          <img src={image3} alt="" className="w-80 h-80"/> 
          </div>

    {/* Button Section */}
          <div className="mt-2 border-solid border-0 border-black bg-white rounded-lg w-90 py-5 px-5 ">
            <h2 className="text-2xl font-bold  mb-2">
              See Why To Choose Us
            </h2>
            <p className=" mb-8">
              We craft unique, handcrafted perfumes that...
            </p>
            <div className='flex space-x-2'>
            <button className="bg-gray-200 hover:bg-pink-400 text-black font-bold py-0 px-4 rounded">
              Learn More
            </button>
            <button className="bg-gray-200 hover:bg-pink-400 text-black font-bold text-sm px-4 pt-2 pb-2 rounded-md">
            Open Product
            <button className=" text-gray-700 font-bold ml-2 rounded">
                →
            </button>
          </button>
            </div>
          </div>
          </div>
          </div>
        </div>
      </section>

      <PerfumeCollections/>
      <OurStores/>
      <FAQSection/>
      <TestimonialsSection/>
      <Blog/>
      <SignUp/>
      <Footer/>
      
    </div>
  );
}

export default Home;