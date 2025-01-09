import { Col, Row, Image, Flex, Space, Rate } from "antd";
import React from "react";
import { Testimonial_Type } from "../Testimonial_Type";
import Paragraph from "antd/es/typography/Paragraph";
import { Quote, Star } from "lucide-react";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";

export const Testimonial3 = ({
  image_url,
  user_name,
  designation,
  content,
  rating,
}: Testimonial_Type) => {
  return (
    <Flex className="flex-col items-end relative p-[10px] md:p-[14px] xl:p-[20px] border border-slate-200 bg-white w-full max-w-[500px] rounded-xl shadow-md gap-[20px]">
      <Image
        className="absolute aspect-[4/5] rounded-full object-cover -top-[70px] shadow-sm"
        src={image_url}
        width={100}
        alt=""
        preview={false}
      />
      <Space direction="vertical" size={36}>
        <Quote size={60} className="rotate-180 fill-primary stroke-none" />
        <Paragraph className="text-left text-lg xl:text-xl line-clamp-5">
          {content}
        </Paragraph>
      </Space>
      <Flex className="flex-row w-full justify-between items-center gap-[20px]">
        <Space direction="vertical" size={0}>
          <Title
            level={5}
            className="!font-bold !text-lg xl:!text-xl !mb-0 text-black"
          >
            {user_name}
          </Title>
          <Text>{designation}</Text>
        </Space>
        <Rate allowHalf defaultValue={rating} disabled />
      </Flex>
    </Flex>
  );
};

export default Testimonial3;
