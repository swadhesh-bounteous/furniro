import { ProductApi } from "@/types/types";
import Image from "next/image";
import share_icon from "../../../public/assets/icons/share_icon.svg";
import compare from "../../../public/assets/icons/compare.svg";
import like from "../../../public/assets/icons/like.svg";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  product: ProductApi;
};

const ProductListComp = ({ product }: Props) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/products/?id=${product.id}`);
  };

  return (
    <div
      className="flex flex-col sm:flex-row items-center gap-4 bg-white p-4 rounded-lg shadow-md border border-gray-300 transition-transform transform hover:scale-[1.02] hover:shadow-lg"
      onClick={handleClick}
    >
      <div className="flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-md overflow-hidden">
        <Image
          src={product.mainImage}
          alt={product.name}
          height={200}
          width={200}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col justify-between w-full">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <h3 className="text-lg font-normal text-gray-800">{product.name}</h3>
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-medium text-primary mt-2 sm:mt-0">
              ₹{product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm sm:text-md text-red-500 font-medium text-primary mt-2 sm:mt-0 line-through">
                ₹{product.originalPrice}
              </span>
            )}
          </div>
        </div>

        <p className="text-sm text-gray-600 mt-2 line-clamp-2">
          {product.description}
        </p>

        <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center mt-4 space-y-4 sm:space-y-0">
          <button className="bg-primary text-black px-4 py-2 border border-black rounded-md hover:bg-primary-dark transition-colors w-full sm:w-auto">
            Add to Cart
          </button>

          <div className="flex justify-around w-full sm:w-auto space-x-4 text-sm bg-darkbeige rounded-md p-2 text-white">
            <div className="flex gap-x-2 items-center">
              <Image src={share_icon} alt="share" />
              <button>Share</button>
            </div>
            <div className="flex gap-x-2 items-center">
              <Image src={compare} alt="compare" />
              <button>Compare</button>
            </div>
            <div className="flex gap-x-2 items-center">
              <Image src={like} alt="like" />
              <button>Like</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListComp;
