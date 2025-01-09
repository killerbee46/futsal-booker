import { CTATypes } from "../CTA.types";
import MainContainer from "../../../../components/Maincontainer/Maincontainer";
import { Button, Flex } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import React from "react";

const CTA1 = ({
  title,
  description,
  button_text,
  button_path,
  bg_image,
}: CTATypes) => {
  return (
    <MainContainer
      wraperClassName="py-10 md:py-20"
      wraperStyle={{
        background: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url(${bg_image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Flex vertical className="gap-4 items-center">
        <Title level={3} className="text-center !text-[#1e73be]">
          {title}
        </Title>
        <Paragraph className="text-center !text-white">{description}</Paragraph>
        <Button href={button_path}>{button_text}</Button>
      </Flex>
    </MainContainer>
  );
};

export default CTA1;
