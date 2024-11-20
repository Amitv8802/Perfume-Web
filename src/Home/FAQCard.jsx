import React from "react";

function FAQSection() {
  return (
    <section className="container mx-auto px-4 py-16">
  {/* Header */}
      <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
      <div className="flex">
        <p className="flex text-gray-600 mb-12">
          Here are some questions about Z-Aura perfume. If you can't find the
          answer to your question, please contact our customer service.
        </p>
        <div>
          <button className="bg-white hover:bg-pink-500 text-gray-700 font-bold py-2 px-4 ml-44 mb-10 rounded">
            Ask a Question
          </button>
        </div>
      </div>


  {/* Middile Section */}
      <div className="bg-white p-14 rounded-xl">
        <div className=" flex space-x-8">
  {/* Question 1  */}
          <div className="rounded-lg shadow-md bg-gray-100" style={{ width: "400px", height: "260px" }}>
            <div>
              <h2 className="text-lg font-bold mb-1 pl-8 mt-0.5 pt-6 pb-3">
                What are diffrent sizes of Z Aura perfume?
              </h2>
            </div>
            <h1 className="px-4">
              <hr />
            </h1>

            <p className="text-gray-600 text-sm pl-8 pr-7 mt-5">
              Z Aura perfume is avaliable in three segments 3,4 or 6 the 3 size
              is the perfect travel size while the 3,4 size the perfect for
              everyday use
            </p>
          </div>

    {/* Question 2  */}
          <div
            className="rounded-lg shadow-md bg-gray-100"
            style={{ width: "420px", height: "260px" }}
          >
            <div>
              <h2 className="text-lg font-bold mb-1 pl-6 mt-0.5 pt-6 pb-3">
                What are the diffrent products that Z Aura offers?
              </h2>
            </div>
            <h1 className="px-4">
              <hr />
            </h1>
            <p className="text-gray-600 text-sm pl-8 pr-8 mt-5">
              Z Aura offers a variety of product including aura perfume body
              lotion and shower gel the aura perfume is the most concentrated
              form of the perfume and it is the perfect choice for those who
              want to make a lasting incressing
            </p>
          </div>


    {/* Question 3  */}
          <div
            className="rounded-lg shadow-md bg-gray-100"
            style={{ width: "400px", height: "260px" }}
          >
            <div>
              <h2 className="text-lg font-bold mb-1 pl-6 mt-0.5 pt-6 pb-3">
                How can l connect Z Aura customer service?
              </h2>
            </div>
            <h1 className="px-4">
              <hr />
            </h1>
            <p className="text-gray-600 text-sm pl-8 pr-8 mt-5">
              If you have any questions assest Z Aura perfume you can contact
              customer service or detail protected . They would be happy to
              answer any question any of your question and help you find the
              perfect product for your needs
            </p>
          </div>
        </div>


    {/* Bottom section */}
        <div className="bg-gray-100 p-2 flex rounded-lg" style={{ margin: "50px 455px 0 500px" }}>
          <button className="bg-white hover:bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded">
            ←
          </button>
          <div className="flex items-center pl-6 pr-6">
            <div className="w-4 h-1 bg-gray-400 mr-2"></div>
          </div>
          <button className="bg-white hover:bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded">
            →
          </button>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
