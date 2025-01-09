import path from "path";
import { Nav3 } from "./Nav3";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Navbar",
  component: Nav3,
  parameters: {
    // layout: "centered",
  },
} satisfies Meta<typeof Nav3>;

export default meta;
type Nav3 = StoryObj<typeof meta>;

export const NavThree: Nav3 = {
  args: {
    name: "Nepal Boxing <br> Federation",
    logo: "https://imgs.search.brave.com/4foqJkZ0suocb4Z1SWGz-o47qxooTl6AJSNmm39UoCw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL25ld19nYWxs/ZXJ5LzM2Ny0zNjc5/MzQzX3BuZy1sb2dv/LXBvcnRhYmxlLW5l/dHdvcmstZ3JhcGhp/Y3MucG5n",
    backgroundColor: "#f5f5f5",
    menus: [
      { label: "Home", path: "/" },
      { label: "Contents", path: "/contents" },
      { label: "Services", path: "/services" },
      { label: "Contact", path: "/contact" },
      { label: "Accessories", path: "/accessories" },
    ],
    socials: [
      {
        platform: "facebook",
        path: "www.facebook.com",
      },
      {
        platform: "instagram",
        path: "www.facebook.com",
      },
      {
        platform: "twitter",
        path: "www.facebook.com",
      },
    ],
  },
};
