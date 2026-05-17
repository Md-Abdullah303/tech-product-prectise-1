"use client";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import React from "react";
import { FcGoogle } from "react-icons/fc";

const SignInForm = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData.entries());
    console.log(userData);

    const { data, error } = await authClient.signIn.email({
      email: userData.email, // required
      password: userData.password, // required
      callbackURL: "/",
    });

    if (data) {
      // router.push("/");
      // router.refresh("/");
      toast.success("Sign in successfully");
    } else if (error) {
      toast.error(error?.message);
    }
  };

  return (
    <form
      className="flex mt-10 w-120 border p-3 rounded-lg flex-col gap-4"
      onSubmit={onSubmit}
    >
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

      {/* password */}
      <TextField
        isRequired
        minLength={8}
        name="password"
        type="password"
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
        <Input placeholder="Enter your password" />
        <Description>
          Must be at least 8 characters with 1 uppercase and 1 number
        </Description>
        <FieldError />
      </TextField>
      <div className="flex gap-2">
        <Button className={"w-full rounded-xs"} type="submit">
          SignIn
        </Button>
        {/* <Button type="reset" variant="secondary">
          Reset
        </Button> */}
      </div>
      <div className="flex items-center gap-2 justify-center">
        <hr className="w-[35%]" />
        <p className="text-gray-500">sign in with</p>
        <hr className="w-[35%]" />
      </div>
      <Button variant="outline" className={"w-full rounded-xs"}>
        <FcGoogle />
        Google singIn
      </Button>
    </form>
  );
};

export default SignInForm;
