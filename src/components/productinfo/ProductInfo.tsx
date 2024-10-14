"use client";
import { ProductApi } from "@/types/types";
import Image from "next/image";
import React, { useState } from "react";

type Props = {
  product: ProductApi;
  isLoading: boolean;
};

const SkeletonProductInfo = () => {
  return (
    <div className="p-6 md:p-12 border-t border-gray-300 animate-pulse">
      <div className="flex justify-center mb-6">
        <div className="w-24 h-6 bg-gray-200 rounded-md"></div>
      </div>
      <div className="space-y-6">
        <div className="w-[80%] mx-auto h-24 bg-gray-200 rounded-md"></div>
        <div className="w-[80%] mx-auto h-24 bg-gray-200 rounded-md"></div>
        <div className="w-[80%] mx-auto h-24 bg-gray-200 rounded-md"></div>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 justify-around mt-6">
        <div className="w-full h-48 sm:h-72 bg-gray-200 rounded-md"></div>
        <div className="w-full h-48 sm:h-72 bg-gray-200 rounded-md"></div>
      </div>
    </div>
  );
};

const ProductInfo = ({ product, isLoading }: Props) => {
  const [activeTab, setActiveTab] = useState("description");
  const [fadeIn, setFadeIn] = useState(true);

  const handleTabChange = (tab: string) => {
    setFadeIn(false);

    setTimeout(() => {
      setActiveTab(tab);
      setFadeIn(true); 
    }, 300); 
  };

  if (isLoading) {
    return <SkeletonProductInfo />;
  }

  return (
    <div className="p-6 md:p-12 border-y border-gray-300">
      <div>
        <ul className="flex space-x-8 md:space-x-24 justify-center text-sm md:text-xl">
          <li>
            <button
              className={`pb-2 ${
                activeTab === "description"
                  ? "font-semibold text-black"
                  : "text-gray-500"
              } focus:outline-none`}
              onClick={() => handleTabChange("description")}
            >
              Description
            </button>
          </li>
          <li>
            <button
              className={`pb-2 ${
                activeTab === "additionalInfo"
                  ? "font-semibold text-black"
                  : "text-gray-500"
              } focus:outline-none`}
              onClick={() => handleTabChange("additionalInfo")}
            >
              Additional Info
            </button>
          </li>
          <li>
            <button
              className={`pb-2 ${
                activeTab === "reviews"
                  ? "font-semibold text-black"
                  : "text-gray-500"
              } focus:outline-none`}
              onClick={() => handleTabChange("reviews")}
            >
              Reviews
            </button>
          </li>
        </ul>
      </div>

      <div
        className={`my-6 md:my-10 px-4 md:px-12 h-fit transition-opacity duration-300 ${
          fadeIn ? "opacity-100" : "opacity-0"
        }`}
      >
        {activeTab === "description" && (
          <div className="w-[80%] mx-auto">
            <p className="text-xs md:text-sm mt-2 text-gray-500">
              {product.detailedDescription}
            </p>
          </div>
        )}

        {activeTab === "additionalInfo" && (
          <div className="w-[80%] mx-auto">
            <p className="text-xs md:text-sm mt-2 text-gray-500">
              {product.additionalInfo}
            </p>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="w-[80%] mx-auto">
            {product.reviews.length > 0 ? (
              <div className="space-y-6">
                {product.reviews.map((review, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-darkbeige"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-beigerounded-full flex items-center justify-center bg-beige rounded-full">
                        {review.user[0].toUpperCase()}
                      </div>
                      <div>
                        <h4 className="font-semibold text-xs md:text-sm">
                          {review.user}
                        </h4>
                        <div className="flex">
                          {[...Array(Math.floor(review.rating))].map(
                            (_, i) => (
                              <span key={i} className="text-yellow-400">
                                ★
                              </span>
                            )
                          )}
                          {[...Array(5 - Math.floor(review.rating))].map(
                            (_, i) => (
                              <span key={i} className="text-gray-300">
                                ★
                              </span>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 text-gray-600 text-sm md:text-base">
                      {review.comment}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No reviews yet. Be the first to review!</p>
            )}
          </div>
        )}
      </div>

      <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-24 gap-y-4 justify-between px-2 md:px-16">
        {product.images.slice(-2).map((image, index) => (
          <Image
            key={index}
            src={image.url}
            alt={image.alt}
            width={300}
            height={200}
            className="w-full h-48 sm:h-72 object-cover bg-beige rounded-md"
          />
        ))}
      </div>
    </div>
  );
};

export default ProductInfo;
