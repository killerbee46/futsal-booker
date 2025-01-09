import React from "react";
import { CardTypes } from "../Card.types";
import { Flex, Image } from "antd";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";

const Card7 = ({ image, title, content, date }: CardTypes) => {
  return (
    <Flex className="w-full max-w-[500px] flex-col gap-[20px]">
      <Image
        src={image}
        width={100}
        alt="image"
        className="aspect-square object-cover rounded-full"
      />
      <div className="w-[92px] h-[3px] bg-red-600"></div>
      <Title level={4} className="!font-bold line-clamp-2">
        {title}
      </Title>
      <Paragraph className="text-lg line-clamp-3">{content}</Paragraph>
      <Paragraph className="text-semibold !text-xl">{date}</Paragraph>
    </Flex>
  );
};

export default Card7;
