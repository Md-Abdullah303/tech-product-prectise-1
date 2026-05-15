import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ product }) => {
  const { _id, title, description, image, price, rating } = product;
  console.log(product);
  return (
    <Card className="border rounded-lg p-3 space-y-3 flex flex-col items-start h-full">
      {/* card img */}
      <div className="relative w-full">
        <Image
          src={image}
          alt={title}
          width={4000}
          height={2000}
          className="w-full h-60 object-center object-cover rounded-lg"
        />
        <Chip
          color="accent"
          className="bg-blue-100 absolute top-3 right-3 text-[14px]"
        >
          {rating}
        </Chip>
      </div>

      {/* card info */}
      <div className="space-y-2.5 flex-1 flex flex-col">
        {/* info */}
        <div className="flex flex-col items-start gap-2.5">
          <h1 className="text-2xl font-bold ">{title}</h1>
          <h2 className="text-xl font-semibold text-green-500">${price}</h2>
          <p className="text-gray-400 line-clamp-3">{description}</p>
        </div>

        {/* btns grp */}
        <div className="mt-auto w-full grid grid-cols-2 gap-2">
          <Link href={`/all-product/${_id}`}>
            <Button variant="outline" className={"w-full rounded-none"}>
              View Details
            </Button>
          </Link>

          <Button variant="primary" className={"w-full rounded-none"}>
            Add to Cart
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
