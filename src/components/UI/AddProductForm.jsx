"use client";
import {
  Button,
  Description,
  Dropdown,
  FieldError,
  Fieldset,
  Form,
  Input,
  Label,
  ListBox,
  TextArea,
  TextField,
  Select,
  toast,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import React from "react";

const AddProductForm = () => {
  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("form was started");

    const formData = new FormData(e.target);
    const newProduct = Object.fromEntries(formData.entries());
    console.log(newProduct);

    // console.log(e.target.title.value);

    const res = await fetch("http://localhost:8000/product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });

    if (res.ok) {
      router.push("/all-product");
      toast.success("Product added successfully!");
    }
  };
  return (
    <div className="border p-4 rounded-lg mt-10 max-w-150 mx-auto">
      <form onSubmit={onSubmit} className=" space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* title */}
          <div className="md:col-span-2">
            <TextField name="title" isRequired>
              <Label>Tile</Label>
              <Input
                placeholder="Enter product title"
                className="rounded-lg bg-slate-100"
              />
              <FieldError />
            </TextField>
          </div>

          {/* rating */}
          <TextField name="rating" isRequired>
            <Label>Rating</Label>
            <Input
              placeholder="Enter product rating"
              className="rounded-lg bg-slate-100"
            />
            <FieldError />
          </TextField>

          {/* warranty  */}
          <div>
            <Select
              name="warranty"
              isRequired
              className="w-full "
              placeholder="Select warranty"
            >
              <Label>Warranty</Label>
              <Select.Trigger className="rounded-lg bg-slate-100">
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>
              <Select.Popover>
                <ListBox>
                  <ListBox.Item id="1 Year" textValue="1 Year">
                    1 Year
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="2 Year" textValue="2 Year">
                    2 Year
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="3 Year" textValue="3 Year">
                    3 Year
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="4 Year" textValue="4 Year">
                    4 Year
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="5 Year" textValue="5 Year">
                    5 Year
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                </ListBox>
              </Select.Popover>
            </Select>
          </div>

          {/* quality  */}
          <div>
            <Select
              name="quality"
              isRequired
              className="w-full"
              placeholder="Select quality"
            >
              <Label>Quality</Label>
              <Select.Trigger className="rounded-lg bg-slate-100">
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>
              <Select.Popover>
                <ListBox>
                  <ListBox.Item id="Premium" textValue="Premium">
                    Premium
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="High" textValue="High">
                    High
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="Professional" textValue="Professional">
                    Professional
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="Excellent" textValue="Excellent">
                    Excellent
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                </ListBox>
              </Select.Popover>
            </Select>
          </div>

          {/* Price */}
          <TextField name="price" type="text" isRequired>
            <Label>Price (USD)</Label>
            <Input
              type="text"
              placeholder="1299"
              className="rounded-lg bg-slate-100"
            />
            <FieldError />
          </TextField>

          {/* availableQuantity */}
          <div className="md:col-span-2">
            <TextField name="availableQuantity" isRequired>
              <Label>Available Quantity</Label>
              <Input
                placeholder="Enter your available Quantity"
                className="rounded-lg bg-slate-100"
              />
              <FieldError />
            </TextField>
          </div>

          {/* Image URL - Removed preview */}
          <div className="md:col-span-2">
            <TextField name="image" isRequired>
              <Label>Image URL</Label>
              <Input
                type="url"
                placeholder="https://example.com/bali-paradise.jpg"
                className="rounded-lg bg-slate-100"
              />
              <FieldError />
            </TextField>
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <TextField name="description" isRequired>
              <Label>Description</Label>
              <TextArea
                placeholder="Describe the travel experience..."
                className="rounded-lg bg-slate-100"
              />
              <FieldError />
            </TextField>
          </div>
        </div>

        {/* Buttons */}

        <Button
          type="submit"
          variant="outline"
          className=" rounded-none w-full "
        >
          Edit
        </Button>
      </form>
    </div>
  );
};

export default AddProductForm;
