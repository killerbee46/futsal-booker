import { Navbar } from "./Navbar";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Open Intl",
  component: Navbar,
  parameters: {
    // layout: "centered",
  },
} satisfies Meta<typeof Navbar>;

export default meta;
type NavbarType = StoryObj<typeof meta>;

export const NavOpenIntl: NavbarType = {
  args: {
    logo: "https://openintlacademy.com/wp-content/uploads/2020/10/logo-with-1text.jpg",
    menus: [
      { label: "Home", path: "/" },
      { label: "About Us", path: "/about" },
      { label: "Our Services", path: "/services" },
      { label: "Events", path: "/events" },
      { label: "Gallery", path: "/gallery" },
      { label: "Contact Us", path: "/contact" },
    ],
    phone: "+977-01-4473885",
    mail: " open1academy@gmail.com",
    backgroundColor: "#ffffff",
  },
};
