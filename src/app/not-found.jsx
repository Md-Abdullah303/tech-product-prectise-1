import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="w-[90%] md:container mx-auto py-20 my-18 bg-slate-200 flex flex-col items-center gap-3 rounded-lg">
      <h1 className="text-2xl md:text-4xl font-bold text-red-500">404</h1>
      <p className="text-lg text-gray-400">Not Found Any Page</p>
      <Link href={"/"}>
        <Button className={"rounded-none"}>GO Home</Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
