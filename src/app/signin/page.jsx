import SignInForm from "@/components/UI/SignInForm";
import React from "react";

const Page = () => {
  return (
    <div className="w-[90%] md:container mx-auto py-20 flex items-center flex-col gap-2">
      <h1 className="text-center text-4xl font-bold">Welcome back</h1>
      <p className="text-center text-lg text-gray-400">
        Lorem ipsum dolor sit amet consectetur adipisicing.
      </p>

      {/* SignUp Form */}
      <SignInForm />
    </div>
  );
};

export default Page;
