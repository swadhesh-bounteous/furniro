import React from "react";
import Image from "next/image";
import logo from "../../public/assets/icons/logo.svg";
import cart from "../../public/assets/icons/cart.svg";
import heart from "../../public/assets/icons/heart.svg";
import usericon from "../../public/assets/icons/usericon.svg";
import search from "../../public/assets/icons/search.svg";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto flex justify-between items-center py-6 px-6 font-Poppins">
        <div className="flex items-center gap-x-2">
          <Image src={logo} alt="Logo" className="w-[50px] h-[32px]" />
          <span className="text-[34px] font-bold">Furniro</span>
        </div>
        <ul className="flex gap-x-12 font-semibold items-center">
          <li className="text-[16px] ">
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/shop">Shop</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
        <div className="flex gap-x-12 items-center">
          <a href="/user">
            <Image src={usericon} alt="User" className="w-6 h-6" />
          </a>
          <a href="/search">
            <Image src={search} alt="Search" className="w-6 h-6" />
          </a>
          <a href="/wishlist">
            <Image src={heart} alt="WishList" className="w-6 h-6" />
          </a>
          <a href="/cart">
            <Image src={cart} alt="Cart" className="w-6 h-6" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
