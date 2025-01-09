'use client'
import LoginHandler from "../../../../components/LoginHandler/LoginHandler";
import MainContainer from "../../../../components/Maincontainer/Maincontainer";
import {
  MenuItemTypes,
  NavbarPropsTypes,
} from "../../../../components/navbar/Navbar.types";
import SearchBar from "../../../../components/searchbar/SearchBar1/SearchBar";
import { Affix, Col, Drawer, Flex, Row, Space, Typography } from "antd";
import { ChevronUp, Menu } from "lucide-react";
import React, { useState } from "react";
import defaultLogo from "../../../../../assets/open-intl/open-logo.png"
import Image from "next/image";
import { usePathname } from "next/navigation";
import Paragraph from "antd/es/typography/Paragraph";

export const Navbar = ({
  auth,
  searchable,
  data,
  backgroundColor,
  transparent
}: NavbarPropsTypes) => {
  const location = usePathname()
  const { menus, logo, name, phone, mail } = data;
    const [menuOpen, setMenuOpen] = useState(false);
    const menuSwitch = () => {
      setMenuOpen(!menuOpen);
    };
  return (
    <>
      <div className="bg-primary py-3 w-full">
        <MainContainer>
          <Space size={'large'}>
          <Paragraph className="!text-white !m-0 !font-semibold !text-lg">Phone: {phone}</Paragraph>
          <Paragraph className="!text-white !m-0 !font-semibold !text-lg">Email: {mail}</Paragraph>
          </Space>
        </MainContainer>
      </div>
      <Affix className="navbar_container">
      <div style={{ backgroundColor: backgroundColor || "white", boxShadow: '0 2px 4px 0 rgba(0,0,0,.1)'  }}>
          <MainContainer>
          <Row
            className="navbar !w-full !m-0 px-10 py-3 justify-between lg:justify-normal"
            align={"middle"}
            gutter={20}
          >
            <Col lg={3}>
              <a href="/">
                  <Image src={logo || defaultLogo} width={85} alt="sls" />
              </a>
            </Col>
            <Col lg={16} md={0} sm={0} xs={0}>
              <Row justify={"start"} style={{ gap: 20 }} className="navMenu">
                {menus?.map((d: MenuItemTypes, i: number) => {
                  const active = location === d?.path
                  return (
                    <Col key={i}>
                      <a href={d?.path} className={`!uppercase ${active ? "!text-primary" : "!text-black"} hover:!text-primary/50 font-semibold`}>
                          <p className="!text-lg">{d?.label}</p>
                      </a>
                    </Col>
                  );
                })}
              </Row>
            </Col>
            {(searchable || auth) && (
              <Col lg={6} sm={0} md={0} xs={0}>
                <Space size={"middle"} style={{ float: "right" }}>
                  {searchable && <SearchBar />}
                  {auth && <LoginHandler />}
                </Space>
              </Col>
            )}
            <Col
              md={2}
              sm={2}
              xs={2}
              lg={0}
              className="flex justify-end lg:hidden"
            >
              <div className="p-4 cursor-pointer pe-0" onClick={menuSwitch}>
              <Menu />
              </div>
            </Col>
          </Row>
          </MainContainer>
      </div>
        </Affix>
        <Drawer
          placement="top"
          open={menuOpen}
          onClose={menuSwitch}
          closable={false}
          title={
            <div className="flex justify-between items-center p-4">
              <a href="/">
                <Image src={logo || defaultLogo} width={85} alt="logo" />
              </a>
              {searchable && <SearchBar small half />}
              <ChevronUp className="cursor-pointer" onClick={menuSwitch} />
            </div>
          }
        >
          <Flex vertical>
            {menus?.map((d: MenuItemTypes, i: number) => {
              return (
                <Typography.Link href={d?.path} key={i}>
                  <div className="py-1 text-black font-bold">{d?.label}</div>
                </Typography.Link>
              );
            })}
            {auth && (
              <div className="py-5">
                <LoginHandler />
              </div>
            )}
          </Flex>
        </Drawer>
    </>
  );
};

export default Navbar;
