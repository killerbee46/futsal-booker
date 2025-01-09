import { Col, Row, Image, Flex, Space, Rate } from "antd";
import React from "react";
import { Testimonial_Type } from "../Testimonial_Type";
import Paragraph from "antd/es/typography/Paragraph";
import { Quote, Star } from "lucide-react";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";

export const Testimonial2 = ({
  image_url,
  user_name,
  designation,
  content,
  rating,
}: Testimonial_Type) => {
  return (
    <Flex className="flex-col items-center relative px-[40px] pb-[40px] border border-slate-100 bg-white w-full max-w-[700px] rounded-xl shadow-md gap-[20px]">
      <Space
        direction="vertical"
        className="items-center gap-[40px] -mt-[70px]"
      >
        <Image
          className="aspect-square rounded-full object-cover outline outline-4 outline-primary"
          src={image_url}
          width={140}
          alt=""
          preview={false}
        />
        <Paragraph className="text-center text-xl">{content}</Paragraph>
      </Space>
      <div className="w-[100px] h-[3px] bg-primary"></div>
      <Flex className="flex-row w-full justify-between items-center ">
        <Space direction="vertical">
          <Text className="text-2xl font-medium text-primary">{user_name}</Text>
          <Text>{designation}</Text>
        </Space>
        <Rate allowHalf defaultValue={rating} disabled />
      </Flex>

      <Quote
        size={60}
        className="absolute rotate-180  -top-7 left-6 fill-primary stroke-none"
      />
      <Quote
        size={60}
        className="absolute -bottom-7 right-6 fill-primary stroke-none"
      />
    </Flex>
  );
};

export default Testimonial2;
