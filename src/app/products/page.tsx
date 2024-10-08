"use client";
import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/common/Footer";
import { ProductDetails } from "@/components";
import { ProductInfo } from "@/components";
import { ToggleImageSection } from "@/components";
import { productDetails } from "@/utils/productData";
import { BreadCrumbNavigator } from "@/components";

const ProductPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductContent />
    </Suspense>
  );
};

const ProductContent = () => {
  const SearchParams = useSearchParams();
  const id = SearchParams.get("id") ?? "id2";

  const product = productDetails.find((item) => item.id === Number(id));

  if (!product) {
    return <p>Not found</p>;
  }

  return (
    <div className="flex flex-col">
      <Navbar />
      <BreadCrumbNavigator />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 my-8">
        <ToggleImageSection images={product.images} />
        <ProductDetails />
      </div>
      <ProductInfo />
      <Footer />
    </div>
  );
};

export default ProductPage;
