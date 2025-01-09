import { Col, Row, Space, Image } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";
import { Feature_Types, Feature_card } from "../Feature_types";
import Paragraph from "antd/es/typography/Paragraph";
import MainContainer from "../../../components/Maincontainer/Maincontainer";
import SectionTitle from "../../Open Intl/v2/SectionTitle/SectionTitle";
import getImageUrl from "../../../utilFunctions/getImageUrl";

export const Feature2 = ({
  title,
  subtitle,
  description,
  feature_card,
}: Feature_Types) => {
  return (
    <div className="my-10 !bg-dark w-full h-full">
      <MainContainer className="my-4 md:my-6 lg:my-10">
          <Space
            direction="vertical"
            className="w-full"
          >
            <SectionTitle title={title} subtitle={subtitle} buttonLabel="View Services" buttonPath="/services" />
            <Paragraph className="md:!text-center md:text-xl">
              {description}
            </Paragraph>
          </Space>
      <Row gutter={[40, 40]} className="py-[40px]" justify={"center"}>
        {feature_card?.map((item: Feature_card, index: number) => (
          <Col
            key={index}
            xs={24}
            sm={12}
            md={12}
            lg={8}
            xl={8}
            xxl={10}
            className="flex justify-center "
          >
            <Space
              direction="vertical"
              size={20}
              className=" w-full border border-slate-100 rounded-xl p-[20px] items-center text-center"
            >
              {item?.icon && (
                <div className="flex w-[60px] h-[60px] bg-primary justify-center items-center rounded-md"
                style={{
                  background:`url(${item?.icon})`,
                  objectFit:'cover'
                }}
                />
              )}
              {item?.image && (
                <div className="flex w-full aspect-[7/3] bg-primary justify-center items-center rounded-md"
                style={{
                  background:`url(${getImageUrl(item?.image?.data?.attributes)})`,
                  objectFit:'cover'
                }}
                />
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
    </div>
  );
};

export default Feature2;
