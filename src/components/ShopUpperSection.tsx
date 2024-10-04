import React from "react";
import Link from "next/link";

const ShopUpperSection = () => {
  return (
    <section className="relative bg-[url('/assets/bg_img.png')] bg-opacity-30 bg-cover bg-center h-[400px] font-Poppins">
      <div className="absolute inset-0"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
        <h1 className="text-6xl font-medium text-black mb-4">Shop</h1>
        <nav className="text-gray-800 text-sm">
          <Link href="/" className="font-medium">
            Home
          </Link>
          <span className="mx-2">{">"}</span>
          <span className="font-normal">Shop</span>
        </nav>
      </div>
    </section>
  );
};

export default ShopUpperSection;
