import AddToCart from "@/components/UI/AddToCart";
import { getAddToCartProducts } from "@/lib/productsData/data";
import React from "react";

const page = async () => {
  const addToCartProducts = await getAddToCartProducts();

  return (
    <div className="w-[90%] md:container mx-auto my-20 ">
      <h1 className="text-xl md:text-4xl font-bold">Cart Item</h1>

      <div className="mt-10 flex flex-col items-start gap-4 w-full">
        {addToCartProducts.map((product) => (
          <AddToCart key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default page;
