import { Col, Row, Flex, Space } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import React from "react";
import Map1 from "../../../Map/Map1/Map1";
import MainContainer from "../../../Maincontainer/Maincontainer";

export interface ContactTypes {
  contactDetails: ContactDetailsTypes;
}

interface ContactDetailsTypes {
  map?: string;
  location?: string;
  phone?: string;
  email?: string;
  socials?: SocialTypes;
}

interface SocialTypes {
  facebook?: string;
  instagram?: string;
  youtube?: string;
  twitter?: string;
}

export const Contact = ({ contactDetails }: ContactTypes) => {
  const contactData = (label: string, value: string) => {
    return (
      <Space direction="vertical" size={0}>
        <Title level={5} className="!text-slate-400 !m-0 !text-lg">
          {label}
        </Title>
        <Paragraph className="!text-white !text-lg !font-normal">
          {value}
        </Paragraph>
      </Space>
    );
  };
  return (
    <div>
      <MainContainer wraperClassName="py-10 md:py-20">
      <Row gutter={[40, 60]}>
        {/* form secion */}
        <Col sm={24} md={14} lg={14} xl={14} xxl={14}>
          <form>
            <Flex className="flex-col gap-1 p-8 rounded-lg border border-slate-200">
              <div className="w-full mb-6 md:mb-0">
                <label
                  className="block text-text-primary font-medium mb-2"
                  htmlFor="grid-full-name"
                >
                  Full Name
                </label>
                <input
                  className="appearance-none block w-full bg-transparent text-text-primary border border-borderColor rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-full-name"
                  type="text"
                  required
                />
              </div>
              <Flex className="gap-5">
                <div className="w-1/2 mb-6 md:mb-0">
                  <label
                    className="block text-text-primary font-medium mb-2"
                    htmlFor="grid-email"
                  >
                    Email
                  </label>
                  <input
                    className="appearance-none block w-full bg-transparent text-text-primary border border-borderColor rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-email"
                    type="email"
                    required
                  />
                </div>
                <div className="w-1/2 mb-6 md:mb-0">
                  <label
                    className="block text-text-primary font-medium mb-2"
                    htmlFor="grid-phone"
                  >
                    Phone
                  </label>
                  <input
                    className="appearance-none block w-full bg-transparent text-text-primary border border-borderColor rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-phone"
                    type="number"
                    required
                  />
                </div>
              </Flex>
              <div className="w-full mb-6 md:mb-0">
                <label
                  className="block text-text-primary font-medium mb-2"
                  htmlFor="grid-subject"
                >
                  Subject
                </label>
                <input
                  className="appearance-none block w-full bg-transparent text-text-primary border border-borderColor rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-subject"
                  type="text"
                />
              </div>

              <div className="w-full mb-6 md:mb-0">
                <label
                  className="block text-text-primary font-medium mb-2"
                  htmlFor="grid-message"
                >
                  Message
                </label>
                <textarea
                  className="resize-y min-h-[100px] appearance-none block w-full bg-transparent text-text-primary border border-borderColor rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-message"
                />
              </div>
              <button
                type="submit"
                className="bg-[#1e73be] px-4 py-2 rounded-lg text-white"
              >
                Send Message
              </button>
            </Flex>
          </form>
        </Col>
        <Col sm={24} md={10} lg={10} xl={10} xxl={10}>
          <Flex
            vertical
            className="rounded-lg bg-gradient-to-b from-[#2A2F97] to-[#052461] w-full h-full p-5 md:p-8 !text-white justify-between"
          >
            <Flex vertical className="w-full gap-5">
              <Space direction="vertical" size={0}>
                <Title level={4} className="!text-white">
                  Get In Touch
                </Title>
                <div className="w-full h-[1px] bg-slate-500"></div>
              </Space>
              <Space direction="vertical" size={0}>
                {contactDetails?.location &&
                  contactData("Address", contactDetails?.location)}
                {contactDetails?.email &&
                  contactData("Email", contactDetails?.email)}
                {contactDetails?.phone &&
                  contactData("Address", contactDetails?.phone)}
              </Space>
            </Flex>
            <Space>
              {contactDetails?.socials?.facebook && (
                <a href={contactDetails.socials?.facebook} target="_blank">
                  <Flex className="justify-center items-center rounded-full w-[36px] aspect-square bg-white">
                    <Facebook className="fill-[red] stroke-none" />
                  </Flex>
                </a>
              )}
              {contactDetails?.socials?.instagram && (
                <a href={contactDetails.socials?.instagram} target="_blank">
                  <Flex className="justify-center items-center rounded-full w-[36px] aspect-square bg-white">
                    <Instagram className="stroke-[red]" />
                  </Flex>
                </a>
              )}
              {contactDetails?.socials?.youtube && (
                <a href={contactDetails.socials?.youtube} target="_blank">
                  <Flex className="justify-center items-center rounded-full w-[36px] aspect-square bg-white">
                    <Youtube className=" stroke-[red]" />
                  </Flex>
                </a>
              )}
              {contactDetails?.socials?.twitter && (
                <a href={contactDetails.socials?.twitter} target="_blank">
                  <Flex className="justify-center items-center rounded-full w-[36px] aspect-square bg-white">
                    <Twitter className="fill-[red] stroke-none" />
                  </Flex>
                </a>
              )}
            </Space>
          </Flex>
        </Col>
        {contactDetails?.map && (
          <Col flex={1}>
            {/* map section */}
            <Map1 location={"Open International Academy"} width={'100%'} height={'450'} />
          </Col>
        )}
      </Row>
    </MainContainer>
    </div>
  );
};

export default Contact;
