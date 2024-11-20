import React from 'react';
import Fbimg from "../assets/Footer/fb.jpg"
import Twitimg from "../assets/Footer/tw.jpg"
import linkimg from "../assets/Footer/li.jpg"

function Footer() {
  return (
    <div className="bg-white mt-24">
           <div className='py-10 pl-36 flex'>


    {/* Logo Image */}
    <h1 className='text-xl font-bold'>Z-AURA</h1>

     {/* Other images          */}
          <div className="flex space-x-4 rounded-lg" style={{marginLeft:'75%'}}>
            <a href="#" className="h-8 w-8 border-2 rounded">
              <img src={Fbimg} alt="" />
            </a>
            <a href="#" className="h-8 w-8 border-2 rounded">
              <img src={Twitimg} alt=""/>
            </a>
            <a href="#" className="h-8 w-8 border-2 rounded">
              <img src={linkimg} alt="" className='h-6 mt-0.5'/>
            </a>
          </div>
          </div>

    {/* Home Section */}
        <div className="border-t border-gray-300 mb-8 ml-12 mr-12 pt-4">
          <div className='flex space-x-4'>
          <div className='pl-32'>
            <h1 className='mt-12 font-semibold'>Home</h1>
            <a href="#"><p className='mt-3'>Perfume</p></a>
            <a href="#"><p className='mt-1'>Store</p></a>
            <a href="#"><p className='mt-1'>FAQ's</p></a>
            <a href="#"><p className='mt-1 mb-28'>Testimonial</p></a>
          </div>

    {/* Collection Section */}
          <div className='pl-24'>
            <h1 className='mt-12 font-semibold'>Collection</h1>
            <a href="#"><p className='mt-3'>Featured Collection</p></a>
            <a href="#"><p className='mt-1'>Signature Collection</p></a>
            <a href="#"><p className='mt-1'>Limited</p></a>
          </div>

    {/* Stores Section */}

          <div className='pl-24'>
            <h1 className='mt-12 font-semibold'>Stores</h1>
            <a href="#"><p className='mt-3'>New York City</p></a>
            <a href="#"><p className='mt-1'>Paris</p></a>
            <a href="#"><p className='mt-1'>Dubai</p></a>
            <a href="#"><p className='mt-1 mb-28'>London</p></a>
          </div>
 
     {/* About Section */}

          <div className='pl-24'>
            <h1 className='mt-12 font-semibold'>About Us</h1>
            <a href="#"><p className='mt-3'>Our Story</p></a>
            <a href="#"><p className='mt-1'>Our Mission</p></a>
            <a href="#"><p className='mt-1'>Our Vision</p></a>
          </div>

    {/* Why Section */}

          <div className='pl-24'>
            <h1 className='mt-12 font-semibold'>Why Us</h1>
            <a href="#"><p className='mt-3'>Ingrediats</p></a>
            <a href="#"><p className='mt-1'>Sustainability</p></a>
            <a href="#"><p className='mt-1'>Eco-Friendly</p></a>
          </div>

    {/* Blogs Section */}

          <div className='pl-24'>
            <h1 className='mt-12 font-semibold'>Blogs</h1>
            <a href="#"><p className='mt-3'>Fragments</p></a>
            <a href="#"><p className='mt-1'>Self-Care</p></a>
            <a href="#"><p className='mt-1'>Lifestyle</p></a>
            <a href="#"><p className='mt-1 mb-28'>News & Events</p></a>
          </div>
          </div>

    {/* Lower Section */}
          <div className="flex justify-between items-center ml-16 mb-12">
            <p className="text-gray-600">© 2023 Z-Aura. All rights reserved.</p>
            <div className='flex space-x-8 text-gray-600 -ml-16'>
            <a href="#"><p>Privacy & Policy</p></a>
            <a href="#"><p>Legal</p></a>
            <a href="#"><p>Term & Condition</p></a>
            </div>
            <button className='bg-white hover:bg-pink-400 border-2 px-3 pb-0.5 mr-20 h-10 rounded-lg'>
            <a href="#" className="text-gray-600 hover:text-Pink-400">
              Go to top ↑
            </a>
            </button>
          </div>
      </div> 
    </div>
  );
}

export default Footer;