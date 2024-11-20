import React from 'react';
import Womens from './Womens';

function Women() {
  return (
    <div className="bg-gray-100 ">
      <div className="flex mx-32 mt-32">
        <div className="head h-36" style={{ width:'490px'}}>
        <h1 className="text-3xl font-bold mb-8 ">A Decade of Empowering Women</h1>
        <div className='founded bg-white w-56 h-8 rounded-lg'>
          <p className='px-3 py-1'>Z Aura was founded in 2015 </p>
        </div>
        </div>
       <div className="peragraph " style={{ width:'780px'}}>
       <p className="text-base text-gray-700 ml-14 mb-16">Z Aura was founded in 2018 by two women who were passionate about creating a brand that would empower women. In the past 10 years, Z Aura has grown from a small startup to a successful international brand, with 10 million customers, including the "Most Valuable Perfume Brand" award. We believe that every woman deserves to feel her best, and we're committed to creating fragrances that help women achieve that feeling.</p>

       </div>
        
       

      </div>
      <Womens/>
    </div>
  );
}

export default Women;