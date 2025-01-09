import { CardTypes } from "@/components/card/Card.types";
import getImageUrl from "@/lib/utilFunctions/getImageUrl";
import { Flex, Image } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import React from "react";

export const ServiceCard = ({ title, description, image }: CardTypes) => {
  return (
    <div>
      <Flex
        vertical
        className="gap-4 items-center p-6 rounded-xl w-full max-w-[600px]  hover:bg-slate-100 hover:border hover:border-slate-200 cursor-pointer"
      >
        {image && (
          <Image preview={false} src={getImageUrl(image?.data?.attributes?.url)} height={80} alt="service_icon" />
        )}
        <Title level={4} className="text-center !text-[#1e73be]">
          {title}
        </Title>
        <Paragraph className="text-center">{description}</Paragraph>
      </Flex>
    </div>
  );
};

export default ServiceCard;
