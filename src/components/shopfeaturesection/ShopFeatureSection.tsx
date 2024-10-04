import React from "react";
import Typography from "../common/Typography";
import TrophyIcon from '../../../public/assets/icons/TrophyIcon';
import Warranty from "../../../public/assets/icons/Warranty";
import FreeShipping from "../../../public/assets/icons/FreeShipping";
import CustomerSupport from "../../../public/assets/icons/CustomerSupport";


const ShopFeatureSection = () => {
  return (
    <div className="w-full bg-[#FAF3EA] py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center pl-16 py-8 md:py-16 mx-auto">
        <div className="flex gap-4 items-center">
          <TrophyIcon />
          <div className="flex flex-col justify-center">
            <Typography variant="p" className="font-poppins font-[600] text-xl">
              High Quality
            </Typography>
            <Typography
              variant="p"
              className="font-poppins font-medium text-[#898989] text-lg"
            >
              crafted from top materials
            </Typography>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <Warranty />
          <div className="flex flex-col justify-center">
            <Typography variant="p" className="font-poppins font-[600] text-xl">
              Warranty Protection
            </Typography>
            <Typography
              variant="p"
              className="font-poppins font-medium text-[#898989] text-lg"
            >
              Over 2 years
            </Typography>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <FreeShipping />
          <div className="flex flex-col justify-center">
            <Typography variant="p" className="font-poppins font-[600] text-xl">
              Free Shipping
            </Typography>
            <Typography
              variant="p"
              className="font-poppins font-medium text-[#898989] text-lg"
            >
              Order over 150$
            </Typography>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <CustomerSupport />
          <div className="flex flex-col justify-center">
            <Typography variant="p" className="font-poppins font-[600] text-xl">
              24 / 7 Support
            </Typography>
            <Typography
              variant="p"
              className="font-poppins font-medium text-[#898989] text-lg"
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
