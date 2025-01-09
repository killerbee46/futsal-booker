import React from "react";
import { Divider, Flex, Space } from "antd";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";
import { Details_Card_Types, TDetails } from "../Details_card_types";

export const ExCard = ({ details }: Details_Card_Types) => {
  return (
    <Flex className="py-8 px-10 items-center justify-center rounded-xl shadow-xl h-auto w-fit [&>*:first-child]:border-none">
      {details.map((item: TDetails, index: number) => (
        <Space
          key={index}
          direction="vertical"
          size={"small"}
          className="items-center px-[60px] border-l border-l-slate-300"
        >
          <Title
            level={2}
            className="!font-bold !mb-0 !text-center !text-primary"
          >
            {item.value}
          </Title>
          <Text className="text-lg font-medium text-center uppercase">
            {item.label}
          </Text>
        </Space>
      ))}
    </Flex>
  );
};

export default ExCard;
