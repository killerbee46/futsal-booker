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
import { useState } from "react";
import { MenuItemTypes } from "../Navbar.types";

export const Nav2 = ({
  auth,
  searchable,
  menus,
  logo,
  backgroundColor,
}: any) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuSwitch = () => {
    setMenuOpen(!menuOpen);
  };
  const defaultLogo =
    "https://imgs.search.brave.com/mi-mEyLDdGWRrqQRi32s01uwZRgn-fsZm8FU16ZM1Dc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvaW50ZWwvc21h/bGwvaW50ZWxfUE5H/MjQucG5n";
  return (
    <>
      <Affix
        className="navbar_container py-4 px-10 bg"
        // style={{ background: backgroundColor || "#52c0db" }}
      >
        <Row className="navbar" justify={"space-between"} align={"middle"}>
          <Col lg={2}>
            <a href="/">
              <Image src={logo || defaultLogo} width={70} alt="logo" />{" "}
            </a>
          </Col>
          <Col lg={14} md={0} sm={0} xs={0}>
            <Row justify={"start"} style={{ gap: 20 }} className="navMenu">
              {menus?.map((d: MenuItemTypes, i: number) => {
                return (
                  <Col key={i}>
                    <Typography.Link href={d?.path}>
                      <div className="text-black">{d?.label}</div>
                    </Typography.Link>
                  </Col>
                );
              })}
            </Row>
          </Col>
          {(searchable || auth) && (
            <Col lg={8} sm={0} md={0} xs={0}>
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
              <MenuOutlined />
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
              <Image src={logo || defaultLogo} width={70} alt="logo" />
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
                <div className="py-1 text-black">{d?.label}</div>
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

export default Nav2;
