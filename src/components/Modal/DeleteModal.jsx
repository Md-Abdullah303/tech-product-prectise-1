"use client";

import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { FaTrashCan } from "react-icons/fa6";
import { toast } from "react-toastify";

export function DeleteModal({ product }) {
  const router = useRouter();
  const handleDelete = async () => {
    const res = await fetch(`http://localhost:8000/product/${product._id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });

    if (res.ok) {
      router.push("/all-product");
      toast.info(product.title + " are Deleted");
    }
  };

  return (
    <AlertDialog>
      <Button className={"rounded-xs"} variant="danger">
        <FaTrashCan />
        Delete
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete product permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{product.title}</strong>{" "}
                and all of its data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDelete} slot="close" variant="danger">
                Delete Project
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
