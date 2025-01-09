import { CardTypes } from "@/components/card/Card.types";
import { Flex, Image } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import React from "react";

export const ServiceCard = ({
  title,
  content,
  image,
  isVertical,
}: CardTypes) => {
  return (
    <div>
      <Flex
        className={`${isVertical ? "flex-col !text-center items-center hover:bg-slate-100 hover:border hover:border-slate-200 cursor-pointer" : "flex-row !text-left items-start"} gap-6 p-6 rounded-xl w-full max-w-[600px] group/item`}
      >
        {image && (
          <div
            className={
              isVertical
                ? ""
                : "p-[50px] group-hover/item:bg-slate-200 rounded-lg"
            }
          >
            <Image
              preview={false}
              src={image}
              height={60}
              width={60}
              alt="service_icon"
            />
          </div>
        )}
        <Flex vertical className={isVertical ? "items-center" : "items-start"}>
          <Title level={4} className="!text-[#1e73be]">
            {title}
          </Title>
          <Paragraph>{content}</Paragraph>
        </Flex>
      </Flex>
    </div>
  );
};

export default ServiceCard;
