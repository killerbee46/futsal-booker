import { Button, Flex, Space } from "antd";
import React from "react";
import { CardTypes } from "../Card.types";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";

export const Card10 = ({
  image,
  title,
  content,
  buttonLabel,
  buttonPath,
}: CardTypes) => {
  return (
    <Flex className="gap-[20px] lg:gap-[40px]">
      <div
        className="aspect-square max-w-[300px] w-full rounded-xl flex justify-end items-center"
        style={{
          background: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-0 h-0 border-t-[15px] border-t-transparent border-r-[20px] border-r-white border-b-[15px] border-b-transparent"></div>
      </div>
      <Space
        direction="vertical"
        size={"middle"}
        className="aspect-square max-w-[300px] w-full py-4"
      >
        <Title level={3} className="!font-bold line-clamp-2">
          <div dangerouslySetInnerHTML={{ __html: title }} />
        </Title>
        <div className="w-[60px] h-[3px] md:h-[4px] bg-primary"></div>
        <Paragraph className="line-clamp-4">{content}</Paragraph>
        <Button href={buttonPath} type="primary">
          {buttonLabel}
        </Button>
      </Space>
    </Flex>
  );
};

export default Card10;
