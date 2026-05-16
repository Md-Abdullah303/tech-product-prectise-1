import { Button, Card } from "@heroui/react";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="w-[90%] md:container mx-auto my-20 ">
      <div className="grid grid-cols-3 gap-6">
        {/* Right Column */}
        <Card className="col-span-1 h-150 min-h-[200px] overflow-hidden rounded-3xl ">
          {/* Background image */}
          <Image
            alt="NEO Home Robot"
            width={8000}
            height={4000}
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
            src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/neo2.jpeg"
          />
          {/* Header */}
          <Card.Header className="z-10 text-white">
            <Card.Title className="text-xs font-semibold tracking-wide text-black/70">
              NEO
            </Card.Title>
            <Card.Description className="text-sm leading-5 font-medium text-black/50">
              Home Robot
            </Card.Description>
          </Card.Header>
          {/* Footer */}
          <Card.Footer className="z-10 mt-auto flex items-center justify-between">
            <div>
              <div className="text-sm font-medium text-black">
                Available soon
              </div>
              <div className="text-xs text-black/60">Get notified</div>
            </div>
            <Button
              className="bg-white text-black"
              size="sm"
              variant="tertiary"
            >
              Notify me
            </Button>
          </Card.Footer>
        </Card>
      </div>
    </div>
  );
};

export default page;
