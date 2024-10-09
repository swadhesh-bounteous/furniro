import { ShopFeatureSection, UpperSection } from "@/components";
import CartSection from "@/components/cartsection/CartSection";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/navbar/Navbar";
import React, { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex flex-col">
        <Navbar />
        <UpperSection pageName="Cart" />
        <CartSection />
        <ShopFeatureSection />
        <Footer />
      </div>
    </Suspense>
  );
};

export default page;
