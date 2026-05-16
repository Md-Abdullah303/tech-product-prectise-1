"use client";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const SignUpForm = () => {
  const [showPass, setShowPass] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("sign was st");

    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData.entries());
    console.log(userData);
  };

  return (
    <form
      className="flex mt-10 w-120 border p-3 rounded-lg flex-col gap-4"
      onSubmit={onSubmit}
    >
      {/* name */}
      <TextField className="w-full " name="name" type="text">
        <Label>Name</Label>
        <Input placeholder="Enter your name" />
      </TextField>

      {/* email */}
      <TextField
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }
          return null;
        }}
      >
        <Label>Email</Label>
        <Input placeholder="Enter your email" />
        <FieldError />
      </TextField>

      {/* image */}
      <TextField className="w-full " name="image" type="text">
        <Label>Image URI</Label>
        <Input placeholder="Enter your Image URI" />
      </TextField>

      {/* password */}
      <TextField
        isRequired
        minLength={8}
        name="password"
        type={`${showPass ? "text" : "password"}`}
        validate={(value) => {
          if (value.length < 8) {
            return "Password must be at least 8 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }
          return null;
        }}
      >
        <Label>Password</Label>
        <div className="relative  w-full ">
          <Input className={"w-full"} placeholder="Enter your password " />
          {showPass ? (
            <IoEyeOutline
              onClick={() => setShowPass(!showPass)}
              className="absolute top-2 right-3 cursor-pointer"
            />
          ) : (
            <IoEyeOffOutline
              onClick={() => setShowPass(!showPass)}
              className="absolute top-2 right-3 cursor-pointer"
            />
          )}
        </div>
        <Description>
          Must be at least 8 characters with 1 uppercase and 1 number
        </Description>
        <FieldError />
      </TextField>
      <div className="flex gap-2">
        <Button className={"w-full rounded-xs"} type="submit">
          SignUp
        </Button>
      </div>
      <div className="flex items-center gap-2 justify-center">
        <hr className="w-[35%]" />
        <p className="text-gray-500">sign up with</p>
        <hr className="w-[35%]" />
      </div>
      <Button variant="outline" className={"w-full rounded-xs"}>
        <FcGoogle />
        Google singUp
      </Button>
    </form>
  );
};

export default SignUpForm;
