import React from "react";
import Typography from "../common/Typography";
import TrophyIcon from '../../../public/assets/icons/TrophyIcon';
import Warranty from "../../../public/assets/icons/Warranty";
import FreeShipping from "../../../public/assets/icons/FreeShipping";
import CustomerSupport from "../../../public/assets/icons/CustomerSupport";

const ShopFeatureSection = () => {
  return (
    <div className="w-full bg-[#FAF3EA] py-6 md:py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center px-6 md:px-12 py-6 md:py-12 mx-auto ml-6">
        
        <div className="flex gap-4 items-center">
          <TrophyIcon />
          <div className="flex flex-col justify-center">
            <Typography 
              variant="p" 
              className="font-poppins font-[600] text-base md:text-lg lg:text-xl"
            >
              High Quality
            </Typography>
            <Typography
              variant="p"
              className="font-poppins font-medium text-[#898989] text-sm md:text-base lg:text-lg"
            >
              Crafted from top materials
            </Typography>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <Warranty />
          <div className="flex flex-col justify-center">
            <Typography 
              variant="p" 
              className="font-poppins font-[600] text-base md:text-lg lg:text-xl"
            >
              Warranty Protection
            </Typography>
            <Typography
              variant="p"
              className="font-poppins font-medium text-[#898989] text-sm md:text-base lg:text-lg"
            >
              Over 2 years
            </Typography>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <FreeShipping />
          <div className="flex flex-col justify-center">
            <Typography 
              variant="p" 
              className="font-poppins font-[600] text-base md:text-lg lg:text-xl"
            >
              Free Shipping
            </Typography>
            <Typography
              variant="p"
              className="font-poppins font-medium text-[#898989] text-sm md:text-base lg:text-lg"
            >
              Order over 150$
            </Typography>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <CustomerSupport />
          <div className="flex flex-col justify-center">
            <Typography 
              variant="p" 
              className="font-poppins font-[600] text-base md:text-lg lg:text-xl"
            >
              24 / 7 Support
            </Typography>
            <Typography
              variant="p"
              className="font-poppins font-medium text-[#898989] text-sm md:text-base lg:text-lg"
            >
              Dedicated support
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopFeatureSection;
