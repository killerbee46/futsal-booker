import type { Meta, StoryObj } from "@storybook/react";
import NavBanner from "./NavBanner";

const meta = {
  title: "Nav Banner",
  component: NavBanner,
  parameters: {
    // layout: "centered",
  },
} satisfies Meta<typeof NavBanner>;

export default meta;
type Header_types = StoryObj<typeof meta>;

export const Nav_Banner: Header_types = {
  args: {
    title: "Page Title",
    image:
      "https://img.freepik.com/premium-photo/people-wallking-blurred-background-wallpaper_846066-14.jpg",
  },
};
