import { CTA4 } from "./CTA4";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "CTA Three",
  component: CTA4,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CTA4>;

export default meta;
type CTAType = StoryObj<typeof meta>;

export const CTA_Four: CTAType = {
  args: {
    title: "Welcome to Nepal Boxing Federation",
    description:
      "Boxing is also one of the most enjoyed and popular games in Nepal. With all the modality and administrative purpose, Nepal Boxing Federation was inagurated in 1976 and was registered in number 8 in Nepal Sports Council. It takes pride on Shree Ram Awale as president and Shree Man Bahadur Bhandari as Secretary General.",
    image_url:
      "https://plus.unsplash.com/premium_photo-1675109458914-7f5d59ee7694?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym94aW5nfGVufDB8fDB8fHww",
    button_text: "Read More",
    bg_image:
      "https://images.unsplash.com/photo-1564097147829-44f8c74a8549?q=80&w=1521&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
};
