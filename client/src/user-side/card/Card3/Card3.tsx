import { Button, Card, Flex, Image, Space, Typography } from "antd";
import React from "react";
import { CardType } from "../../CardDesign/Card.types";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";

const { Meta } = Card;

export const Card3 = ({
  title,
  subTitle,
  date,
  buttonDetails,
  imageUrl,
}: CardType) => {
  return (
    <Card
      hoverable
      style={{ width: 300 }}
      cover={
        <Image
          className="aspect-video object-cover"
          preview={false}
          width={"100%"}
          alt="example"
          src={imageUrl}
        />
      }
    >
      <Space direction="vertical" size={10} className="w-full">
        <Text type="secondary">{date}</Text>

        <Title className="w-full !mt-0 font-medium line-clamp-2" level={5}>
          {title}
        </Title>

        <Button type="primary" className="w-full">
          Read More
        </Button>
      </Space>
    </Card>
  );
};

export default Card3;
