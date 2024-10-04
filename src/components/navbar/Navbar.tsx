"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../public/assets/icons/logo.svg";
import cart from "../../../public/assets/icons/cart.svg";
import heart from "../../../public/assets/icons/heart.svg";
import usericon from "../../../public/assets/icons/usericon.svg";
import search from "../../../public/assets/icons/search.svg";
import Link from "next/link";
import { TbMenuDeep } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";
import Typography from "../common/Typography";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <header className="bg-white">
      <nav className="container mx-auto flex justify-between items-center py-5 px-6 font-Poppins">
        <div className="flex items-center gap-x-2">
          <Image src={logo} alt="Logo" className="w-[50px] h-[32px]" />
          <Typography variant="span" className="text-[34px] font-semibold">
            Furniro
          </Typography>
        </div>

        <ul className="hidden lg:flex gap-x-12 font-medium items-center text-[18px]">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/shop">Shop</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        <div className="hidden lg:flex gap-x-6 items-center">
          <Link href="/user">
            <Image src={usericon} alt="User" className="w-6 h-6" />
          </Link>
          <Link href="/search">
            <Image src={search} alt="Search" className="w-6 h-6" />
          </Link>
          <Link href="/wishlist">
            <Image src={heart} alt="WishList" className="w-6 h-6" />
          </Link>
          <Link href="/cart">
            <Image src={cart} alt="Cart" className="w-6 h-6" />
          </Link>
        </div>

        <button className="lg:hidden flex items-center" onClick={toggleDrawer}>
          <TbMenuDeep className="w-8 h-8" />
        </button>
      </nav>

      <div
        className={`fixed top-0 right-0 h-full bg-white w-[75%] z-50 transform ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out shadow-lg`}
      >
        <div className="flex justify-between items-center p-6">
          <Typography variant="span" className="text-[34px] font-medium">
            Furniro
          </Typography>
          <button onClick={toggleDrawer}>
            <IoMdClose className="w-6 h-6" />
          </button>
        </div>

        <ul className="flex flex-col gap-y-6 font-medium items-start text-[18px] p-6">
          <li>
            <Link href="/" onClick={toggleDrawer}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/shop" onClick={toggleDrawer}>
              Shop
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={toggleDrawer}>
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={toggleDrawer}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleDrawer}
        ></div>
      )}
    </header>
  );
};

export default Navbar;
