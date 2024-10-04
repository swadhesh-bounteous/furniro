import React from "react";
import Image from "next/image";
import filter from "../../../public/assets/icons/filter.svg";
import four_dots from "../../../public/assets/icons/four_dots.svg";
import view_list from "../../../public/assets/icons/view_list.svg";
import line from "../../../public/assets/icons/line.svg";

const ShopFilterSection = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between bg-[#f9f1e7] w-full h-auto lg:h-[100px] px-4 md:px-10 lg:px-20 py-4 items-center font-Poppins gap-y-4 lg:gap-y-0">
      <div className="flex flex-col sm:flex-row items-center gap-y-4 sm:gap-y-0 gap-x-4 md:gap-x-8">
        <div className="flex gap-x-2 sm:gap-x-4 items-center">
          <Image src={filter} alt="filter" className="w-5 h-5 sm:w-6 sm:h-6" />
          <span className="text-[16px] sm:text-[20px]">Filter</span>
        </div>

        <div className="flex gap-x-4 sm:gap-x-8 items-center">
          <Image
            src={four_dots}
            alt="four dots"
            className="w-5 h-5 sm:w-6 sm:h-6"
          />
          <Image
            src={view_list}
            alt="view list"
            className="w-5 h-5 sm:w-6 sm:h-6"
          />
        </div>
        <Image src={line} alt="line" className="w-5 h-8 sm:w-6 sm:h-10" />
        <span className="text-[14px] sm:text-[16px] text-center sm:text-left">
          Showing 1-16 of 32 results
        </span>
      </div>

      <div className="flex flex-col sm:flex-row gap-y-4 sm:gap-y-0 gap-x-4 sm:gap-x-8 items-center">
        <div className="flex items-center gap-x-2 sm:gap-x-4">
          <span className="text-[14px] sm:text-[16px]">Show</span>
          <input
            type="text"
            className="bg-white w-[45px] sm:w-[55px] h-[45px] sm:h-[55px] pl-2"
          />
        </div>
        <div className="flex items-center gap-x-2 sm:gap-x-4">
          <span className="text-[14px] sm:text-[16px]">Sort By</span>
          <select
            name="sort"
            id="sort"
            className="bg-white w-[130px] sm:w-[188px] h-[45px] sm:h-[55px] pl-2"
          >
            <option value="default">Default</option>
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default ShopFilterSection;
