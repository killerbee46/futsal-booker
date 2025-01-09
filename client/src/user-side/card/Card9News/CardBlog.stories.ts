import type { Meta, StoryObj } from "@storybook/react";
import CardBlog from "./CardBlog";
import { platform } from "os";

const meta = {
  title: "Card",
  component: CardBlog,
  parameters: {
    // layout: "centered",
  },
} satisfies Meta<typeof CardBlog>;

export default meta;
type CardTypes = StoryObj<typeof meta>;

export const Card_Blogs: CardTypes = {
  args: {
    image:
      "https://img.freepik.com/free-photo/portrait-serious-female-boxer-boxing-gloves-sportive-wear-dark-photo-studio_613910-11552.jpg",
    title: "THE BIGGEST NATIONAL BOXING CHAMPIONSHIP",
    content:
      "Boxing is also one of the most enjoyed and popular games in Nepal. With all the modality and administrative purpose, ",
  },
};
