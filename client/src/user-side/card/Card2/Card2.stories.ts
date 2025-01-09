import type { Meta, StoryObj } from "@storybook/react";
import Card2 from "./Card2";

const meta = {
  title: "Card",
  component: Card2,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Card2>;

export default meta;
type CardType = StoryObj<typeof meta>;

export const CardTwo: CardType = {
  args: {
    image:
      "https://imgs.search.brave.com/clwTM3jzAOpkLQBGn-dKFNIrBXFjcvEuga43og0nI8Y/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vZGlnaXRh/bC1waG90b2dyYXBo/eS1zY2hvb2wuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIx/LzAzL3dpZGUtYW5n/bGUtaW1hZ2VzLTE1/LTEuanBnP3Jlc2l6/ZT02MDAsNDAwJnNz/bD0x",
    content: "We specialize in UI design for ",
    title: "UI Design for masters",
    width: 300,
  },
};
