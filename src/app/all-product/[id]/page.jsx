import { DeleteModal } from "@/components/Modal/DeleteModal";
import { EditModalForm } from "@/components/Modal/EditModal";
import AddToCartBtn from "@/components/UI/AddToCartBtn";
import { auth } from "@/lib/auth";
import { getProductById } from "@/lib/productsData/data";
import { Button, Card, Chip } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import React from "react";
import { TbMathGreater } from "react-icons/tb";

const page = async ({ params }) => {
  // get token for client side
  // const { data:token, error } = await authClient.token();
  const { token } = await auth.api.getToken({
    headers: await headers(), // you need to pass the headers object.
  });
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  const userData = session?.user;
  const { id } = await params;

  const product = await getProductById(id, token);
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

  // console.log(token);

  const extraPrice = price + Math.floor(Math.random() * 50);
  // console.log(extraPrice);

  return (
    <div className="w-[90%] md:container space-y-3 mx-auto my-20 ">
      <div className=" flex items-center justify-end gap-4">
        <small className="text-gray-400">(This will be show only Admin)</small>
        <EditModalForm product={product} />
        <DeleteModal product={product} />
      </div>
      <Card className="rounded-lg p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="">
            <Image
              src={image}
              alt={title}
              width={4000}
              height={2000}
              className="w-full h-120 rounded-lg object-center object-cover border"
            />
          </div>

          {/* card info */}
          <div className="space-y-3.5 flex items-start flex-col">
            <div className="space-y-3.5 flex-1">
              <p className="flex items-center gap-1 text-xs font-semibold">
                Home <TbMathGreater /> Electronics <TbMathGreater /> Audio
              </p>
              <Chip color="success" className="bg-green-100 text-xl px-3 py-2">
                {quality}
              </Chip>
              <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
              <div className="flex items-start gap-6 justify-between">
                <div className="space-y-1.5">
                  <h2 className="text-xl md:text-3xl font-bold ">
                    Price : <span className="text-green-500">{price}</span>
                  </h2>
                  <h3 className="text-gray-500">
                    MSRP : <span className="line-through">{extraPrice}</span>
                  </h3>
                </div>
                <p className="text-2xl font-semibold">⭐⭐⭐⭐⭐ {rating}</p>
              </div>

              <div className="space-y-1.5">
                <h1 className="text-2xl font-semibold">Product Description</h1>
                <p className="text-lg text-gray-500">{description}</p>
              </div>
              <div className="text-lg space-y-2">
                <p>
                  Warranty :{" "}
                  <span className="text-amber-400 font-bold">{warranty}</span>
                </p>
                <p>
                  In Stock :{" "}
                  <span className="text-purple-400 font-bold">
                    {availableQuantity}
                  </span>
                </p>
              </div>
            </div>

            {/* btns grp */}
            <div className="grid grid-cols-2 gap-2 ">
              <AddToCartBtn userData={userData} product={product} />

              <Button variant="primary" className={"w-full rounded-none"}>
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default page;
