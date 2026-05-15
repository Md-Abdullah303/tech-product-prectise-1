"use client";

import { Envelope } from "@gravity-ui/icons";
import {
  Button,
  FieldError,
  Input,
  Select,
  Label,
  ListBox,
  Modal,
  Surface,
  TextArea,
  TextField,
  toast,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";

export function EditModalForm({ product }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

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
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const editedData = Object.fromEntries(formData.entries());
    console.log(editedData);

    const res = await fetch(`http://localhost:8000/product/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(editedData),
    });
    const data = await res.json();
    console.log(data);
    if (data.modifiedCount > 0) {
      router.refresh();
      toast.success("Updated was successful");
      setOpen(false);
    }
  };

  return (
    <Modal open={open} onOpenChange={setOpen}>
      <Button
        onPress={() => setOpen(true)}
        className={"rounded-xs"}
        variant="outline"
      >
        <FaEdit />
        Edit
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading>Edit Product</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={onSubmit} className=" space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* title */}
                    <div className="md:col-span-2">
                      <TextField defaultValue={title} name="title" isRequired>
                        <Label>Tile</Label>
                        <Input
                          placeholder="Enter product title"
                          className="rounded-2xl"
                        />
                        <FieldError />
                      </TextField>
                    </div>

                    {/* rating */}
                    <TextField defaultValue={rating} name="rating" isRequired>
                      <Label>Rating</Label>
                      <Input
                        placeholder="Enter product rating"
                        className="rounded-2xl"
                      />
                      <FieldError />
                    </TextField>

                    {/* warranty  */}
                    <div>
                      <Select
                        defaultValue={warranty}
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
                        defaultValue={quality}
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
                            <ListBox.Item id="High" textValue="High">
                              High
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item
                              id="Professional"
                              textValue="Professional"
                            >
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
                    <TextField
                      name="price"
                      defaultValue={price}
                      type="text"
                      isRequired
                    >
                      <Label>Price (USD)</Label>
                      <Input
                        type="text"
                        placeholder="1299"
                        className="rounded-2xl"
                      />
                      <FieldError />
                    </TextField>

                    {/* availableQuantity */}
                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={availableQuantity}
                        name="availableQuantity"
                        isRequired
                      >
                        <Label>Available Quantity</Label>
                        <Input
                          placeholder="Enter your available Quantity"
                          className="rounded-2xl"
                        />
                        <FieldError />
                      </TextField>
                    </div>

                    {/* Image URL - Removed preview */}
                    <div className="md:col-span-2">
                      <TextField defaultValue={image} name="image" isRequired>
                        <Label>Image URL</Label>
                        <Input
                          type="url"
                          placeholder="https://example.com/bali-paradise.jpg"
                          className="rounded-2xl"
                        />
                        <FieldError />
                      </TextField>
                    </div>

                    {/* Description */}
                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={description}
                        name="description"
                        isRequired
                      >
                        <Label>Description</Label>
                        <TextArea
                          placeholder="Describe the travel experience..."
                          className="rounded-3xl"
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
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
