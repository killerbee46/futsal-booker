import type { Meta, StoryObj } from "@storybook/react";
import Card5 from "./Card5";

const meta = {
  title: "Card",
  component: Card5,
  parameters: {
    // layout: "centered",
  },
} satisfies Meta<typeof Card5>;

export default meta;
type CardType = StoryObj<typeof meta>;

export const CardFive: CardType = {
  args: {
    image:
      "https://img.freepik.com/free-vector/boxing-gloves-realistic_1284-11420.jpg?w=740&t=st=1718776144~exp=1718776744~hmac=a7566cf7a530e152c8b333ca0efa3ef16ee41af4f59fec64a826fee446649b11",
    content:
      "During the 19th and again at the beginning of the 20th century, the popularity of boxing brought. the popularity of boxing brought",
    title: "Boxing, Men's Flyweight (51kg)",
  },
};
