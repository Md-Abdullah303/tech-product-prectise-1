import AddProductForm from "@/components/UI/AddProductForm";
import React from "react";

const AddProductsPage = () => {
  return (
    <div className="w-[90%] md:container mx-auto my-20 ">
      <h1 className="text-2xl text-center md:text-4xl font-bold">
        Added New Products
      </h1>
      {/* added products form */}
      <AddProductForm />
    </div>
  );
};

export default AddProductsPage;
