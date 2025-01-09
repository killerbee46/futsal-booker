import type { Meta, StoryObj } from "@storybook/react";
import Card7 from "./Card7";

const meta = {
  title: "Card",
  component: Card7,
  parameters: {
    // layout: "centered",
  },
} satisfies Meta<typeof Card7>;

export default meta;
type CardType = StoryObj<typeof meta>;

export const CardNews: CardType = {
  args: {
    image:
      "https://img.freepik.com/free-photo/portrait-serious-female-boxer-boxing-gloves-sportive-wear-dark-photo-studio_613910-11552.jpg",
    title: "THE BIGGEST NATIONAL BOXING CHAMPIONSHIP",
    content:
      "Boxing is also one of the most enjoyed and popular games in Nepal. With all the modality and administrative purpose, ",
    date: "May 20, 2024",
  },
};
