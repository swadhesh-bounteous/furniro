import Footer from "@/components/common/Footer";
import Navbar from "@/components/navbar/Navbar";
import ProductDetails from "@/components/productdetails/ProductDetails";
import ProductInfo from "@/components/productinfo/ProductInfo";
import ToggleImageSection from "@/components/toggleimagesection/ToggleImageSection";
import React from "react";

const page = () => {
    const productDetails = {
        images: [
          "/assets/images/sofa_set_1.png",
          "/assets/images/sofa_set_2.png",
          "/assets/images/sofa_set_3.png",
          "/assets/images/sofa_set_4.png",
          "/assets/images/sofa_set_5.png",
        ],
        name: "Asgaard Sofa",
        price: "Rs. 250,000.00",
        rating: 5,
        reviews: 5,
        description:
          "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well balanced audio which boasts the clear mid-range and extended highs for a sound",
        sizes: ["L", "XL", "XS"],
        colors: ["#000000", "#9c8ee8", "#d4af37"],
      };

  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 my-8">
        <ToggleImageSection images={productDetails.images} />
        <ProductDetails
          name={productDetails.name}
          price={productDetails.price}
          rating={productDetails.rating}
          reviews={productDetails.reviews}
          description={productDetails.description}
          sizes={productDetails.sizes}
          colors={productDetails.colors}
        />
      </div>
      <ProductInfo/>
      <Footer/>
    </div>
  );
};

export default page;
