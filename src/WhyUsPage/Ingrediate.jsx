import React from 'react';
import { HiOutlineSparkles } from "react-icons/hi2";
import { MdOutlineScience } from "react-icons/md";
import { GoDatabase } from "react-icons/go";
import { GiGlobeRing } from "react-icons/gi";


function Ingrediate() {
  return (

  //  Ingrediate Section
    <div className="mainContainer bg-white mt-40 ml-32 rounded-lg" style={{width:'1255px', height:'490px '}}>
    <div className="card1container flex py-6 px-6" style={{width:'1255px', height:'245px '}}>
         <div className="container rounded-lg mt-1  bg-pink-200" style={{width:'450px',height:'240px'}}>
         <h2 className="text-4xl font-bold mt-16 mx-8">
          Ingrediate
        </h2>
        <p className="my-4 mx-8">Lorem ipsum dolor sit amet consectetur adipisicing elit.lorem ipsum dolor</p>
         </div>

  {/* Box 1 */}
         <div className="2cardsbox rounded-lg flex" style={{height:'240px'}}>
           <div className="card1 rounded-lg mt-1 ml-5 bg-pink-50" style={{width:'350px',height:'240px'}}>
           <div className="py-5 px-4 flex">
           <HiOutlineSparkles className="h-6 w-6 mt-2"/>
        <h1 className="ml-4 mt-2 font-bold">Natural Essential Oils</h1>
        </div>
        <p className="pl-4 mt-0 text-sm pr-4">We believe that it's important to be Sustainability and ethical . 
          We can only natural and synthtics ingrediats that are cruelty-free and vegas</p>
           </div>

  {/* Box 2 */}
           <div className="card1 rounded-lg mt-1 ml-5 bg-pink-50" style={{width:'365px',height:'240px'}}>
           <div className="py-5 px-4 flex">
           <MdOutlineScience className="h-6 w-6 mt-2" />        
           <h1 className="ml-2 mt-2 font-bold">Automated Extract</h1>
        </div>
        <p className="pl-5 mt-0 text-sm pr-4">We believe that it's important to be Sustainability and ethical . 
          We can only natural and synthtics ingrediats that are cruelty-free and vegas</p>
           </div>
         </div>   
    </div>


   {/* Card 2 container */}
    <div className="card2container flex mt-2 rounded-lg" style={{width:'1255px', height:'215px'}}>

   {/* Box 1 */}
      <div className="card1 mt-10 ml-5 rounded-lg bg-pink-50" style={{width:'595px', height:'170px'}}>
        <div className="py-5 px-5 flex">
        <GoDatabase className="h-6 w-6 mt-2" />
        <h1 className="ml-3 mt-2 font-bold">Synthetics</h1>
        </div>
        <p className="pl-5 mt-0">We believe that it's important to be Sustainability and ethical . 
          We can only natural and synthtics ingrediats that are cruelty-free and vegas</p>
      </div>

   {/* Box 2 */}
      <div className="card2 mt-10 ml-5 rounded-lg bg-pink-50" style={{width:'595px', height:'170px'}}>
      <div className="py-5 px-5 flex">
      <GiGlobeRing className="h-6 w-6 mt-2"/>        
      <h1 className="ml-3 mt-2 font-bold">Empowerment</h1>
        </div>
        <p className="pl-5 mt-0">We believe that it's important to be Sustainability and ethical . We can only natural and synthtics ingrediats that are cruelty-free and vegas</p>
      </div>
    </div>

   </div>
  );
}

export default Ingrediate;