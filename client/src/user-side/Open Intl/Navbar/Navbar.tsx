'use client'
import {
  MenuItemTypes,
  NavbarDataTypes,
} from "../../../components/navbar/Navbar.types";
import { Drawer, Flex, Image, Space } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import { Mail, MenuIcon, Phone, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import MainContainer from "../../Maincontainer/Maincontainer";

export const Navbar = ({
  logo,
  menus,
  backgroundColor,
  phone,
  mail,
}: any) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuSwitch = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <Flex className="bg-gray-900 justify-center gap-6 py-1 items-center w-full">
        <Flex className="items-center gap-2">
          <Mail className="stroke-white" />
          <Paragraph className="text-white !m-0">{mail}</Paragraph>
        </Flex>
        <Flex className="items-center gap-2">
          <Phone className="stroke-white" />
          <Paragraph className="text-white !m-0">{phone}</Paragraph>
        </Flex>
      </Flex>
      <div style={{ background: backgroundColor }}>
      <MainContainer>
      <Flex
        className={`items-center justify-between gap-4`}
      >
        <Link href={"/"}>
          <Image
            preview={false}
            src={logo}
            alt="Open Intl Academy"
            className="!h-[60px] md:!h-[70px] lg:!h-[80px] "
          />
        </Link>
        <Flex className="items-center md:gap-3 lg:gap-5 hidden md:flex">
          {menus?.map((item: MenuItemTypes, index: number) => (
            <Link key={index} href={item?.path}>
              <span className="text-[#1e73be] font-semibold text-lg hover:text-[#155085]">
                {item?.label}
              </span>
            </Link>
          ))}
        </Flex>
        <div className="p-4 cursor-pointer pe-0 md:hidden" onClick={menuSwitch}>
          <MenuIcon />
        </div>
      </Flex>
      </MainContainer>
      </div>
      <Drawer
        placement="top"
        open={menuOpen}
        onClose={menuSwitch}
        closable={false}
        title={
          <div className="flex justify-between items-center">
            <a href="/">
              <Image src={logo} height={60} alt="logo" />
            </a>
            <X className="cursor-pointer" onClick={menuSwitch} />
          </div>
        }
      >
        <Flex vertical className="gap-2">
          {menus?.map((item: MenuItemTypes, i: number) => {
            return (
              <Link href={item?.path} key={i}>
                <div className=" text-[#1e73be] font-semibold text-lg hover:text-[#155085]">
                  {item?.label}
                </div>
              </Link>
            );
          })}
        </Flex>
      </Drawer>
    </>
  );
};

export default Navbar;
