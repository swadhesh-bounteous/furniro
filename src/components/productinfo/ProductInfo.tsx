"use client";
import Image from "next/image";
import React, { useState } from "react";

interface ProductInfoProps {
  description: string;
  additionalInfo: string;
  images: string[];
  reviews: { user: string; rating: number; comment: string }[];
}

const ProductInfo: React.FC<ProductInfoProps> = ({
  description,
  additionalInfo,
  images,
  reviews,
}) => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="p-4 md:p-6">
      {/* Tab navigation */}
      <div className="border-b border-gray-300">
        <ul className="flex space-x-8 md:space-x-24 justify-center text-sm md:text-base">
          <li>
            <button
              className={`pb-2 border-b-2 ${
                activeTab === "description"
                  ? "border-black"
                  : "border-transparent"
              } focus:outline-none`}
              onClick={() => setActiveTab("description")}
            >
              Description
            </button>
          </li>
          <li>
            <button
              className={`pb-2 border-b-2 ${
                activeTab === "additionalInfo"
                  ? "border-black"
                  : "border-transparent"
              } focus:outline-none`}
              onClick={() => setActiveTab("additionalInfo")}
            >
              Additional Info
            </button>
          </li>
          <li>
            <button
              className={`pb-2 border-b-2 ${
                activeTab === "reviews" ? "border-black" : "border-transparent"
              } focus:outline-none`}
              onClick={() => setActiveTab("reviews")}
            >
              Reviews
            </button>
          </li>
        </ul>
      </div>

      <div className="my-6 md:my-10 px-4 md:px-12 h-fit">
        {activeTab === "description" && (
          <div>
            <h2 className="text-sm md:text-lg font-semibold">Description</h2>
            <p className="text-sm md:text-base mt-2 text-gray-600">
              {description}
            </p>
          </div>
        )}

        {activeTab === "additionalInfo" && (
          <div>
            <h2 className="text-sm md:text-lg font-semibold">
              Additional Information
            </h2>
            <p className=" text-sm md:text-base mt-2 text-gray-600">
              {additionalInfo}
            </p>
          </div>
        )}

        {activeTab === "reviews" && (
          <div>
            <h2 className="text-lg font-semibold pb-4">Customer Reviews</h2>
            {reviews.length > 0 ? (
              <div className="space-y-6">
                {reviews.map((review, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-300"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-200 rounded-full flex items-center justify-center">
                        {review.user[0].toUpperCase()}
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm md:text-base">
                          {review.user}
                        </h4>
                        <div className="flex">
                          {[...Array(Math.floor(review.rating))].map((_, i) => (
                            <span key={i} className="text-yellow-400">
                              ★
                            </span>
                          ))}
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
              <p className="text-gray-500">
                No reviews yet. Be the first to review!
              </p>
            )}
          </div>
        )}
      </div>

      <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 justify-around">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Product Image ${index + 1}`}
            width={400}
            height={200}
            className="w-full h-48 sm:h-72 object-cover bg-beige rounded-md"
          />
        ))}
      </div>
    </div>
  );
};

export default ProductInfo;
