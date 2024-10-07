import Footer from "@/components/common/Footer";
import Navbar from "@/components/navbar/Navbar";
import { Pagination } from "@/components";
import { ShopFeatureSection } from "@/components";
import { ShopGridSection } from "@/components";
import { UpperSection } from "@/components";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <UpperSection pageName="Shop"/>
      <ShopGridSection />
      <Pagination />
      <ShopFeatureSection />
      <Footer />
    </div>
  );
};

export default page;
