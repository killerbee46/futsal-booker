import { CTA1 } from "./CTA1";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Open Intl",
  component: CTA1,
  parameters: {
    // layout: "centered",
  },
} satisfies Meta<typeof CTA1>;

export default meta;
type CTATypes = StoryObj<typeof meta>;

export const CTA_One: CTATypes = {
  args: {
    title: "Study in Japan",
    description:
      "Japan is an economically-developed country with advanced scientific technology. People in universities and businesses carry out innovative basic and applied research every day, and countless new technologies and theories are being developed and put to use. This scientific technology and academic theoretical work are the tools that support people’s lives and society all over the world.",
    button_text: "FREE CONSULTATION",
    button_path: "/contact",
    bg_image:
      "https://openintlacademy.com/wp-content/uploads/photo-gallery/IMG_4503.jpg?bwg=1601566589",
  },
};
