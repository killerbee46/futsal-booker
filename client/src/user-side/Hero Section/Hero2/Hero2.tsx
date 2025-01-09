import React from "react";
import { Row, Col, Button, Flex, Typography, Space, Image } from "antd";
import { Herotypes } from "../Hero_types";

export const Hero2 = ({ bgImageUrl, titleText }: Herotypes) => {
  return (
    <Row className="h-screen">
      <Col
        flex={1}
        style={{
          backgroundImage: `linear-gradient(to left,  rgba(0,0,0, 0), rgba(0,0,0, 0.7)), url(${bgImageUrl}) `,
        }}
        className="bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-start items-center px-40"
      >
        <div className="w-1/2">
          <Typography.Title className="!text-white">
            {titleText}
          </Typography.Title>
        </div>
      </Col>
    </Row>
  );
};

export default Hero2;
