import React from "react";
import { CTATypes } from "../CTA.types";
import { Button, Col, Flex, Row, Space, Typography, Image } from "antd";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import { ArrowRight } from "lucide-react";
import MainContainer from "@/components/Maincontainer/Maincontainer";

export const CTA4 = ({
  title,
  description,
  button_text,
  image_url,
  bg_image,
  cta_action,
}: CTATypes) => {
  return (
    <MainContainer
      wraperClassName=""
      wraperStyle={{
        background: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url(${bg_image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Row
        align={"middle"}
        gutter={[60, 40]}
        className="h-auto md:h-screen flex-col-reverse  md:flex-row pt-[100px] md:pt-0"
      >
        <Col
          sm={24}
          md={10}
          lg={10}
          xl={10}
          xxl={10}
          className="flex h-full items-end"
        >
          <Image
            className="object-cover rounded-t-3xl md:rounded-t-full !h-[400px] md:!h-[450px] xl:!h-[600px] xxl:!h-[700px]"
            preview={false}
            src={image_url}
            alt="//"
          />
        </Col>
        <Col sm={24} md={14} lg={14} xl={14} xxl={14}>
          <Space direction="vertical" size={20}>
            <Title level={1} className="!font-bold uppercase !text-primary">
              {title}
            </Title>
            <Paragraph className="text-white">{description}</Paragraph>
            <Button
              type="primary"
              className="flex items-center"
              icon={<ArrowRight size={16} />}
              iconPosition="end"
            >
              {button_text}
            </Button>
          </Space>
        </Col>
      </Row>
    </MainContainer>
  );
};

export default CTA4;
