import { Bookmark, Heart } from "@gravity-ui/icons";
import { Button, Card, Chip, ToggleButton } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ product }) => {
  const { _id, title, description, image, price, rating } = product;
  // console.log(product);
  return (
    <Card className="border rounded-lg p-3 space-y-3 flex flex-col items-start h-full">
      {/* card img */}
      <div className="relative w-full h-60 overflow-hidden">
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
      <div className="space-y-2.5 w-full flex-1 flex flex-col">
        {/* info */}
        <div className="flex w-full  flex-col items-start gap-2.5">
          <h1 className="text-2xl font-bold line-clamp-1">{title}</h1>
          <div className="flex items-start justify-between gap-4 w-full">
            <h2 className="text-xl font-semibold text-green-500">${price}</h2>
            <div className="flex items-center gap-3">
              <ToggleButton isIconOnly aria-label="Like">
                <Heart />
              </ToggleButton>
              <ToggleButton isIconOnly aria-label="Bookmark" variant="ghost">
                <Bookmark />
              </ToggleButton>
            </div>
          </div>
          <p className="text-gray-400 line-clamp-3">{description}</p>
        </div>

        {/* btns grp */}
        <div className="mt-auto w-full ">
          <Link href={`/all-product/${_id}`}>
            <Button variant="outline" className={"w-full rounded-none"}>
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
