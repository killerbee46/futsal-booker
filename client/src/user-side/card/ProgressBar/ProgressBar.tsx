import { Flex, Progress } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import React from "react";
import { ProgressBar_types } from "./ProgressBar_types";

export const ProgressBar = ({
  percent,
  title,
  description,
  stroke_color,
}: ProgressBar_types) => {
  return (
    <Flex className="w-full max-w-[360px] aspect-square rounded-xl border border-primary justify-center items-center">
      <Flex className="w-[80%] flex-col gap-4 items-center">
        <Progress
          type="circle"
          strokeLinecap="butt"
          percent={percent}
          size={160}
          strokeColor={stroke_color}
        />
        <Title level={3} className="!text-primary !text-center !font-semibold">
          {title}
        </Title>
        <Paragraph className="text-center">{description}</Paragraph>
      </Flex>
    </Flex>
  );
};

export default ProgressBar;
