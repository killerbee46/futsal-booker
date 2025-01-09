import path from "path";
import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';
import type { Meta, StoryObj } from "@storybook/react";
import NavBar4 from "./Nav4";

const meta = {
  title: "Navbar",
  component: NavBar4,
  parameters: {
    // layout: "centered",
    theme: themes.dark
  },
} satisfies Meta<typeof NavBar4>;

export default meta;
type Nav4 = StoryObj<typeof meta>;

export const NavFour: Nav4 = {
  args: {
    data: {
      name: "Nepal Boxing Federation",
      logo: "https://imgs.search.brave.com/B9tDsc8b4pK8dNXxe5X6MY3mUQhJsqjgaYP8vQfLHRE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jcm9w/LWNpcmNsZS5pbWFn/ZW9ubGluZS5jby9j/cm9wLWNpcmNsZS5w/bmc",
      menus: [
        { label: "Home", path: "/" },
        { label: "Contents", path: "/contents" },
        { label: "Services", path: "/services" },
        { label: "Contact", path: "/contact" },
        { label: "Accessories", path: "/accessories" },
      ],
      banner: {
        title: "Home",
        image:
          "https://imgs.search.brave.com/Bxet2_Lq_DzL4syaZmL_XYN2icyxjEHZfffvNUFmdx4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9wYW5vcmFtaWMt/YmFubmVyLXdpdGgt/Y29uZ3JhdHVsYXRp/b25zLXBlcnNvbl8y/My0yMTUxMjYwMjU4/LmpwZz9zaXplPTYy/NiZleHQ9anBn",
      },
    },
    transparent:false //for demo only
  },
};
