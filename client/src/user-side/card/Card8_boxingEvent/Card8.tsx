import { Button, Divider, Flex, Image, Space } from "antd";
import React from "react";
import { CardTypes } from "../Card.types";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import { ArrowRight } from "lucide-react";
import MainContainer from "@/components/Maincontainer/Maincontainer";

export const Card8 = ({
  image,
  title,
  content,
  date,
  location,
  buttonLabel,
  buttonPath,
}: CardTypes) => {
  return (
    <Flex className="flex-col items-center max-w-[400px] w-full">
      <Image
        src={image}
        alt="image"
        className="aspect-[4/3] object-cover rounded-xl w-full"
        preview={false}
      />
      <Space
        direction="vertical"
        size={16}
        className="p-4 px-6 rounded-xl shadow-lg w-[90%] bg-white -mt-20 z-10 relative"
      >
        <Flex className="w-[60px] h-[80px] rounded-full bg-primary text-center font-semibold items-center justify-center text-white text-xl absolute right-6 -top-10">
          {date}
        </Flex>
        <Space direction="vertical" size={0} className="w-full">
          <Paragraph>{location}</Paragraph>
          <div className="w-full h-[1px] bg-slate-300"></div>
        </Space>
        <Title level={5} className="!font-bold line-clamp-2">
          {title}
        </Title>
        <Paragraph className="line-clamp-3">{content}</Paragraph>
        <Button
          href={buttonPath}
          type="text"
          icon={<ArrowRight size={16} className="stroke-primary" />}
          iconPosition="end"
          className="flex items-center !text-primary !p-0"
        >
          {buttonLabel}
        </Button>
      </Space>
    </Flex>
  );
};

export default Card8;
