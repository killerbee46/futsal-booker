'use client'
import {
  Affix,
  Col,
  Drawer,
  Flex,
  Menu,
  Row,
  Space,
  Typography,
  Image,
} from "antd";
import LoginHandler from "../../LoginHandler/LoginHandler";
import SearchBar from "../../searchbar/SearchBar1/SearchBar";
import { MenuOutlined, UpOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { MenuItemTypes, NavbarPropsTypes } from "../Navbar.types";

export const Nav4 = ({
  auth,
  searchable,
  data,
  backgroundColor,
  transparent
}: NavbarPropsTypes) => {
    const { menus, logo, name } = data;
    const [menuOpen, setMenuOpen] = useState(false);
    const [top, setTop] = useState("transparent");
    const hasBanner = transparent
    const textColor = top === "transparent" ? "white" : "black";
    const menuSwitch = () => {
      setMenuOpen(!menuOpen);
    };
    const defaultLogo =
      "https://imgs.search.brave.com/B9tDsc8b4pK8dNXxe5X6MY3mUQhJsqjgaYP8vQfLHRE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jcm9w/LWNpcmNsZS5pbWFn/ZW9ubGluZS5jby9j/cm9wLWNpcmNsZS5w/bmc";
  
    window.onscroll = function () {
      if(hasBanner){
        if (window.scrollY >= 20) {
          setTop(backgroundColor || "#52c0db");
        } else {
          setTop("transparent");
        }
      }
      else{
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
          <Row
            className="navbar !w-full !m-0 px-10 py-3 justify-between lg:justify-normal"
            align={"middle"}
            gutter={20}
            style={{ backgroundColor: top }}
          >
            <Col lg={5}>
              <a href="/">
                <Space>
                  <Image
                    preview={false}
                    src={logo || defaultLogo}
                    width={50}
                    className="aspect-square"
                    alt="logo"
                  />
                  <Typography.Text className={`font-bold !text-${textColor}`}>
                    <div dangerouslySetInnerHTML={{__html:name||""}} />
                  </Typography.Text>
                </Space>
              </a>
            </Col>
            <Col lg={13} md={0} sm={0} xs={0}>
              <Row justify={"start"} style={{ gap: 20 }} className="navMenu">
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
                <MenuOutlined style={{ color: textColor }} />
              </div>
            </Col>
          </Row>
        </Affix>
        <Drawer
          placement="top"
          open={menuOpen}
          onClose={menuSwitch}
          closable={false}
          title={
            <div className="flex justify-between items-center p-4">
              <a href="/">
                <Image preview={false} src={logo || defaultLogo} width={70} alt="logo" />
              </a>
              {searchable && <SearchBar small half />}
              <UpOutlined className="cursor-pointer" onClick={menuSwitch} />
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
        {hasBanner ? (
          <div>
            
          </div>):
          <div style={{height:!hasBanner ? 75 : 0}}></div>
      }
      </>
    );
  };

export default Nav4;
