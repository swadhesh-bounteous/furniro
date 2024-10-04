import React from "react";
import ProductCard from "../common/ProductCard";
import { productDetails } from "@/utils/productData";

const ShopGridSection = () => {
  return (
    <section className="px-12 md:px-24 py-6 font-Poppins">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {productDetails.map((product, index) => (
          <ProductCard key={index} product={product} index={index}/>
        ))}
      </div>
    </section>
  )
};

export default ShopGridSection;
