import { CTA1 } from "./CTA1";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "CTA One",
  component: CTA1,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CTA1>;

export default meta;
type CTAType = StoryObj<typeof meta>;

export const CTAOne: CTAType = {
  args: {
    title: "Hello how are you doing?",
    description:
      "Let’s embody your beautiful ideas together, simplify the way you visualize your next big things.",
    image_url:
      "https://cdn.pixabay.com/photo/2015/01/09/11/09/meeting-594091_1280.jpg",
    button_text: "Try Now",
  },
};
