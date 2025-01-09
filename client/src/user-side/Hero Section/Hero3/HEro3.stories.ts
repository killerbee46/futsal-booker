import { Hero3 } from "./Hero3";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Hero",
  component: Hero3,
  parameters: {
    // layout: "centered",
  },
} satisfies Meta<typeof Hero3>;

export default meta;
type Hero_types = StoryObj<typeof meta>;

export const Hero_Three: Hero_types = {
  args: {
    bgImageUrl:
      "https://images.unsplash.com/photo-1434648957308-5e6a859697e8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    titleText: "Data to enrich your online business",
    subTitleText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, zzzzzzzmolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!",
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
