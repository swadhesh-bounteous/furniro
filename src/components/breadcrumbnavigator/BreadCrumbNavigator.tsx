"use client";
import React from "react";
import Typography from "../common/Typography";
import RightArrowIcon from "../../../public/assets/icons/RightArrowIcon";
import { useRouter } from "next/navigation";
import { ProductApi } from "@/types/types";

type Props = {
  product: ProductApi;
  isLoading: boolean;
};

const BreadCrumbNavigator = ({ product, isLoading }: Props) => {
  const router = useRouter();

  if (isLoading) {
    return (
      <div className="px-8 bg-[#F9F1E7] flex flex-row h-24 justify-between md:px-28 items-center">
        <div className="flex flex-row gap-6 items-center justify-between animate-pulse">
          <div className="h-6 w-20 bg-gray-300 rounded-md"></div>

          <RightArrowIcon />

          <div className="h-6 w-20 bg-gray-300 rounded-md"></div>

          <div className="w-[2px] h-8 bg-[#9F9F9F]/70"></div>

          <div className="h-6 w-40 bg-gray-300 rounded-md"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="px-8 bg-[#F9F1E7] flex flex-row h-24 justify-between md:px-28 text-sm md:text-base items-center">
      <div className="flex flex-row gap-6 items-center justify-between">
        <Typography
          variant="p"
          className="text-base text-[#9F9F9F] font-[400] hover:cursor-pointer hover:underline"
        >
          <span onClick={() => router.push("/home")}>Home</span>
        </Typography>

        <RightArrowIcon />

        <Typography
          variant="p"
          className="text-base text-[#9F9F9F] font-[400] hover:cursor-pointer hover:underline"
        >
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
