"use client";
import React, { useState } from "react";
import ProductCard from "../common/ProductCard";
import Image from "next/image";
import filter from "../../../public/assets/icons/filter.svg";
import four_dots from "../../../public/assets/icons/four_dots.svg";
import view_list from "../../../public/assets/icons/view_list.svg";
import line from "../../../public/assets/icons/line.svg";
import Pagination from "../pagination/Pagination";
import useGetProducts from "@/hooks/useGetProducts";
import ProductListComp from "../common/ProductListComp";
import { ProductApi } from "@/types/types";

const categories = ["All", "Tables", "Chairs", "Sofas", "Lighting"];

const ShopGridSection = () => {
  const [productsToShow, setProductsToShow] = useState(16);
  const [sortOrder, setSortOrder] = useState("default");
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [viewType, setViewType] = useState<"grid" | "list">("grid");

  const { data: productDetails = [], isLoading, isError } = useGetProducts();

  console.log(productDetails, isLoading, isError);

  const handleShowChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value > 0) {
      setProductsToShow(value);
      setCurrentPage(1);
    }
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value);
  };

  const sortedProducts = (products: ProductApi[]) => {
    const sorted = [...products];
    if (sortOrder === "ascending") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "descending") {
      sorted.sort((a, b) => b.price - a.price);
    }
    return sorted;
  };

  const filteredProducts = () => {
    const products = sortedProducts(productDetails);
    if (selectedCategory === "All") {
      return products;
    }
    return products.filter((product) => product.category === selectedCategory);
  };

  const totalPages = Math.ceil(filteredProducts().length / productsToShow);

  const paginatedProducts = filteredProducts().slice(
    (currentPage - 1) * productsToShow,
    currentPage * productsToShow
  );

  return (
    <>
      <section className="flex flex-col lg:flex-row justify-between bg-beige w-full h-auto lg:h-[100px] px-4 md:px-10 lg:px-20 py-4 items-center font-Poppins gap-y-4 lg:gap-y-0">
        <div className="flex flex-col sm:flex-row items-center gap-y-4 sm:gap-y-0 gap-x-4 md:gap-x-8">
          <div className="flex gap-x-4 sm:gap-x-8 items-center">
            <div
              className={`flex gap-x-2 sm:gap-x-4 items-center cursor-pointer ${isFilterVisible && 'bg-darkbeige rounded-md p-2'}`}
              onClick={() => setIsFilterVisible(!isFilterVisible)}
            >
              <Image
                src={filter}
                alt="filter"
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
              <span className="text-[16px] sm:text-[20px]">Filter</span>
            </div>
            <Image
              src={four_dots}
              alt="four dots"
              className={`w-5 h-5 sm:w-6 sm:h-6 cursor-pointer ${viewType === "grid" && 'bg-darkbeige rounded-md w-6 h-6 sm:w-8 sm:h-8 p-2'}`}
              onClick={() =>
                setViewType("grid")
              }
            />
            <Image
              src={view_list}
              alt="view list"
              className={`w-5 h-5 sm:w-6 sm:h-6 cursor-pointer ${viewType === "list" && 'bg-darkbeige rounded-md w-6 h-6 sm:w-8 sm:h-8 p-2'}`}
              onClick={() =>
                setViewType("list")
              }
            />
            <Image src={line} alt="line" className="w-5 h-8 sm:w-6 sm:h-10" />
          </div>

          <span className="text-[14px] sm:text-[16px] text-center sm:text-left">
            Showing {(currentPage - 1) * productsToShow + 1}-
            {Math.min(currentPage * productsToShow, filteredProducts().length)}{" "}
            of {filteredProducts().length} results
          </span>
        </div>

        <div className="flex flex-col sm:flex-row gap-y-4 sm:gap-y-0 gap-x-4 sm:gap-x-8 items-center">
          {isFilterVisible && (
            <div className="flex items-center gap-x-2">
              <span>Category filter </span>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 bg-white border border-gray-300 rounded-md"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          )}
          <div className="flex items-center gap-x-2">
            <span>Show </span>
            <select
              value={productsToShow}
              onChange={handleShowChange}
              className="px-4 py-2 bg-white border border-gray-300 rounded-md"
            >
              <option value="8">8</option>
              <option value="16">16</option>
              <option value="24">24</option>
            </select>
          </div>
          <div className="flex items-center gap-x-2">
            <span>Sort by </span>
            <select
              value={sortOrder}
              onChange={handleSortChange}
              className="px-4 py-2 bg-white border border-gray-300 rounded-md"
            >
              <option value="default">Default</option>
              <option value="ascending">Price: Low to High</option>
              <option value="descending">Price: High to Low</option>
            </select>
          </div>
        </div>
      </section>

      <section className="px-12 md:px-24 py-6">
        {viewType === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-4 gap-x-8">
            {paginatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            {paginatedProducts.map((product) => (
              <ProductListComp key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </>
  );
};

export default ShopGridSection;
