import { Divider, Flex, Image, Space } from "antd";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";
import React from "react";
import { Details_Card_Types, TDetails } from "../Details_card_types";

export const DetailsCard1 = ({ details }: Details_Card_Types) => {
  return (
    <Flex className="py-8 justify-center items-center rounded-xl shadow-xl h-auto w-fit [&>*:first-child]:border-none bg-white">
      {details.map((item: TDetails, index: number) => (
        <Space
          key={index}
          size={"middle"}
          className="items-center px-[60px] border-l border-l-slate-300"
        >
          {item.icon && (
            <Image
              src={item.icon}
              alt="image"
              preview={false}
              className="!w-auto aspect-square !h-[60px]"
            />
          )}
          <Space direction="vertical" size={0}>
            <Text className="text-lg font-medium">{item.label}</Text>
            <Title level={5} className="!font-bold !mb-0">
              {item.value}
            </Title>
          </Space>
        </Space>
      ))}
    </Flex>
  );
};

export default DetailsCard1;
