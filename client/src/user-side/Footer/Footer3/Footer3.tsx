import React from "react";
import { Image, Flex, Row, Col, Space, Divider, Collapse } from "antd";
import Text from "antd/es/typography/Text";

import Link from "antd/es/typography/Link";
import Paragraph from "antd/es/typography/Paragraph";
import { Columns, Footer_Types, Links } from "../Footer_Types";
import MainContainer from "../../Maincontainer/Maincontainer";

const CollapseContent = ({ data }: any) => {
  return (
    <Space direction={data.vertical ? "vertical" : "horizontal"} size={8}>
      {data.links.map((item: Links, index: number) => (
        <Link
          key={index}
          href={item.href}
          className="flex flex-row items-center hover:cursor-pointer  text-white gap-[8px]"
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

export const Footer3 = ({ logo, columns, copyright }: Footer_Types) => {

  const image = 'https://imgs.search.brave.com/4OP2IbLsRm_gOSnv60uTf8AmjgfAHDVyttZkSDtPkcI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ4/MDM5NzIwNy9waG90/by9wYWlyLW9mLWJv/eGluZy1nbG92ZXMu/d2VicD9iPTEmcz0x/NzA2NjdhJnc9MCZr/PTIwJmM9WVhMYy1k/bVFQUmE3WldEV2V2/WEhLSy1UcExid0dn/UzhkTG9yYldqS1My/RT0'

  return (
    <div className="py-20" style={{
      background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }}>
      <MainContainer>
      <Row gutter={[40, 40]}>
        <Col xs={24} sm={24} md={6} lg={6} xl={6} xxl={6}>
          <Link href={logo?.href || "/"}>
          {/* <Space
            direction="vertical"
            size={"middle"}
            className="w-full justify-center items-center md:items-start"
          > */}
            <Image
              preview={false}
              className="aspect-square object-cover rounded-full"
              src={logo?.image}
              width={"50%"}
              alt="Beeaver Tech"
            />
          </Link>
            {/* {logo.description ? (
              <Paragraph className="text-center md:text-left text-white">
                {logo.description}
              </Paragraph>
            ) : (
              ""
            )} */}
          {/* </Space> */}
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
            {columns?.map((column: Columns, index: number) => (
              <Space direction="vertical" size={8} key={index}>
                <Text className="text-[16px] font-medium text-white">{column.title}</Text>
                <div className="w-[60px] h-[2px] bg-white mb-5"></div>
                <Space
                  direction={column.vertical ? "vertical" : "horizontal"}
                  size={8}
                >
                  {column?.links?.map((item: Links, index: number) => (
                    <Link
                      key={index}
                      href={item?.href}
                      className="flex flex-row items-center hover:cursor-pointer !text-white gap-[8px]"
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
            expandIconPosition={"end"}
            items={columns?.map((col: Columns) => {
              return {
                key: col?.title,
                label: (
                  <Text className="text-[16px] font-medium text-white">{col?.title}</Text>
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
              <Text className=" text-white">&copy; {copyright?.copyright_text}</Text>
            <Space className="font-medium" size={"middle"}>
              {copyright?.links?.map((item: any, index: number) => (
                <Link key={index} href={item?.href}>
                  <Text className="!text-white">{item?.title}</Text>
                </Link>
              ))}
            </Space>
          </Flex>
        </Col>
      </Row>
    </MainContainer>
    </div>
  );
};

export default Footer3;
