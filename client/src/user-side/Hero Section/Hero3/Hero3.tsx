import { Button, Col, Flex, Row, Space } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";
import { Herotypes } from "../Hero_types";
import Paragraph from "antd/es/typography/Paragraph";
import { ArrowRight } from "lucide-react";

export const Hero3 = ({
  titleText,
  bgImageUrl,
  subTitleText,
  buttonDetails,
}: Herotypes) => {
  return (
    <Flex
      className="h-screen flex-col items-center justify-center px-[5%] md:px-[10%]"
      style={{
        backgroundImage: `linear-gradient(to left,  rgba(0,0,0, 0.8), rgba(0,0,0, 0.8)), url(${bgImageUrl}) `,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Space direction="vertical" align="center" size={32}>
        <Title level={1} className="!text-white text-center !font-bold">
          {titleText}
        </Title>
        <Paragraph className="text-center text-white">{subTitleText}</Paragraph>
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
                className={`flex items-center gap-1 ${item.type === "primary" ? "bg-primary" : ""} !text-white`}
              >
                {item.text}
              </Button>
            ))}
          </Space>
        )}
      </Space>
    </Flex>
  );
};

export default Hero3;
