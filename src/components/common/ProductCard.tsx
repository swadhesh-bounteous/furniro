import React from "react";
import { ProductDetail } from "@/types/types";
import Typography from "./Typography";
import Image from "next/image";
import share_icon from '../../../public/assets/icons/share_icon.svg'
import compare from '../../../public/assets/icons/compare.svg'
import like from '../../../public/assets/icons/like.svg'
import Button from "./Button";

type Props = {
  product: ProductDetail;
  index: number;
};

const ProductCard = ({ product }: Props) => {
  return (
    <div className="relative border border-gray-200 rounded-sm overflow-hidden shadow-sm group">
      <img
        src={product.src}
        alt={product.name}
        className="w-full h-72 object-cover"
      />

      {product.discount && (
        <div className={`absolute top-2 right-2 ${product.discount=="New"?`bg-green-500`:'bg-red-500'} text-white text-xs font-bold px-2 py-1 rounded-full`}>
          {product.discount}
        </div>
      )}

      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Button variant="v2" size="large" value="Add to cart" className="bg-white text-yellow-700 font-semibold py-2 px-4 rounded-sm mb-3"/>
        <div className="flex space-x-4 text-white text-sm">
          <div className="flex gap-x-2 items-center">
            <Image src={share_icon} alt="share"></Image>
            <button>Share</button>
          </div>
          <div className="flex gap-x-2 items-center">
            <Image src={compare} alt="compare"></Image>
            <button>Compare</button>
          </div>
          <div className="flex gap-x-2 items-center">
            <Image src={like} alt="like"></Image>
            <button>Like</button>
          </div>
        </div>
      </div>

      <div className="p-4">
        <Typography variant="h2" className="text-lg font-semibold">
          {product.name}
        </Typography>
        <p className="text-gray-500 text-sm">{product.description}</p>
        <div className="mt-2">
          <Typography variant="span" className="text-black font-semibold">
            {product.price}
          </Typography>
          {product.originalPrice && (
            <Typography
              variant="span"
              className="text-gray-400 line-through ml-2"
            >
              {product.originalPrice}
            </Typography>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
