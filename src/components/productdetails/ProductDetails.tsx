"use client";
import React, { useState } from "react";
import Button from "../common/Button";
import FaceBook from "../../../public/assets/icons/FaceBook";
import Linkedin from "../../../public/assets/icons/Linkedin";
import Twitter from "../../../public/assets/icons/Twitter";
import { ProductApi } from "@/types/types";

type Props = {
  product: ProductApi;
  isLoading: boolean;
};

const ProductDetails = ({ product, isLoading }: Props) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleSizeSelect = (size: string) => setSelectedSize(size);
  const handleColorSelect = (color: string) => setSelectedColor(color);

  if (isLoading) {
    return (
      <div className="flex flex-col px-4 sm:px-8 md:px-16 space-y-4 animate-pulse">
        <div className="h-8 md:h-16 bg-gray-300 rounded w-3/4"></div>
        <div className="h-6 md:h-8 bg-gray-300 rounded w-1/4"></div>
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="h-6 w-6 bg-gray-300 rounded-full"></span>
            ))}
          </div>
          <div className="h-4 bg-gray-300 rounded w-1/4"></div>
        </div>
        <div className="h-6 bg-gray-300 rounded w-full"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>

        <div className="flex flex-col items-start space-y-2">
          <div className="h-4 bg-gray-300 rounded w-1/4"></div>
          <div className="flex space-x-2">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="h-8 w-8 bg-gray-300 rounded-md"
              ></div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start space-y-2">
          <div className="h-4 bg-gray-300 rounded w-1/4"></div>
          <div className="flex space-x-4">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="h-8 w-8 rounded-full bg-gray-300"
              ></div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-y-4 md:flex-row md:space-x-4 pb-8">
          <div className="flex space-x-4 items-center rounded-lg border-gray-400 border-[1px] w-full md:w-auto">
            <div className="px-3 py-4 text-xl md:text-base w-full md:w-auto bg-gray-300 rounded"></div>
            <div className="text-center flex-1 h-8 bg-gray-300 rounded"></div>
            <div className="px-3 py-4 text-xl md:text-base w-full md:w-auto bg-gray-300 rounded"></div>
          </div>
          <div className="h-10 w-full md:w-auto bg-gray-300 rounded"></div>
          <div className="h-10 w-full md:w-auto bg-gray-300 rounded"></div>
        </div>

        <div className="border-t border-gray-300 flex flex-col gap-3 text-gray-600 font-light pt-8 text-sm">
          <div className="h-4 bg-gray-300 rounded w-1/4"></div>
          <div className="h-4 bg-gray-300 rounded w-1/4"></div>
          <div className="h-4 bg-gray-300 rounded w-1/4"></div>
          <div className="flex space-x-4">
            <span className="h-4 bg-gray-300 rounded w-1/4"></span>
            <div className="flex space-x-4">
              <div className="h-8 w-8 bg-gray-300 rounded-full"></div>
              <div className="h-8 w-8 bg-gray-300 rounded-full"></div>
              <div className="h-8 w-8 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col px-8 sm:px-8 md:px-16 space-y-4 py-4">
      <h1 className="text-2xl md:text-5xl font-normal">{product.name}</h1>
      <p className="text-lg md:text-xl font-normal text-gray-500">
        Rs. {product.price.toFixed(2)}
      </p>

      <div className="flex items-center space-x-2">
        <div className="flex">
          {[...Array(Math.floor(product.rating))].map((_, i) => (
            <span key={i} className="text-yellow-400">
              ★
            </span>
          ))}
        </div>
        <p>{product.reviews.length} Customer Reviews</p>
      </div>

      <p className="font-normal text-sm">{product.description}</p>

      <div className="flex flex-col items-start">
        <span className="mb-2">Size</span>
        <div className="flex space-x-2">
          {product.sizes.map((size, index) => (
            <Button
              key={index}
              value={size}
              size="medium"
              className={`bg-beige text-black hover:bg-darkbeige hover:text-white ${
                selectedSize === size ? "font-bold" : ""
              }`}
              onClick={() => handleSizeSelect(size)}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col items-start">
        <p className="mb-2">Color:</p>
        <div className="flex space-x-4">
          {product.colors.map((color, index) => (
            <span
              key={index}
              className={`w-8 h-8 rounded-full inline-block cursor-pointer ${
                selectedColor === color ? "ring-2 ring-black" : ""
              }`}
              style={{ backgroundColor: color }}
              onClick={() => handleColorSelect(color)}
            ></span>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-y-4 md:flex-row md:space-x-4 pb-8">
        <div className="flex space-x-4 items-center rounded-lg border-gray-400 border-[1px] w-full md:w-32">
          <button
            className="px-3 py-4 text-xl md:text-base w-full md:w-auto"
            onClick={decrementQuantity}
          >
            -
          </button>
          <p className="text-center flex-1">{quantity}</p>
          <button
            className="px-3 py-4 text-xl md:text-base w-full md:w-auto"
            onClick={incrementQuantity}
          >
            +
          </button>
        </div>
        <Button variant="v5" size="medium" value="Add to cart" />
        <Button variant="v5" size="medium" value=" + Compare" />
      </div>

      <div className="border-t border-gray-300 flex flex-col gap-3 text-gray-600 font-light pt-8 text-sm">
        <div className="flex justify-start gap-x-3">
          <span>SKU:</span>
          <span>{product.sku}</span>
        </div>
        <div className="flex justify-start gap-x-3">
          <span>Category:</span>
          <span>{product.category}</span>
        </div>
        <div className="flex justify-start gap-x-3">
          <span>Tags:</span>
          <span>{product.productTags.join(", ")}</span>
        </div>
        <div className="flex space-x-4">
          <span>Share:</span>
          <div className="flex space-x-4 items-center">
            <FaceBook />
            <Linkedin />
            <Twitter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
