import React from "react";
import Link from "next/link";

type Props = {
  pageName: string;
};

const UpperSection = ({ pageName }: Props) => {
  return (
    <section className="relative bg-[url('/assets/bg_img.png')] bg-opacity-30 bg-cover bg-center h-[300px] md:h-[400px] font-Poppins">
      <div className="absolute inset-0"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium text-black mb-2 md:mb-4">
          {pageName}
        </h1>

        <nav className="text-gray-800 text-xs md:text-sm">
          <Link href="/" className="font-medium">
            Home
          </Link>
          <span className="mx-1 md:mx-2">{">"}</span>
          <span className="font-normal">{pageName}</span>
        </nav>
      </div>
    </section>
  );
};

export default UpperSection;
