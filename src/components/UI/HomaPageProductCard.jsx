"use client";

import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const HomePageProductCard = ({ product }) => {
  const { _id, title, quality, price, image } = product;
  return (
    <Card className="border rounded-lg p-3 mx-3">
      <div className="">
        {/* card img */}
        <div className="relative">
          <Image
            src={image}
            alt={title}
            width={4000}
            height={2000}
            className="w-full rounded-xl h-65 object-center object-cover"
          />
          <Chip color="success" className="bg-green-200 absolute top-2 right-2">
            {quality}
          </Chip>
        </div>

        {/* card info */}
        <div className="space-y-2.5">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-lg">
            Price : <span className="text-green-400 font-bold">{price}</span>
          </p>
          <div className="">
            <Link href={`/all-product/${_id}`}>
              <Button className={"w-full rounded-lg"}>View Details</Button>
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default HomePageProductCard;
