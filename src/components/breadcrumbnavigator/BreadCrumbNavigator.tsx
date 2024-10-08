"use client"
import React from "react";
import Typography from "../common/Typography";
import RightArrowIcon from "../../../public/assets/icons/RightArrowIcon";
import { useRouter, useSearchParams} from "next/navigation";
import { productDetails } from "@/utils/productData";
 
const BreadCrumbNavigator = () => {
  const searchParams = useSearchParams();
  const productId = searchParams.get("id") ?? "id1"
  const product = productDetails.find((product) => product.id === Number(productId));
 
  const router = useRouter();
  return (
    <div className="px-8 bg-[#F9F1E7] flex flex-row h-24 justify-between md:px-28 items-center">
      <div className="flex flex-row gap-6 items-center justify-between">
        <Typography variant="p" className="text-xl text-[#9F9F9F] font-[400] hover:cursor-pointer hover:underline">
         <span onClick={() => router.push("/home")}>Home</span>
        </Typography>
 
        <RightArrowIcon />
        <Typography variant="p" className="text-xl text-[#9F9F9F] font-[400] hover:cursor-pointer  hover:underline">
          <span onClick={() => router.push("/shop")}>Shop</span>
        </Typography>
        <div className="w-[2px] h-8 bg-[#9F9F9F]/70"></div>
        <Typography variant="p" className="text-base font-poppins">
         {product?.name}
        </Typography>
      </div>
    </div>
  );
};
 
export default BreadCrumbNavigator;