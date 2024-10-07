import Footer from "@/components/common/Footer";
import Navbar from "@/components/navbar/Navbar";
import { Pagination } from "@/components";
import { ShopFeatureSection } from "@/components";
import { ShopGridSection } from "@/components";
import { UpperSection } from "@/components";
import React, { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<div>Error Try again</div>}>
      <div className="flex flex-col">
        <Navbar />
        <UpperSection pageName="Shop" />
        <ShopGridSection />
        <Pagination />
        <ShopFeatureSection />
        <Footer />
      </div>
    </Suspense>
  );
};

export default page;
