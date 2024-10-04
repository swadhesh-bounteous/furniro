import Navbar from "@/components/Navbar";
import ShopFilterSection from "@/components/ShopFilterSection";
import ShopUpperSection from "@/components/ShopUpperSection";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <ShopUpperSection />
      <ShopFilterSection />
    </div>
  );
};

export default page;
