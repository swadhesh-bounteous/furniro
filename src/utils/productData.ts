import { ProductApi, ProductDetail } from "@/types/types";

export const productDetails: ProductApi[] = [
  {
    id: 1,
    createdAt:null,
    name: "Syltherine",
    description: "Stylish cafe table",
    price: 2500000,
    detailedDescription:
      "Embodying the raw, wayward spirit of rock roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.. Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
    additionalInfo:
      "Embodying the raw, wayward spirit of rock roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.. Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
    originalPrice: 3500000,
    rating: 4.5,
    sku: "SKU001",
    category: "Tables",
    productTags: ["Table","Cafe"], 
    colors: ["Red","Blue"], // example colors
    sizes: ["XL","XSL"], // example sizes
    mainImage: "/assets/images/worktable.png",
    images: [
      { url: "/assets/images/sofa_set_1.png", alt: "sofa set 1" },
      { url: "/assets/images/sofa_set_2.png", alt: "sofa set 2" },
      { url: "/assets/images/sofa_set_3.png", alt: "sofa set 3" },
      { url: "/assets/images/sofa_set_4.png", alt: "sofa set 4" },
      { url: "/assets/images/sofa_set_5.png", alt: "sofa set 5" },
      { url:"/assets/images/three_seater_sofa_1.png", alt:"sofa desc1"},
      { url:"/assets/images/three_seater_sofa_2.png", alt:"sofa desc2"},
    ],
    discount: "30%", 
    reviews: [
      {
        user: "Alice Johnson",
        rating: 5,
        comment:
          "I noticed a significant improvement in my website's loading speed after implementing the suggested optimizations. Highly recommend these insights!",
      },
      {
        user: "Mark Smith",
        rating: 4,
        comment:
          "The detailed breakdown of performance metrics was incredibly helpful. The tips provided helped me reduce my bounce rate by 30%.",
      },
    ],
  },
  {
    id: 2,
    createdAt: null,
    name: "Ravon Armchair",
    description: "Comfortable and stylish armchair",
    price: 1200000,
    detailedDescription:
      "The Ravon Armchair is the epitome of luxury and comfort. With its plush cushions and ergonomic design, this armchair is perfect for any living room or office. The high-quality fabric ensures durability, while the minimalist design adds a touch of elegance to any space.",
    additionalInfo:
      "Designed with both comfort and style in mind, the Ravon Armchair offers a deep seat and soft upholstery that invites relaxation. The sturdy wooden legs provide support and stability, making it a perfect choice for both contemporary and traditional interiors.",
    originalPrice: 1800000,
    rating: 4.2,
    sku: "SKU002",
    category: "Furniture",
    productTags: ["Armchair", "Comfort"],
    colors: ["Grey", "Beige"],
    sizes: ["Standard"],
    mainImage: "/assets/images/cup.png",
    images: [
      { url: "/assets/images/sofa_set_1.png", alt: "sofa set 1" },
      { url: "/assets/images/sofa_set_2.png", alt: "sofa set 2" },
      { url: "/assets/images/sofa_set_3.png", alt: "sofa set 3" },
      { url: "/assets/images/sofa_set_4.png", alt: "sofa set 4" },
      { url: "/assets/images/sofa_set_5.png", alt: "sofa set 5" },
    ],
    discount: "25%",
    reviews: [
      {
        user: "Laura Williams",
        rating: 4,
        comment: "Very comfortable armchair, great for long hours of reading. The material is soft and cozy."
      },
      {
        user: "Daniel Baker",
        rating: 5,
        comment: "Beautiful design, fits perfectly in my living room. Worth every penny!"
      }
    ]
  },
  {
    id: 3,
    createdAt: null,
    name: "Wooden Dining Table",
    description: "Elegant wooden dining table",
    price: 4500000,
    detailedDescription:
      "This handcrafted wooden dining table offers timeless style and durability. The natural wood grain and smooth finish make it a stunning centerpiece for any dining room. With space for up to 6 people, it is perfect for family meals or dinner parties.",
    additionalInfo:
      "Made from sustainably sourced wood, this dining table combines eco-friendliness with high-quality craftsmanship. The sturdy construction ensures longevity, while the clean lines add a touch of modern sophistication to your dining space.",
    originalPrice: 6000000,
    rating: 4.7,
    sku: "SKU003",
    category: "Tables",
    productTags: ["Dining Table", "Wood"],
    colors: ["Natural", "Walnut"],
    sizes: ["Large"],
    mainImage: "/assets/images/mattress.png",
    images: [
      { url: "/assets/images/sofa_set_1.png", alt: "sofa set 1" },
      { url: "/assets/images/sofa_set_2.png", alt: "sofa set 2" },
      { url: "/assets/images/sofa_set_3.png", alt: "sofa set 3" },
      { url: "/assets/images/sofa_set_4.png", alt: "sofa set 4" },
      { url: "/assets/images/sofa_set_5.png", alt: "sofa set 5" },
    ],
    discount: "15%",
    reviews: [
      {
        user: "Sophie Anderson",
        rating: 5,
        comment: "Absolutely love this dining table! It has a solid build and looks amazing in my dining room."
      },
      {
        user: "James Carter",
        rating: 4,
        comment: "Great table, though delivery took longer than expected. The quality is top-notch."
      }
    ]
  },
  {
    id: 4,
    createdAt: null,
    name: "Velvet Sofa Set",
    description: "Luxurious velvet sofa set",
    price: 8000000,
    detailedDescription:
      "Experience ultimate comfort with our velvet sofa set. The smooth velvet fabric feels soft to the touch, while the foam cushions provide superior support. This set includes a 3-seater sofa and a matching armchair, perfect for any modern living room.",
    additionalInfo:
      "The deep seating and plush cushions make this sofa set an ideal choice for lounging. The elegant design complements both modern and traditional interiors, and the durable construction ensures long-lasting use.",
    originalPrice: 10000000,
    rating: 4.8,
    sku: "SKU004",
    category: "Sofas",
    productTags: ["Sofa", "Velvet"],
    colors: ["Emerald Green", "Navy Blue"],
    sizes: ["3-seater", "Armchair"],
    mainImage: "/assets/images/sofa.png",
    images: [
      { url: "/assets/images/sofa_set_1.png", alt: "sofa set 1" },
      { url: "/assets/images/sofa_set_2.png", alt: "sofa set 2" },
      { url: "/assets/images/sofa_set_3.png", alt: "sofa set 3" },
      { url: "/assets/images/sofa_set_4.png", alt: "sofa set 4" },
      { url: "/assets/images/sofa_set_5.png", alt: "sofa set 5" },
    ],
    discount: "20%",
    reviews: [
      {
        user: "Emma Brown",
        rating: 5,
        comment: "The velvet is so soft and the sofa is incredibly comfortable. I love the color options as well!"
      },
      {
        user: "Liam Wilson",
        rating: 4,
        comment: "Looks great in my living room. Very happy with the quality and comfort."
      }
    ]
  },
  {
    id: 5,
    createdAt: null,
    name: "Vintage Floor Lamp",
    description: "Retro-style floor lamp",
    price: 1500000,
    detailedDescription:
      "This vintage-inspired floor lamp adds a retro flair to any space. The adjustable height and directional shade make it both functional and stylish. Perfect for creating a cozy reading nook or adding a touch of elegance to your home decor.",
    additionalInfo:
      "Crafted from durable materials, the Vintage Floor Lamp features a metal base and a classic lampshade. The adjustable arm allows you to direct the light exactly where you need it, while the timeless design fits seamlessly into both modern and traditional interiors.",
    originalPrice: 2000000,
    rating: 4.4,
    sku: "SKU005",
    category: "Lighting",
    productTags: ["Lamp", "Vintage"],
    colors: ["Black", "Gold"],
    sizes: ["Standard"],
    mainImage: "/assets/images/fan.png",
    images: [
      { url: "/assets/images/sofa_set_1.png", alt: "sofa set 1" },
      { url: "/assets/images/sofa_set_2.png", alt: "sofa set 2" },
      { url: "/assets/images/sofa_set_3.png", alt: "sofa set 3" },
      { url: "/assets/images/sofa_set_4.png", alt: "sofa set 4" },
      { url: "/assets/images/sofa_set_5.png", alt: "sofa set 5" },
    ],
    discount: "10%",
    reviews: [
      {
        user: "Olivia Martinez",
        rating: 4,
        comment: "Gives a great vintage vibe to my room. The adjustable arm is really convenient."
      },
      {
        user: "Ethan Walker",
        rating: 5,
        comment: "Exactly what I was looking for! It's both functional and stylish."
      }
    ]
  }
  
];
