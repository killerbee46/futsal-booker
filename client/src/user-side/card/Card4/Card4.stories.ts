import { Card4 } from "./Card4";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Card",
  component: Card4,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Card4>;

export default meta;
type CardType = StoryObj<typeof meta>;

export const CardFour: CardType = {
  args: {
    imageUrl:
      "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Rajesh Chaudhary",
    subTitle: "Chief Executive Officer",
    socials: [
      {
        platform: "facebook",
        link: "www.facebook.com",
      },
      {
        platform: "instagram",
        link: "www.facebook.com",
      },
      {
        platform: "twitter",
        link: "www.facebook.com",
      },
    ],
  },
};
