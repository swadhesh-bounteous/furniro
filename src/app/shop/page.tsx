import Footer from "@/components/common/Footer";
import Navbar from "@/components/navbar/Navbar";
import { Pagination } from "@/components";
import { ShopFeatureSection } from "@/components";
import { ShopFilterSection } from "@/components";
import { ShopGridSection } from "@/components";
import { ShopUpperSection } from "@/components";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <ShopUpperSection />
      <ShopFilterSection />
      <ShopGridSection />
      <Pagination />
      <ShopFeatureSection />
      <Footer />
    </div>
  );
};

export default page;
