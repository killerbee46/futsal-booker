import { Col, Flex, Row, Space, Image } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";
import { Feature_Types, Feature_card } from "../Feature_types";
import Paragraph from "antd/es/typography/Paragraph";
import Text from "antd/es/typography/Text";
import MainContainer from "@/components/Maincontainer/Maincontainer";

export const Feature1 = ({
  title,
  subtitle,
  description,
  feature_card,
}: Feature_Types) => {
  return (
    <MainContainer>
      <Row justify={"center"}>
        <Col sm={24} md={18} xl={16} xxl={16} className="flex justify-center">
          <Space
            direction="vertical"
            className="w-full items-start md:items-center"
          >
            <Title className="!text-primary md:text-center" level={5}>
              {title}
            </Title>
            <Title className="md:text-center !font-bold" level={2}>
              {subtitle}
            </Title>
            <Paragraph className="md:!text-center md:text-xl">
              {description}
            </Paragraph>
          </Space>
        </Col>
      </Row>
      <Row gutter={[40, 40]} className="py-[40px]" justify={"center"}>
        {feature_card.map((item: Feature_card, index: number) => (
          <Col
            key={index}
            xs={24}
            sm={24}
            md={12}
            lg={10}
            xl={10}
            xxl={10}
            className="flex justify-center"
          >
            <Space direction="vertical" size={20} className=" w-full">
              {item.icon && (
                <div className="flex w-[60px] h-[60px] bg-primary justify-center items-center rounded-md">
                  <Image src={item.icon} width={32} alt="" />
                </div>
              )}
              <Space direction="vertical" size={0}>
                <Title level={4}>{item.title}</Title>
                <Paragraph>{item.description}</Paragraph>
              </Space>
            </Space>
          </Col>
        ))}
      </Row>
    </MainContainer>
  );
};

export default Feature1;
