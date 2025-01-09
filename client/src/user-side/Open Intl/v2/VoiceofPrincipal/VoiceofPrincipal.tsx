import { Flex, Image } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import React from "react";

export const VoiceofPrincipal = ({
  name,
  designation,
  content,
  images,
}: any) => {
  return (
    <Flex vertical className="gap-10 py-10 md:py-20">
      <Flex className="gap-[40px] items-center justify-center">
        {images.map((item: any, index: number) => (
          <Image
            key={index}
            src={item.image}
            alt="image"
            preview={false}
            width={"100%"}
          />
        ))}
      </Flex>
      <Flex vertical align="center" className="gap-5">
        <Flex vertical align="center">
          <Title level={5} className="text-xl text-center uppercase">
            {name}
          </Title>
          <Paragraph className="text-center !text-lg">{designation}</Paragraph>
        </Flex>
        <Paragraph className="text-center">
          <div dangerouslySetInnerHTML={{ __html: `<div>${content}</div>` }} />
        </Paragraph>
      </Flex>
    </Flex>
  );
};

export default VoiceofPrincipal;
