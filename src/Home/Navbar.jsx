import React from 'react'

function Navbar() {
    return (
      <header className="bg-gray text-black">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className='text-xl font-bold'>Z-AURA</h1>
            <nav className="ml-64">
              <ul className="flex space-x-9 bg-white text-black px-16 py-3 rounded-md">
                <li><a href="/">Home</a></li>
                <li><a href="/collection">Collections</a></li>
                <li><a href="/Boutiques">Stores</a></li>
                <li><a href="/About">About Us</a></li>
                <li><a href="/Whyuse">Why Us</a></li>
                <li><a href="/Blogs">Blog</a></li>
              </ul>
            </nav>
          </div>
          <div className="flex items-center">
            <button className="bg-white hover:bg-pink-400 text-black px-4 py-2 rounded-md">
              Shop Now
            </button>
          </div>
        </div>
      </header>
    );
  }

export default Navbar;