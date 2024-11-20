import React from "react";
import PerfumeCards from "./PerfumeCards";

function ZAuraFeaturedPerfumes() {
  return (
    <div className="container mx-auto px-2 py-16">
      <h1 className="text-4xl font-bold mb-4">Featured Perfumes</h1>
      <p className="text-base text-gray-700 mb-10">
        Z Aura is a luxury perfume that was created to help women feel their
        most confident and beautiful selves. The perfume is made with a blend of
        rate and exotic <br /> ingrediats and it is designed to leave a lasting
        impression on those around you.
      </p>

      <PerfumeCards />
    </div>
  );
}

export default ZAuraFeaturedPerfumes;
