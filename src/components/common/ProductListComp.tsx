import { ProductApi } from "@/types/types";
import Image from "next/image";
import share_icon from "../../../public/assets/icons/share_icon.svg";
import compare from "../../../public/assets/icons/compare.svg";
import like from "../../../public/assets/icons/like.svg";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  product: ProductApi;
  index: number;
};

const ProductListComp = ({ product }: Props) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/products/?id=${product.id}`);
  };

  return (
    <div
      className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-[1.02] hover:shadow-xl"
      onClick={handleClick}
    >
      <div className="flex-shrink-0 w-24 h-24 md:w-28 md:h-28 rounded-md overflow-hidden">
        <Image
          src={product.mainImage}
          alt={product.name}
          height={200}
          width={200}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col justify-between w-full">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-normal text-gray-800">{product.name}</h3>
          <span className="text-xl font-semibold text-primary">
            ₹{product.price}
          </span>
        </div>

        <p className="text-sm text-gray-600 mt-2 line-clamp-2">
          {product.description}
        </p>

        <div className="flex justify-between items-center mt-4">
          <button className="bg-primary text-black px-4 py-2 border border-black rounded-md hover:bg-primary-dark transition-colors">
            Add to Cart
          </button>
          <div className="flex space-x-4 text-white text-sm bg-gray-400 rounded-md p-2">
          <div className="flex gap-x-2 items-center">
            <Image src={share_icon} alt="share" />
            <button>Share</button>
          </div>
          <div className="flex gap-x-2 items-center">
            <Image src={compare} alt="compare" />
            <button>Compare</button>
          </div>
          <div className="flex gap-x-2 items-center">
            <Image src={like} alt="like" className=""/>
            <button>Like</button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListComp;
