import { CTATypes } from "../../../../../components/cta/CTA.types";
import MainContainer from "../../../../../components/Maincontainer/Maincontainer";
import { Button, Flex } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import React from "react";

export const CTA1 = ({
  title,
  description,
  button_text,
  button_path,
  bg_image,
}: CTATypes) => {
  const hasBgImage = bg_image && bg_image !== ""
  const style =  hasBgImage ? {
    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bg_image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  } :
  {
    background: 'white',
  }
  const textcolor = hasBgImage ? 'white' : 'black'
  return (
    <MainContainer
      wraperClassName="py-10 md:py-20"
      wraperStyle={style}
    >
      <Flex vertical className="gap-4 items-center">
        <Title
          level={2}
          className={`text-center !text-${textcolor} !font-bold uppercase border-b-4 border-primary pb-5 md:pb:8 lg:pb-10`}
        >
          {title}
        </Title>
        <Paragraph className={`text-center !text-${textcolor}`}>{description}</Paragraph>
        <Button href={button_path} size="large" className="h-auto capitalize bg-primary text-white border-2 !border-primary hover:!bg-white hover:!text-primary py-3 px-8 font-semibold">
          {button_text}
        </Button>
      </Flex>
    </MainContainer>
  );
};

export default CTA1;
