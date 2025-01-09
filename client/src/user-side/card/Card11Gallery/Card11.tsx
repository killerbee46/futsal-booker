import { Flex } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";
import { CardTypes } from "../Card.types";
import Paragraph from "antd/es/typography/Paragraph";

export const Card11 = ({ title, date, image }: CardTypes) => {
  return (
    <Flex
      style={{
        background: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)), url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="flex-col justify-end items-start p-5 aspect-[4/3] w-full max-w-[400px] rounded"
    >
      <Title level={3} className="!font-bold line-clamp-3 !text-white">
        {title}
      </Title>
      <Paragraph className="text-gray-100">Published on: {date}</Paragraph>
    </Flex>
  );
};

export default Card11;
