import React from "react";
import Navigation from "./Navigation";
import BlogCard from "./BlogCard";
import ZAuraNewsletterSignup from "../Home/SignUPFoam";
import Footer from "../Home/Footer";
import Navbar from "../Home/Navbar";
import img from "../assets/Blog/Blog.jpeg"


function ZauraBlog() {
  return (

  // Header Section
    <div className="bg-gray-100">
      <header className=" bg-gray shadow-sm ">
        <Navbar/>
      </header>
    <div className="min-h-screen mt-16">
      <div className="container bg-white mx-auto px-16 py-16">
        <h2 className="text-4xl font-bold mb-4">
          Discover the Essence of Elegance:
        </h2>
        <h1 className="text-4xl font-bold mb-6">ZAura Blog</h1>
        <p className="text-base text-gray-700 mb-8 mr-48">
          Welcome to the ZAura Blog, your portal to the world of exquisite
          fragrances and elegance. Dive into the art of perfumery, discover the
          impact of scents on your mood, and explore sustainable practices that
          define our brand. From styling tips to the science of aromas, we're
          here to enrich your fragrance journey. Join us as we delve into the
          essence of ZAura, where every scent tells a story.
        </p>

  {/* Image Section */}
        <div className="text-center">
        <img src={img} alt="ZAura Perfume Bottle" className="border rounded-lg" style={{height:"450px", width:"1150px"}} />
        </div>
      </div>
      </div>
      <Navigation/>
      <BlogCard/>
      <ZAuraNewsletterSignup/>
      <Footer/>
    </div>
  );
}

export default ZauraBlog;
