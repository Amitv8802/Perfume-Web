import React from 'react';


function NavigationBar() {
  return (

  // Navbar Section
  <div className="bg-white rounded-lg">
  <div className="flex space-x-5 px-5 py-4">

  {/* Coloumn 1 */}
    <a href="">
      <div className="flex space-x-4 bg-gray-200 hover:bg-pink-400 w-40 h-10 py-2 pl-16 rounded-lg ">
        <h1 className="" style={{ fontSize: "14px" }}>
          All
        </h1>
      </div>
    </a>

  {/* Coloumn 2 */}
    <a href="">
      <div className="flex space-x-2 bg-gray-200 hover:bg-pink-400 w-40 h-10 py-2 pl-12 rounded-lg ">
        <h1 className="" style={{ fontSize: "14px" }}>
          Fragnance
        </h1>
      </div>
    </a>

  {/* Coloumn 3 */}
    <a href="">
      <div className="flex space-x-2 bg-gray-200 hover:bg-pink-400 w-40 h-10 py-2 pl-12 rounded-lg ">
        <h1 className="" style={{ fontSize: "14px" }}>
          Self-care
        </h1>
      </div>
    </a>

  {/* Coloumn 4 */}
    <a href="">
      <div className="flex space-x-2 bg-gray-200 hover:bg-pink-400 w-40 h-10 py-2 pl-12 rounded-lg ">
        <h1 className="" style={{ fontSize: "14px" }}>
          Lifestyle
        </h1>
      </div>
    </a>

  {/* Coloumn 5 */}
    <a href="">
      <div className="flex space-x-2 bg-gray-200 hover:bg-pink-400 w-40 h-10 py-2 pl-10 rounded-lg ">
        <h1 className="" style={{ fontSize: "14px" }}>
          Tips & Tricks
        </h1>
      </div>
    </a>

  {/* Coloumn 6 */}
    <a href="">
      <div className="flex space-x-2 bg-gray-200 hover:bg-pink-400 w-40 h-10 py-2 pl-14 rounded-lg ">
        <h1 className="" style={{ fontSize: "14px" }}>
          News
        </h1>
      </div>
    </a>

  {/* Coloumn 7 */}
    <a href="">
      <div className="flex space-x-2 bg-gray-200 hover:bg-pink-400 w-40 h-10 py-2 pl-14 rounded-lg ">
        <h1 className="" style={{ fontSize: "14px" }}>
          Events
        </h1>
      </div>
    </a>
  </div>
  </div>
  );
}

export default NavigationBar;