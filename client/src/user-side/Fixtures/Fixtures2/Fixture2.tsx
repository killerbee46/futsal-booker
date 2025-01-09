import { Col, Row, Space, Image, Button } from "antd";
import React from "react";
import { Fixture_types } from "../Fixtues_types";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";
import Paragraph from "antd/es/typography/Paragraph";

export const Fixture2 = ({
  title,
  description,
  date,
  time,
  venue,
  player1,
  player2,
}: Fixture_types) => {
  return (
    <Space direction="vertical" className="w-full max-w-[400px]">
      <Space size={20}>
        <Image
          preview={false}
          className="rounded-full aspect-square object-cover"
          src={player1.image}
          width={90}
          alt="player_image"
        />
        <Image
          preview={false}
          className="rounded-full aspect-square object-cover"
          src={player2.image}
          width={90}
          alt="player_image"
        />
      </Space>
      <Text>{title}</Text>
      <Space direction="vertical">
        <Space size={10} className="justify-between items-center">
          <Title level={4}>{player1.name}</Title>
          <Text className="!text-primary !text-[24px] !font-semibold !w-[40px] block">
            VS
          </Text>
          <Title level={4}>{player2.name}</Title>
        </Space>
        <Paragraph className="line-clamp-3">{description}</Paragraph>
      </Space>
      <Button href="./" type="link">
        Match Details
      </Button>
    </Space>
  );
};

export default Fixture2;
