"use client";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { productDetails } from "@/utils/productData";

const CartSection = () => {
  const initialProducts = productDetails.map((product, index) => ({
    id: index + 1, 
    name: product.name,
    price: product.price,
    quantity: 1, 
    image: product.mainImage,
  }));

  const [cartProducts, setCartProducts] = useState(initialProducts);

  const subtotal = cartProducts.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleQuantityChange = (e:ChangeEvent<HTMLInputElement>, productId:number) => {
    const newQuantity = parseInt(e.target.value, 10);
    const updatedProducts = cartProducts.map((product) =>
      product.id === productId ? { ...product, quantity: newQuantity } : product
    );
    setCartProducts(updatedProducts);
  };

  return (
    <section className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-2 border border-gray-300 rounded-lg overflow-hidden">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left">Product</th>
                <th className="p-3 text-left">Price</th>
                <th className="p-3 text-left">Quantity</th>
                <th className="p-3 text-left">Subtotal</th>
                <th className="p-3"></th>
              </tr>
            </thead>
          </table>
          <div className="max-h-64 overflow-y-auto">
            <table className="min-w-full bg-white">
              <tbody>
                {cartProducts.map((product) => (
                  <tr key={product.id} className="border-b">
                    <td className="p-3 flex items-center space-x-4">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={50}
                        height={50}
                        className="rounded"
                      />
                    </td>
                    <td>
                      <span>{product.name}</span>
                    </td>
                    <td className="p-3">
                      Rp. {product.price.toLocaleString()}
                    </td>
                    <td className="p-3">
                      <input
                        type="number"
                        value={product.quantity}
                        onChange={(e) => handleQuantityChange(e, product.id)}
                        className="w-12 border border-gray-300 text-center rounded"
                      />
                    </td>
                    <td className="p-3">
                      Rp. {(product.price * product.quantity).toLocaleString()}
                    </td>
                    <td className="p-3">
                      <button className="text-red-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="border border-gray-300 rounded-lg p-6 bg-gray-50">
          <h2 className="text-lg font-semibold mb-4">Cart Totals</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>Rp. {subtotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between font-semibold text-yellow-600 text-lg mb-4">
            <span>Total</span>
            <span>Rp. {subtotal.toLocaleString()}</span>
          </div>
          <button className="w-full bg-yellow-500 text-white p-3 rounded-lg font-semibold">
            Check Out
          </button>
        </div>
      </div>
    </section>
  );
};

export default CartSection;
