import React from 'react'
import collection2 from "../assets/Home/pexels2.jpg"
import collection3 from "../assets/Home/pexels3.jpg"
import collection4 from "../assets/Home/pexels4.jpg"
import collection5 from "../assets/Home/pexels7.jpg"
import collection6 from "../assets/Home/pexels14.jpeg"
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { AiFillProduct } from "react-icons/ai";

function PerfumeCards() {
    return (
        <div>

        {/* 1st card */}

        <div className="bg-white flex">
        <div className='py-14 px-14'>
          <img src={collection2} alt="" className=' border rounded-lg' style={{height:'450px',width:'580px'}}/>
        </div>
        <div className='mt-28 pr-40'>
        <h1 className='mb-4 text-2xl font-bold'>Z - Aura originals</h1>
        <p className='mb-6 text-sm'>A light airy blend of bergonet,jasmine and amber. It is the perfect everyday scent for women who want to feel confident and beautiful</p>

        
        <h3 className='mb-3'>Ingrediate</h3>
        <div className='flex bg-white border-gray-300 border-2 mr-72 mb-6 py-2 px-6 space-x-10 rounded-lg'>
        <button>Bergomet</button>
        <button>Jasmine</button>
        <button>Amber</button>
        </div>

        <div className='flex'>

          <h1 className='mb-4 text-base'>Scent</h1>
          <p className='mt-8 -ml-10 text-sm'>Light and ariy,perfect for everyday wear</p>

          <div className='ml-8'>
          <h1 className=' text-base'>Price</h1>
          <p className='text-2xl font-bold'>$59.99</p>
          </div>
        </div>
        <div className="flex space-x-4 mt-8">
        <button className="bg-white hover:bg-pink-400 text-gray-700 font-bold py-2 px-10 rounded flex border-2">
          <HiOutlineShoppingBag className=" text-2xl" />
           <p className="ml-2"> Shop Now</p>
         </button>
         
         <button className="bg-white hover:bg-pink-400 text-gray-700 font-bold py-2 px-10 rounded flex border-2">
          <AiFillProduct  className=" text-2xl" />
           <p className="ml-2"> View Collection</p>
         </button>
        </div>
        </div>
      </div>

      {/* 2nd card */}

      <div className="bg-white flex mt-10">
        <div className='py-14 px-14'>
          <img src={collection3} alt="" className=' border rounded-lg' style={{height:'450px',width:'580px'}}/>
        </div>
        <div className='mt-28 pr-40'>
        <h1 className='mb-4 text-2xl font-bold'>Z-Aura Exotic</h1>
        <p className='mb-6 text-sm'>A fruity and floral blend of grapefruit,orchid,and sandalwood.It is perfect night out scent for women who want to trun heads</p>

        
        <h3 className='mb-3'>Ingrediate</h3>
        <div className='flex bg-white border-gray-300 border-2 mr-60 mb-6 py-2 px-6 space-x-10 rounded-lg'>
        <button>Grapefruit</button>
        <button>Orchid</button>
        <button>Sandalwood</button>
        </div>

        <div className='flex'>

          <h1 className='mb-4 text-base'>Scent</h1>
          <p className='mt-8 -ml-10 text-sm'>Fruity and floral,perfect for night outs</p>

          <div className='ml-8'>
          <h1 className=' text-base'>Price</h1>
          <p className='text-2xl font-bold'>$69.99</p>
          </div>
        </div>
        <div className="flex space-x-4 mt-8">
        <button className="bg-white hover:bg-pink-400 text-gray-700 font-bold py-2 px-10 rounded flex border-2">
          <HiOutlineShoppingBag className=" text-2xl" />
           <p className="ml-2"> Shop Now</p>
         </button>
         
         <button className="bg-white hover:bg-pink-400 text-gray-700 font-bold py-2 px-10 rounded flex border-2">
          <AiFillProduct  className=" text-2xl" />
           <p className="ml-2"> View Collection</p>
         </button>
        </div>
        </div>
      </div>

      {/* 3rd card */}

      <div className="bg-white flex mt-10">
        <div className='py-14 px-14'>
          <img src={collection4} alt="" className=' border rounded-lg' style={{height:'450px',width:'640px'}}/>
        </div>
        <div className='mt-28 pr-40'>
        <h1 className='mb-4 text-2xl font-bold'>Z - Aura sensual</h1>
        <p className='mb-6 text-sm'>A Warm and sensual blend rose,vanilla and musk. It is the perfect special occasion scent for women who want to feel glamorous and soohisticted</p>

        
        <h3 className='mb-3'>Ingrediate</h3>
        <div className='flex bg-white border-gray-300 border-2 mr-80 mb-6 py-2 px-6 space-x-10 rounded-lg'>
        <button>Rose</button>
        <button>Vanilla</button>
        <button>Musk</button>
        </div>

        <div className='flex'>

          <h1 className='mb-4 text-base'>Scent</h1>
          <p className='mt-8 -ml-10 text-sm'>Warm and sensual,Perfect for special occasion</p>

          <div className='ml-8'>
          <h1 className=' text-base'>Price</h1>
          <p className='text-2xl font-bold'>$69.99</p>
          </div>
        </div>
        <div className="flex space-x-4 mt-8">
        <button className="bg-white hover:bg-pink-400 text-gray-700 font-bold py-2 px-10 rounded flex border-2">
          <HiOutlineShoppingBag className="text-2xl" />
           <p className="ml-2"> Shop Now</p>
         </button>
         
         <button className="bg-white hover:bg-pink-400 text-gray-700 font-bold py-2 px-10 rounded flex border-2">
          <AiFillProduct  className=" text-2xl" />
           <p className="ml-2"> View Collection</p>
         </button>
        </div>
        </div>
      </div>

      {/* 4th card */}

      <div className="bg-white flex mt-10">
        <div className='py-14 px-14'>
          <img src={collection5} alt="" className=' border rounded-lg' style={{height:'450px',width:'640px'}}/>
        </div>
        <div className='mt-28 pr-40'>
        <h1 className='mb-4 text-2xl font-bold'>Z - Aura Midnight</h1>
        <p className='mb-6 text-sm'>A dark and mysterious blend of black currant,violet and amber. It is the perfect night out scent for women who want to make a statement</p>

        
        <h3 className='mb-3'>Ingrediate</h3>
        <div className='flex bg-white border-gray-300 border-2 mr-60 mb-6 py-2 px-6 space-x-10 rounded-lg'>
        <button>Black currant</button>
        <button>Violet</button>
        <button>Amber</button>
        </div>

        <div className='flex'>

          <h1 className='mb-4 text-base'>Scent</h1>
          <p className='mt-8 -ml-10 text-sm'>Dark and Mysterious,Perfect for Night Outs</p>

          <div className='ml-8'>
          <h1 className=' text-base'>Price</h1>
          <p className='text-2xl font-bold'>$69.99</p>
          </div>
        </div>
        <div className="flex space-x-4 mt-8">
        <button className="bg-white hover:bg-pink-400 text-gray-700 font-bold py-2 px-10 rounded flex border-2">
          <HiOutlineShoppingBag className="-ml-5 text-2xl" />
           <p className="ml-2"> Shop Now</p>
         </button>
         
         <button className="bg-white hover:bg-pink-400 text-gray-700 font-bold py-2 px-10 rounded flex border-2">
          <AiFillProduct  className=" text-2xl" />
           <p className="ml-2"> View Collection</p>
         </button>
        </div>
        </div>
      </div>

      {/* 5th card */}

      <div className="bg-white flex mt-10">
        <div className='py-14 px-14'>
          <img src={collection6} alt="" className=' border rounded-lg' style={{height:'450px',width:'640px'}}/>
        </div>
        <div className='mt-28 pr-40'>
        <h1 className='mb-4 text-2xl font-bold'>Z - Aura Sunrise</h1>
        <p className='mb-6 text-sm'>A bright and refressing blend of grapefruit,jasmine and sandalwood.It is the perfect day out scent for women to feel energized and optimistic</p>

        
        <h3 className='mb-3'>Ingrediate</h3>
        <div className='flex bg-white border-gray-300 border-2 mr-60 mb-6 py-2 px-6 space-x-10 rounded-lg'>
        <button>Black currant</button>
        <button>Violet</button>
        <button>Amber</button>
        </div>

        <div className='flex'>

          <h1 className='mb-4 text-base'>Scent</h1>
          <p className='mt-8 -ml-10 text-sm'>Dark and Mysterious,Perfect for Night Outs</p>

          <div className='ml-8'>
          <h1 className=' text-base'>Price</h1>
          <p className='text-2xl font-bold'>$69.99</p>
          </div>
        </div>
        <div className="flex space-x-4 mt-8">
        <button className="bg-white hover:bg-pink-400 text-gray-700 font-bold py-2 px-10 rounded flex border-2">
          <HiOutlineShoppingBag className=" text-2xl" />
           <p className="ml-2"> Shop Now</p>
         </button>
         
         <button className="bg-white hover:bg-pink-400 text-gray-700 font-bold py-2 px-10 rounded flex border-2">
          <AiFillProduct  className=" text-2xl" />
           <p className="ml-2"> View Collection</p>
         </button>
        </div>
        </div>
      </div>


      
      </div>

    );
}

export default PerfumeCards;