import React from "react";
import Image from "next/image";
import filter from "../../public/assets/icons/filter.svg";
import four_dots from "../../public/assets/icons/four_dots.svg";
import view_list from "../../public/assets/icons/view_list.svg";
import line from "../../public/assets/icons/line.svg";
type Props = {};

const ShopFilterSection = (props: Props) => {
  return (
    <section className="flex justify-between bg-[#f9f1e7] w-full h-[100px] px-20 py-4 items-center font-Poppins">
      <div className="flex items-center h-full gap-x-8">
        <div className="flex gap-x-4 items-center">
          <Image src={filter} alt="filter" className="w-6 h-6" />
          <span className="text-[20px]">Filter</span>
        </div>

        <div className="flex gap-x-8 ml-4">
          <Image src={four_dots} alt="filter" className="w-6 h-6" />
          <Image src={view_list} alt="filter" className="w-6 h-6" />
        </div>
        <Image src={line} alt="filter" className="w-6 h-10" />
        <span>Showing 1-16 of 32 results</span>
      </div>
      <div className="flex gap-x-8">
        <div className="flex items-center gap-x-4">
          <span>Show</span>
          <input
            type="text"
            className="bg-white w-[55px] h-[55px] pl-2"
          ></input>
        </div>
        <div className="flex items-center gap-x-4">
          <span>Sort By</span>
          <select
            name="cars"
            id="cars"
            className="bg-white w-[188px] h-[55px] pl-2"
          >
            <option value="volvo">Default</option>
            <option value="saab">Ascending</option>
            <option value="opel">Descending</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default ShopFilterSection;
