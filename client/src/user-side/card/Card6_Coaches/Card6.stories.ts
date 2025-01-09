import type { Meta, StoryObj } from "@storybook/react";
import Card6 from "./Card6";

const meta = {
  title: "Card",
  component: Card6,
  parameters: {
    // layout: "centered",
  },
} satisfies Meta<typeof Card6>;

export default meta;
type CardType = StoryObj<typeof meta>;

export const CardCouch: CardType = {
  args: {
    image:
      "https://img.freepik.com/free-photo/portrait-serious-female-boxer-boxing-gloves-sportive-wear-dark-photo-studio_613910-11552.jpg",
    content: "Coach",
    title: "Rita Shrestha",
  },
};
