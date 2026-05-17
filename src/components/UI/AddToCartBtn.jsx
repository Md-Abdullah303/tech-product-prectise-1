"use client";
import { Button } from "@heroui/react";
import React from "react";
import { toast } from "react-toastify";

const AddToCartBtn = ({ userData, product }) => {
  const {
    _id,
    warranty,
    title,
    rating,
    quality,
    price,
    image,
    description,
    availableQuantity,
  } = product;
  const { name, email, image: userImage, createdAt } = userData;

  const handleAddToCard = async () => {
    const itemData = {
      userName: name,
      userEmail: email,
      userImage,
      loginDate: createdAt,
      productId: _id,
      productWarranty: warranty,
      productTitle: title,
      productQuality: quality,
      productPrice: price,
      productImage: image,
      productDescription: description,
      productRating: rating,
      productAvailableQuantity: availableQuantity - 1,
      orderDate: new Date(),
    };

    console.log(itemData);

    const res = await fetch("http://localhost:8000/addToCart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(itemData),
    });
    // console.log(res);
    if (res.ok) {
      toast.success("Product added successfully..");
    } else {
      toast.error(res?.statusText);
    }
  };
  return (
    <Button
      onClick={handleAddToCard}
      variant="outline"
      className={"w-full rounded-none"}
    >
      Add to Cart
    </Button>
  );
};

export default AddToCartBtn;
