import { Flex, Image, Space } from "antd";
import React from "react";
import { CardTypes } from "../Card.types";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";

export const Card5 = ({ image, content, title }: CardTypes) => {
  return (
    <div className="slick-slider">
      <Flex className="flex-col items-center bg-white w-full max-w-[500px] rounded-lg p-5 shadow-lg">
        <Image
          preview={false}
          src={image}
          alt="image"
          className="!h-[100px] object-cover aspect-square rounded-md"
        />
        <Title level={4} className="text-center line-clamp-2">
          {title}
        </Title>
        <Paragraph className="text-center line-clamp-3 xl:line-clamp-4">
          {content}
        </Paragraph>
      </Flex>
    </div>
  );
};

export default Card5;
