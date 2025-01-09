import MainContainer from "@/components/Maincontainer/Maincontainer";
import Card6 from "@/components/card/Card6_Coaches/Card6";
import { Button, Col, Flex, Row } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import { ArrowRight } from "lucide-react";
import React from "react";
import { TCard_data, TeamSection_Types } from "../TeamSection_Types";
import SectionTitle from "@/components/SectionTitle/SectionTitle";

export const Team1 = ({
  title,
  subtitle,
  bg_image,
  card_data,
  button,
}: TeamSection_Types) => {
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
      <Row justify={"center"} className="mb-[20px] md:mb-[40px] xl:mb-[60px]">
        <Col xs={24} sm={24} md={16} lg={16} xxl={16} xl={16}>
          <SectionTitle
            title={title}
            subtitle={subtitle}
            alignCenter={true}
            bgDark={true}
          />
        </Col>
      </Row>
      <Row
        className="mb-[20px] md:mb-[40px] xl:mb-[60px] py-3 [&>*:nth-child(odd)]:pb-[60px] [&>*:nth-child(even)]:pt-[60px] xs:[&>*:nth-child(odd)]:pb-[60px] xs:[&>*:nth-child(even)]:pt-[60px] md:[&>*:nth-child(odd)]:pb-[100px] md:[&>*:nth-child(even)]:pt-[100px]"
        gutter={[40, 0]}
        justify={"center"}
      >
        {card_data.map((item: TCard_data, index: number) => (
          <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} key={index}>
            {/* <Flex className="justify-between [&>*:nth-child(odd)]:pb-[100px] [&>*:nth-child(even)]:pt-[100px] gap-[20px] md:gap-[30px]"> */}
            <Card6
              image={item.image}
              title={item.title}
              content={item.content}
            />
            {/* </Flex> */}
          </Col>
        ))}
      </Row>
      <Row>
        <Col flex={1} className="flex justify-center">
          <Button
            type="primary"
            className="flex items-center"
            href={button.path}
            icon={<ArrowRight size={16} />}
            iconPosition="end"
          >
            {button.label}
          </Button>
        </Col>
      </Row>
    </MainContainer>
  );
};

export default Team1;
