import { Nav2 } from "./Nav2";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Navbar",
  component: Nav2,
  parameters: {
    // layout: "centered",
  },
} satisfies Meta<typeof Nav2>;

export default meta;
type NavbarType = StoryObj<typeof meta>;

export const NavTwo: NavbarType = {
  args: {
    logo: "https://imgs.search.brave.com/4foqJkZ0suocb4Z1SWGz-o47qxooTl6AJSNmm39UoCw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL25ld19nYWxs/ZXJ5LzM2Ny0zNjc5/MzQzX3BuZy1sb2dv/LXBvcnRhYmxlLW5l/dHdvcmstZ3JhcGhp/Y3MucG5n",
    menus: [
      { label: "Home", path: "/" },
      { label: "Contents", path: "/contents" },
      { label: "Services", path: "/services" },
      { label: "Contact", path: "/contact" },
      { label: "Accessories", path: "/accessories" },
    ],
    searchable: true,
    auth: true,
  },
};
