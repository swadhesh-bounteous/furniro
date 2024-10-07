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
    shareLink: { url: string }; // Optional share link
    discount: string | null; // Discount information
};
