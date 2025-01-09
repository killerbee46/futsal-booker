import { Card, Image, Typography } from "antd";
import React from "react";
import { CardTypes } from "../Card.types";

const Card1 = ({ title, content, image, width = "100%" }: CardTypes) => {
  return (
    <div className="relative">
      <Card
        style={{ borderRadius: 40, width: width }}
        className="group/card text-center z-index:1 px-2 hover:absolute hover:z-50 cursor-pointer shadow"
      >
        {title && <Typography.Title level={3}>{title}</Typography.Title>}
        {content && (
          <p className="text-center text-14 line-clamp-4 group-hover/card:line-clamp-none group-hover/card:text-left leading-7">
            {content}
          </p>
        )}
        {image && image !== "" && (
          <Image
            preview={false}
            style={{ borderRadius: 20, width: "100%" }}
            className="mt-2 aspect-square"
            alt="card_img"
            src={image}
          />
        )}
      </Card>
    </div>
  );
};

export default Card1;
