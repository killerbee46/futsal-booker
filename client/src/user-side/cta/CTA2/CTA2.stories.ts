import { CTA2 } from "./CTA2";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "CTA Two",
  component: CTA2,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CTA2>;

export default meta;
type CTAType = StoryObj<typeof meta>;

export const CTATwo: CTAType = {
  args: {
    title: "Hello how are you doing?",
    description:
      "Let’s embody your beautiful ideas together, simplify the way you visualize your next big things.",
    image_url:
      "https://cdn.pixabay.com/photo/2015/01/09/11/09/meeting-594091_1280.jpg",
    button_text: "Try Now",
  },
};
