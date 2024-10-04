"use client";
import { FC } from "react";
import Button from "../common/Button";

interface ProductDetailsProps {
  name: string;
  price: string;
  rating: number;
  reviews: number;
  description: string;
  sizes: string[];
  colors: string[];
}

const ProductDetails: FC<ProductDetailsProps> = ({
  name,
  price,
  rating,
  reviews,
  description,
  sizes,
  colors,
}) => {
  return (
    <div className="flex flex-col px-16 space-y-4">
      <h1 className="text-4xl font-semibold">{name}</h1>
      <p className="text-2xl font-semibold text-gray-500">{price}</p>
      <div className="flex items-center space-x-2">
        <div className="flex">
          {[...Array(rating)].map((_, i) => (
            <span key={i} className="text-yellow-400">
              ★
            </span>
          ))}
        </div>
        <p>{reviews} Customer Reviews</p>
      </div>
      <p>{description}</p>
      <div className="flex space-x-2">
        <p>Size:</p>
        {sizes.map((size, index) => (
          <Button key={index} value={size} size="medium" className="bg-white border-black border-[1px] text-black hover:bg-gray-300"/>
        ))}
      </div>
      <div className="flex space-x-2">
        <p>Color:</p>
        {colors.map((color, index) => (
          <span
            key={index}
            className={`w-8 h-8 rounded-full inline-block`}
            style={{ backgroundColor: color }}
          ></span>
        ))}
      </div>

      <div className="flex space-x-4">
        <div className="flex space-x-4 items-center rounded-lg border-black border-[1px]">
          <button className="px-4 py-2">-</button>
          <p>1</p>
          <button className="px-4 py-2">+</button>
        </div>
        <Button variant="v5" size="medium" value="Add to cart" />
        <Button variant="v5" size="medium" value=" +  Compare" />
      </div>
    </div>
  );
};

export default ProductDetails;
