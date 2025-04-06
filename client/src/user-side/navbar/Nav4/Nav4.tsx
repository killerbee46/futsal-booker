'use client'
import {
  Affix,
  Col,
  Drawer,
  Flex,
  Row,
  Space,
  Typography,
} from "antd";
import LoginHandler from "../../LoginHandler/LoginHandler";
import SearchBar from "../../searchbar/SearchBar1/SearchBar";
import { MenuOutlined, UpOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { MenuItemTypes, NavbarPropsTypes } from "../Navbar.types";
import Header2 from "../../Header/Header2/Header";
import Logo from "../../../components/Logo/Logo";
import Container from "../../../Layouts/Container";
import MainContainer from "../../Maincontainer/Maincontainer";

export const Nav4 = ({
  auth,
  searchable,
  data,
  backgroundColor,
  transparent,
  bannerData,
  tabFilter
}: NavbarPropsTypes) => {
  const { menus, logo, name } = data;
  const [menuOpen, setMenuOpen] = useState(false);
  const [top, setTop] = useState("transparent");
  const hasBanner = transparent
  const textColor = top === "transparent" ? "white" : "white";
  const menuSwitch = () => {
    setMenuOpen(!menuOpen);
  };
  const defaultLogo =
    "https://imgs.search.brave.com/B9tDsc8b4pK8dNXxe5X6MY3mUQhJsqjgaYP8vQfLHRE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jcm9w/LWNpcmNsZS5pbWFn/ZW9ubGluZS5jby9j/cm9wLWNpcmNsZS5w/bmc";

  window.onscroll = function () {
    if (hasBanner) {
      if (window.scrollY >= 20) {
        setTop(backgroundColor || "#52c0db");
      } else {
        setTop("transparent");
      }
    }
    else {
      setTop(backgroundColor || "#52c0db");
    }
  };

  useEffect(() => {
    if (!hasBanner) {
      setTop(backgroundColor || "#52c0db");
    } else {
      setTop("transparent");
    }
  }, []);

  return (
    <>
      <Affix className="navbar_container absolute left-0 right-0 z-20">
        <div style={{ backgroundColor: top,boxShadow: top === 'transparent' ? '' : '#00000061 0px 4px 2px -2px' }} >
        <MainContainer>
        <Row
          className="navbar !w-full !m-0 justify-between lg:justify-normal py-5"
          align={"middle"}
          gutter={20}
        >
          <Col lg={3} xs={0} className="lg:block hidden">
            <Logo withText />
          </Col>
          <Col lg={0} xs={6} sm={5} md={4} className="block lg:hidden">
            <Logo />
          </Col>
          <Col lg={15} md={0} sm={0} xs={0} className="lg:block hidden">
            <Row justify={"end"} style={{ gap: 20 }} className="navMenu">
              {menus?.map((d: MenuItemTypes, i: number) => {
                return (
                  <Col key={i}>
                    <Typography.Link href={d?.path}>
                      <div
                        className={`!uppercase text-${textColor} hover:text-opacity-50 font-bold`}
                      >
                        {d?.label}
                      </div>
                    </Typography.Link>
                  </Col>
                );
              })}
            </Row>
          </Col>
          {(searchable || auth) && (
            <Col lg={6} sm={0} md={0} xs={0} className="lg:flex hidden justify-end items-center">
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
              <MenuOutlined style={{ color: textColor }} />
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
            <MainContainer>
              <Row justify={'space-between'} align={'middle'}>
              <Col lg={3} xs={0} className="lg:block hidden">
            <Logo withText />
          </Col>
          <Col lg={0} xs={6} sm={5} md={4} className="block lg:hidden">
            <Logo />
          </Col>
            <Col>
              {searchable && <SearchBar small half />}
              <UpOutlined className="cursor-pointer" onClick={menuSwitch} />
            </Col>
            </Row>
            </MainContainer>
        }
      >
        <MainContainer>
        <Flex vertical className="m-5">
          {menus?.map((d: MenuItemTypes, i: number) => {
            return (
              <Typography.Link href={d?.path} key={i}>
                <div className="py-1 text-white font-bold">{d?.label}</div>
              </Typography.Link>
            );
          })}
          {auth && (
            <div className="py-5">
              <LoginHandler />
            </div>
          )}
        </Flex>
        </MainContainer>
      </Drawer>
      {hasBanner ? (
        <div>
          <Header2 tabFilter={tabFilter} {...bannerData} />
        </div>) :
        <div style={{ height: !hasBanner ? 75 : 0 }}>

        </div>
      }
    </>
  );
};

export default Nav4;
