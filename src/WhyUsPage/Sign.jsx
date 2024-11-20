import React from "react";

function Sign() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-8">
          Sign Up for our Newsletter and Get 10% OFF your First Purchase!
        </h2>
        <p className="text-lg text-gray-700 text-center mb-8">
          Sign up for our newsletter and be the first to know about new
          products, exclusive offers, and perfume tips. We'll also send you a
          10% off code for your first purchase.
        </p>

        <div className="text-center mb-8">
          <img
            src="your-image-url"
            alt="Perfume Boxes"
            className="w-full h-auto max-w-lg mx-auto"
          />
        </div>
        
        <div className="grid grid-cols-2 gap-8 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Sign Up Here</h3>
            <form>
              <input
                type="email"
                placeholder="Enter your email"
                className="border border-gray-300 p-2 rounded-md mb-4"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Submit →
              </button>
            </form>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Pack a Gift</h3>
            <div className="flex space-x-4">
              <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md">
                98 Collections
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Send a Gift
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">
              Benefits of Signing Up
            </h3>
            <ul>
              <li>Be the first to know about new products and offers.</li>
              <li>Get exclusive discounts and promotions.</li>
              <li>Receive perfume tips and advice.</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Other Benefits</h3>
            <ul>
              <li>
                Long-lasting fragrances that keep you smelling great all day.
              </li>
              <li>
                High-quality ingredients for a luxurious scent experience.
              </li>
              <li>Elevate your daily routine.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sign;
