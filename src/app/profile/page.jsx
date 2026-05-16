import EditUserProfile from "@/components/Modal/EditUserProfile";
import { Button, Card } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { FcMoneyTransfer } from "react-icons/fc";
import { MdGppGood } from "react-icons/md";

const page = () => {
  return (
    <div className="w-[90%] md:container mx-auto my-20 ">
      <h1 className="font-datatype text-4xl pb-6">
        Welcome <span>MD. Abdullah</span>
      </h1>
      <div className="grid grid-cols-3 gap-6">
        {/* Left Column */}
        <Card className="col-span-1 h-150 min-h-[200px] overflow-hidden rounded-3xl ">
          {/* Background image */}
          <Image
            alt="NEO Home Robot"
            width={8000}
            height={4000}
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
            src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/neo2.jpeg"
          />
          {/* Header */}
          <Card.Header className="z-10 text-white">
            <Card.Title className="text-xs font-semibold tracking-wide text-black/70">
              NEO
            </Card.Title>
            <Card.Description className="text-sm leading-5 font-medium text-black/50">
              Home Robot
            </Card.Description>
          </Card.Header>
          {/* Footer */}
          <Card.Footer className="z-10 mt-auto flex items-center justify-between">
            <div>
              <div className="text-sm font-medium text-black">
                Available soon
              </div>
              <div className="text-xs text-black/60">Get notified</div>
            </div>
            <Button
              className="bg-white text-black"
              size="sm"
              variant="tertiary"
            >
              Notify me
            </Button>
          </Card.Footer>
        </Card>

        {/* Right Column */}
        <Card className="border font-datatype col-span-2 rounded-lg flex items-start flex-col pt-8 space-y-4">
          <div className="space-y-3 flex-1">
            <h1 className="text-2xl md:text-5xl font-bold">
              Name : <span>MD. Abdullah</span>
            </h1>
            <p className="text-lg md:text-3xl font-semibold">
              Email : <span>dfajdsfksad@gamil.com</span>
            </p>
            <p className="text-lg md:text-2xl  text-gray-400">
              Arive on : <span>23 may 2026</span>
            </p>
            <div className="grid grid-cols-3 gap-3">
              <div className="border p-3 flex flex-col items-center gap-2 rounded-xl cursor-pointer hover:shadow-[0_0_5px_rgba(59,130,246,0.6)] duration-300">
                <h1 className="flex items-center gap-1 text-xl font-bold text-blue-300">
                  <CiShoppingCart /> Buy Products
                </h1>
                <p className="text-3xl font-bold text-blue-600">21</p>
              </div>
              <div className="border p-3 flex flex-col items-center gap-2 rounded-xl cursor-pointer hover:shadow-[0_0_5px_rgb(60,179,113)] duration-300">
                <h1 className="flex items-center gap-1 text-xl font-bold text-green-300">
                  <FcMoneyTransfer /> Money
                </h1>
                <p className="text-3xl font-bold text-green-600">$12000</p>
              </div>
              <div className="border p-3 flex items-center justify-center rounded-xl cursor-pointer hover:shadow-[0_0_5px_rgb(255,165,0)] duration-300">
                <h1 className="flex items-center gap-1 text-xl font-bold text-orange-400">
                  <MdGppGood /> A Good Customer
                </h1>
              </div>
            </div>
            <p className="text-lg">
              <span className="font-extrabold text-xl">Description</span> :{" "}
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                nisi voluptatibus autem itaque necessitatibus amet ullam tempore
                quod odio ipsa enim eaque, eveniet, earum repellendus suscipit
                obcaecati sapiente voluptas omnis fugiat labore totam? quod odio
                ipsa enim eaque, eveniet, earum repellendus suscipit obcaecati
                sapiente voluptas omnis fugiat labore totam? quod odio ipsa enim
                eaque, eveniet, earum repellendus suscipit obcaecati sapiente
                voluptas omnis fugiat labore totam?
              </span>
            </p>
          </div>
          <EditUserProfile />
        </Card>
      </div>
    </div>
  );
};

export default page;
