import SignUpForm from "@/components/UI/SignUpForm";
import React from "react";

const Page = () => {
  return (
    <div className="w-[90%] md:container mx-auto py-20 flex items-center flex-col gap-2">
      <h1 className="text-center text-4xl font-bold">Create A New Account</h1>
      <p className="text-center text-lg text-gray-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nemo
        tempore quod?
      </p>

      {/* SignUp Form */}
      <SignUpForm />
    </div>
  );
};

export default Page;
