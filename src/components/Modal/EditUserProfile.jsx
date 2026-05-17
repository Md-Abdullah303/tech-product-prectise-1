"use client";
import { authClient } from "@/lib/auth-client";
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
  Description,
} from "@heroui/react";
import { error } from "better-auth/api";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { toast } from "react-toastify";

const EditUserProfile = ({ userData }) => {
  const router = useRouter();
  const [showPass, setShowPass] = useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updatedUserData = Object.fromEntries(formData.entries());
    console.log(updatedUserData);

    const res = await authClient.updateUser({
      name: updatedUserData.name,
      image: updatedUserData.image,
    });

    if (res.data) {
      router.refresh();
      toast("Profile was updated.");
    } else if (error) {
      toast.error(error);
    }
  };

  return (
    <div>
      <Modal>
        <Button className={"rounded-lg"}>
          <FaEdit />
          Edit your Profile
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
                  <form
                    className=" p-3 rounded-lg flex-col space-y-3.5 gap-4"
                    onSubmit={onSubmit}
                  >
                    {/* name */}
                    <TextField
                      defaultValue={userData?.name}
                      className="w-full "
                      name="name"
                      type="text"
                    >
                      <Label>Name</Label>
                      <Input placeholder="Enter your name" />
                    </TextField>

                    {/* image */}
                    <TextField
                      defaultValue={userData?.image}
                      className="w-full "
                      name="image"
                      type="text"
                    >
                      <Label>Image URI</Label>
                      <Input placeholder="Enter your Image URI" />
                    </TextField>

                    <div className="flex gap-2">
                      <Button className={"w-full rounded-xs"} type="submit">
                        Save Edit
                      </Button>
                    </div>
                  </form>
                </Surface>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default EditUserProfile;
