import React from "react";
import { Image, Flex, Row, Col, Space, Divider, Collapse } from "antd";
import Text from "antd/es/typography/Text";

import Link from "antd/es/typography/Link";
import { Footer_Types, Links } from "../Footer/Footer_Types";
import IconText from "../IconText/IconText";
import MainContainer from "../Maincontainer/Maincontainer";

const CollapseContent = ({ data }: any) => {
  return (
    <Space direction={data.vertical ? "vertical" : "horizontal"} size={8}>
      {data.links.map((item: Links, index: number) => (
        <Link
          key={index}
          href={item.href}
          className="flex flex-row items-center hover:curgap-[8px]"
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

export const Footer4 = ({ logo, columns, copyright }: Footer_Types) => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  const image = 'https://imgs.search.brave.com/4OP2IbLsRm_gOSnv60uTf8AmjgfAHDVyttZkSDtPkcI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ4/MDM5NzIwNy9waG90/by9wYWlyLW9mLWJv/eGluZy1nbG92ZXMu/d2VicD9iPTEmcz0x/NzA2NjdhJnc9MCZr/PTIwJmM9WVhMYy1k/bVFQUmE3WldEV2V2/WEhLSy1UcExid0dn/UzhkTG9yYldqS1My/RT0'

  return (
    <div className="pt-10 mt-20" style={{
      background: `#f5f5f5`,
    }}>
      <MainContainer className="pb-5">
      {
        columns?.map((col, i)=> {
            return <Row key={i} gutter={30} justify={'space-between'}>
                {
                    col?.links?.map((dat, j)=> {
                        return <Col key={i}>
                            <IconText text={dat?.title} {...dat} />
                        </Col>
                    })
                }
            </Row>
        })
      }
      </MainContainer>
      <div className="border-t-4 border-primary h-full w-full py-5" style={{
        background: `#e5e5e5`,
      }}>
      <MainContainer>
      <Row>
        <Col flex={1}>
          <Flex className="flex-col md:flex-row justify-between items-center gap-[10px]">
              <Text>&copy; {copyright?.copyright_text}</Text>
            <Space className="font-medium" size={"middle"}>
              {copyright?.links?.map((item: any, index: number) => (
                <Link key={index} href={item.href}>
                  <Text>{item.title}</Text>
                </Link>
              ))}
            </Space>
          </Flex>
        </Col>
      </Row>
    </MainContainer>
    </div>
    </div>
  );
};

export default Footer4;
