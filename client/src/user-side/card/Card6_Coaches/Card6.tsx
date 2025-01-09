import { Flex, Image, Space } from "antd";
import React from "react";
import { CardTypes } from "../Card.types";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";

export const Card6 = ({ image, title, content }: CardTypes) => {
  return (
    <Flex className="flex-col items-center gap-4">
      <div className="max-w-[255px] w-full aspect-[255/382] overflow-hidden rounded-full">
        <Image
          preview={false}
          src={image}
          height={382}
          alt="coach"
          className=" object-cover aspect-auto"
        />
      </div>
      <Space direction="vertical" size={0} className="items-center ">
        <Title level={5} className="text-center !text-white line-clamp-2">
          {title}
        </Title>
        <Paragraph className="text-center !text-white">{content}</Paragraph>
      </Space>
    </Flex>
  );
};

export default Card6;
