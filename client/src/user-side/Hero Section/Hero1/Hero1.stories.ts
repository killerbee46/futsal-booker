import { Hero1 } from "./Hero1";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Hero1",
  component: Hero1,
  parameters: {
    // layout: "centered",
  },
} satisfies Meta<typeof Hero1>;

export default meta;
type Hero1 = StoryObj<typeof meta>;

export const HeroOne: Hero1 = {
  args: {
    heroImageUrl:
      "https://w7.pngwing.com/pngs/215/579/png-transparent-girl-graphy-portrait-asian-girl-thumbnail.png",
    titleText: "Creative Mind with Creative People",
    subTitleText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem.",
    buttonDetails: [
      {
        type: "primary",
        text: "Apply Now",
        href: "/apply",
        hasIcon: false,
      },
      {
        type: "text",
        text: "Learn More",
        href: "/learnmore",
        hasIcon: true,
      },
    ],
  },
};
