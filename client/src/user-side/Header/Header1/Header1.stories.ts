import { Header1 } from "./Header1";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Header",
  component: Header1,
  parameters: {
    // layout: "centered",
  },
} satisfies Meta<typeof Header1>;

export default meta;
type Header_types = StoryObj<typeof meta>;

export const HeaderOne: Header_types = {
  args: {
    title: "Categories",
    description:
      "Check out the various services by our talented handymates personalized for you",
    image:
      "https://img.freepik.com/premium-photo/people-wallking-blurred-background-wallpaper_846066-14.jpg",
  },
};
