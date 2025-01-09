import { Avatar, Col, Divider, Row, Space } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";
import { Testimonial_Type } from "../Testimonial_Type";
import { Quote } from "lucide-react";
import Paragraph from "antd/es/typography/Paragraph";

export const Testimonial1 = ({
  image_url,
  user_name,
  designation,
  content,
}: Testimonial_Type) => {
  return (
    <>
      <Row className="px-0 lg:px-[16%] my-[60px]" gutter={[40, 40]}>
        <Col
          xs={24}
          sm={24}
          lg={8}
          xl={8}
          xxl={8}
          className="flex justify-center m-auto"
        >
          <Avatar
            size={180}
            src={image_url}
            className="outline outline-[5px] outline-primary"
          />
        </Col>
        <Col
          xs={24}
          sm={24}
          lg={16}
          xl={16}
          xxl={16}
          className="flex flex-col justify-center lg:justify-start align-middle"
        >
          <Space direction="vertical" size={"small"}>
            <Space
              size={"middle"}
              className="justify-center lg:justify-start w-full"
            >
              <Quote size={40} className="rotate-180 stroke-primary" />
              <Quote size={40} className=" stroke-primary" />
            </Space>

            <Paragraph className="xl:text-lg text-center lg:text-left font-medium">
              {content}
            </Paragraph>
            <div>
              <Title level={5} className="!mb-0 text-center lg:text-left">
                {user_name}
              </Title>
              <span className="text-center block lg:text-left">
                {designation}
              </span>
            </div>
          </Space>
        </Col>
      </Row>
    </>
  );
};

export default Testimonial1;
