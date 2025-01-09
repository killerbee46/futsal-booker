import { Flex, Space, Image } from "antd";
import React from "react";
import { Header_types } from "../Header_types";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import MainContainer from "@/components/Maincontainer/Maincontainer";

export const Header1 = ({ title, description, image }: Header_types) => {
  return (
    <MainContainer>
      <Flex
        className="justify-center md:justify-between gap-[40px] items-center h-[360px]  md:h-[500px] md:!bg-none"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Space direction="vertical" size={24}>
          <Title
            level={1}
            className="!text-white md:!text-primary text-center md:text-left"
          >
            {title}
          </Title>
          <Paragraph className="text-white md:text-input text-center md:text-left">
            {description}
          </Paragraph>
        </Space>
        <div className="hidden md:block">
          <Image
            className="aspect-square object-cover rounded-lg"
            src={image}
            height={400}
            alt="image"
            preview={false}
          />
        </div>
      </Flex>
    </MainContainer>
  );
};

export default Header1;
