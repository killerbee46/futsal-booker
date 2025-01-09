import React from "react";
import { CardTypes } from "../Card.types";
import { Flex, Image, Space } from "antd";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import { Content } from "antd/es/layout/layout";
import { colors } from "@/theme/variables";

export const Card12 = ({
  title,
  content,
  image,
  bg_image,
  subtitle,
}: CardTypes) => {
  return (
    <Flex
      style={{
        background: `${colors.gradient_one}, url(${bg_image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="items-end aspect-square w-full max-w-[400px] rounded-xl !p-0"
    >
      <Space
        direction="vertical"
        size={"small"}
        className="w-[70%] p-5 pr-0 -mr-8"
      >
        <Title level={4} className="uppercase !font-bold">
          {title}
        </Title>
        <Paragraph className="!text-white line-clamp-3">{content}</Paragraph>
        <div className="w-full h-[2px] bg-slate-300"></div>
        <Paragraph className="!font-semibold !text-white">{subtitle}</Paragraph>
      </Space>
      <div className="-mr-16 flex items-end">
        <Image preview={false} src={image} alt="image" width={300} />
      </div>
    </Flex>
  );
};

export default Card12;
