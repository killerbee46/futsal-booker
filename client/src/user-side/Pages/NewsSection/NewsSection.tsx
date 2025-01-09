import MainContainer from "@/components/Maincontainer/Maincontainer";
import React from "react";
import { News_section_types, TCardData } from "./News_section_types";
import { Col, Flex, Image, Row } from "antd";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";

export const NewsSection = ({ title, bg_image, data }: News_section_types) => {
  return (
    <MainContainer
      wraperClassName="py-10 md:py-20"
      wraperStyle={{
        background: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(${bg_image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Row className="mb-9 md:mb-14">
        <Col flex={1}>
          <Title level={2} className="!font-bold uppercase text-center">
            <div dangerouslySetInnerHTML={{ __html: title }} />
          </Title>
        </Col>
      </Row>
      <Row gutter={40}>
        {data.map((item: TCardData, index: number) => (
          <Col key={index} sm={24} md={12} lg={8} xl={8} xxl={8}>
            <Flex className="w-full max-w-[500px] flex-col gap-[20px]">
              <Flex className="justify-between pr-3">
                <Image
                  preview={false}
                  src={item.image}
                  width={100}
                  alt="image"
                  className="aspect-square object-cover rounded-full"
                />
                <Title className="!font-bold self-end !text-6xl !text-gray-300">
                  {item.index}
                </Title>
              </Flex>

              <div className="w-[120px] h-[3px] bg-red-600"></div>
              <Title level={4} className="!font-bold line-clamp-2">
                {item.title}
              </Title>
              <Paragraph className="text-lg line-clamp-3">
                {item.content}
              </Paragraph>
              <Paragraph className="text-semibold !text-xl">
                {item.date}
              </Paragraph>
            </Flex>
          </Col>
        ))}
      </Row>
    </MainContainer>
  );
};

export default NewsSection;
