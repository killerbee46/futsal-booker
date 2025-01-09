import { Affix, Divider, Drawer, Flex, Image, Space } from "antd";
import React, { useState } from "react";
import { MenuItemTypes, NavbarDataTypes, Tsocials } from "../Navbar.types";
import Link from "antd/es/typography/Link";
import Text from "antd/es/typography/Text";
import { Facebook, Instagram, Menu, Twitter, X } from "lucide-react";

export const Nav1 = ({ logo, menus, socials }: NavbarDataTypes) => {
  const [menuOpen, setMenuOpen] = useState(false); 
  const menuSwitch = () => {
    setMenuOpen(!menuOpen);
  };
  const Icon = (key: string, path: string) => {
    switch (key) {
      case "facebook":
        return (
          <Link href={path}>
            <Facebook className="stroke-white" size={20} />
          </Link>
        );
      case "instagram":
        return (
          <Link href={path}>
            <Instagram className="stroke-white" size={20} />
          </Link>
        );
      case "twitter":
        return (
          <Link href={path}>
            <Twitter className="stroke-white" size={20} />
          </Link>
        );

      default:
        break;
    }
  };
  return (
    <>
      <Affix>
        <Flex className="justify-between items-center gap-[40px]">
          {logo && (
            <Link href="./">
              <Image preview={false} src={logo} height={40} alt="LOGO" />
            </Link>
          )}
          <Space size={20} className="hidden md:flex">
            {menus?.map((d: MenuItemTypes, i: number) => {
              return (
                <Link key={i} href={d?.path}>
                  <Text className=" py-[8px] hover:border-b-[2px] hover:border-primary">
                    {d?.label}
                  </Text>
                </Link>
              );
            })}
          </Space>
          {socials && (
            <Space className="hidden sm:flex" size={"middle"}>
              {socials.map((item: Tsocials, index: number) => (
                <Flex
                  key={index}
                  className="bg-primary rounded-full justify-center items-center h-[32px] w-[32px]"
                >
                  {Icon(item.platform, item.path)}
                </Flex>
              ))}
            </Space>
          )}
          <Menu
            className="block md:hidden cursor-pointer"
            onClick={menuSwitch}
          />
        </Flex>
      </Affix>
      <Drawer
        className="!h-auto md:!hidden"
        placement="top"
        open={menuOpen}
        onClose={menuSwitch}
        closable={false}
        title={
          <Flex className="justify-between items-center">
            {logo && (
              <Link href="./">
                <Image preview={false} src={logo} height={40} alt="LOGO" />
              </Link>
            )}
            <X className="cursor-pointer" onClick={menuSwitch} />
          </Flex>
        }
      >
        <Flex className="gap-[10px] sm:gap-[20px] justify-center">
          {menus?.map((d: MenuItemTypes, i: number) => {
            return (
              <Link key={i} href={d?.path}>
                <Text className="block py-[8px] hover:border-b-[2px] hover:border-primary">
                  {d?.label}
                </Text>
              </Link>
            );
          })}
        </Flex>
        <Divider />
        {socials && (
          <Flex className="justify-center gap-[20px]">
            {socials.map((item: Tsocials, index: number) => (
              <Flex
                key={index}
                className="bg-primary rounded-full justify-center items-center h-[32px] w-[32px]"
              >
                {Icon(item.platform, item.path)}
              </Flex>
            ))}
          </Flex>
        )}
      </Drawer>
    </>
  );
};

export default Nav1;
