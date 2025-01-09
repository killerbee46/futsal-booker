import type { Meta, StoryObj } from "@storybook/react";
import Card8 from "./Card8";

const meta = {
  title: "Card",
  component: Card8,
  parameters: {
    // layout: "centered",
  },
} satisfies Meta<typeof Card8>;

export default meta;
type CardTypes = StoryObj<typeof meta>;

export const Card_Events: CardTypes = {
  args: {
    image:
      "https://img.freepik.com/free-photo/portrait-serious-female-boxer-boxing-gloves-sportive-wear-dark-photo-studio_613910-11552.jpg",
    title: "THE BIGGEST NATIONAL BOXING CHAMPIONSHIP",
    content:
      "Boxing is also one of the most enjoyed and popular games in Nepal. With all the modality and administrative purpose, ",
    date: "20 May",
    location: "Cubbod Hall, Tripureswhor",
    buttonLabel: "Read More",
    buttonPath: "/events",
  },
};
