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
} from "@heroui/react";
import React from "react";

const AddProductForm = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("form was started");

    const formData = new FormData(e.target);
    const newProduct = Object.fromEntries(formData.entries());
    console.log(newProduct);

    // console.log(e.target.title.value);
  };
  return (
    <div className="border p-4 rounded-lg mt-10 max-w-150 mx-auto">
      <Form onSubmit={onSubmit}>
        {/* <Fieldset className="w-full"> */}
        <Fieldset.Group>
          {/* title */}
          <TextField
            isRequired
            name="title"
            validate={(value) => {
              if (value.length < 3) {
                return "Title must be at least 3 characters";
              }
              return null;
            }}
          >
            <Label>Title</Label>
            <Input placeholder="Product title" variant="secondary" />
            <FieldError />
          </TextField>

          {/* image */}
          <TextField isRequired name="image">
            <Label>Image</Label>
            <Input placeholder="Product ImageUri" variant="secondary" />
            <FieldError />
          </TextField>

          <div className="grid grid-cols-2 gap-3.5">
            {/* warranty section */}
            <div>
              <Select
                name="warranty"
                isRequired
                className="w-full"
                placeholder="Select warranty"
              >
                <Label>Warranty</Label>
                <Select.Trigger className="rounded-2xl">
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
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>

            {/* quality */}
            <div>
              <Select
                name="quality"
                isRequired
                className="w-full"
                placeholder="Select quality"
              >
                <Label>Quality</Label>
                <Select.Trigger className="rounded-2xl">
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Popover>
                  <ListBox>
                    <ListBox.Item id="Premium" textValue="Premium">
                      Premium
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
                    <ListBox.Item id="High" textValue="High">
                      High
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>
          </div>
          {/* rating */}
          <TextField isRequired name="rating">
            <Label>Rating</Label>
            <Input placeholder="Product rating" variant="secondary" />
            <FieldError />
          </TextField>

          {/* availableQuantity */}
          <TextField isRequired name="availableQuantity">
            <Label>Available Quantity</Label>
            <Input
              placeholder="Product available quantity"
              variant="secondary"
            />
            <FieldError />
          </TextField>

          {/* price */}
          <TextField isRequired name="price">
            <Label>Price</Label>
            <Input placeholder="Product price" variant="secondary" />
            <FieldError />
          </TextField>

          {/* description */}
          <TextField
            isRequired
            name="description"
            validate={(value) => {
              if (value.length < 10) {
                return "description must be at least 10 characters";
              }
              return null;
            }}
          >
            <Label>Description</Label>
            <TextArea
              placeholder="Tell us about your products.."
              variant="secondary"
            />
            <Description>Minimum 10 characters</Description>
            <FieldError />
          </TextField>
        </Fieldset.Group>
        <Fieldset.Actions>
          <Button className={"w-full rounded-lg"} type="submit">
            Add Product
          </Button>
        </Fieldset.Actions>
        {/* </Fieldset> */}
      </Form>
    </div>
  );
};

export default AddProductForm;
