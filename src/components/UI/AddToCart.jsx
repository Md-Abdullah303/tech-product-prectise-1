import { Bookmark, Heart } from "@gravity-ui/icons";
import { Button, Card, Chip, ToggleButton } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AddToCart = ({ product }) => {
  const {
    productAvailableQuantity,
    productDescription,
    productImage,
    productPrice,
    productQuality,
    productTitle,
    productWarranty,
    productRating,
    productId,
    orderDate,
  } = product;

  console.log(product);
  return (
    <Card className="border rounded-lg p-3  w-full  items-start h-full grid grid-cols-3 gap-3.5">
      {/* card img */}
      <div className="relative col-span-1 w-full h-80 overflow-hidden">
        <Image
          src={productImage}
          alt={productTitle}
          width={4000}
          height={2000}
          className="w-full h-auto object-center object-cover rounded-lg"
        />
        <Chip
          color="accent"
          className="bg-blue-100 absolute top-3 right-3 text-[14px]"
        >
          {productRating}
        </Chip>
      </div>

      {/* card info */}
      <div className="space-y-2.5 w-full col-span-2  flex flex-col h-full                                                                   ">
        {/* info */}
        <div className="flex w-full flex-1  flex-col items-start gap-2.5">
          <Chip className="text-2xl font-bold py-2 px-4" color="accent">
            {productQuality}
          </Chip>
          <h1 className="text-2xl font-bold line-clamp-1">{productTitle}</h1>
          <div className="flex flex-col items-start justify-between gap-4 w-full text-lg">
            <h2 className="text-xl font-semibold text-green-500">
              ${productPrice}
            </h2>
            <h1 className="">Warranty : {productWarranty}</h1>
            <h1>Order Date : {new Date(orderDate).toDateString()}</h1>
          </div>
          <p className="text-gray-400 line-clamp-3">{productDescription}</p>
        </div>

        {/* btns grp */}
        <div className="mt-auto w-full  flex items-center gap-3">
          <Link href={`/all-product/${productId}`}>
            <Button variant="outline" className={"w-full rounded-none"}>
              View Details
            </Button>
          </Link>
          <Button>Conform</Button>
        </div>
      </div>
    </Card>
  );
};

export default AddToCart;
