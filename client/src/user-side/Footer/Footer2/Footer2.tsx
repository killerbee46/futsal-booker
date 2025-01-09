import React from "react";
import { Image, Flex, Row, Col, Space, Divider, Collapse } from "antd";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";

import Link from "antd/es/typography/Link";
import Paragraph from "antd/es/typography/Paragraph";
import { Columns, Footer_Types, Links } from "../Footer_Types";
import MainContainer from "@/components/Maincontainer/Maincontainer";

const CollapseContent = ({ data }: any) => {
  return (
    <Space direction={data.vertical ? "vertical" : "horizontal"} size={8}>
      {data.links.map((item: Links, index: number) => (
        <Link
          key={index}
          href={item.href}
          className="flex flex-row items-center hover:cursor-pointer !text-black gap-[8px]"
        >
          {item.icon ? (
            <Image
              preview={false}
              src={item.icon}
              width={data.vertical ? 20 : 36}
              height={data.vertical ? 20 : 36}
              alt=""
            />
          ) : (
            ""
          )}

          {item.title ? item.title : ""}
        </Link>
      ))}
    </Space>
  );
};

export const Footer2 = ({ logo, columns, copyright }: Footer_Types) => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <MainContainer>
      <Row gutter={[40, 40]}>
        <Col xs={24} sm={24} md={6} lg={6} xl={6} xxl={6}>
          <Space
            direction="vertical"
            size={"middle"}
            className="w-full justify-center items-center md:items-start"
          >
            <Image
              preview={false}
              className="aspect-square object-cover rounded-full"
              src={logo.image}
              width={100}
              alt="Beeaver Tech"
            />
            {logo.description ? (
              <Paragraph className="text-center md:text-left">
                {logo.description}
              </Paragraph>
            ) : (
              ""
            )}
          </Space>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={18}
          lg={18}
          xl={18}
          xxl={18}
          className="flex flex-col items-center"
        >
          <Flex className="hidden sm:flex flex-col sm:flex-row sm:justify-between gap-[10px] md:gap-[40px] sm:w-full">
            {columns.map((column: Columns, index: number) => (
              <Space direction="vertical" size={8} key={index}>
                <Text className="text-[16px] font-medium">{column.title}</Text>
                <div className="w-[60px] h-[2px] bg-black"></div>
                <Space
                  direction={column.vertical ? "vertical" : "horizontal"}
                  size={8}
                >
                  {column.links.map((item: Links, index: number) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="flex flex-row items-center hover:cursor-pointer !text-black gap-[8px]"
                    >
                      {item.icon ? (
                        <Image
                          preview={false}
                          src={item.icon}
                          width={column.vertical ? 20 : 36}
                          height={column.vertical ? 20 : 36}
                          alt=""
                        />
                      ) : (
                        ""
                      )}

                      {item.title ? item.title : ""}
                    </Link>
                  ))}
                </Space>
              </Space>
            ))}
          </Flex>
          <Collapse
            className="sm:hidden w-full mx-w-[400px] border-none bg-transparent !rounded-none"
            onChange={onChange}
            expandIconPosition={"end"}
            items={columns?.map((col: Columns) => {
              return {
                key: col?.title,
                label: (
                  <Text className="text-[16px] font-medium">{col?.title}</Text>
                ),
                children: (
                  <div className="!bg-transparent">
                    <CollapseContent data={col} />
                  </div>
                ),
              };
            })}
          />
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col flex={1}>
          <Flex className="flex-col md:flex-row justify-between items-center gap-[10px]">
            <Space className="font-medium">
              <Text>&copy;</Text>
              <Text>{copyright.copyright_text}</Text>
            </Space>
            <Space className="font-medium" size={"middle"}>
              {copyright.links.map((item: any, index: number) => (
                <Link key={index} href={item.href}>
                  <Text>{item.title}</Text>
                </Link>
              ))}
            </Space>
          </Flex>
        </Col>
      </Row>
    </MainContainer>
  );
};

export default Footer2;
