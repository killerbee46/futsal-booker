import { Divider, Flex, Image, Space, Modal, Popover } from "antd";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";
import React, { useState } from "react";
import { Fixture_types } from "../Fixtues_types";

export const Fixture1 = ({
  title,
  player1,
  player2,
  date,
  time,
  venue,
}: Fixture_types) => {
  const content_player1 = (
    <div className="w-full max-w-[400px]">{player1.details}</div>
  );
  const content_player2 = (
    <div className="w-full max-w-[400px]">{player2.details}</div>
  );
  return (
    <>
      <Space
        direction="vertical"
        size={"large"}
        className="justify-center w-full max-w-[400px] p-4 rounded-lg border-[1px] border-slate-200 hover:shadow-md hover:border-white hover:cursor-pointer"
      >
        <Title level={5} className="text-center">
          {title}
        </Title>
        <Flex className="justify-between items-center gap-1">
          <Popover content={content_player1} title={player1.name}>
            <Flex className="flex-col items-center gap-1">
              <Image
                preview={false}
                className="aspect-square object-cover rounded-full border-[2px] border-primary"
                src={player1.image}
                width={60}
                alt="player_image"
              />
              <Text className="text-[14px] block font-medium text-center">
                {player1.name}
              </Text>
            </Flex>
          </Popover>
          <Flex className="justify-center items-center bg-primary px-[8px] py-[4px] rounded-md font-bold text-white text-xl">
            VS
          </Flex>
          <Popover content={content_player2} title={player2.name}>
            <Flex className="flex-col items-center gap-1">
              <Image
                preview={false}
                className="aspect-square object-cover rounded-full border-[2px] border-primary"
                src={player2.image}
                width={60}
                alt="player_image"
              />
              <Text className="text-[14px] block font-medium text-center">
                {player2.name}
              </Text>
            </Flex>
          </Popover>
        </Flex>
        <Space
          direction="vertical"
          size={2}
          className="items-center w-full bg-gray-100 rounded-md py-[4px] px-[4px]"
        >
          <Text className="text-center block">{venue}</Text>
          <Text className="text-center block">
            {date} | {time}
          </Text>
        </Space>
      </Space>
    </>
  );
};

export default Fixture1;
