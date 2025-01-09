import { Flex, Image, Space } from "antd";
import React from "react";
import { CardTypes } from "../Card.types";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import Text from "antd/es/typography/Text";
import { Eye, Heart, MessageSquare } from "lucide-react";

export const CardBlog = ({ title, content, image }: CardTypes) => {
  return (
    <Flex className="flex-col gap-2 md:gap-4 max-w-[400px] w-full bg-white rounded-xl shadow-lg overflow-hidden">
      <Image
        preview={false}
        src={image}
        alt="image"
        width={"100%"}
        className="aspect-video"
      />
      <Flex className="flex-col gap-2 md:gap-4 p-4">
        <Title level={5} className="!font-bold line-clamp-2 uppercase">
          {title}
        </Title>
        <Paragraph className="line-clamp-3">{content}</Paragraph>
        <Space size={"large"}>
          <Space>
            <Heart size={24} className="stroke-primary hover:fill-primary" />
            <Text className="font-medium">100</Text>
          </Space>
          <Space>
            <MessageSquare
              size={24}
              className="stroke-primary hover:fill-primary"
            />
            <Text className="font-medium">100</Text>
          </Space>
          <Space>
            <Eye size={24} className="stroke-primary hover:fill-primary" />
            <Text className="font-medium">100</Text>
          </Space>
        </Space>
      </Flex>
    </Flex>
  );
};

export default CardBlog;
