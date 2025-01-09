import React from "react";
import { Row, Col, Button, Flex, Typography, Space, Image } from "antd";
import { Herotypes } from "../Hero_types";
import { ArrowRight } from "lucide-react";

export const Hero1 = ({
  heroImageUrl,
  titleText,
  subTitleText,
  buttonDetails,
}: Herotypes) => {
  return (
    <Row gutter={[40, 40]} align={"middle"}>
      <Col
        xs={24}
        sm={24}
        md={12}
        lg={12}
        // style={{ '--image-url': `url(${heroImageUrl})` }}
        // className={"bg-[url('" + heroImageUrl + "')]"}
      >
        <Space
          direction="vertical"
          size={30}
          className="items-center md:items-start"
        >
          <Typography.Title className=" !text-primary text-center md:text-left">
            {titleText}
          </Typography.Title>
          <Typography.Paragraph className="text-center md:text-left">
            {subTitleText}
          </Typography.Paragraph>
          {buttonDetails?.length !== 0 && (
            <Space size="middle">
              {buttonDetails?.map((item: any, index: number) => (
                <Button
                  key={index}
                  icon={item.hasIcon ? <ArrowRight size={16} /> : ""}
                  iconPosition={"end"}
                  type={item.type}
                  size="large"
                  href={item.href}
                  className={`flex items-center gap-1 ${item.type === "primary" ? "bg-primary" : ""}`}
                >
                  {item.text}
                </Button>
              ))}
            </Space>
          )}
        </Space>
      </Col>
      <Col
        xs={24}
        sm={24}
        md={12}
        lg={12}
        className="md:flex md:justify-center md:items-start md:h-screen md:overflow-hidden md:relative absolute left-0 right-0 top-0 -z-10"
      >
        <Image
          preview={false}
          src={heroImageUrl}
          width={"100%"}
          alt="A lady smilling at you!"
          className=""
        />
      </Col>
    </Row>
  );
};

export default Hero1;
