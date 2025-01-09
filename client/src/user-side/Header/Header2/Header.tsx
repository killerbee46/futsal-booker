import { Flex, Space } from "antd";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";
import React from "react";
import { Header_types } from "../Header_types";
import MainContainer from "@/components/Maincontainer/Maincontainer";

export const Header2 = ({ title, image }: Header_types) => {
  return (
    <MainContainer
      wraperStyle={{
        background: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Flex className="justify-center items-center h-[250px] md:h-[300px] lg:[400px] xl:h-[450px] relative">
        <Title
          level={1}
          className="text-center !text-bold !text-white uppercase"
        >
          {title}
        </Title>
        <Space className="bg-primary px-3 py-2 md:px-5 md:py-4  absolute -bottom-[18px]  md:-bottom-[28px]">
          <Text className="text-white md:!text-lg font-semibold">
            Home ~ About Us
          </Text>
        </Space>
      </Flex>
    </MainContainer>
  );
};

export default Header2;
