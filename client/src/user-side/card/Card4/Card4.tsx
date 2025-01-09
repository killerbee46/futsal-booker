import { CardType, Tsocials } from "../../../components/CardDesign/Card.types";
import { Card, Image, Space, Button, Tooltip, Row, Col } from "antd";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";
//chore: socials icons are deprecated
import { Facebook, Instagram, Twitter } from "lucide-react";
import React from "react";
import Link from "antd/es/typography/Link";
import getImageUrl from "../../../utilFunctions/getImageUrl";
import MainContainer from "../../MainContainer/MainContainer";

export const Card4 = ({ imageUrl, title, subTitle, socials, avatar }: CardType) => {
  const Icon = (key: string, path: string) => {
    switch (key) {
      case "facebook":
        return (
          <Link href={path}>
            <Facebook className="stroke-primary hover:stroke-black" />
          </Link>
        );
      case "instagram":
        return (
          <Link href={path}>
            <Instagram className="stroke-primary hover:stroke-black" />
          </Link>
        );
      case "twitter":
        return (
          <Link href={path}>
            <Twitter className="stroke-primary hover:stroke-black" />
          </Link>
        );

      default:
        break;
    }
  };
  return (
    <MainContainer>
    { avatar ?
        <div className="flex justify-center items-center my-20">
      <Space direction="vertical" className="!w-full text-center justify-center items-center">
    <div className="min-w-[200px] max-w-[250px] aspect-square rounded-full sm:border-4 md:border-6 lg:border-8 border-dark" style={{
    background: `url(${getImageUrl(imageUrl?.data?.attributes?.url)})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }} />
    <Title level={4} className="sm:mt-2 md:mt-4 lg:mt-6 m-0">{title}</Title>
    {
      subTitle &&
      <Title level={5} className="!text-black/60 m-0">{subTitle}</Title>
    }
    </Space>
    </div>
    :
      <Card
      className="group/card w-full max-w-[300px] px-[16px] pt-[16px]"
      hoverable
      cover={
        <Image
          //   style={{ borderRadius: 8 }}
          className="aspect-square object-cover !rounded-lg"
          preview={false}
          width={"100%"}
          alt="example"
          src={imageUrl}
        />
      }
    >
      <Space
        direction="vertical"
        size={"middle"}
        align="center"
        className="w-full"
      >
        <Title
          className="font-poppins w-full !mt-0 !mb-0 font-medium text-center"
          level={5}
        >
          {title}
        </Title>
        <Text type="secondary">{subTitle}</Text>
        {socials && (
          <Space className="" size={"middle"}>
            {socials.map((item: Tsocials, index: number) =>
              Icon(item.platform, item.link)
            )}
          </Space>
        )}
      </Space>
    </Card> 
    }
    </MainContainer>
  );
};

export default Card4;
