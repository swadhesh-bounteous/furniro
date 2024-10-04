"use client";
import Image from 'next/image';
import React, { useState } from 'react';

const productDetails = {
  images: [
    "/assets/images/three_seater_sofa_1.png",
    "/assets/images/three_seater_sofa_2.png"
  ],
  description: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio that boasts clear mid-range and extended highs for a sound.",
  additionalInfo: "The analogue knobs allow you to fine-tune the controls to your personal preferences while the leather strap makes it easy and stylish for travel."
};

const ProductInfo = () => {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className="p-6">
      <div className="border-b border-gray-300">
        <ul className="flex space-x-24 justify-center">
          <li>
            <button
              className={`pb-2 border-b-2 ${
                activeTab === 'description' ? 'border-black' : 'border-transparent'
              } focus:outline-none`}
              onClick={() => setActiveTab('description')}
            >
              Description
            </button>
          </li>
          <li>
            <button
              className={`pb-2 border-b-2 ${
                activeTab === 'additionalInfo' ? 'border-black' : 'border-transparent'
              } focus:outline-none`}
              onClick={() => setActiveTab('additionalInfo')}
            >
              Additional Information
            </button>
          </li>
        </ul>
      </div>

      <div className="mt-6 px-12 md:px-40 h-48"> 
        {activeTab === 'description' && (
          <div>
            <h2 className="text-lg font-semibold">Description</h2>
            <p className="mt-2 text-gray-600">
              {productDetails.description}
            </p>
          </div>
        )}
        {activeTab === 'additionalInfo' && (
          <div>
            <h2 className="text-lg font-semibold">Additional Information</h2>
            <p className="mt-2 text-gray-600">
              {productDetails.additionalInfo}
            </p>
          </div>
        )}
      </div>

      <div className="mt-6 grid grid-cols-2 gap-x-4 justify-around pl-16">
        {productDetails.images.map((image, index) => (
          <Image 
            key={index}
            src={image}
            alt={`Product Image ${index + 1}`}
            width={600}  
            height={400} 
            className="object-fit bg-[#f9f1e7] rounded-md" 
          />
        ))}
      </div>
    </div>
  );
};

export default ProductInfo;
