import { Card3 } from "./Card3";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Card",
  component: Card3,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Card3>;

export default meta;
type CardType = StoryObj<typeof meta>;

export const CardThree: CardType = {
  args: {
    title: "This is the title of card",
    subTitle: "",
    date: "11-01-2020",
    imageUrl:
      "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
};
