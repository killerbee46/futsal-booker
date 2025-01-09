import { Button, Card, Image, Typography } from "antd";
import React from "react";
import { CardTypes } from "../Card.types";

const Card2 = ({
  width,
  image,
  title,
  content,
  buttonLabel = "Learn More",
  buttonPath = "/",
}: CardTypes) => {
  return (
    <Card
      style={{ borderRadius: 20, width: width }}
      cover={
        image ? (
          <Image
            preview={false}
            src={image}
            className="aspect-video"
            alt="card_img"
          />
        ) : null
      }
      className="text-center shadow overflow-hidden"
    >
      {title && (
        <Typography.Title level={3} className="font-poppins !font-bold my-2">
          {title}
        </Typography.Title>
      )}
      {content && (
        <Typography.Title level={5} className="!font-normal my-2">
          {content}
        </Typography.Title>
      )}
      <Typography.Link href={buttonPath} className="mt-6">
        <button
          onFocus={(e) => e.preventDefault()}
          className="bg-black text-white border-2 hover:text-black hover:bg-white rounded-full hover:border-black w-full mt-8 text-base font-medium uppercase py-3 h-auto tracking-wide cursor-pointer"
        >
          {buttonLabel}
        </button>
      </Typography.Link>
    </Card>
  );
};

export default Card2;
