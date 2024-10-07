import { ProductDetail } from "@/types/types";

export const productDetails: ProductDetail[] = [
  {
    productId: 1,
    name: "Syltherine",
    description: "Stylish cafe table",
    price: 2500000,
    detailedDesc:
      "Embodying the raw, wayward spirit of rock roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.. Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
    additionalInfo:
      "Embodying the raw, wayward spirit of rock roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.. Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
    originalPrice: 3500000,
    rating: 4.5, // example rating
    sku: "SKU001",
    category: "Tables",
    productTags: [{ name: "Table" }, { name: "Cafe" }], // example tags
    colors: [{ name: "Red" }, { name: "Blue" }], // example colors
    shareLink: { url: "https://example.com/syltherine" }, // example share link
    sizes: [{ name: "Small" }, { name: "Large" }], // example sizes
    mainImage: "/assets/images/worktable.png",
    images: [
      { url: "/assets/images/sofa_set_1.png", alt: "sofa set 1" },
      { url: "/assets/images/sofa_set_2.png", alt: "sofa set 2" },
      { url: "/assets/images/sofa_set_3.png", alt: "sofa set 3" },
      { url: "/assets/images/sofa_set_4.png", alt: "sofa set 4" },
      { url: "/assets/images/sofa_set_5.png", alt: "sofa set 5" },
    ], // multiple image URLs
    discount: "30%", // discount as is
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
    productId: 2,
    name: "Leviosa",
    description: "Stylish cafe chair",
    detailedDesc:
      "Embodying the raw, wayward spirit of rock roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.. Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
    additionalInfo:
      "Embodying the raw, wayward spirit of rock roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.. Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
    price: 2500000, // number
    originalPrice: null, // no original price
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
    rating: 4.0, // example rating
    sku: "SKU002",
    category: "Chairs",
    productTags: [{ name: "Chair" }, { name: "Modern" }], // example tags
    colors: [{ name: "White" }], // example color
    shareLink: { url: "https://example.com/leviosa" }, // example share link
    sizes: [{ name: "Medium" }], // example sizes
    mainImage: "/assets/images/chair.png",
    images: [{ url: "/assets/images/chair.png", alt: "leviosa chair" }], // single image URL
    discount: null, // no discount
  },
  {
    productId: 3,
    name: "Lolito",
    description: "Luxury big sofa",
    detailedDesc:
      "Embodying the raw, wayward spirit of rock roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.. Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
    additionalInfo:
      "Embodying the raw, wayward spirit of rock roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.. Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
    price: 7000000, // number
    originalPrice: 14000000, // number
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
    rating: 4.8, // example rating
    sku: "SKU003",
    category: "Sofas",
    productTags: [{ name: "Sofa" }, { name: "Luxury" }], // example tags
    colors: [{ name: "Grey" }], // example color
    shareLink: { url: "https://example.com/lolito" }, // example share link
    sizes: [{ name: "Large" }], // example size
    mainImage: "/assets/images/sofa.png",
    images: [
      { url: "/assets/images/sofa_set_1.png", alt: "sofa set 1" },
      { url: "/assets/images/sofa_set_2.png", alt: "sofa set 2" },
    ], // image URLs
    discount: "50%", // discount as is
  },
  {
    productId: 4,
    name: "Respira",
    description: "Outdoor bar fan ",
    detailedDesc:
      "Embodying the raw, wayward spirit of rock roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.. Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
    additionalInfo:
      "Embodying the raw, wayward spirit of rock roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.. Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
    price: 500000, // number
    originalPrice: null, // no original price
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
    rating: 4.2, // example rating
    sku: "SKU004",
    category: "Fans",
    productTags: [{ name: "Bar" }, { name: "Outdoor" }], // example tags
    colors: [{ name: "Brown" }], // example color
    shareLink: { url: "https://example.com/respira" }, // example share link
    sizes: [{ name: "Small" }], // example size
    mainImage: "/assets/images/fan.png",
    images: [{ url: "/assets/images/fan.png", alt: "respira fan" }], // single image URL
    discount: "New", // New arrival
  },
  {
    productId: 5,
    name: "Syltherine",
    description: "Stylish cafe table",
    detailedDesc:
      "Embodying the raw, wayward spirit of rock roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.. Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
    additionalInfo:
      "Embodying the raw, wayward spirit of rock roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.. Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",

    price: 2500000, // number
    originalPrice: 3500000, // number
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
    rating: 4.5, // example rating
    sku: "SKU001",
    category: "Tables",
    productTags: [{ name: "Table" }, { name: "Cafe" }], // example tags
    colors: [{ name: "Red" }, { name: "Blue" }], // example colors
    shareLink: { url: "https://example.com/syltherine" }, // example share link
    sizes: [{ name: "Small" }, { name: "Large" }], // example sizes
    mainImage: "/assets/images/worktable.png",
    images: [
      { url: "/assets/images/sofa_set_1.png", alt: "sofa set 1" },
      { url: "/assets/images/sofa_set_2.png", alt: "sofa set 2" },
      { url: "/assets/images/sofa_set_3.png", alt: "sofa set 3" },
      { url: "/assets/images/sofa_set_4.png", alt: "sofa set 4" },
      { url: "/assets/images/sofa_set_5.png", alt: "sofa set 5" },
    ], // multiple image URLs
    discount: "30%", // discount as is
  },
  {
    productId: 6,
    name: "Leviosa",
    description: "Stylish cafe chair",
    detailedDesc:
      "Embodying the raw, wayward spirit of rock roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.. Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
    additionalInfo:
      "Embodying the raw, wayward spirit of rock roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.. Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
    price: 2500000, // number
    originalPrice: null, // no original price
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
    rating: 4.0, // example rating
    sku: "SKU002",
    category: "Chairs",
    productTags: [{ name: "Chair" }, { name: "Modern" }], // example tags
    colors: [{ name: "White" }], // example color
    shareLink: { url: "https://example.com/leviosa" }, // example share link
    sizes: [{ name: "Medium" }], // example sizes
    mainImage: "/assets/images/chair.png",
    images: [{ url: "/assets/images/chair.png", alt: "leviosa chair" }], // single image URL
    discount: null, // no discount
  },
  {
    productId: 7,
    name: "Lolito",
    description: "Luxury big sofa",
    detailedDesc:
      "Embodying the raw, wayward spirit of rock roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.. Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
    additionalInfo:
      "Embodying the raw, wayward spirit of rock roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.. Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
    price: 7000000, // number
    originalPrice: 14000000, // number
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
    rating: 4.8, // example rating
    sku: "SKU003",
    category: "Sofas",
    productTags: [{ name: "Sofa" }, { name: "Luxury" }], // example tags
    colors: [{ name: "Grey" }], // example color
    shareLink: { url: "https://example.com/lolito" }, // example share link
    sizes: [{ name: "Large" }], // example size
    mainImage: "/assets/images/sofa.png",
    images: [
      { url: "/assets/images/sofa_set_1.png", alt: "sofa set 1" },
      { url: "/assets/images/sofa_set_2.png", alt: "sofa set 2" },
    ], // image URLs
    discount: "50%", // discount as is
  },
  {
    productId: 8,
    name: "Respira",
    description: "Outdoor bar fan ",
    detailedDesc:
      "Embodying the raw, wayward spirit of rock roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.. Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
    additionalInfo:
      "Embodying the raw, wayward spirit of rock roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.. Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
    price: 500000, // number
    originalPrice: null, // no original price
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
    rating: 4.2, // example rating
    sku: "SKU004",
    category: "Fans",
    productTags: [{ name: "Bar" }, { name: "Outdoor" }], // example tags
    colors: [{ name: "Brown" }], // example color
    shareLink: { url: "https://example.com/respira" }, // example share link
    sizes: [{ name: "Small" }], // example size
    mainImage: "/assets/images/fan.png",
    images: [{ url: "/assets/images/fan.png", alt: "respira fan" }], // single image URL
    discount: "New", // New arrival
  },
];
