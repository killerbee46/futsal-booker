import path from "path";
import { Nav1 } from "./Nav1";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Navbar",
  component: Nav1,
  parameters: {
    // layout: "centered",
  },
} satisfies Meta<typeof Nav1>;

export default meta;
type Nav1 = StoryObj<typeof meta>;

export const NavOne: Nav1 = {
  args: {
    logo: "https://imgs.search.brave.com/4foqJkZ0suocb4Z1SWGz-o47qxooTl6AJSNmm39UoCw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL25ld19nYWxs/ZXJ5LzM2Ny0zNjc5/MzQzX3BuZy1sb2dv/LXBvcnRhYmxlLW5l/dHdvcmstZ3JhcGhp/Y3MucG5n",
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
