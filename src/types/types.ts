export type Review = {
    user: string; // User name
    rating: number; // User rating (e.g., 1 to 5)
    comment: string; // User comment
};

export type ProductDetail = {
    productId: number; // Unique product ID
    name: string; // Product name
    description: string; // Short description
    detailedDesc: string; // Optional detailed description
    additionalInfo: string; // Additional information
    price: number; // Current price
    originalPrice: number | null; // Original price if on discount
    reviews: Review[]; // Array of reviews
    rating: number; // Average product rating
    sku: string; // SKU (Stock Keeping Unit)
    category: string; // Product category
    productTags: { name: string }[]; // Array of product tags
    colors: { name: string }[]; // Array of color options
    sizes: { name: string }[]; // Array of size options
    mainImage: string; // URL of the main product image
    images: { url: string; alt: string }[]; // Array of additional images
    discount: string | null; // Discount information
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
  
