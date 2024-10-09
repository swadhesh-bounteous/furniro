export type Review = {
    user: string; // User name
    rating: number; // User rating (e.g., 1 to 5)
    comment: string; // User comment
};

export type ProductApi = {
    id: number;
    createdAt: string|null; 
    name: string;
    description: string;
    detailedDescription: string;
    additionalInfo: string;
    price: number;
    originalPrice: number|null;
    sku: string;
    category: string;
    productTags: string[];
    colors: string[];
    sizes: string[];
    mainImage: string; // URL of the main image
    images: {
      url: string; // URL of the image
      alt: string; // Alternative text for the image
    }[];
    discount: string|null; // e.g., "20%"
    rating: number; // Average rating
    reviews: {
      user: string; // Name of the user who reviewed
      rating: number; // Rating given by the user
      comment: string; // Comment from the user
    }[];
  };
  
