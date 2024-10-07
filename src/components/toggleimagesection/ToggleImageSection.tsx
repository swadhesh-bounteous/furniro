"use client";
import { FC, useState } from "react";

interface Image {
  url: string;
  alt: string;
}

interface ToggleImageSectionProps {
  images: Image[];
}

const ToggleImageSection: FC<ToggleImageSectionProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 px-4 sm:px-8 md:px-16 py-4">
      <div className="flex flex-row md:flex-col space-x-4 md:space-x-0 md:space-y-4 overflow-x-auto">
        {images.map((image, index) => {
          if (image !== selectedImage)
            return (
              <div
                key={index}
                className="relative group cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg bg-beige object-contain transition-transform transform group-hover:scale-110 duration-300"
                />
              </div>
            );
        })}
      </div>

      {/* Selected Image Display */}
      <div className="w-full h-64 sm:h-80 md:h-96 max-w-full md:max-w-lg">
        <img
          src={selectedImage.url}
          alt={selectedImage.alt}
          className="w-full h-full rounded-lg bg-beige object-contain"
        />
      </div>
    </div>
  );
};

export default ToggleImageSection;
