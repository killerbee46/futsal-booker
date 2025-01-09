import { Header2 } from "./Header";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Header",
  component: Header2,
  parameters: {
    // layout: "centered",
  },
} satisfies Meta<typeof Header2>;

export default meta;
type Header_types = StoryObj<typeof meta>;

export const Headertwo: Header_types = {
  args: {
    title: "About Us",
    image:
      "https://img.freepik.com/premium-photo/people-wallking-blurred-background-wallpaper_846066-14.jpg",
  },
};
