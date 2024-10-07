"use client";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import Button from "../common/Button";
import FaceBook from "../../../public/assets/icons/FaceBook";
import Linkedin from "../../../public/assets/icons/Linkedin";
import Twitter from "../../../public/assets/icons/Twitter";
import { productDetails } from "@/utils/productData";

const ProductDetails = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id") ?? "id2";

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const product = productDetails.find((item) => item.productId === Number(id));

  if (!product) {
    return <p>Product not found</p>;
  }

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleSizeSelect = (size: string) => setSelectedSize(size);
  const handleColorSelect = (color: string) => setSelectedColor(color);

  return (
      <div className="flex flex-col px-4 sm:px-8 md:px-16 space-y-4">
        <h1 className="text-2xl md:text-4xl font-semibold">{product.name}</h1>
        <p className="text-xl md:text-2xl font-semibold text-gray-500">
          ${product.price.toFixed(2)}
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

        <p>{product.description}</p>

        <div className="flex space-x-2 items-center">
          <span>Size:</span>
          {product.sizes.map((sizeObj, index) => (
            <Button
              key={index}
              value={sizeObj.name}
              size="medium"
              className={`bg-beige text-black hover:bg-darkbeige hover:text-white ${
                selectedSize === sizeObj.name ? "font-bold" : ""
              }`}
              onClick={() => handleSizeSelect(sizeObj.name)}
            />
          ))}
        </div>

        <div className="flex space-x-4">
          <p>Color:</p>
          {product.colors.map((colorObj, index) => (
            <span
              key={index}
              className={`w-8 h-8 rounded-full inline-block cursor-pointer ${
                selectedColor === colorObj.name ? "ring-2 ring-black" : ""
              }`}
              style={{ backgroundColor: colorObj.name }}
              onClick={() => handleColorSelect(colorObj.name)}
            ></span>
          ))}
        </div>

        <div className="flex flex-col gap-y-4 md:flex-row md:space-x-4 pb-12">
          <div className="flex space-x-4 items-center rounded-lg border-black border-[1px] w-full md:w-auto">
            <button
              className="px-4 py-2 text-xl md:text-base w-full md:w-auto"
              onClick={decrementQuantity}
            >
              -
            </button>
            <p className="text-center flex-1">{quantity}</p>
            <button
              className="px-4 py-2 text-xl md:text-base w-full md:w-auto"
              onClick={incrementQuantity}
            >
              +
            </button>
          </div>
          <Button variant="v5" size="medium" value="Add to cart" />
          <Button variant="v5" size="medium" value=" + Compare" />
        </div>

        <div className="border-t border-gray-300 flex flex-col gap-3 text-gray-600 font-light pt-12">
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
            <span>{product.productTags.map((tag) => tag.name).join(", ")}</span>
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
