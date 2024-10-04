import Navbar from "@/components/Navbar";
import ShopFilterSection from "@/components/ShopFilterSection";
import ShopUpperSection from "@/components/ShopUpperSection";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <ShopUpperSection />
      <ShopFilterSection />
    </div>
  );
};

export default page;
