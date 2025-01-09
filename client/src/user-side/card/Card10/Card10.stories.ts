import type { Meta, StoryObj } from "@storybook/react";
import Card10 from "./Card10";
import { platform } from "os";

const meta = {
  title: "Card",
  component: Card10,
  parameters: {
    // layout: "centered",
  },
} satisfies Meta<typeof Card10>;

export default meta;
type CardTypes = StoryObj<typeof meta>;

export const Card_Ten: CardTypes = {
  args: {
    image:
      "https://img.freepik.com/free-photo/portrait-serious-female-boxer-boxing-gloves-sportive-wear-dark-photo-studio_613910-11552.jpg",
    title: "<span class='text-primary'>South Asian</span> <br>Game 2024",
    content:
      "Boxing is also one of the most enjoyed and popular games in Nepal. With all the modality and administrative purpose, Boxing is also one of the most enjoyed and popular games in Nepal. With all the modality and administrative purpose, Nepal Boxing Federation was inagurated in 1976 and was registered in number 8 in Nepal Sports  ",
    buttonLabel: "Explore",
    buttonPath: "/explore",
  },
};
