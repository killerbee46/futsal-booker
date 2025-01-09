import type { Meta, StoryObj } from "@storybook/react";
import Card11 from "./Card11";

const meta = {
  title: "Card",
  component: Card11,
  parameters: {
    // layout: "centered",
  },
} satisfies Meta<typeof Card11>;

export default meta;
type CardTypes = StoryObj<typeof meta>;

export const CardGallery: CardTypes = {
  args: {
    title: "South Asian Games 2024",
    date: "19-11-2024",
    image:
      "https://img.freepik.com/free-photo/portrait-serious-female-boxer-boxing-gloves-sportive-wear-dark-photo-studio_613910-11552.jpg",
  },
};
