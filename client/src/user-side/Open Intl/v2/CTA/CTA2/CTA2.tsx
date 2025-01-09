import { CTATypes } from "@/components/cta/CTA.types";
import { Flex, Image } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import React from "react";

export const CTA2 = ({
  title,
  description,
  image_url,
  imgOnLeft,
}: CTATypes) => {
  return (
    <Flex
      className={`items-center gap-8 ${imgOnLeft ? "flex-row-reverse" : "flex"}`}
    >
      <Flex vertical className="gap-4">
        <Title
          level={2}
          className="text-left !text-[#1e73be] !font-bold uppercase"
        >
          {title}
        </Title>
        <Paragraph className="text-left">{description}</Paragraph>
      </Flex>
      <Image src={image_url} alt="image" width={"100%"} />
    </Flex>
  );
};

export default CTA2;
