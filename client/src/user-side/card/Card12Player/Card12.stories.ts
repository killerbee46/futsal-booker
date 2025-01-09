import type { Meta, StoryObj } from "@storybook/react";
import Card12 from "./Card12";

const meta = {
  title: "Card",
  component: Card12,
  parameters: {
    // layout: "centered",
  },
} satisfies Meta<typeof Card12>;

export default meta;
type CardTypes = StoryObj<typeof meta>;

export const Card_Twelve: CardTypes = {
  args: {
    title: "Manish Shrestha",
    subtitle: "Boxer, Men's Flyweight (51kg)",
    content:
      "Learn to box for real with Fit Mindful Body Club trainerand 3x Golden Glove winner, Ian Mauleon!",
    image:
      "https://png.pngtree.com/png-vector/20230906/ourmid/pngtree-boxer-punching-front-png-image_9994570.png",
    bg_image:
      "https://anthonyjoshua.com/cdn/shop/articles/AJ_Fight_Insta_1.png?v=1662478898",
  },
};
