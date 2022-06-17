import React from "react";

const Fallback = () => {
  return (
    <div className="flex py-16 h-2/3 justify-center items-center text-accent-200 text-2xl md:text-3xl">
      <ion-icon name="information-circle"></ion-icon>
      <span className="ml-3 font-semibold text-gray-800 font-Outfit">
        404 Page Not Found
      </span>
    </div>
  );
};

export default Fallback;
