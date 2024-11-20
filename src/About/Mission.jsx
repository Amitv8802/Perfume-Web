import React from "react";
import { IoStatsChart } from "react-icons/io5";
import { FaFingerprint } from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi2";
import { GiElectric } from "react-icons/gi";


function Mission() {
  return (
   <>
   <div className="mainContainer bg-transparent mt-36 ml-32" style={{width:'1255px', height:'450px '}}>
    <div className="card1container flex " style={{width:'1255px', height:'245px '}}>
         <div className="container bg-transparent" style={{height:'240px', width:'530px', }}>
         <h2 className="text-4xl font-bold mt-8 mb-8 bg-transparent">
          Mission and Values
        </h2>
        <p className="bg-transparent pr-24">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dignissimos necessitatibus, sunt consectetur illum odit, vitae asperiores porro animi repudiandae recusandae iure, soluta ab laboriosam? Ad cumque provident dolores. Inventore?</p>
         </div>
         <div className="2cardsbox rounded-lg flex bg-white" style={{height:'240px', width:'725px', }}>
           <div className="card1 rounded-lg mt-5 ml-5 bg-pink-100" style={{width:'330px',height:'200px'}}>
           <div className="py-5 px-5 flex">
           <IoStatsChart className="h-6 w-6 mt-2" />
        <h1 className="ml-3 mt-2">Confidence</h1>
        </div>
        <p className="pl-5 mt-0">We believe that it's important to be Sustainability and ethical . 
          We can only natural and synthtics ingrediats that are cruelty-free and vegas</p>
           </div>
           <div className="card1 rounded-lg mt-5 ml-5 bg-pink-100" style={{width:'330px',height:'200px'}}>
           <div className="py-5 px-5 flex">
           <HiOutlineSparkles className="h-6 w-6 mt-2"/>
           <h1 className="ml-3 mt-2">Beauty</h1>
        </div>
        <p className="pl-5 mt-0">We believe that it's important to be Sustainability and ethical . 
          We can only natural and synthtics ingrediats that are cruelty-free and vegas</p>
           </div>
         </div>   
    </div>
{/* Card 2 container */}
    <div className="card2container flex bg-white -mt-2 rounded-lg" style={{width:'1255px', height:'215px'}}>
      <div className="card1 mt-5 ml-5 rounded-lg bg-pink-100" style={{width:'595px', height:'170px'}}>
        <div className="py-5 px-5 flex">
        <FaFingerprint className="h-6 w-6 mt-2"/>
        <h1 className="ml-3 mt-2">Sustainability</h1>
        </div>
        <p className="pl-5 mt-0">We believe that it's important to be Sustainability and ethical . 
          We can only natural and synthtics ingrediats that are cruelty-free and vegas</p>
      </div>
      <div className="card2 mt-5 ml-5 rounded-lg bg-pink-100" style={{width:'595px', height:'170px'}}>
      <div className="py-5 px-5 flex">
      <GiElectric className="h-6 w-6 mt-2"/>
      <h1 className="ml-3 mt-2">Empowerment</h1>
        </div>
        <p className="pl-5 mt-0">We believe that it's important to be Sustainability and ethical . We can only natural and synthtics ingrediats that are cruelty-free and vegas</p>
      </div>
    </div>

   </div>
   </>
  );
}

export default Mission;
